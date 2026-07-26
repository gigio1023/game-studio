# Contextual Dialogue Systems and Drama Managers

Two related but distinct techniques for making pre-authored content feel responsive to live game state: **rule-database dialogue** (barks selected by context) and **drama managers** (whole story beats selected/paced by an AI director). Both replace "author picks the next line/beat" with "system picks the next line/beat from a pool, given current state" — the same underlying move as salience-based narrative (see `storylets-and-qbn.md`), applied at the sentence level and the story-structure level respectively.

---

## Part 1: Rule-database dialogue ("barks")

### Source

Elan Ruskin (Valve), "AI-driven Dynamic Dialog through Fuzzy Pattern Matching," GDC 2012. Slides: https://steamcdn-a.akamaihd.net/apps/valve/2012/GDC2012_Ruskin_Elan_DynamicDialog.pdf ; talk video: https://www.youtube.com/watch?v=tAbBID3N64A ; GDC Vault listing: https://gdcvault.com/play/1015528/AI-driven-Dynamic-Dialog-through. Secondary analysis: Robert Yang, "Rule Databases for Contextual Narrative... and spelling bees," *Radiator Blog*, July 2012, https://www.blog.radiator.debacle.us/2012/07/rule-databases-for-contextual-narrative.html.

Ruskin was a Valve programmer on the *Source* engine dialogue systems used in *Left 4 Dead*, *Left 4 Dead 2*, and *DOTA 2*. This is the canonical industry reference for "bark systems" — the ambient contextual lines characters shout ("Pills here!," "There's a zombie behind you, Bill!") that make AI companions feel aware of the world without writing bespoke dialogue for every possible situation.

### Mechanism

Traditional bark systems hard-code "when event X happens, play line Y." This doesn't scale: as the number of world-state variables grows, the number of *combinations* of state you'd want distinct dialogue for explodes, and hard-coded triggers can't express "say something different if this happens while also low on health and also near a specific ally."

Ruskin's alternative: maintain a **database of facts** about current world state (player health, who's nearby, what was just said, how long since a given event, etc.), and a large library of candidate **response rules**, each tagged with a set of **criteria** it requires to fire (e.g., `speaker.health < 0.5 AND target.class == "Boomer" AND timeSinceLastPlayed("BoomerWarning") > 20s`). At the moment a line is needed, the system evaluates every candidate rule against the current fact database and fires the response whose criteria are **most specific** — i.e., matches the most conditions, or the highest-priority set of conditions — among all rules that fully match. If nothing specific matches, a generic fallback with few or no conditions still fires, so there's always *a* line, just a less-tailored one.

This is a **specificity-ranked pattern match**, not a decision tree — content is authored as a flat pool of "when this is true, this could be said" rules rather than as a branching structure, so writers can add a highly specific new line for a rare situation without touching or restructuring any existing content. Ruskin's own framing (per the Radiator Blog analysis): the goal was to "let writers write" — shift authorial effort from wiring branches to writing situational lines, and let the matching engine handle selection.

**Repetition/variety handling:** the fact database tracks *recency* of what's already been said (time-since-last-played per line or per category), which becomes a criterion rules can check — so a rule can specifically require "this hasn't been said in the last N seconds" to avoid barking the same line on a loop. Author-facing tools reportedly logged which lines were firing most/least often during playtests, letting writers see gaps in coverage.

**Scale:** implementer accounts (e.g., a lightweight Unity reimplementation cited in the Radiator Blog piece) describe a functioning system at roughly a thousand rules and a hundred-ish distinct response events — indicating the technique is tractable well below Valve's own production scale, not just a AAA-only solution.

### What problem this actually solves

- **Context-appropriateness:** the right line for *this* combination of world-state, not a generic bark that ignores what's happening.
- **Authoring at scale without branching explosion:** new content is additive (a new rule with new criteria), not a restructuring of an existing tree.
- **The player's mental model is still "branching":** Yang's analysis makes the point that from the player's seat, the effect is indistinguishable from hand-authored reactive dialogue — "the branching narrative is just the mental model" the player constructs after the fact; the actual implementation is a flat, unordered rule pool.

---

## Part 2: Drama managers

### Source

Michael Mateas and Andrew Stern, *Façade* (2005), and their AAAI-published paper "Structuring Content in the Façade Interactive Drama Architecture." https://ojs.aaai.org/index.php/AIIDE/article/view/18722 ; overview: "The Story of Facade: The AI-Powered Interactive Drama," *Game Developer*, https://www.gamedeveloper.com/design/the-story-of-facade-the-ai-powered-interactive-drama ; background: https://en.wikipedia.org/wiki/Fa%C3%A7ade_(video_game).

*Façade* is the foundational research artifact for "drama manager" as a concept: an AI system that sits above individual character behavior and actively curates *which chunk of story happens next* in order to shape the overall dramatic arc, as distinct from either fixed branching (author picks) or pure simulation (nothing picks — whatever the simulated agents do is the story).

### Mechanism

- **Beats** are the atomic unit — "the smallest narrative sequence the game can run," modeled explicitly on the beat concept from dramatic writing theory (a unit of story tension/resolution, not a scene or a line). *Façade* ships with 27 authored beats; a typical playthrough fires roughly 15 of them, selected and sequenced live.
- The Drama Manager acts as a **beat sequencer**: at each decision point it evaluates the current narrative state (which beats have already fired, the current tension/dramatic-arc value, character "self-realization" progress during the therapy-game-like core loop) and selects the next unused beat that best advances the intended arc shape — classically, rising tension toward a climax rather than a flat or randomly-ordered sequence.
- Each beat is internally composed of **Joint Dialogue Behaviors (JDBs)** — sequenced combinations of dialogue and world-interaction that can run anywhere from ~10 to ~100 steps — giving the beat enough internal structure to develop a specific plot point around a topic before the Drama Manager hands control to the next beat.
- Characters (Trip and Grace) are not driven by the Drama Manager directly — they're autonomous agents running **ABL (A Behavior Language)**, a reactive planning language built for real-time multi-agent negotiation (characters signal intended actions to each other and negotiate turn-taking so they never talk over one another, adapting live to world conditions). The Drama Manager sets the *macro* target (which beat, i.e., which topic/tension-arc segment); ABL agents handle the *micro* execution (how the characters actually behave and speak inside that beat).
- Natural-language input is parsed by roughly 800 hand-written rules; misparses are common enough that the designers deliberately tuned the system to sometimes accept **false positives** rather than go silent, on the judgment that a plausible-but-imperfect reaction keeps the interaction alive better than a visible failure to understand would.

### What this buys you, and what it costs

- **Buys:** a story that can adapt beat-order (and therefore pacing and even which content is seen at all) to actual player behavior, while every individual beat is still fully hand-authored — this is a middle path between fixed branching (see `branching-structure-patterns.md`) and full simulation.
- **Costs:** the Drama Manager can't *guarantee* coherence when the player does something the beat-selection logic didn't anticipate — the system's real-time adaptivity is bought at the price of occasional visible seams (a beat firing that doesn't quite fit what just happened). Critics at the time (and since) have called *Façade* "an experiment rather than a finished game" for exactly this reason — the parser and the drama manager both work well enough to demonstrate the architecture, not well enough to disappear.

---

## Part 3: The AI Director as a pacing-only drama manager

### Source

Valve, *Left 4 Dead* (2008) "Director" system. Overview sources: https://left4dead.fandom.com/wiki/The_Director ; GDC 2009 postmortem coverage, "Examining Left 4 Dead," https://www.ausgamers.com/features/read/2724930 ; explainer video "The Director AI of Left 4 Dead," *AI and Games*, https://www.youtube.com/watch?v=WbHMxo11HcU.

The *Left 4 Dead* Director is worth treating as a **drama manager with no dialogue/plot layer at all** — it only manages *pacing and intensity*, but it's built on the same underlying idea as Façade's beat sequencer: don't hand-author a fixed sequence of events, author a pool of possible events plus a policy for picking from that pool based on live player state.

### Mechanism

- The Director tracks each survivor's **emotional intensity** (a stress metric that rises from combat, damage taken, being attacked by special infected, etc.) and uses this to decide what to spawn and when — not a fixed enemy-count-per-checkpoint, but a live response to how keyed-up the players currently are.
- **Adaptive Dramatic Pacing:** the explicit design lesson cited by Valve (drawn from their earlier work on *Counter-Strike*) is that constant relentless action exhausts players, but too much slack downtime bores them — the Director's job is to alternate between the two, algorithmically, rather than leave pacing to fixed level-design checkpoints.
- Documented phase states include a build-up toward a **Peak** (maximum intensity, typically the crest of a combat encounter), followed by a **Relax** phase once intensity has been sustained and released — during Relax, the Director suppresses new Wanderer/Mob/special spawns for a stretch (commonly cited around 30–45 seconds) to let players recover before intensity is allowed to climb again.
- The Director also drives **emotional cues** beyond enemy spawns — dynamic music mixing, environmental/visual effects, and (in sequels) weather — to reinforce the current phase rather than only controlling combat difficulty.

### Relationship to the rest of this file

The L4D Director is the cleanest illustration that "drama manager" and "salience-based content selection" are the same technique applied to different content types: Façade's Drama Manager selects *narrative beats*; Ruskin's rule database selects *individual lines*; the L4D Director selects *encounter pacing*. All three replace a fixed author-specified sequence with a live policy over a content pool, gated by a model of current player/world state.
