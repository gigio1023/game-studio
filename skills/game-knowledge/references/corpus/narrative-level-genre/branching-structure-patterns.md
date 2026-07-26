# Branching Narrative Structure Patterns

## Source

Sam Kabo Ashwell, "Standard Patterns in Choice-Based Games," *These Heterogenous Tasks* (blog), January 26, 2015. https://heterogenoustasks.wordpress.com/2015/01/26/standard-patterns-in-choice-based-games/

Ashwell is an interactive-fiction critic and author (*Ye Olde Manne Booke*, *Bee*). This taxonomy became the de facto shared vocabulary for branching-narrative design after 2015 — it is cited constantly in IF and narrative-game design circles (see also the IFWiki mirror: https://www.ifwiki.org/Standard_Patterns_in_Choice-Based_Games). It classifies structures by **topology**: how nodes connect, where branches merge, and how much state-tracking is required to support the merges. It is a descriptive taxonomy of what shipped games actually do, not a prescriptive method — Ashwell explicitly frames each pattern as a tool with a matching set of narrative effects, not a "best" choice.

A companion piece, Emily Short, "Small-Scale Structures in CYOA," *Emily Short's Interactive Storytelling*, November 5, 2016 (https://emshort.blog/2016/11/05/small-scale-structures-in-cyoa/), works at the opposite zoom level: individual choice-beat patterns that compose *within* any of the macro-structures below.

---

## The macro-patterns

Each pattern trades **authorial cost** against **legibility of consequence** — the more a structure lets branches diverge freely, the more content it needs and the less any single choice can be made to matter in a way the player can track.

### Time Cave

Heavy, continuous branching with little or no re-merging. Most choices are roughly equal in narrative weight, and the tree fans out into many distinct endings rather than funneling back to shared content.

- **Effect on the player:** emphasizes freedom and possibility-space over any single "correct" throughline; branches drift toward the fantastical or surreal the further they diverge, since nothing pulls them back. Rewards replay for its own sake rather than to "optimize" an ending.
- **Authoring cost:** the worst case — content grows combinatorially, since nothing is shared between branches.
- **Examples:** Edward Packard's *The Cave of Time* (1979, the original Choose Your Own Adventure book — this is where the pattern's name comes from), Emily Short's *A Dark and Stormy Entry*.

### Gauntlet

A linear central thread, pruned by side-branches that end quickly — in death, in a short detour that loops back, or in backtracking. There is functionally one story; branches exist to punish failure or offer brief texture, not to fork the plot.

- **Two flavors:** *deadly gauntlets* prune via character death/failure states; *friendly gauntlets* prune via short loop-backs that don't end the game.
- **Effect on the player:** conveys a hazardous or tightly constrained world; guarantees nearly all players see the same core content, which matters if that content carries the theme or plot. The cheapest structure to author — Ashwell notes it's the natural default for a first-time branching-narrative author because failure states are easy to write and don't require reconciling divergent state.
- **Examples:** *Zork: The Forces of Krill*, *Our Boys in Uniform*.

### Branch and Bottleneck

Branches form, but are deliberately funneled back together at "bottleneck" nodes — usually plot beats common to every version of the story. Consequences of earlier choices persist as **state** (flags, variables, relationship scores) that colors the bottleneck content, rather than as different bottleneck content per se.

- **Requires heavy state-tracking.** This is the structural cost of the pattern: without it, funneling branches back together erases the effect of every choice that led there, and players feel cheated.
- **Effect on the player:** preserves a time-driven plot with a fixed shape while still letting player choices shade characterization, relationships, and tone. Needs substantial length to justify the bottleneck-and-branch rhythm.
- **Examples:** *Long Live the Queen*, the *Choice of Games* line generally (their engine, ChoiceScript, is built around this pattern).

### Quest

Branches are organized by **geography or task** rather than by time. Distinct, modular story-branches re-merge toward a small number of "winning" endings; individual episodes can feel fragmentary, like discrete encounters, rather than chapters of one continuous plot.

- **Effect on the player:** well suited to exploration-flavored narrative; grounds a consistent world (since geography, not plot-time, is the organizing axis) while still allowing episodic, D&D-encounter-like structure.
- **Examples:** *Fighting Fantasy* gamebooks, *Lone Wolf*, *80 Days* (inkle, 2014).

### Sorting Hat

An early, heavy branch-point sorts the player into one of several major branches — and each major branch is often close to linear once chosen. The name is the *Harry Potter* reference: one big early choice, then a mostly-fixed track.

- **Effect on the player:** balances breadth of initial choice against depth of individual paths, but requires the author to essentially write several parallel games. The player needs some signal that they're now on a fixed track, or the drop in branching feels like a bait-and-switch.
- **Examples:** *Katawa Shoujo*, *Magical Makeover*.

### Open Map

Static, explicitly-modeled geography that the player can move through non-destructively (visit a location, leave, come back). Requires extensive state-tracking to know what's changed since a location was last visited.

- **Effect on the player:** slows pacing, foregrounds exploration and leisure over plot velocity — this is a structure for games where "wandering" is itself the point, not a means to an end.
- **Examples:** *Duelmaster*, *Chemistry and Physics*.

### Floating Modules

No central trunk at all. Discrete encounter-modules become available based on accumulated state or randomness, and the player samples from whatever's currently open; there's no unified plot thread pulling them through in a fixed order.

- **Effect on the player:** hard to write well because there's no throughline holding attention — requires either a lot of content or a strong incentive structure (stat-checking, resource-gathering) to make module-selection itself feel meaningful. Grinding tends to become a legitimate feature rather than a design failure, because floating-module games often want the player revisiting the same handful of modules under different state.
- **Named subtype: Quality-Based Narrative** — floating modules gated by numeric "qualities" rather than boolean flags. This subtype is significant enough to be its own file in this corpus (see `storylets-and-qbn.md`).
- **Examples:** Doug Sharp's *King of Chicago*, Failbetter's *StoryNexus* platform, Ashwell's own *Bee*.

### Loop and Grow

A central thread that **repeats** — the same scene, day, or task recurs — while state accumulated on each pass unlocks or forecloses options on the next. A named sub-pattern, **spoke and hub**, has multiple branches that all originate from and return to one or more central "hub" nodes.

- **Effect on the player:** emphasizes routine and regularity while still producing forward momentum; a natural fit for time-loop premises, confinement/escape narratives, or any story about grinding toward mastery of a fixed situation.
- **Examples:** *Bee*, *Trapped in Time*, *Solarium*.

---

## Micro-structures (Emily Short's small-scale patterns)

These compose *within* any macro-pattern above — they're choice-beat shapes, not whole-game topologies.

- **Confirmation-required choice:** a risky decision is expanded into an escalating sequence of "are you sure?" prompts, each raising the stakes, rather than a single binary choice. Turns one decision into a beat of sustained tension.
- **Track-switching choice:** the player can reverse a stance across multiple beats (e.g., repeatedly change their mind about trusting a character), modeling genuine ambivalence rather than a single locked-in choice.
- **Scored choice:** structurally similar to track-switching, but the *outcome* is determined by which option was picked most often across several related decisions, not by the final pick — good for slow-building character arcs (career vs. relationship) resolved by accumulated tendency rather than a single climactic choice.
- **Re-enterable conversation node:** the player can explore multiple sub-topics in any order before advancing, breaking exposition into player-paced chunks; sub-topics can be gated by what the player already knows or by relationship state.
- **Chapter One sorting hat:** a small-scale version of the macro Sorting Hat pattern — an early branch into distinct backstories that seed stat differences paying off later, primarily to create replay variation without committing to full parallel-game authoring.
- **Endgame time cave:** branching is deferred until the very end, where accumulated stats fan out into many distinct, personalized endings — the opposite structural bet from the macro Time Cave (defer the combinatorial cost to one small section instead of paying it throughout).

---

## How to use this taxonomy

Ashwell's framing (and the reason this list has stuck) is that **the patterns are diagnostic, not prescriptive**. Given a narrative-design problem, ask:
1. Does the story need consequences to be *legible* (branch-and-bottleneck, sorting hat) or is *possibility-space itself* the pleasure (time cave, floating modules)?
2. What's the actual authoring budget? Gauntlet and branch-and-bottleneck are the affordable end; time cave and floating modules are expensive per unit of content.
3. Is the organizing axis time (loop-and-grow, branch-and-bottleneck), geography (quest, open map), or neither (floating modules)?

Most shipped narrative games are **hybrids** — e.g., a branch-and-bottleneck spine with floating-module side content (this is effectively how many story-rich RPGs are structured: a bottlenecked main quest plus a QBN-flavored side-quest pool).
