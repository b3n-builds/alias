// Bot simulator for ALIAS balance. Bots play the real rules from www/rules.js.
// Usage: node sim/simulate.cjs [games-per-cell]
//
// Model (assumptions, stated so they can be argued with):
// - Killer bots keep, for every player, the set of names that player could still have. They narrow it
//   from what innocents let slip while answering name clues ("leak"), from their own wrong guesses,
//   and from names they confirmed by killing. They attack the player they know most about, and the
//   publicly outed detective first. Killers do not know each other.
// - Town bots score suspicion: a shared table read (noise), a small "bad liar" tell for killers,
//   alibi contradictions (caught with probability "catch"), and detective announcements.
// - Alibis: a killer who killed someone can claim the victim's place (they listen first, then claim).
//   Otherwise they must either squeeze into a pair's place (three people claim a two-person place)
//   or claim to be alone, which no innocent ever is.
const { loadGame } = require('./load.cjs');

function mulberry32(a) {
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const gauss = rnd => Math.sqrt(-2 * Math.log(rnd() || 1e-9)) * Math.cos(2 * Math.PI * rnd());

const SKILL = {
  casual: { tell: 0.15, catch: 0.45, leak: 0.55, noise: 1.2, trust: 0.7, reveal: 0.8 },
  average: { tell: 0.25, catch: 0.7, leak: 0.4, noise: 1.0, trust: 0.8, reveal: 0.8 },
  sharp: { tell: 0.35, catch: 0.9, leak: 0.25, noise: 0.8, trust: 0.9, reveal: 0.8 }
};

function play(G, n, settings, skill, rnd) {
  const g = G.newGame(Array.from({ length: n }, (_, i) => 'P' + i), settings, rnd);
  const P = g.players, N = n, isK = i => P[i].role === 'killer';
  const alive = () => P.map((_, i) => i).filter(i => P[i].alive);
  const know = {}; // killer -> per-player Set of possible names
  P.forEach((p, k) => { if (isK(k)) know[k] = P.map((_, i) => (i === k ? null : new Set(g.aliasList.filter(a => a !== p.alias)))); });
  const pub = new Array(N).fill(0), own = P.map(() => new Array(N).fill(0));
  const investigated = new Set();
  let outed = null, night = { alibis: g.alibis, seen: [] }; // round 1 discusses the pre-game "last night"
  const st = { attempts: 0, kills: 0, firstDeath: null, ejectedKiller: 0, ejectedInnocent: 0 };

  const narrow = (k, i, keep) => { const s = know[k][i]; if (s) for (const a of [...s]) if (!keep(a)) s.delete(a); };
  const confirm = (k, i, alias) => know[k].forEach((s, j) => { if (!s) return; if (j === i) { s.clear(); s.add(alias); } else s.delete(alias); });

  while (!g.winner && g.round <= 40) {
    G.openRound(g, rnd);
    const A = alive();
    for (const i of A) pub[i] += gauss(rnd) * skill.noise * 0.5 + (isK(i) ? skill.tell : 0);

    // name clue: innocents defend themselves and leak a yes/no about their own name
    if (g.event.clue) for (const i of A) if (!isK(i) && rnd() < skill.leak) {
      const fits = G.clueFits(g.event.clue, P[i].alias);
      for (const k in know) if (P[k].alive) narrow(k, i, a => G.clueFits(g.event.clue, a) === fits);
      if (fits) pub[i] += 0.3;
    }

    // witness reports: someone slipped away from a place last night; everyone who was there is a suspect,
    // and each innocent who was there knows it was one of the others
    const al = night.alibis;
    for (const place of night.seen) {
      const there = A.filter(i => al[i] && al[i].place === place);
      if (there.length < 2) continue;
      for (const c of there) pub[c] += (WITNESS_WEIGHT * skill.catch) / there.length;
      for (const o of there) if (!isK(o)) for (const c of there) if (c !== o) own[o][c] += WITNESS_WEIGHT / (there.length - 1);
    }

    // secret turns
    const order = alive();
    g.alibis = G.assignAlibis(g, rnd);
    g.votes = {}; g.kills = [];
    for (const v of order) {
      const others = order.filter(j => j !== v && !P[j].cleared);
      if (!others.length) continue;
      const score = j => (isK(v) ? pub[j] : pub[j] + own[v][j]) + gauss(rnd) * skill.noise * 0.6;
      g.votes[v] = others.reduce((b, j) => (score(j) > score(b) ? j : b), others[0]);
    }
    const attempts = [];
    for (const k of order.filter(isK)) {
      if (!G.canKill(g, k)) continue;
      const taken = new Set();
      for (let s = 0; s < G.MODES[g.settings.mode].kills; s++) {
        const targets = order.filter(i => i !== k && !taken.has(i) && know[k][i].size);
        if (!targets.length) break;
        const cost = i => know[k][i].size - (i === outed ? 3 : 0) + rnd() * 0.5;
        const t = targets.reduce((b, i) => (cost(i) < cost(b) ? i : b), targets[0]);
        const size = know[k][t].size;
        if (MODES_PENALTY(G, g) && size > 4 && rnd() > 0.3) break; // careful when misses cost a clue
        const guess = [...know[k][t]][Math.floor(rnd() * size)];
        g.kills.push({ by: k, target: t, alias: guess }); attempts.push({ k, t, guess }); taken.add(t);
      }
    }
    const det = order.find(i => P[i].role === 'detective');
    if (det != null) {
      if (g.case && g.round - g.case.round >= g.caseRounds) {
        const t = g.case.target; g.case = null;
        if (isK(t)) {
          own[det][t] += 10;
          if (rnd() < skill.reveal) { pub[t] += 6 * skill.trust; outed = det; }
        } else own[det][t] -= 10;
      }
      if (!g.case) {
        const cands = order.filter(i => i !== det && !investigated.has(i) && !P[i].cleared);
        if (cands.length) {
          const t = cands.reduce((b, i) => (pub[i] + own[det][i] > pub[b] + own[det][b] ? i : b), cands[0]);
          investigated.add(t); g.case = { target: t, round: g.round };
        }
      }
    }

    const round = g.round;
    G.resolveRound(g, rnd);
    const r = g.report;
    st.attempts += attempts.length;
    for (const a of attempts) {
      if (P[a.t].alias === a.guess) { st.kills++; confirm(a.k, a.t, a.guess); }
      else narrow(a.k, a.t, x => x !== a.guess);
    }
    if (r.dead.length && st.firstDeath == null) st.firstDeath = round;
    if (r.ejected != null) { if (isK(r.ejected)) st.ejectedKiller++; else st.ejectedInnocent++; }
    for (const c of r.clears) pub[c] = -99;
    night = { alibis: g.alibis, seen: r.seen };
  }
  return { winner: g.winner || 'draw', rounds: g.round - 1, ...st };
}
const MODES_PENALTY = (G, g) => G.MODES[g.settings.mode].penalty;
const WITNESS_WEIGHT = 2;

function run(G, cfg, games, seed = 1) {
  const rnd = mulberry32(seed);
  const agg = { killers: 0, town: 0, draw: 0, rounds: 0, attempts: 0, kills: 0, early: 0, ejK: 0, ejI: 0 };
  for (let i = 0; i < games; i++) {
    const r = play(G, cfg.n, { scenario: cfg.scenario, lang: 'en', mode: cfg.mode || 'classic', minutes: 2, killers: cfg.killers || 'auto' }, SKILL[cfg.skill || 'average'], rnd);
    agg[r.winner]++; agg.rounds += r.rounds; agg.attempts += r.attempts; agg.kills += r.kills;
    if (r.firstDeath === 1) agg.early++;
    agg.ejK += r.ejectedKiller; agg.ejI += r.ejectedInnocent;
  }
  return {
    killerWin: agg.killers / games, rounds: agg.rounds / games, hit: agg.attempts ? agg.kills / agg.attempts : 0,
    early: agg.early / games, wrongOuts: agg.ejI / games
  };
}

const pct = x => (100 * x).toFixed(0).padStart(3) + '%';
function table(G, title, rows, games) {
  console.log(`\n${title}`);
  console.log('players  killers   rounds  hit-rate  r1-death  innocents-out');
  for (const cfg of rows) {
    const r = run(G, cfg, games);
    console.log(`${String(cfg.n).padStart(4)}${cfg.two ? '*' : ' '}   ${pct(r.killerWin)}     ${r.rounds.toFixed(1).padStart(4)}    ${pct(r.hit)}      ${pct(r.early)}      ${r.wrongOuts.toFixed(2)}`);
  }
}

if (require.main === module) {
  const G = loadGame();
  const games = +process.argv[2] || 1500;
  const counts = [4, 5, 6, 7, 8, 9, 10, 12];
  const scen = { Easy: 'school', Medium: 'noir', Hard: 'space' };
  for (const skill of ['average', 'casual', 'sharp']) {
    for (const lvl of skill === 'average' ? ['Easy', 'Medium', 'Hard'] : ['Medium']) {
      table(G, `== ${skill} table, ${lvl} case (${scen[lvl]}), classic ==`, counts.map(n => ({ n, scenario: scen[lvl], skill })), games);
    }
  }
  table(G, '== average, Medium, penalty mode ==', counts.map(n => ({ n, scenario: 'noir', mode: 'penalty' })), games);
  table(G, '== average, Medium, frenzy mode ==', counts.map(n => ({ n, scenario: 'noir', mode: 'frenzy' })), games);
  table(G, '== average, Medium, second killer on (7+) ==', [7, 8, 9, 10, 12].map(n => ({ n, scenario: 'noir', two: true })), games);
}

module.exports = { play, run, SKILL, mulberry32 };
