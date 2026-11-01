// Runs the page's pure rules script and checks the game rules.
const fs = require('fs'), vm = require('vm'), assert = require('assert');
const html = fs.readFileSync(process.argv[2] || require('path').join(__dirname, '../www/index.html'), 'utf8');
const src = html.match(/<script id="logic">([\s\S]*?)<\/script>/)[1];
const ctx = {}; vm.createContext(ctx);
vm.runInContext(src + ';Object.assign(this,{SCENARIOS,MODES,STREAK,canKill,newGame,tally,resolveRound,assignAlibis,nameClue,openRound});', ctx);
const { SCENARIOS, STREAK, newGame, tally, resolveRound, assignAlibis, nameClue, openRound } = ctx;
const names = n => Array.from({ length: n }, (_, i) => 'P' + i);
const roleIdx = (g, r) => g.players.map((p, i) => p.role === r ? i : -1).filter(i => i >= 0);
const allVote = (g, target, voterTarget) => Object.fromEntries(g.players.map((p, i) => [i, i === target ? voterTarget : target]).filter(([i]) => g.players[i].alive));

// scenario data is complete
for (const [id, sc] of Object.entries(SCENARIOS)) {
  assert(sc.names.length >= 12 + sc.decoys, id + ' too few names');
  assert.strictEqual(new Set(sc.names).size, sc.names.length, id + ' duplicate names');
  assert(sc.places.length >= 6 && sc.beats.length >= 6 && sc.questions.length >= 6, id + ' content');
}

// setup
let g = newGame(names(5), { mode: 'classic', minutes: 2, twoKillers: true, scenario: 'school' });
assert.strictEqual(roleIdx(g, 'killer').length, 1, 'second killer needs 7+');
assert.strictEqual(g.aliasList.length, 5 + SCENARIOS.school.decoys);
assert(g.players.every(p => g.aliasList.includes(p.alias)));
assert.strictEqual(newGame(names(7), { mode: 'classic', minutes: 2, twoKillers: true, scenario: 'noir' }).players.filter(p => p.role === 'killer').length, 2);
const rg = newGame(names(4), { mode: 'classic', minutes: 5, twoKillers: false, scenario: 'random' });
assert(rg.scenario in SCENARIOS && rg.settings.minutes === SCENARIOS[rg.scenario].minutes, 'random uses its own time');

// alibis: every innocent shares a place with at least one other; killers get none
for (let n = 4; n <= 12; n++) for (let t = 0; t < 20; t++) {
  const a = newGame(names(n), { mode: 'classic', minutes: 2, twoKillers: true, scenario: 'cairo' });
  const al = assignAlibis(a);
  a.players.forEach((p, i) => {
    if (p.role === 'killer') { assert.strictEqual(al[i].place, null); assert(al[i].options.length >= 1); }
    else {
      const mates = a.players.filter((q, j) => j !== i && al[j] && al[j].place === al[i].place);
      assert.strictEqual(mates.length, al[i].others); assert(al[i].others >= 1, 'innocent alone at n=' + n);
    }
  });
}

// clues are true about a living killer and never repeat
for (const sc of Object.keys(SCENARIOS)) for (let t = 0; t < 30; t++) {
  const c = newGame(names(6), { mode: 'classic', minutes: 2, twoKillers: false, scenario: sc });
  const seen = new Set();
  for (let r = 0; r < 6; r++) {
    openRound(c); c.round++;
    const clue = c.event.clue; if (!clue) continue;
    assert(!seen.has(clue), 'repeat clue'); seen.add(clue);
  }
  assert(seen.size >= 4, sc + ' ran out of clues');
}
{ // spot-check truth on a known killer name
  const c = newGame(names(5), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'noir' });
  const k = c.players.find(p => p.role === 'killer'); k.alias = 'Gin Rummy';
  for (let i = 0; i < 10; i++) {
    const t = nameClue(c); if (!t) break;
    if (t.includes('single word')) assert.fail('Gin Rummy is two words');
    const m = t.match(/letter (\w) in it/); if (m) assert('ginrummy'.includes(m[1].toLowerCase()), t);
  }
}

// tie ejects nobody
assert.strictEqual(tally({ 0: 1, 1: 0 }), null);
assert.strictEqual(tally({ 0: 2, 1: 2, 2: 0 }), 2);

// vote streak: ejected only after topping the vote STREAK rounds in a row; a tie resets it
g = newGame(names(8), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'noir' });
let [k] = roleIdx(g, 'killer'), civ = roleIdx(g, 'civilian');
g.votes = allVote(g, k, civ[0]); resolveRound(g);
assert.strictEqual(g.report.count, 1); assert(g.players[k].alive);
g.votes = { 0: 1, 1: 0 }; resolveRound(g); // tie
assert.strictEqual(g.streak, null);
for (let r = 1; r <= STREAK; r++) {
  g.votes = allVote(g, k, civ[0]); resolveRound(g);
  assert.strictEqual(g.players[k].alive, r < STREAK, 'round ' + r);
}
assert.strictEqual(g.report.ejected, k);
assert.strictEqual(g.players[k].out, 'vote');
assert.strictEqual(g.winner, 'town');

// switching target resets the streak
g = newGame(names(8), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'noir' });
civ = roleIdx(g, 'civilian');
g.votes = allVote(g, civ[0], civ[1]); resolveRound(g);
g.votes = allVote(g, civ[0], civ[1]); resolveRound(g);
g.votes = allVote(g, civ[1], civ[0]); resolveRound(g);
assert.deepStrictEqual({ ...g.streak }, { target: civ[1], count: 1 });
assert(g.players[civ[0]].alive);

// kills: correct name dies (role hidden), wrong name in penalty mode clears an innocent
g = newGame(names(6), { mode: 'penalty', minutes: 2, twoKillers: false, scenario: 'space' });
[k] = roleIdx(g, 'killer'); civ = roleIdx(g, 'civilian');
g.kills = [{ by: k, target: civ[0], alias: g.players[civ[0]].alias }, { by: k, target: civ[1], alias: g.aliasList.find(a => a !== g.players[civ[1]].alias) }];
resolveRound(g);
assert.deepStrictEqual([...g.report.dead], [civ[0]]);
assert.strictEqual(g.players[civ[0]].out, 'killed');
assert.strictEqual(g.report.clues.length, 1);
const cl = g.players[g.report.clues[0]];
assert(cl.role !== 'killer' && cl.alive && cl.cleared);
assert(g.notes.some(n => n.text.includes('is not a killer')));

// streak target killed at night: streak cleared
g = newGame(names(6), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'school' });
[k] = roleIdx(g, 'killer'); civ = roleIdx(g, 'civilian');
g.votes = allVote(g, civ[0], civ[1]);
g.kills = [{ by: k, target: civ[0], alias: g.players[civ[0]].alias }];
resolveRound(g);
assert.strictEqual(g.streak, null);

// killer reaches parity: killers win; detective death loses the case
g = newGame(names(4), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'cairo' });
[k] = roleIdx(g, 'killer'); const [d] = roleIdx(g, 'detective');
g.case = { target: k, round: 1 };
g.kills = [{ by: k, target: d, alias: g.players[d].alias }];
g.votes = { 0: 1, 1: 0 };
resolveRound(g);
assert.strictEqual(g.case, null);
assert.strictEqual(g.winner, null, '2 innocents vs 1 killer goes on');
const inn = roleIdx(g, 'civilian');
g.kills = [{ by: k, target: inn[0], alias: g.players[inn[0]].alias }];
resolveRound(g);
assert.strictEqual(g.winner, 'killers');

// balance: small games throw out after 2, big games make killers rest a round
assert.strictEqual(newGame(names(5), { mode: 'classic', minutes: 2, scenario: 'noir' }).streakLen, 2);
assert.strictEqual(newGame(names(6), { mode: 'classic', minutes: 2, scenario: 'noir' }).streakLen, 3);
assert.strictEqual(newGame(names(7), { mode: 'classic', minutes: 2, scenario: 'noir' }).killGap, 1);
g = newGame(names(5), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'noir' });
civ = roleIdx(g, 'civilian');
g.votes = allVote(g, civ[0], civ[1]); resolveRound(g);
assert(g.players[civ[0]].alive);
g.votes = allVote(g, civ[0], civ[1]); resolveRound(g);
assert.strictEqual(g.report.ejected, civ[0], 'small game: out after 2');

g = newGame(names(9), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'noir' });
[k] = roleIdx(g, 'killer'); civ = roleIdx(g, 'civilian');
assert(ctx.canKill(g, k), 'can kill round 1');
g.kills = [{ by: k, target: civ[0], alias: 'not a real name' }]; // a miss still uses the pen
resolveRound(g);
assert(!ctx.canKill(g, k), 'rests round 2');
resolveRound(g);
assert(ctx.canKill(g, k), 'can kill round 3');
const mid = newGame(names(7), { mode: 'classic', minutes: 2, twoKillers: false, scenario: 'noir' });
const [mk] = roleIdx(mid, 'killer');
mid.kills = [{ by: mk, target: roleIdx(mid, 'civilian')[0], alias: 'x' }]; resolveRound(mid);
assert(ctx.canKill(mid, mk), '7 players: every round');

console.log('all rules checks passed');
