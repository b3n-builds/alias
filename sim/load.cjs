// Loads the real game files (scenarios + rules) into one Node vm context,
// so tests and the simulator run exactly the code the app runs.
const fs = require('fs'), path = require('path'), vm = require('vm');

function loadGame() {
  const www = path.join(__dirname, '..', 'www');
  const files = fs.readdirSync(www).filter(f => /^scenarios-\d+\.js$/.test(f)).sort();
  const ctx = { console };
  vm.createContext(ctx);
  for (const f of [...files, 'rules.js']) vm.runInContext(fs.readFileSync(path.join(www, f), 'utf8'), ctx, { filename: f });
  // top-level consts are not context properties; hand them out explicitly
  return vm.runInContext(`({ BALANCE, MODES, SKIP, POWERS, SCENARIOS, shuffle, pick, killerCount, newGame, assignAlibis, planNight, letters, clueFits, clueKeys,
    nameClue, openRound, canKill, tally, resolveRound, winnerOf })`, ctx);
}

module.exports = { loadGame };
