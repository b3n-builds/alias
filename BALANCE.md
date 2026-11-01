# ALIAS balance notes

How the rules were tuned, what the simulator assumes, and what it says.
Re-run any time with `npm run sim` (tables) or read `sim/results.txt` (last run).

## What similar games taught us

- **Informed minority vs. uninformed majority.** Secret Hitler and Blood on the Clocktower give the evil side more
  information and the good side more players. ALIAS does the same: killers see every name in play, the town has numbers.
- **Evil count grows with the table.** Migdał's mathematical model of Mafia finds a fair game needs about √n evil
  players out of n, and that the parity of the player count swings results a lot.
- **Real tables lean toward the town.** Live play tends to favor the good side more than theory predicts, so the
  simulator target is "slightly killer-friendly" for an average bot table.
- **50/50 is not the whole story.** Being knocked out early is no fun, so game length and first-round deaths matter too.

Sources: [A mathematical model of the Mafia game (Migdał)](https://arxiv.org/abs/1009.1031),
[How to balance Werewolf / Mafia](https://werewolv.es/how-to-balance-a-werewolf-game),
[Game balance in Secret Hitler](https://medium.com/@tommygents/game-balance-in-secret-hitler-1b33f9563746),
[Blood on the Clocktower](https://en.wikipedia.org/wiki/Blood_on_the_Clocktower),
[Mafia (party game)](https://en.wikipedia.org/wiki/Mafia_(party_game)).

## The simulator (`sim/simulate.cjs`)

Bots play the real rules from `www/rules.js`.

- **Killers** track, for every player, which secret names they could still have. They narrow it from what innocents
  let slip when answering name clues, from their own misses, and from names confirmed by kills. They attack the
  player they know most about, and an outed detective first.
- **The town** scores suspicion from a shared table read (noise), a small "bad liar" tell, witness reports, and the
  detective's results. Three skill levels: casual, average, sharp.

These are assumptions, not measurements of real people. Treat the numbers as "which direction does a rule push",
not as exact win rates.

## What changed and why

1. **Killers now have real alibis.** In the first version a killer was the only player without a place to have been,
   so any night without a kill exposed them. Bots found the killer by round 3–4 almost every game (killers won 0% at
   8+ players). Now killers spend the night in a group of three like everyone else. What can give them away is a
   **witness**: on nights a killer writes a name, someone may have seen a person slip away from their place, and the
   morning report says where. Information now builds up over several nights instead of arriving all at once.
2. **The number of killers scales with the table** ("Killers: Auto"): 1 killer for 4–6 players, 2 for 7–9, 3 for
   10–12. You can still pick 1, 2 or 3 yourself (capped so each killer faces at least two innocents).
3. **Your "kill every 2 rounds" rule for big games stays**, starting at 7 players. On its own it made big games
   unwinnable for killers (one killer, half the attempts, ~10 people to remove), which is why it comes with more killers.
4. **Vote streak by table size:** thrown out after 2 straight top votes at 4, 7 and 10 players, 3 elsewhere.
   The odd pattern is deliberate: those sizes swing toward the killers otherwise.
5. **Difficulty now means "how hard the case is for the town":**

   | Level  | Decoy names | Detective result after | Witness chance |
   |--------|-------------|------------------------|----------------|
   | Easy   | 4           | 2 rounds               | 65%            |
   | Medium | 3           | 3 rounds               | 50%            |
   | Hard   | 3           | 4 rounds               | 35%            |

   Hard cases also use look-alike names (Nova / Nova Two, Theon the Elder / Theon the Younger).
6. **Witness chance is scaled down at 6 and 9 players and up at 11**, where one report was too decisive or too rare.

## What deliberately did not change

The core is untouched: secret names, the killer writing a name next to a player, name clues, the detective's
delayed result, pass-and-play, and vote streaks. Balance came from the dials around them.

## Results (average bot table, killer win rate)

| Players         | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
|-----------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Easy            | 56% | 43% | 36% | 43% | 41% | 39% | 42% | 53% | 44% |
| Medium          | 60% | 53% | 44% | 50% | 51% | 41% | 53% | 60% | 50% |
| Hard            | 61% | 58% | 47% | 48% | 52% | 43% | 54% | 67% | 53% |
| Avg. rounds (M) | 3.2 | 5.0 | 6.1 | 6.8 | 9.6 | 11  | 9.6 | 12  | 14  |

- Penalty mode leans to the town (~30% killer wins); Frenzy leans to the killers (~75%). The setup screen says so.
- A sharp table beats killers most of the time and a casual one loses to them. Skill matters, which is healthy.

## Known limits

- Big games run long (10–14 rounds at 10+ players), mostly because of the every-other-round rule.
  If that drags, the first thing to try is 1-minute talk time, or turning the rule off for 7–9 players.
- 4-player games favor the killer (~60%). Small tables are swingy in every game of this kind.
- None of this has been tested with real people yet. After a few games, note who wins and adjust `BALANCE` in `www/rules.js`.
