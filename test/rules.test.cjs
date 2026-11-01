// Checks the game rules and scenario content, using the same files the app loads.
const assert = require('assert');
const { loadGame } = require('../sim/load.cjs');
const G = loadGame();
const { SCENARIOS, BALANCE, SKIP, planNight, newGame, tally, resolveRound, assignAlibis, nameClue, openRound, canKill, clueFits, letters, killerCount } = G;
const names = n => Array.from({ length: n }, (_, i) => 'P' + i);
const roleIdx = (g, r) => g.players.map((p, i) => (p.role === r ? i : -1)).filter(i => i >= 0);
const set = (n, extra = {}) => ({ scenario: 'noir', lang: 'en', mode: 'classic', minutes: 2, killers: 'auto', ...extra });
const allVote = (g, target, voterTarget) => Object.fromEntries(g.players.map((p, i) => [i, i === target ? voterTarget : target]).filter(([i]) => g.players[i].alive));
let checks = 0;
const ok = (c, m) => { assert(c, m); checks++; };

// content: every case is complete in both languages, names never collide after letter folding
const ids = Object.keys(SCENARIOS);
ok(ids.length >= 20, 'at least 20 cases');
for (const id of ids) for (const lang of ['en', 'ar']) {
  const t = SCENARIOS[id][lang];
  ok(t.names.length >= 12 + BALANCE.decoys[SCENARIOS[id].level], `${id}/${lang} names`);
  ok(new Set(t.names.map(letters)).size === t.names.length, `${id}/${lang} names collide`);
  ok(t.places.length >= 7 && t.beats.length >= 6, `${id}/${lang} content`);
  for (const k of ['title', 'hook', 'intro', 'death', 'quiet', 'listLabel']) ok(t[k], `${id}/${lang} ${k}`);
}

// setup
for (const lang of ['en', 'ar']) for (let n = 4; n <= 12; n++) {
  const g = newGame(names(n), set(n, { lang, scenario: 'random' }));
  ok(roleIdx(g, 'killer').length === killerCount(n, 'auto'), 'auto killers');
  ok(roleIdx(g, 'detective').length === 1, 'one detective');
  ok(g.players.every(p => g.aliasList.includes(p.alias)), 'aliases listed');
  ok(new Set(g.aliasList).size === g.aliasList.length, 'aliases unique');
  ok(g.streakLen === BALANCE.streak(n) && g.killGap === BALANCE.killGap(n), 'table rules');
}
ok(killerCount(5, 3) === 1 && killerCount(7, 3) === 2 && killerCount(12, 3) === 3, 'killer cap');

// alibis: everyone is in a pair or trio, never all in one place; each killer shares it with an innocent
for (let n = 4; n <= 12; n++) for (let t = 0; t < 30; t++) {
  const g = newGame(names(n), set(n, { scenario: 'souk' }));
  const al = assignAlibis(g);
  ok(new Set(Object.values(al).map(a => a.place)).size >= 2, 'more than one place');
  g.players.forEach((p, i) => {
    const mates = g.players.filter((q, j) => j !== i && al[j].place === al[i].place);
    ok(mates.length === al[i].others, 'alibi count matches');
    ok(mates.length === 1 || mates.length === 2, 'pairs and trios');
    if (p.role === 'killer') ok(mates.some(m => m.role !== 'killer'), 'killer hides with an innocent');
  });
}

// rooms: a few open each night, some with powers; Locked needs at least three rooms
for (let n = 4; n <= 12; n++) for (let t = 0; t < 20; t++) {
  const g = newGame(names(n), set(n)), N = planNight(g), R = BALANCE.rooms(n);
  ok(N.rooms.length === R && new Set(N.rooms).size === R, 'room count');
  ok(Object.keys(N.powers).length === BALANCE.powers(n) && Object.keys(N.powers).every(r => N.rooms.includes(+r)), 'powers on open rooms');
  if (R < 3) ok(!Object.values(N.powers).includes('locked'), 'no locked room with two rooms');
}

// one night with chosen rooms: killer acts from room a with one innocent; b is a lookout; c is locked
function night(power, moveKiller, miss) {
  const g = newGame(names(6), set(6)), k = roleIdx(g, 'killer')[0], inn = g.players.map((_, i) => i).filter(i => i !== k);
  const [a, b, c] = planNight(g).rooms;
  g.night.powers = { [b]: 'lookout', [c]: 'locked', ...(power ? { [a]: power } : {}) };
  g.picks = { [k]: moveKiller ? c : a, [inn[0]]: a, [inn[1]]: b, [inn[2]]: b, [inn[3]]: c, [inn[4]]: c };
  g.witness = 0.5;
  g.kills = [{ by: k, target: inn[4], alias: miss ? 'nobody' : g.players[inn[4]].alias }];
  resolveRound(g);
  return { g, k, inn, a, b, c };
}
const noticeChance = BALANCE.notice;
BALANCE.notice = 1; // roommates always notice, so the checks below are exact
for (let t = 0; t < 40; t++) {
  const { g, k, inn, a, b } = night();
  ok(g.alibis[k].place === a && g.alibis[inn[1]].place === b && g.alibis[k].others === 1, 'picks become alibis');
  ok(g.report.dead.includes(inn[4]), 'kill from an open room lands');
  ok(g.report.from.length === 1 && g.report.from[0] === a && g.report.seen.length === 0, 'a kill names the room it was written from');
  ok(night('dark').g.report.from[0] === -1, 'a kill from the dark room names no room');
  ok(night(null, false, true).g.report.from.length === 0, 'a miss names no room');
  ok(g.peek[inn[0]].left && !g.peek[inn[1]].left && g.peek[k].acted && !g.peek[k].left, 'only roommates notice someone left');
  ok(g.peek[k].trace != null && g.peek[k].trace === g.peek[inn[0]].trace && g.peek[inn[1]].trace == null, 'trace only for the room');
  ok(!('sound' in g.peek[k]) && (g.peek[inn[1]].sound == null || g.peek[inn[1]].sound === a), 'sounds are true and never for killers');
  ok(g.peek[inn[1]].look && g.alibis[g.peek[inn[1]].look.p].place === g.peek[inn[1]].look.place, 'lookout sees a true room');
  ok(Object.values(g.peek).filter(q => q.rumor).length === 1, 'one rumor a night');
  ok(g.peek[k].cover && g.peek[k].cover.place !== a, 'cover story points elsewhere');
  const locked = night(null, true);
  ok(locked.g.report.dead.length === 0 && locked.g.players[locked.k].lastKill == null, 'no kill from a locked room');
  ok(night('dark', false, true).g.report.seen.length === 0, 'dark room hides the killer from witnesses');
}
{
  let crowded = 0, plain = 0;
  for (let t = 0; t < 400; t++) { crowded += night('crowded', false, true).g.report.seen.length; plain += night(null, false, true).g.report.seen.length; }
  ok(crowded === 400 && plain > 120 && plain < 280, 'crowded doubles the witness chance');
}
BALANCE.notice = noticeChance;

// the table question asks about a place a witness named, else a place someone was last night
for (let t = 0; t < 50; t++) {
  const g = newGame(names(6), set(6));
  openRound(g);
  ok(g.event.ask.kind === 'place' && Object.values(g.alibis).some(a => a.place === g.event.ask.place), 'question asks about a held place');
  g.round = 2; g.report = { seen: [5] }; openRound(g);
  ok(g.event.ask.kind === 'seen' && g.event.ask.place === 5, 'question follows the witness');
  g.report = { seen: [5], from: [3] }; openRound(g);
  ok(g.event.ask.kind === 'from' && g.event.ask.place === 3, 'question follows the kill room first');
}

// clues are true about a living killer, never repeat, and work in Arabic
for (const lang of ['en', 'ar']) for (const id of ids) {
  const g = newGame(names(6), set(6, { scenario: id, lang }));
  const [k] = roleIdx(g, 'killer'), seen = new Set();
  for (let r = 0; r < 6; r++) {
    openRound(g); g.round++;
    const key = g.event.clue; if (!key) continue;
    ok(clueFits(key, g.players[k].alias), `${id}/${lang} clue true`);
    ok(!seen.has(key), 'clue repeats'); seen.add(key);
  }
  ok(seen.size >= 4, `${id}/${lang} ran out of clues`);
}
ok(clueFits('has:ه', 'الملعقة الفضية') && clueFits('start:ا', 'أطلس'), 'arabic letter folding');

// ties eject nobody
ok(tally({ 0: 1, 1: 0 }) === null, 'tie');
ok(tally({ 0: 2, 1: 2, 2: 0 }) === 2, 'plurality');

// skip competes like a candidate: winning or tying for most means nobody tops, and the streak breaks
{
  const g = newGame(names(6), set(6)), k = roleIdx(g, 'killer')[0], c = roleIdx(g, 'civilian')[0];
  g.votes = allVote(g, k, c); resolveRound(g);
  ok(g.streak && g.streak.target === k, 'streak started');
  const alive = g.players.map((_, i) => i).filter(i => g.players[i].alive);
  g.votes = Object.fromEntries(alive.map((i, j) => [i, j < 4 ? SKIP : k])); resolveRound(g);
  ok(g.report.skipped && g.report.top === null && g.streak === null, 'skip tops the vote and breaks the streak');
  g.votes = allVote(g, k, c); resolveRound(g);
  g.votes = Object.fromEntries(alive.map((i, j) => [i, j < 3 ? SKIP : k])); resolveRound(g);
  ok(g.report.top === null && g.streak === null, 'skip tying for most also breaks the streak');
  g.votes = Object.fromEntries(alive.map((i, j) => [i, j < 2 ? SKIP : k])); resolveRound(g);
  ok(!g.report.skipped && g.report.top === k, 'skip in the minority changes nothing');
}

// vote streak
let g = newGame(names(8), set(8));
let [k] = roleIdx(g, 'killer'), civ = roleIdx(g, 'civilian');
for (let r = 1; r <= g.streakLen; r++) { g.votes = allVote(g, k, civ[0]); resolveRound(g); ok(g.players[k].alive === r < g.streakLen, 'streak round ' + r); }
ok(g.report.ejected === k && g.players[k].out === 'vote', 'thrown out');
g = newGame(names(8), set(8)); civ = roleIdx(g, 'civilian');
g.votes = allVote(g, civ[0], civ[1]); resolveRound(g);
g.votes = { 0: 1, 1: 0 }; resolveRound(g);
ok(g.streak === null, 'tie resets streak');

// kills, witnesses, penalty clears, pen rest
const plain = g => { planNight(g); g.night.powers = {}; return g; }; // no Locked room to block a kill
g = plain(newGame(names(6), set(6, { mode: 'penalty' })));
[k] = roleIdx(g, 'killer'); civ = roleIdx(g, 'civilian');
g.kills = [{ by: k, target: civ[0], alias: g.players[civ[0]].alias }, { by: k, target: civ[1], alias: 'nobody' }];
resolveRound(g);
ok(g.report.dead.length === 1 && g.players[civ[0]].out === 'killed', 'correct name kills');
ok(g.report.clears.length === 1 && g.players[g.report.clears[0]].role !== 'killer', 'wrong name clears an innocent');
g = plain(newGame(names(9), set(9)));
const ks = roleIdx(g, 'killer');
ok(ks.length === 2 && canKill(g, ks[0]), 'can kill round 1');
let seenAny = 0;
for (let t = 0; t < 200; t++) {
  const h = newGame(names(6), set(6, { scenario: 'school' }));
  const [hk] = roleIdx(h, 'killer');
  planNight(h); h.night.powers = {}; h.witness = 0.5; // a plain night, so this measures the witness alone
  h.kills = [{ by: hk, target: roleIdx(h, 'civilian')[0], alias: 'x' }];
  resolveRound(h);
  if (h.report.seen.length) { seenAny++; ok(h.report.seen[0] === h.alibis[hk].place, 'witness names the killer\'s place'); }
}
ok(seenAny > 20 && seenAny < 200, 'witness is a chance, not a certainty');
g.kills = [{ by: ks[0], target: roleIdx(g, 'civilian')[0], alias: 'x' }]; plain(g); resolveRound(g);
ok(!canKill(g, ks[0]) && canKill(g, ks[1]), 'pen rests in big games');
resolveRound(g); ok(canKill(g, ks[0]), 'pen back after a round');

// win conditions
g = newGame(names(4), set(4));
[k] = roleIdx(g, 'killer'); const [d] = roleIdx(g, 'detective'); civ = roleIdx(g, 'civilian');
g.case = { target: k, round: 1 };
g.kills = [{ by: k, target: d, alias: g.players[d].alias }]; g.votes = { 0: 1, 1: 0 }; resolveRound(g);
ok(g.case === null && g.winner === null, 'detective death drops the case');
g.kills = [{ by: k, target: civ[0], alias: g.players[civ[0]].alias }]; resolveRound(g);
ok(g.winner === 'killers', 'killers win at parity');

console.log(`all rules checks passed (${checks})`);
