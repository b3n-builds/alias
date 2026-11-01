// Pure game rules (no DOM): shared by the app, the tests and the balance simulator.
// Text lives in scenarios/*.js and i18n.js; game state only holds keys and indices.

// Balance knobs, tuned with sim/simulate.cjs (see BALANCE.md for the reasoning).
const BALANCE = {
  // Table-size rules. Uneven on purpose: player-count parity swings these games (see BALANCE.md).
  streak: n => ([4, 7, 10].includes(n) ? 2 : 3), // top the vote this many rounds in a row to be thrown out
  killGap: n => (n >= 7 ? 2 : 1), // big games: a killer waits a round after writing a name
  killers: n => (n >= 10 ? 3 : n >= 7 ? 2 : 1), // 'Auto' killer count (about √n, as in Mafia)
  witnessScale: n => (n === 6 || n === 9 ? 0.4 : n === 11 ? 1.5 : 1),
  // difficulty = how hard the case is for the town: Easy helps detectives, Hard helps killers
  decoys: { Easy: 4, Medium: 3, Hard: 3 },
  caseRounds: { Easy: 2, Medium: 3, Hard: 4 },
  minutes: { Easy: 3, Medium: 2, Hard: 2 },
  clueShare: [0.3, 0.7], // a clue should rule out roughly a third to two thirds of the names still possible
  witness: { Easy: 0.65, Medium: 0.5, Hard: 0.35 } // chance a killer who writes a name is seen slipping away
};
const MODES = {
  classic: { kills: 1, penalty: false },
  penalty: { kills: 1, penalty: true },
  frenzy: { kills: 2, penalty: false }
};
const ROLES = ['killer', 'detective', 'civilian'];
const SCENARIOS = typeof SCENARIOS_DATA !== 'undefined' ? SCENARIOS_DATA : {};

function shuffle(a, rnd = Math.random) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const pick = (a, rnd = Math.random) => a[Math.floor(rnd() * a.length)];
const range = n => Array.from({ length: n }, (_, i) => i);

// Killers: 'auto' follows BALANCE.killers; a fixed choice is capped so each killer faces at least two innocents.
function killerCount(n, choice) {
  const max = Math.max(1, Math.floor((n - 1) / 3));
  const want = choice === 'auto' || choice == null ? BALANCE.killers(n) : +choice;
  return Math.min(max, Math.max(1, want));
}

// settings: { scenario (id or 'random'), lang ('en'|'ar'), mode, minutes, killers ('auto'|1|2|3) }
function newGame(names, settings, rnd = Math.random) {
  const n = names.length, killers = killerCount(n, settings.killers);
  const chosen = SCENARIOS[settings.scenario] ? settings.scenario : pick(Object.keys(SCENARIOS), rnd);
  const sc = SCENARIOS[chosen], lang = settings.lang === 'ar' ? 'ar' : 'en', txt = sc[lang];
  const minutes = SCENARIOS[settings.scenario] ? settings.minutes : BALANCE.minutes[sc.level];
  const roles = shuffle(['detective', ...Array(killers).fill('killer'), ...Array(n - 1 - killers).fill('civilian')], rnd);
  const pool = shuffle(txt.names, rnd);
  const g = {
    v: 3, lang, scenario: chosen,
    settings: { mode: settings.mode in MODES ? settings.mode : 'classic', minutes, killers },
    streakLen: BALANCE.streak(n), killGap: BALANCE.killGap(n), caseRounds: BALANCE.caseRounds[sc.level],
    witness: Math.min(1, BALANCE.witness[sc.level] * BALANCE.witnessScale(n)),
    screen: 'story', round: 1, idx: 0, shown: false,
    players: names.map((name, i) => ({ name, role: roles[i], alias: pool[i], alive: true, out: null, cleared: false, lastKill: null })),
    aliasList: shuffle(pool.slice(0, n + BALANCE.decoys[sc.level]), rnd),
    beats: shuffle(range(txt.beats.length), rnd), questions: shuffle(range(txt.questions.length), rnd),
    order: [], votes: {}, kills: [], case: null, caseLog: [], streak: null, notes: [], usedClues: [], event: null,
    alibis: {}, report: null, winner: null, talkEnds: 0
  };
  g.alibis = assignAlibis(g, rnd);
  return g;
}

// Everyone spends the night at a place with others. Each killer hides in a trio of two innocents,
// the rest pair up (a trio if odd). Places are indices into the scenario's place list.
// A killer's alibi looks like anyone else's; what gives them away is a witness on nights they act.
function assignAlibis(g, rnd = Math.random) {
  const P = g.players, places = shuffle(range(SCENARIOS[g.scenario][g.lang].places.length), rnd);
  const ids = P.map((_, i) => i).filter(i => P[i].alive);
  const inn = shuffle(ids.filter(i => P[i].role !== 'killer'), rnd), groups = [];
  for (const k of shuffle(ids.filter(i => P[i].role === 'killer'), rnd)) groups.push([k, ...inn.splice(0, 2)]);
  for (let i = 0; i < inn.length; i += 2) groups.push(inn.slice(i, i + 2));
  const last = groups[groups.length - 1];
  if (groups.length > 1 && last.length === 1) groups[groups.length - 2].push(groups.pop()[0]);
  const al = {};
  groups.forEach((grp, gi) => grp.forEach(i => { al[i] = { place: places[gi], others: grp.length - 1 }; }));
  return al;
}

/* ---------- name clues ---------- */
// Letters only, lowercase, Arabic letter variants folded together so clues are fair in both languages.
const letters = s => [...s.toLowerCase().normalize('NFKD')
  .replace(/[ً-ٰٟـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')]
  .filter(c => /\p{L}/u.test(c)).join('');
const wordCount = s => s.trim().split(/\s+/).length;

// Clue keys: has:x, start:x, end:x, words:1, words:2 (two or more), longer:n, atmost:n
function clueFits(key, alias) {
  const i = key.indexOf(':'), k = key.slice(0, i), v = key.slice(i + 1), L = letters(alias);
  if (k === 'has') return L.includes(v);
  if (k === 'start') return L[0] === v;
  if (k === 'end') return L[L.length - 1] === v;
  if (k === 'words') return v === '1' ? wordCount(alias) === 1 : wordCount(alias) > 1;
  if (k === 'longer') return L.length > +v;
  if (k === 'atmost') return L.length <= +v;
  return false;
}
function clueKeys(list) {
  const keys = new Set(['words:1', 'words:2']);
  for (const a of list) {
    const L = letters(a);
    for (const c of L) keys.add('has:' + c);
    keys.add('start:' + L[0]); keys.add('end:' + L[L.length - 1]);
  }
  for (let n = 3; n <= 14; n++) { keys.add('longer:' + n); keys.add('atmost:' + n); }
  return [...keys];
}

// A true clue about one living killer's name that narrows what earlier clues left open.
function nameClue(g, rnd = Math.random) {
  const killers = g.players.map((_, i) => i).filter(i => g.players[i].alive && g.players[i].role === 'killer');
  if (!killers.length) return null;
  const who = pick(killers, rnd), target = g.players[who].alias, list = g.aliasList;
  const known = g.notes.filter(n => n.kind === 'clue' && n.who === who).map(n => n.key);
  const open = list.filter(a => known.every(k => clueFits(k, a)));
  const share = (k, set) => set.filter(a => clueFits(k, a)).length / set.length;
  const fresh = clueKeys(list).filter(k => !g.usedClues.includes(k) && clueFits(k, target));
  const [lo, hi] = BALANCE.clueShare;
  let pool = fresh.filter(k => { const s = share(k, open); return s >= lo && s <= hi; });
  if (!pool.length) pool = fresh.filter(k => share(k, open) < 1);
  if (!pool.length) pool = fresh.filter(k => share(k, list) < 1);
  if (!pool.length) return null;
  const key = pick(pool, rnd);
  g.usedClues.push(key);
  return { key, who, two: killers.length > 1 };
}

// Opens a talk phase: a story event, a fresh clue and a question for the table.
function openRound(g, rnd = Math.random) {
  const clue = nameClue(g, rnd), r = g.round - 1;
  g.event = { beat: g.beats[r % g.beats.length], question: g.questions[r % g.questions.length], clue: clue && clue.key, two: !!(clue && clue.two) };
  if (clue) g.notes.push({ round: g.round, kind: 'clue', key: clue.key, who: clue.who, two: clue.two });
}

// After writing a name (right or wrong), a killer waits killGap rounds before writing again.
function canKill(g, i) {
  const last = g.players[i].lastKill;
  return last == null || g.round - last >= (g.killGap || 1);
}

// Most votes wins the round; a tie ejects nobody.
function tally(votes) {
  const c = {};
  for (const t of Object.values(votes)) c[t] = (c[t] || 0) + 1;
  let best = 0, top = [];
  for (const [t, k] of Object.entries(c)) { if (k > best) { best = k; top = [+t]; } else if (k === best) top.push(+t); }
  return top.length === 1 ? top[0] : null;
}

// Votes and kills resolve together: a killer thrown out this round still gets their kill.
function resolveRound(g, rnd = Math.random) {
  const P = g.players, report = { round: g.round, top: null, count: 0, ejected: null, dead: [], clears: [], seen: [] };
  const deaths = new Set();
  let wrong = 0;
  for (const k of g.kills) {
    P[k.by].lastKill = g.round;
    if (P[k.target].alias === k.alias) deaths.add(k.target); else wrong++;
  }
  // a killer who wrote a name tonight may have been seen slipping away from their alibi place
  for (const k of new Set(g.kills.map(x => x.by))) {
    const place = g.alibis[k] && g.alibis[k].place;
    if (place != null && rnd() < (g.witness ?? 0.5) && !report.seen.includes(place)) {
      report.seen.push(place);
      g.notes.push({ round: g.round, kind: 'seen', place });
    }
  }

  const top = tally(g.votes);
  if (top === null) g.streak = null;
  else if (g.streak && g.streak.target === top) g.streak.count++;
  else g.streak = { target: top, count: 1 };
  report.top = top; report.count = g.streak ? g.streak.count : 0;
  if (g.streak && g.streak.count >= g.streakLen) { P[top].alive = false; P[top].out = 'vote'; report.ejected = top; g.streak = null; }

  for (const d of deaths) if (P[d].alive) { P[d].alive = false; P[d].out = 'killed'; report.dead.push(d); }
  if (g.streak && !P[g.streak.target].alive) g.streak = null;

  if (MODES[g.settings.mode].penalty) {
    for (let i = 0; i < wrong; i++) {
      const pool = P.map((_, j) => j).filter(j => P[j].alive && P[j].role !== 'killer' && !P[j].cleared);
      if (!pool.length) break;
      const c = pick(pool, rnd);
      P[c].cleared = true; report.clears.push(c);
      g.notes.push({ round: g.round, kind: 'clear', p: c });
    }
  }
  if (!P.some(p => p.alive && p.role === 'detective')) g.case = null;
  g.winner = winnerOf(g);
  g.report = report; g.votes = {}; g.kills = []; g.round++;
  return g;
}

function winnerOf(g) {
  const k = g.players.filter(p => p.alive && p.role === 'killer').length;
  const o = g.players.filter(p => p.alive && p.role !== 'killer').length;
  return k === 0 ? 'town' : k >= o ? 'killers' : null;
}

if (typeof module !== 'undefined') {
  module.exports = { BALANCE, MODES, ROLES, SCENARIOS, shuffle, pick, killerCount, newGame, assignAlibis, letters, clueFits, clueKeys, nameClue, openRound, canKill, tally, resolveRound, winnerOf };
}
