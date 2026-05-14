# Research Findings To Changes: What The Research Confirms And Sharpens

[Back to index](../15-research-findings-to-changes.md)

## What The Research Confirms And Sharpens

### Reference-To-Design Translation Now Has An Adoptable Method

Cross-field research yielded a 6-step operational move set that the
framework can adopt as the bridge between
[beginner-taste-interview.md](../../../../core/templates/intake/beginner-taste-interview.md)
and [concept-card.md](../../../../core/templates/direction/concept-card.md):

1. Capture the moment in plain language without interpretation.
2. Why-extract: ask what specifically felt good, push past feature names.
3. Fragment: break into 1-3 named structural components.
4. Label forces: name competing player needs each component resolves.
5. Name constraints: convert force resolution into declarative design
   sentences.
6. Rank contradictions: when references conflict, present both and record
   the creator's priority ruling.

Adopt as a new template at
`core/templates/intake/reference-constraint-sheet.md` with columns:
moment / why / components / forces / constraints / contradiction notes.

This sharpens [Craft Reference Curriculum](../13-craft-reference-curriculum.md):
the cross-field translation move set is itself an operational guide and
should be linked there.

Source: [r2-04-cross-field-translation.md](../../../../research/landscape/deep-dives/r2-04-cross-field-translation.md).

### Concept Death Protocol Gains Verified Triggers

[Production Failure Protocols](../11-production-failure-protocols.md) defined the
concept-death protocol abstractly. Round 2 identified four verified triggers:

- Pre-committed metric targets set before the proof phase. Binary
  pass/fail. The framework currently has no pre-committed quantitative
  threshold field.
- "Other-game feeling" leading indicator (Jonathan Dower).
- Explainability failure after two outside-person attempts (TOEM
  postmortem).
- Carry-forward artifact candidates (Derek Yu).

Update the concept-death-record template (when created) to require:
proof failures, pre-committed targets, kill trigger taxonomy entry, kill
process overhead record, carry-forward candidates.

Drop any framing that attributes the "three-gate kill model" to Supercell
as a named framework — the verification round flagged this as analyst
construction.

Sources: [r2-01-kill-rituals.md](../../../../research/landscape/deep-dives/r2-01-kill-rituals.md),
[01-claim-verification.md](../../../../research/landscape/verification/01-claim-verification.md).

### Gate Templates Tighten With CSA 5/5/5 And Rami's Distinction

Two verbatim-adoptable patterns:

- **CSA 5/5/5 milestone review** (5 wins / 5 losses / 5 changes, each
  ranked 1-5 by importance, 2-4 hour cycle, named owners and deadlines
  per problem) — adopt as
  `core/templates/production/milestone-review-555.md`.
- **Rami Ismail prototype/vertical-slice distinction** (prototype
  answers "should you build this," vertical slice answers "can you
  build it," second-iteration velocity is the gate evidence) — update
  GS-VERTICAL-SLICE gate to require a velocity baseline. Update
  [milestone schema](../../../../core/schemas/milestone.schema.json) with
  a `velocityBaseline` field and decompose `experienceHypothesis` into
  `targetPlayer / specificFriction / designMechanism / falsificationCondition`.

The Game Outcomes Project finding (design risk management correlation
0.57 with shipped success) supports prioritizing risk register depth
over documentation completeness — which is the framework's existing
instinct.

Source: [r2-02-gate-templates.md](../../../../research/landscape/deep-dives/r2-02-gate-templates.md).

### AI-Assisted Design Workflows Has Concrete Park-Style Implementations

[AI-Assisted Design Workflows](../12-ai-assisted-design-workflows.md) Move 5 (cross-session
concept memory probing) gains a specific implementation. The full set of
three Park-style moves the framework should adopt:

1. **Review-role personality from creative brief**: inject
   `.game-studio/creative-brief.md` verbatim into the system-prompt
   prefix before every role playbook invocation. Lifts verdict
   consistency directionally; do not quote the 85% number — it is
   averaged across conditions in the original paper.
2. **Reflection-before-verdict**: two-pass gate. Pass 1 reads ledgers
   and produces a "3 things to keep in mind" brief. Pass 2 issues the
   verdict with that brief in context.
3. **Cross-session ledger probing for contradictions**: read-only at
   session start. Emits a blocking warning when current request
   conflicts with parked or rejected entries. Never writes.

Add to skill closure shapes a mandatory `reasoning` field before
`verdict` (DSPy ChainOfThought pattern), exposed to human review.

Sources: [r2-05-reflection-and-memory.md](../../../../research/landscape/deep-dives/r2-05-reflection-and-memory.md),
[r2-03-agentic-frameworks.md](../../../../research/landscape/deep-dives/r2-03-agentic-frameworks.md).

### Source Map Gains Seven Targeted Additions

Update [Game Craft Reference Index](../../../../core/references/game-craft-reference-index.md):

- Koster, *A Theory Of Fun* — gap (a) cognitive learning curve.
- Caillois, *Man Play And Games* — gap (a) play-type taxonomy.
- Juul, *Half-Real* — gap (a) rules/fiction duality.
- Schreier, *Blood Sweat And Pixels* — gap (b) production crisis
  phenomenology.
- Short / Adams (eds.), *Procedural Storytelling In Game Design* — gaps
  (a) and (d) narrative architecture.
- Tharp, *The Creative Habit* — gap (d) sustained craft practice.
- Christopher Alexander, *A Pattern Language* — gap (a) reference
  translation foundational text.

Source: [01-additional-canon.md](../../../../research/landscape/textbook-canon/01-additional-canon.md).
