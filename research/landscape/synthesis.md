# Landscape Research Synthesis

This synthesis consolidates three rounds of external research conducted on
2026-05-05 to inform Game Studio improvement. Round 1 mapped the territory.
Round 2 went deep on the most operational findings. Round 3 verified
specific claims against primary sources and surfaced contrarian voices.
Read this for the conclusions; consult [the round files](README.md) for the
source dives.

## What The Research Confirms

### Reference-To-Design Translation Has No Native Game-Design Method

No formal method exists in game-design literature for translating "I liked
this scene from another game" into design constraints. MDA's backward chain
is the closest, and it is a vocabulary, not a method. Doug Church's Formal
Abstract Design Tools is inductive analysis of finished games, not a
forward procedure.

Cross-field methods are stronger. Music production's reference-track
discipline ("why does this work, not just what do you like"), architecture
precedent studies (fragmentation into components labeled with the forces
they balance), and Christopher Alexander's pattern format (context /
forces / solution / diagram) all offer concrete transferable protocols.

The strongest operational synthesis is a 6-step move set:

1. Capture the moment in plain language without interpretation.
2. Why-extract: ask what specifically felt good, push past feature names.
3. Fragment: break into 1-3 named structural components.
4. Label forces: name competing player needs each component resolves.
5. Name constraints: convert force resolution into declarative design
   sentences.
6. Rank contradictions: when references conflict, present both and record
   the creator's priority ruling.

The output artifact is a Reference Constraint Sheet that bridges
[beginner-taste-interview.md](../../core/templates/intake/beginner-taste-interview.md)
and [concept-card.md](../../core/templates/direction/concept-card.md).

Source: [r2-04-cross-field-translation.md](deep-dives/r2-04-cross-field-translation.md).

### Studios Document Concept Death With Concrete Triggers

Round 2 surfaced four operational patterns for production "dark rituals":

- **Pre-committed metric targets** must be set before the proof phase
  begins. Binary pass/fail. Game Studio's gate verdicts have no
  pre-committed quantitative threshold field.
- **"Other-game feeling"** as a named leading-indicator kill trigger
  (Jonathan Dower, Supercell): if you keep wanting to make a different
  game, you have already killed this one. Fires before any proof failure.
- **Explainability failure** as an early kill trigger (TOEM postmortem):
  if the team cannot explain the first verb to an outside person after
  two attempts, that is a kill signal. Requires no build artifact.
- **Carry-forward artifact candidates** (Derek Yu): the kill record names
  which mechanics, art, or audio remain viable for future work. Converts
  every kill into capital, not sunk cost.

Caveat: the often-cited "Supercell three-gate kill model" is an analyst
construction, not a Supercell-named framework. Game Studio should describe
the underlying patterns without false attribution.

Sources: [r2-01-kill-rituals.md](deep-dives/r2-01-kill-rituals.md),
[01-claim-verification.md](verification/01-claim-verification.md).

### CSA 5/5/5, Rami's Vertical-Slice Distinction, And Game Outcomes Project Are Verified Adoptable

Verification round confirmed three production patterns as SUPPORTED:

- **CSA 5/5/5 review template** (Hamann, Game Developer magazine): five
  wins / five losses / five changes, each ranked 1-5 by importance.
  Submitted within 3 days of milestone. Lead discussion within 2 days.
  Full team within 1 week. Total cycle 2-4 hours. Every problem gets a
  named owner and a deadline. Verbatim adoptable.
- **Rami Ismail's prototype/vertical-slice distinction**: prototype
  answers "should you build this game" (rapid disposable experiments).
  Vertical slice answers "can you build it" (full production pipeline at
  shipping fidelity on one thin segment). Second iteration of the same
  segment is required to establish velocity — that measurement is the
  actual gate evidence, not the slice itself.
- **Game Outcomes Project** (Paul Tozour series, gamedeveloper.com):
  design risk management correlation 0.57 with shipped success — single
  strongest predictor. Documentation completeness <0.2. Crunch shows
  negative correlation even where it was expected to help.

Sources: [r2-02-gate-templates.md](deep-dives/r2-02-gate-templates.md),
[01-claim-verification.md](verification/01-claim-verification.md).

### Park-Style Memory Architecture Is Implementable Today

Park et al. 2023 reflection mechanism (algorithmic):

- Memory stream is an append-only log with LLM-assigned importance scores.
- Retrieval scores by recency, importance, and relevance via weighted sum
  (the verification round flagged that the multiplicative form sometimes
  attributed is wrong).
- Reflection fires when an importance accumulator crosses a threshold,
  synthesizing higher-level insights stored back into the stream.
- Planning retrieves memories (including reflections) and constructs
  hierarchical actions.

Park et al. 2024 follow-up: dense context injection of an interview-style
brief produces directionally large gains in personality-replication
accuracy. The "85%" headline is averaged across conditions and should not
be quoted as a specific accuracy number.

Three Game Studio implementations:

1. **Review-role personality from creative brief**: inject
   `.game-studio/creative-brief.md` verbatim into the system prompt prefix
   before every role playbook invocation.
2. **Reflection-before-verdict**: two-pass gate. Pass 1 reads ledgers and
   produces a "3 things to keep in mind" brief. Pass 2 issues the verdict
   with that brief in context.
3. **Cross-session ledger probing**: at session start, read decision
   ledger and proof ledger; emit a blocking warning when current request
   conflicts with parked or rejected entries. Read-only.

Sources: [r2-05-reflection-and-memory.md](deep-dives/r2-05-reflection-and-memory.md),
[01-claim-verification.md](verification/01-claim-verification.md).

### Agentic Patterns Worth Importing

Five patterns surfaced from BMAD Method, DSPy, LangGraph, AutoGen, and the
Anthropic Claude Agent SDK:

1. **Typed verdict schemas** (DSPy + LangGraph): verdict as required enum,
   mandatory `reasoning` array (one entry per criterion), and a
   `decision_context` object populated only when verdict is
   `USER_DECISION_NEEDED`.
2. **Progressive disclosure SKILL.md** (Anthropic standard): role
   playbooks become skill directories with YAML frontmatter triggers,
   body under 500 lines, and sharded references that load on demand.
3. **Decision-request artifact** (AutoGen HandoffMessage): the
   USER_DECISION_NEEDED outcome produces a persisted decision-request
   file, not just a schema field.
4. **Reflect-before-gate** (DSPy ChainOfThought): mandatory reasoning
   field before verdict field, exposed to human review. Weak reasoning
   that resolves to PASS becomes a signal for human re-review.
5. **Creative-constraint sharding** (BMAD epic sharding): a
   `creative_constraints` block in milestone and story templates,
   populated from the active Creative Direction at artifact creation
   time, so direction travels with the work.

Source: [r2-03-agentic-frameworks.md](deep-dives/r2-03-agentic-frameworks.md).

### Canon Additions With Documented Gap Mapping

Top recommended additions to
[Game Craft Source Map](../../core/references/game-craft-source-map.md):

- **Koster, A Theory Of Fun** — first-principles cognitive rationale for
  why a mechanic is fun. Lets gate review ask "is the player still in
  the learning curve or has mastery arrived?"
- **Caillois, Man Play And Games** — orthogonal play-type taxonomy
  (agon / alea / mimicry / ilinx) for classifying play before mechanic
  decisions.
- **Juul, Half-Real** — rules/fiction duality for distinguishing
  fictional consistency failures from mechanical clarity failures in
  playtest review.
- **Schreier, Blood Sweat And Pixels** — phenomenology of production
  crisis. Pattern-matching material for risk register entries.
- **Short / Adams (eds.), Procedural Storytelling In Game Design** —
  practitioner documentation of narrative architecture techniques.
- **Tharp, The Creative Habit** — sustained creative practice across
  long projects. The "spine" concept (one-sentence creative purpose)
  strengthens the existing one-page brief.
- **Christopher Alexander, A Pattern Language** — foundational
  reference-translation text. Pattern format anchors the cross-field
  translation move set above.

Source: [01-additional-canon.md](textbook-canon/01-additional-canon.md).

## What The Research Pushes Back On

Several adoption candidates require hedging.

### MDA Aesthetics Is Not A Targeting Tool

Walk, Lantz, and Duarte critiques document that MDA's aesthetics list
(Sensation / Fantasy / Narrative / Challenge / Fellowship / Discovery /
Expression / Submission) is opinion-shaped, not exhaustive. Horror, Awe,
Disgust, and Confusion are absent. Cite DDE (Design / Dynamics /
Experience) or the Lantz Materials / Dynamics / Affect variant when the
framework needs a backward-chain vocabulary. Do not use the 8 aesthetics
as a prescriptive targeting list.

### Vertical Slice Must Gate On Invisible Deliverables

Geoff Ellenor's documented failure mode: a polished demo built with hacks
and no production tooling passes the milestone but leaves the team
without tools, systems, or processes to build the actual game. Any
vertical-slice gate must require pipeline, tooling, and approval-workflow
evidence — not only the playable artifact. Ismail adds: vertical slice
is not design validation; that is what prototypes are for.

### Pillars Are Often Post-Hoc Rationalization

ch0m5 and others document that publicly cited pillar examples were
articulated during or after production. Pillars applied before discovery
constrain exactly the ambiguous, open-ended intent that produces novel
games. For solo development, the alignment problem pillars solve does not
exist. Treat pillars as one option, not a default for all entry modes.

### Scrum Ceremony Does Not Fit Art-Heavy Production

The distinction between agile principles (which transfer) and Scrum
ceremony (which mostly does not) must be explicit. Sprint and velocity
were built for engineering cadences; imposing them on art and narrative
production is documented as harmful.

### AI Co-Creative Claims Are Empirically Contested

Bender, Hanna, and CHI 2024 work document that LLM outputs are the
statistical center of mass of existing work — structurally biased toward
the familiar and against the novel. Over 60% of surveyed designers
believe generative AI reduces originality. Game Studio should be honest
about LLM limits: the system is scaffolding for craft coaching, not an
oracle for design judgment.

### "Fail Fast" Is Toxic Outside Concept-Validation Contexts

GamesRadar and Ziva.sh document that fail-fast was built for startup
pivots with team bandwidth. Applied to long-form solo craft (Stardew
Valley mode), it pressures abandonment of exactly the kind of sustained
commitment that produces distinctive work. Game Studio should scope
concept-death triggers to validation contexts, not penalize sustained
craft iteration.

### The Formalist Counter-Position Is Not Fringe

Blow, Anthropy, and the formalist tradition argue that systems-first
design — rigorous structure from which experience emerges — is how some
of the most original games were made. Presenting playcentric/taste-driven
design as canonical without this counter-position imports a values
position that shapes which games the framework will produce.

Source: [02-contrarian-perspectives.md](verification/02-contrarian-perspectives.md).

## Verification Verdicts

| Claim | Verdict | Action |
| --- | --- | --- |
| Supercell three-gate kill model | PARTIALLY_SUPPORTED | Drop "three-gate" framing; keep underlying patterns. |
| Riot six-component thesis structure | OVERSTATED | False attribution. Use documented Opportunity/Thesis/Audience or label "extended thesis structure." |
| Rami Ismail prototype/vertical-slice distinction | SUPPORTED | Adopt verbatim. |
| Park 2023 reflection mechanism numbers | PARTIALLY_SUPPORTED | Use directional pattern; correct retrieval combination form. |
| Park 2024 personality replication 85% | PARTIALLY_SUPPORTED | Use directional finding without quoting the specific number. |
| Game Outcomes Project correlations | SUPPORTED | Adopt directly. |
| CSA 5/5/5 review template | SUPPORTED | Adopt verbatim. |
| Ubisoft Ghostwriter pairwise pattern | SUPPORTED | Adopt as concept-slate UI pattern. |

Source: [01-claim-verification.md](verification/01-claim-verification.md).

## Strategic Position In Light Of Adjacent Work

Recent (2024-2026) adjacent work reshapes how Game Studio should position
itself.

- **Claude Code Game Studios** (April 2026, public) — a 49-agent /
  72-skill framework using the same SKILL.md pattern. The defensive move
  is not more agents but sharper craft articulation and stronger
  authority-model documentation.
- **VILA Lab** (April 2026, peer-reviewed) — documents that 98.4% of
  Claude Code is operational infrastructure, not reasoning logic.
  Practitioner skill development is an empty niche. Game Studio's
  offensive opening: design explicitly for craft growth, not throughput.
- **Agent Skills as open standard** (October 2025) — distributable skills
  enable adoption beyond this repo. No public game-design skill registry
  exists; first-mover opportunity.
- **AI NPC tool failures** (Convai shutdown, Inworld pivot, 2025) —
  infrastructure-layer AI tools are failing on economics. The
  coaching/review layer has structurally lower infrastructure cost. Game
  Studio is positioned correctly.
- **Craft-coach niche is empty** — no tool takes craft coaching with
  game-design specificity as primary proposition. Sudowrite, HyperWrite,
  ChatGPT writing coach all treat coaching as conversation. Sharpest
  differentiation angle, but requires Game Studio to document what the
  AI is coaching toward (skills, heuristics, failure modes).

Source: [03-recent-adjacent-work.md](verification/03-recent-adjacent-work.md).

## What This Means For The Framework

The full implementation plan is in
[Research-Grounded Improvements](../../docs/improvement/value-review/15-research-grounded-improvements.md).

Headlines:

1. Adopt the 6-step reference-translation move set as the bridge between
   taste interview and concept portfolio. Drop the unverified "Riot
   six-component thesis." Add the formalist counter-position so
   taste-to-game is not the only canonical entry path.
2. Update concept-death protocol with verified triggers (pre-committed
   targets, other-game feeling, explainability failure). Require kill
   ceremony for solo. Add carry-forward field. Drop the analyst
   "three-gate" label.
3. Adopt CSA 5/5/5 verbatim. Adopt Rami's prototype/vertical-slice
   distinction with velocity-baseline gate evidence. Update milestone
   schema with `velocityBaseline` and decomposed `experienceHypothesis`
   sub-components.
4. Implement the three Park-style memory moves (review-role personality,
   reflection-before-verdict, cross-session ledger probing) but frame
   them as scaffolding, not oracular reasoning.
5. Add Koster, Caillois, Juul, Schreier, Short/Adams, Tharp, and
   Alexander to the source map with explicit gap mapping. Add DDE /
   Walk-Lantz-Duarte critique alongside MDA. Add the formalist
   counter-position.
6. Position Game Studio as "craft coach with documented authority
   boundaries." Document what the AI is coaching the human toward.
   Skills as a distributable open-standard bundle is a first-mover
   opportunity.
