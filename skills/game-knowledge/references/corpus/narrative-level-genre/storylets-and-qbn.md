# Storylets, Quality-Based Narrative, and Salience-Based Narrative

## Sources

- Emily Short, "Beyond Branching: Quality-Based, Salience-Based, and Waypoint Narrative Structures," *Emily Short's Interactive Storytelling*, April 12, 2016. https://emshort.blog/2016/04/12/beyond-branching-quality-based-and-salience-based-narrative-structures/ — the primary synthesis piece this file is built from.
- Emily Short, "Storylets: You Want Them," *Emily Short's Interactive Storytelling*, November 29, 2019. https://emshort.blog/2019/11/29/storylets-you-want-them/
- Emily Short, "Survey of Storylets-based Design" (discussing Max Kreminski's academic survey), January 6, 2019. https://emshort.blog/2019/01/06/kreminski-on-storylets/
- Videlais (Dan Cox), "Quality-Based Narrative (2010)," *SimpleQBN* reference. https://videlais.github.io/simple-qbn/qbn.html — traces the term to Failbetter Games.
- Failbetter Games, "New Narrative Structures," company blog. https://www.failbettergames.com/news/new-narrative-structures
- Bruno Dias, "Attempted: Building a general-purpose QBN system," personal blog, May 30, 2017. https://brunodias.dev/2017/05/30/an-ideal-qbn-system.html — an implementer's account of building a QBN engine, useful for the practical tradeoffs.

Emily Short is one of the most-cited narrative designers in interactive fiction (*Galatea*, *Counterfeit Monkey*; former narrative lead at Failbetter Games and Spirit AI). Her blog is the closest thing this sub-field has to a textbook. Failbetter Games (*Fallen London*, *Sunless Sea*, *Sunless Skies*) coined "quality-based narrative" as a term of art and built the reference implementations.

---

## Storylets: the atomic unit

A **storylet** is a self-contained chunk of narrative content — typically a paragraph or two of text, a player choice, and outcome text — that is **unlocked or gated by world state** rather than by an explicit link from the previous node. This is the structural break from branching narrative: instead of authoring "if the player picked X, show node Y," the author writes "this storylet is available whenever quality Q is above threshold T," and the *engine* decides what's currently available.

Short's core pitch (from "Storylets: You Want Them"): storylets let designers think in **systems** rather than trees. Because availability is state-driven rather than link-driven, storylets from entirely different authored arcs can interact — a storylet written for the "become a doctor" arc can reference an item picked up in the "smuggling" arc — without the author having to hand-thread a link between two specific nodes. Story arcs affect each other "for free," as an emergent property of shared state, which is impossible in a pure branching tree without combinatorial link-authoring.

## Qualities

**Qualities** are the numeric (or enum) variables that gate storylets. In Failbetter's games, qualities represent essentially everything: inventory counts, skill levels (e.g., "Dangerous" skill), relationship standing, story-arc progress flags. A storylet's availability is a predicate over qualities (`Dangerous >= 3 AND HasMet_Widow = true`), and its outcome is a set of quality deltas.

This is the mechanism that makes QBN feel systemic rather than scripted: **the player's read of "what's happening in the story" is actually a read of accumulated state**, surfaced through whichever storylets currently satisfy their gates.

## Quality-Based Narrative (QBN) as a structure

QBN is the **floating-modules** macro-pattern (see `branching-structure-patterns.md`) specialized so that the gating mechanism is quality-thresholds rather than boolean flags or explicit links. The player is presented with whatever pool of storylets is currently unlocked and picks freely among them — there's no imposed order across storylets, only the order imposed by which qualities are currently satisfied.

**Reference implementation:** Failbetter's *StoryNexus* platform (2012, now retired) was built explicitly to let third-party authors build QBN games without writing an engine from scratch. *Fallen London* is the flagship example: it contains many concurrent narrative arcs about different characters and situations scattered across the setting, and a player might follow an unplanned arc purely because they happened to accumulate the right resource.

### Why QBN, and what it costs

**Advantages:**
- Content is modular and additive — new storylets can be added without breaking existing content, since nothing depends on explicit prior links.
- Naturally supports long-running, live, or episodically-updated narrative games (this is why it's the dominant structure for narrative-heavy browser/live-service games).
- Encourages designers to build reusable narrative "verbs" (systems of storylets around a mechanic) rather than one-off scenes.

**Costs (per Short and per Dias's implementer account):**
- Cold-start problem: early in a QBN game, few qualities are unlocked, so the available storylet pool is thin and can feel arbitrary or uninteresting until enough qualities exist to create interesting combinations.
- At scale, the storylet library can overwhelm players with undifferentiated choice — QBN needs its own UI/curation layer (sorting, recommending, "featured" storylets) to stay legible.
- Authors must track quality-state manually across a large content library; without tooling, it's easy to create dead qualities (set but never read) or unreachable storylets (gated on a combination that's never satisfiable).

---

## Salience-Based Narrative

A different alternative to branching: instead of the *player* choosing among available content (as in QBN), the **system** selects the single best-matching piece of content for the current world state, and the player has no explicit menu of options — the content simply appears as the "correct" reaction to what's happening.

### Mechanism

Content is tagged with conditions (e.g., `location = kitchen AND stove = burning`). At the moment content is needed (a bark line, an ambient description, a reaction), the system searches the pool for the entry whose conditions are **most specifically satisfied** by current state — the most "salient" match — and plays it, breaking ties randomly among equally-salient candidates.

This is the same underlying mechanism as Elan Ruskin's rule-database dialogue system (see `dialogue-and-barks-systems.md`) — Short explicitly cites Valve's *Left 4 Dead* dialogue system as the paradigm case of salience-based narrative applied to barks.

### Other examples

- ***Firewatch*** uses location and nearby-object state to trigger contextual radio dialogue — the player never picks dialogue topics; the game picks the most relevant line for where the player is standing and what they're near.
- Doug Sharp's ***The King of Chicago*** (1986) sequences entire story events based on accumulated game state, an early precursor to salience-driven story selection.

### Advantages and risks

- A rudimentary, broadly-applicable default response can be authored first, then progressively *sharpened* by adding more specific, higher-priority variants — content can be built incrementally without needing uniform coverage of every state combination up front.
- Because salience-based content usually only *reads* state (to select what to show) rather than *writing* new state, it's comparatively safe to add content without cascading side effects on the rest of the narrative graph.
- Risk: unplanned combinations of state can accidentally satisfy a highly-specific rule and trigger an inappropriate response (a joke line firing during a somber beat, e.g.) — testing this space is hard because the "bug" is a content-authoring gap, not a code bug, and only shows up in state combinations nobody thought to test. Randomized/fuzzed playthroughs and state-visualization tooling are the practical mitigation.

---

## Waypoint Narrative

A third structure, distinct from both QBN and salience-based systems, aimed specifically at **conversation**. Dialogue lines are associated with **transitions between topics**, not with topics themselves. The system tries to pathfind the conversation toward a set of designated "waypoint" topics that advance the story, while the player (and NPCs) can redirect the conversation, causing the system to re-route.

### Mechanism

Topics form a graph; edges are the authored transition-lines. The engine is always trying to reach the next unvisited waypoint, but if the player introduces a topic the system wasn't steering toward, the conversation reroutes — potentially surfacing alternate content or even alternate outcomes, because the *path taken* to a waypoint, not just the waypoint itself, can matter.

**Example:** Emily Short's own *Glass* — the protagonist is a parrot in a room of humans, which justifies why the player-character doesn't have normal conversational agency and must instead nudge topics indirectly. The system continuously "heals" back toward its authored beats regardless of player detours, and — notably — adding more content makes the system *more* robust rather than combinatorially more expensive, since more topic-transitions just give the pathfinder more routes back to the same waypoints.

**Best fit:** unreliable narrators, conversation-as-primary-mechanic games, or any situation where the player's ability to steer topics (rather than pick from a menu) is itself the intended interaction.

---

## Choosing among these three (and branching)

| Structure | Who selects the next beat | Best for |
|---|---|---|
| Branching (see `branching-structure-patterns.md`) | Player, from an authored menu at an authored node | Legible, high-stakes consequence; tightly authored pacing |
| QBN / storylets | Player, from a system-filtered pool | Long-running, systemic, or live-service narrative; modular content growth |
| Salience-based | System, picks single best match | Ambient reactivity, barks, environmental commentary — content the player didn't ask for but should feel earned |
| Waypoint | System pathfinds, player perturbs | Conversation-centric games, unreliable narration, indirect agency |

These are not mutually exclusive within one game — a AAA RPG commonly layers salience-based barks over a branch-and-bottleneck main quest with a QBN side-quest pool.
