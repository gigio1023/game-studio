# Genre Wisdom: Roguelike / Roguelite

## Core promise

A run-based game whose central pleasure is **mastering a system under the threat of losing all run-local progress** — the tension between "I am getting better at this" (player skill, real and persistent) and "I might lose everything I've built this run" (character/resource state, ephemeral) is the genre's defining emotional engine. Nearly every genre-level design debate below (permadeath severity, meta-progression) is really an argument about how to tune that specific tension.

## The Berlin Interpretation (what "roguelike" formally means)

### Source

Produced at the International Roguelike Development Conference, 2008, by consensus discussion among attendees including Ido Yehieli, Radomir Dopieralski, and Jeff Lait. Reference: RogueBasin, "Berlin Interpretation," https://www.roguebasin.com/index.php/Berlin_Interpretation ; critical/academic re-examination: Cartlidge, "Genre, Prototype Theory and the Berlin Interpretation of Roguelikes," *Game Studies* 24(3), https://gamestudies.org/2403/articles/cartlidge.

### The framework

The Berlin Interpretation is explicitly **not** a checklist for gatekeeping what counts as a "real" roguelike — it's a set of **high-value factors**, none individually necessary or sufficient, used so a community of practitioners studying the genre can talk about it consistently. Key factors:

- **Random/procedural generation** — level layout, item placement, and item appearance are randomized to increase replayability (the interpretation notes a nuance often lost in casual usage: *monster appearance* is typically fixed by design, while *monster placement* is randomized — procedural generation applies unevenly across a game's systems, not uniformly).
- **Permadeath** — no save-scumming; death ends the run and progress resets to the run's start, full stop. The interpretation is explicit that the player is *not* expected to win with their first character — repeated failure generating knowledge for the next attempt is treated as the intended play pattern, not a punishment.
- Additional traditionally-cited factors (turn-based, grid-based, complexity, resource management, hack'n'slash focus) are treated as lower-value / more negotiable than procedural generation and permadeath.

**Explicit caveat carried directly from the source, worth preserving as-is:** missing some Berlin factors doesn't disqualify a game from the "roguelike" label, and possessing some doesn't guarantee it either — the purpose is descriptive vocabulary for a community of practice, not a taxonomic gate.

## The roguelite fork and the meta-progression debate

"Roguelite" (or "rogue-lite") denotes games that keep the run-based, procedurally-generated, permadeath-*within-a-run* structure but add **persistent meta-progression across runs** — unlocks, permanent stat increases, or new starting options that carry over after a death. This is the single most consequential and contested design fork in the genre.

**The tension, stated plainly:** meta-progression makes failed runs feel less wasted (you're still advancing *something*) and gives struggling players a path to eventually succeed through accumulated power rather than pure skill growth — but it also risks diluting the Berlin Interpretation's core promise, since a "loss" that still nets permanent power gain is a meaningfully softer version of permadeath's stakes. Games in this space make explicit, opinionated choices about where on this spectrum they sit, and that choice is close to the single most important genre-identity decision a roguelike/roguelite project makes.

## Canonical lessons: Slay the Spire and Into the Breach

### Slay the Spire (Mega Crit, 2019) — deckbuilder-roguelike synthesis

Source note: developer commentary indicates the deckbuilding influence traces to *Magic: The Gathering* and *Dominion* specifically, with the draft format influenced by *Hearthstone*'s Arena mode; general coverage via https://www.summerengine.com/blog/make-a-deckbuilder-like-slay-the-spire and https://rogueliker.com/slay-the-spire-review/.

*Slay the Spire* is treated as the genre-defining case for **roguelike deckbuilders** specifically because of how it resolved card acquisition: a choice of three randomized cards offered free after every combat (no gold cost, no separate shop-only gate for core progression), plus **relics** that meaningfully warp overall strategy rather than just incrementally buffing stats, plus a **branching map with risk-reward path selection** between combats (a spatial layer laid over the deckbuilding layer — see the deckbuilder-economy discussion in `genre-narrative-horror-and-scope.md`). The core design lesson repeatedly cited: making card acquisition free-but-choice-limited (three options, pick one, every fight) creates constant small decision points that compound into large build-defining trajectories, without requiring a separate economy system to gate access to new cards.

### Into the Breach (Subset Games, 2018) — full-information tactics

*Into the Breach* is the frequently-cited counterpoint case for **information-complete** roguelike design: unlike most roguelikes, enemy intent (exactly what each enemy will do next turn, including target and damage) is fully visible before the player commits to a move. This removes the genre's usual "unlucky RNG death" failure mode almost entirely — losses in *Into the Breach* read as planning failures, not bad-luck failures, because the player had all the information needed to prevent the loss. This is cited as a genre-expanding design lesson: procedural generation and permadeath (the Berlin core) do not require *hidden* information or *reactive* combat to produce roguelike tension — a fully-transparent puzzle-tactics loop can carry the same run-based mastery arc.

## Common failure modes (synthesized from the sources above)

- **Meta-progression that replaces skill growth rather than supplementing it** — if permanent unlocks alone can carry a player to victory without genuine improvement in play, the core "mastery under threat of loss" promise collapses into a grind loop wearing roguelike clothing.
- **Procedural generation that produces unfair or unwinnable configurations** — the Berlin Interpretation's randomness factor is a double-edged design commitment; without careful tuning (as *Into the Breach*'s full-information design deliberately addresses), randomness can produce losses that read as arbitrary rather than earned, which is corrosive to the genre's central promise that failure should generate learnable knowledge.
- **Run length miscalibrated to death frequency** — permadeath's sting scales directly with how much time/investment is lost per death; genre design has to jointly tune run length against expected mortality rate, or players either never feel real stakes (runs are too short to lose much) or feel punished rather than challenged (runs are long enough that death reads as a waste of time rather than a lesson).
