# Landscape Research Synthesis: What The Research Confirms

[Back to index](../synthesis.md)

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
[beginner-taste-interview.md](../../../core/templates/intake/beginner-taste-interview.md)
and [concept-card.md](../../../core/templates/direction/concept-card.md).

Source: [r2-04-cross-field-translation.md](../deep-dives/r2-04-cross-field-translation.md).

### Studios Document Concept Death With Concrete Triggers

Round 2 identified four operational patterns for production "production failure protocols":

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

Sources: [r2-01-kill-rituals.md](../deep-dives/r2-01-kill-rituals.md),
[01-claim-verification.md](../verification/01-claim-verification.md).

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

Sources: [r2-02-gate-templates.md](../deep-dives/r2-02-gate-templates.md),
[01-claim-verification.md](../verification/01-claim-verification.md).

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

Sources: [r2-05-reflection-and-memory.md](../deep-dives/r2-05-reflection-and-memory.md),
[01-claim-verification.md](../verification/01-claim-verification.md).

### Agentic Patterns Worth Importing

Five patterns identified from BMAD Method, DSPy, LangGraph, AutoGen, and the
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

Source: [r2-03-agentic-frameworks.md](../deep-dives/r2-03-agentic-frameworks.md).

### Canon Additions With Documented Gap Mapping

Top recommended additions to
[Game Craft Reference Index](../../../core/references/game-craft-reference-index.md):

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

Source: [01-additional-canon.md](../textbook-canon/01-additional-canon.md).
