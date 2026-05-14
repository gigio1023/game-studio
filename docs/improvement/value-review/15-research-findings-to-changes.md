# Research Findings To Changes

This page records what changes about the value-review plan after three
rounds of external research. It updates or qualifies several earlier plan
documents based on primary-source verification and contrarian critique
identified in [Synthesis](../../../research/landscape/synthesis.md).

Read this alongside the existing plan; do not replace earlier files until
implementation work begins.

## What The Research Confirms And Sharpens

### Reference-To-Design Translation Now Has An Adoptable Method

Cross-field research yielded a 6-step operational move set that the
framework can adopt as the bridge between
[beginner-taste-interview.md](../../../core/templates/intake/beginner-taste-interview.md)
and [concept-card.md](../../../core/templates/direction/concept-card.md):

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

This sharpens [Craft Reference Curriculum](13-craft-reference-curriculum.md):
the cross-field translation move set is itself an operational guide and
should be linked there.

Source: [r2-04-cross-field-translation.md](../../../research/landscape/deep-dives/r2-04-cross-field-translation.md).

### Concept Death Protocol Gains Verified Triggers

[Production Failure Protocols](11-production-failure-protocols.md) defined the
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

Sources: [r2-01-kill-rituals.md](../../../research/landscape/deep-dives/r2-01-kill-rituals.md),
[01-claim-verification.md](../../../research/landscape/verification/01-claim-verification.md).

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
  [milestone schema](../../../core/schemas/milestone.schema.json) with
  a `velocityBaseline` field and decompose `experienceHypothesis` into
  `targetPlayer / specificFriction / designMechanism / falsificationCondition`.

The Game Outcomes Project finding (design risk management correlation
0.57 with shipped success) supports prioritizing risk register depth
over documentation completeness — which is the framework's existing
instinct.

Source: [r2-02-gate-templates.md](../../../research/landscape/deep-dives/r2-02-gate-templates.md).

### AI-Assisted Design Workflows Has Concrete Park-Style Implementations

[AI-Assisted Design Workflows](12-ai-assisted-design-workflows.md) Move 5 (cross-session
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

Sources: [r2-05-reflection-and-memory.md](../../../research/landscape/deep-dives/r2-05-reflection-and-memory.md),
[r2-03-agentic-frameworks.md](../../../research/landscape/deep-dives/r2-03-agentic-frameworks.md).

### Source Map Gains Seven Targeted Additions

Update [Game Craft Reference Index](../../../core/references/game-craft-reference-index.md):

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

Source: [01-additional-canon.md](../../../research/landscape/textbook-canon/01-additional-canon.md).

## What The Research Forces The Framework To Hedge

### Drop The "Riot Six-Component Thesis" Framing

The verification round found this is false attribution: Riot's published
framework uses three components (Opportunity / Thesis / Audience). The
six-component structure is an analyst inference, not a Riot artifact.

Action: where any plan document references a "Riot six-component
thesis," rephrase to "extended thesis structure" or cite the documented
three-component version. Do not invent attribution.

### Add MDA Critique Alongside MDA Citation

[Craft Reference Curriculum](13-craft-reference-curriculum.md) lists
MDA as the priority source for taste-to-design translation. The
Walk / Lantz / Duarte critique documents that MDA's aesthetics list is
opinion-shaped, not exhaustive. Horror, Awe, Disgust, and Confusion are
absent. The 8-aesthetic list should not be used as a prescriptive
targeting tool.

Action: when the MDA operational guide is written, include a
"Limitations" section citing DDE (Design / Dynamics / Experience) and
the Lantz Materials / Dynamics / Affect variant. Use these alongside
MDA, not in place of it.

### Vertical Slice Must Gate On Invisible Deliverables

The polished-prototype trap is documented (Ellenor, Ismail). Any
vertical-slice gate must require pipeline, tooling, and
approval-workflow evidence, not only the playable artifact.

Action: update GS-VERTICAL-SLICE review questions in
[core/gates/production.md](../../../core/gates/production.md) to ask
"What production tooling, pipelines, and approval workflows were
exercised in producing this slice? What still needs to be built to
scale to the full game?"

### Pillars Treated As Optional, Not Default

The Round 3 critique found pillars are often post-hoc rationalization
and are solved-by-other-means at solo scale.

Action: update [Director Layer](../../director-layer.md) to mark
"Creative Pillars" as recommended for team work and optional for solo
work. Add a "When pillars do not help" section explaining the post-hoc
trap and the formalist alternative.

### Scrum Ceremony Distinguished From Agile Principles

Round 3 critique found scrum process overhead is documented as harmful for
art-heavy and narrative production.

Action: when the framework references agile patterns, distinguish
principles (continuous iteration, working software / playable proof,
playtester collaboration) from process overhead (sprints, velocity, daily
standups). Apply principles broadly; apply process overhead selectively.

### Frame LLM Moves As Scaffolding, Not Oracle

Round 3 critical perspectives document AI co-creative claims are
empirically contested. LLMs are statistical center of mass — biased
against novelty.

Action: update [AI-Assisted Design Workflows](12-ai-assisted-design-workflows.md)
prelude to acknowledge LLM limits explicitly. The five generative moves
are candidate generation and reflection scaffolding, not design
judgment.

### Scope "Fail Fast" To Concept Validation, Not Craft Iteration

The "fail fast" framing is documented as toxic for solo long-form craft
work.

Action: update [Production Failure Protocols](11-production-failure-protocols.md)
Ritual 1 (Concept Death Protocol) prelude to state: "This protocol
applies during concept validation. Sustained craft iteration on a
proven concept is not the failure mode this ritual addresses. Killing a
working game in iteration is its own anti-pattern."

### Add The Formalist Counter-Position

Game Studio currently presents taste-to-game / playcentric design as
canonical. The formalist counter-position (Blow, Anthropy, systems-first
design) is documented as the path some of the most original games took.

Action: add a "Formalist Variant" section to
[beginner-taste-to-game.md](../../beginner-taste-to-game.md) noting
that some creators prefer systems-first to taste-first and the framework
supports both.

## What The Research Says About Strategic Positioning

### Position As Game Design Review Workflow With Documented Authority Boundaries

The "AI game production system" framing is now occupied by competitors
(Claude Code Game Studios, April 2026) using the same SKILL.md pattern.
The defensive position is sharper craft, not more agents.

The VILA Lab paper (April 2026) documents that agentic platforms
optimize for task completion, not practitioner skill development. Game
Studio's offensive opening: design explicitly for practitioner growth.

Action: update [Product Thesis](02-product-thesis.md) to include
"game design review workflow" language alongside "production system." Document
explicitly what the AI coaches the human toward — which skills,
heuristics, and failure modes.

### Skills As Distributable Open Standard

Anthropic published Agent Skills as an open standard (October 2025).
No public game-design skill registry exists. First-mover opportunity.

Action: decide whether to publish the framework's skills as a
distributable bundle. If yes, expand
[Adapters And Distribution](07-adapters-and-distribution.md).

### Coaching Layer Has Lower Infra Cost Than NPC Tools

Convai shutdown and Inworld's cost pivot in 2025 confirm
infrastructure-layer AI NPC tools are failing on economics. Game
Studio's coaching/review layer is positioned correctly. Documenting
this defensively in [Product Thesis](02-product-thesis.md) makes the
position explicit.

## Implementation Sequencing

Slot into [Roadmap](08-roadmap.md) waves:

- Wave 1-2 (current): drop unverified attributions (Riot
  six-component, Supercell three-gate label).
- Wave 3 (entry-mode proofs): add reference-constraint-sheet template;
  update beginner-taste-interview with the 6-step move set; add
  formalist variant.
- Wave 4 (role review depth): add reflect-before-gate to playbook
  output shape; add `reasoning` field to gate-verdict schema.
- Wave 5 (proof artifacts): update milestone schema with
  `velocityBaseline` and decomposed `experienceHypothesis`; adopt CSA
  5/5/5 template.
- New wave: implement Park-style memory moves (review-role personality
  injection, reflection-before-verdict, cross-session ledger probing).
  This is the largest gap (c) ceiling work.
- New wave: craft reference index updates with critique annotations.
- New wave: strategic positioning documentation (game design review workflow,
  distributable skills).

## Files Touched By This Plan

When this plan is executed, expect changes in:

- `core/templates/intake/reference-constraint-sheet.md` (new)
- `core/templates/intake/beginner-taste-interview.md` (updated)
- `core/templates/production/concept-death-record.md` (new)
- `core/templates/production/milestone-review-555.md` (new)
- `core/schemas/milestone.schema.json` (`velocityBaseline`, decomposed
  `experienceHypothesis`)
- `core/schemas/gate-verdict.schema.json` (`reasoning` field,
  decision-context object)
- `core/references/game-craft-reference-index.md` (seven additions, MDA
  critique annotation)
- `core/gates/production.md` (vertical slice invisible-deliverables,
  velocity baseline)
- `docs/director-layer.md` (pillars optional for solo)
- `docs/beginner-taste-to-game.md` (6-step move set, formalist variant)
- `docs/improvement/value-review/02-product-thesis.md` (game-design-review
  positioning)
- `docs/improvement/value-review/11-production-failure-protocols.md`
  (verified triggers, scope to concept validation)
- `docs/improvement/value-review/12-ai-assisted-design-workflows.md` (Park
  implementation, scaffolding hedge)
- `docs/improvement/value-review/13-craft-reference-curriculum.md`
  (MDA critique)

## Open Questions For The Maintainer

1. Adopt CSA 5/5/5 verbatim, or rename to fit the framework's existing
   milestone-review terminology?
2. Publish skills as a distributable bundle now, or wait for the
   framework to stabilize further?
3. Add formalist route as a separate entry mode, or as a variant
   inside taste-to-game?
4. Park-style memory implementation is non-trivial — is the maintainer
   ready to take it on, or should it be split into a separate proof of
   concept?
