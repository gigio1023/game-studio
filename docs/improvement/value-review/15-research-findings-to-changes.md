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

This sharpens [Craft Curriculum And Beginner Pedagogy](13-craft-curriculum-and-beginner-pedagogy.md):
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

[Craft Curriculum And Beginner Pedagogy](13-craft-curriculum-and-beginner-pedagogy.md) lists
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

Action: update [Director Layer](../../operating-model.md#director-layer-detail) to mark
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
[entry-model.md#taste-to-game-workflow](../../entry-model.md#taste-to-game-workflow) noting
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
- `docs/operating-model.md#director-layer-detail` (pillars optional for solo)
- `docs/entry-model.md#taste-to-game-workflow` (6-step move set, formalist variant)
- `docs/improvement/value-review/02-product-thesis.md` (game-design-review
  positioning)
- `docs/improvement/value-review/11-production-failure-protocols.md`
  (verified triggers, scope to concept validation)
- `docs/improvement/value-review/12-ai-assisted-design-workflows.md` (Park
  implementation, scaffolding hedge)
- `docs/improvement/value-review/13-craft-curriculum-and-beginner-pedagogy.md`
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

## Playable Validation Positioning

This section updates the product thesis after Rounds 4 and 5 of research. Read
it with [Product Thesis](02-product-thesis.md).

### Decision

Game Studio should be positioned as:

```text
An AI-assisted game production framework for playable validation.
```

The public category is production framework. The game-development promise is
playable validation. The agent packaging is a delivery mechanism, not the
identity of the product.

Source:
[Positioning And Market Gap](../../../research/landscape/round5-positioning/01-positioning-and-market-gap.md).

### Why This Is Higher Value

The market already has many artifact accelerators:

- coding agents and background agents
- engine assistants
- game idea generators
- asset pipelines
- NPC and runtime AI platforms
- courses and communities
- market or trend tools

They optimize for speed, output volume, execution context, or learning content.
They do not reliably own craft judgment under too much generated material.

Game Studio's defensible value is the chain:

```text
human taste -> playable question -> smallest proof -> role-led game review ->
milestone decision -> next build, retest, or stop condition
```

### Public Language

Use:

- AI-assisted game production framework
- playable validation
- AI-assisted game development
- human creative authority
- playable proof
- claim-to-proof
- proof budget
- role-led game review
- generated material is not proof
- make less, prove more

Avoid:

- AI game designer
- autonomous studio
- complete game generator
- AI co-author
- agent workforce for games
- market score for fun
- curriculum platform
- skill marketplace

### Product Boundary Update

The system may:

- structure the creator's taste into questions and constraints
- propose options and tradeoffs
- inspect artifacts and role-review them
- request player, implementation, accessibility, release, or production proof
- block stage movement when proof or human authority is missing

The system must not:

- choose taste, selected concept, Direction Lock, kill/pivot, stage movement,
  public promises, or release claims for the human
- treat generated concepts, assets, barks, scenes, NPC output, or code as proof
  without a claim-to-proof mapping
- sell a polished plan as settled design before playable proof exists

### Files To Change

- `README.md`: add the short public positioning phrase.
- `docs/product-boundary.md`: keep production framework as the product category.
- `docs/philosophy.md`: add the anti-volume principle: make less, prove more.
- `docs/source-adoption-policy.md`: explain that external tools are subordinate
  to proof targets.
- `docs/improvement/value-review/02-product-thesis.md`: align language with
  this page.

### Proof Of Improvement

A new reader should be able to answer:

- This is not a game generator.
- This is not only a PM framework.
- This is not only a course.
- This is not only a skill bundle.
- This helps humans make better game decisions with AI by requiring playable
  proof and preserving human authority.

## Player Operations And Public Proof

This page translates live ops, player feedback, release operations, community
management, accessibility, and localization research into Game Studio planning.

Source:
[Player Operations](../../../research/landscape/round4-liveops-community/01-player-operations.md).

### Decision

Post-launch learning should not become a default full production stage yet.
Instead, add a player-operations layer that activates when the project creates
public exposure or release promises.

Public exposure includes:

- Steam Playtest or equivalent cohort test
- public demo
- Early Access
- beta branch with public participants
- default release
- post-launch update
- public roadmap or store promise

### Operating Principle

Every public docs is a promise area.

Steam language metadata, accessibility tags, patch notes, Discord statements,
roadmaps, store pages, demo descriptions, and Early Access Q&A text must match
the build, support capacity, and update cadence.

### New Templates

Add:

- `core/templates/release/player-operations-plan.md`
- `core/templates/release/playtest-cohort-brief.md`
- `core/templates/release/early-access-readiness.md`
- `core/templates/release/patch-note-contract.md`
- `core/templates/release/feedback-digest.md`
- `core/templates/release/community-promise-register.md`
- `core/templates/release/telemetry-question-plan.md`
- `core/templates/release/accessibility-release-reality-checklist.md`
- `core/templates/release/localization-release-reality-checklist.md`
- `core/templates/release/launch-week-triage-rule.md`
- `core/templates/release/what-players-taught-us.md`

### New Gates

Add:

- `GS-PLAYTEST-COHORT`
- `GS-EARLY-ACCESS-READINESS`
- `GS-PLAYER-OPERATIONS`

Update:

- `GS-RELEASE-PROMISE`
- `GS-PRESENTATION-VALUE`
- `GS-VERTICAL-SLICE`

### Release Distinctions

Agents must not blur these:

- Playtest: learning from a cohort without selling an unfinished promise.
- Demo: a sampling and marketing artifact.
- Early Access: paid public development with honest current-state disclosure.
- Beta branch: update-risk isolation for existing players.
- Default release: the supported player build.
- Post-launch update: a new promise plus a learning loop.

### Small-Team Translation

A small project should start with:

- one feedback channel of record
- one public source of truth
- one patch-note owner
- one support owner
- one moderation path
- minimal telemetry tied to named questions
- release-lane separation where possible
- accessibility and localization claims checked against the build

### Proof Of Improvement

Before public exposure, the agent should be able to answer:

- What build is public?
- What can players affect?
- What is uncertain?
- What support load is expected?
- What feedback is being requested?
- What will not be promised?
- What accessibility and localization claims are being made?
- What is the next player-facing update cadence?

## Anti-Slop Quality And Provenance

This page turns contrarian quality research into operating rules. It supports
[AI-Assisted Design Workflows](12-ai-assisted-design-workflows.md) and
[Proof Artifacts And Evals](06-proof-artifacts-and-evals.md).

Source:
[Contrarian Quality](../../../research/landscape/round4-critique/01-contrarian-quality.md).

### Quality Bar

A high-quality AI-assisted game artifact is not the one that looks most
complete. It is the one that preserves a human-owned point of view and reduces
uncertainty through playable, inspectable, or player-facing proof.

Fast rejection test:

```text
If this artifact could be reproduced from genre tags without losing its
identity, the human-authored choice is missing.
```

### Operating Rules

#### Generated Material Is Not Proof

Generated concepts, sprites, barks, scenes, NPC output, market scores, or code
are input material. They become proof only when tied to:

- player action
- system behavior
- visible consequence
- build capture
- QA result
- playtest observation
- accessibility check
- localization check
- release promise check

#### False Precision Is Banned

Do not use numeric scores for taste, fun, novelty, or quality unless the number
is tied to:

- an observed metric
- a precommitted threshold
- a playtest count
- a production cost measurement

#### Reviews Must Split Claim Types

Each role-led game review should separate:

- observed facts
- design inferences
- taste judgments

This keeps AI from presenting interpretation as fact.

#### Review Economy Matters

More output is not more value. Concept slates, role reviews, and generated
assets should be pruned before presentation. The system should optimize for
fewer, sharper artifacts.

#### Human Taste Has Veto Power

If the creator says a direction is wrong for their taste, the system should
record why and revise. It should not argue from rubric consensus.

### Template Changes

Add or update fields:

- human-authored choice
- could this be generic?
- generated material used
- what was subtracted
- AI provenance
- human selection made
- what this does not prove
- deletion or collapse rule
- fragile novelty risk
- empty novelty risk
- process harm check

### Schema Changes

`core/schemas/gate-verdict.schema.json` should add a `reviewBasis` object with:

- `observedFacts`
- `designInferences`
- `tasteJudgments`
- `publicClaimsChecked`
- `generatedMaterialChecked`

`core/schemas/evidence-contract.schema.json` should add provenance and
disclosure fields when that schema is introduced or updated.

### Proof Of Improvement

In eval prompts, an agent should fail when it:

- treats a generated pitch as proof
- assigns a numeric fun score without observed basis
- overwrites human taste because a rubric says another option is cleaner
- produces many concepts without a pruning rationale
- advances a public promise without provenance or release evidence

## Implementation Map From Rounds 4-5

This page sequences the Round 4-5 research into maintainable repository work.
It is an index over work areas, not a single giant backlog.

Detailed translation:
[Template And Schema Translation](../../../research/landscape/round5-implementation/01-template-and-schema-translation.md).

Claim safety:
[Round 4 Claim Check](../../../research/landscape/round5-verification/01-round4-claim-check.md).

### Wave 8: Public Positioning

Purpose: make the repo category precise.

Files:

- `README.md`
- `docs/product-boundary.md`
- `docs/philosophy.md`
- `docs/source-adoption-policy.md`

Work:

- add milestone-gated playable validation game design review workflow language
- demote production OS, curriculum, and skill registry to supporting areas
- state generated material is not proof
- state make less, prove more

Proof:

- a first-time reader does not infer automatic game generation
- the public promise names human authority and playable build

### Wave 9: Beginner Craft Path

Purpose: turn beginner taste into practiced judgment.

Files:

- `core/templates/intake/reference-constraint-sheet.md`
- `core/templates/intake/auteur-systems-first-intake.md`
- `core/templates/direction/experience-chain.md`
- `core/templates/direction/primary-verb-feel-sheet.md`
- `core/templates/evidence/beginner-playtest-report.md`
- `docs/entry-model.md#taste-to-game-workflow`

Work:

- add reference-to-constraint decomposition
- add auteur/systems-first route
- add beginner playtest interpretation
- add worked examples for reference translation

Proof:

- vague taste can route to a proof question without becoming a generic genre
  pitch

### Wave 10: Anti-Slop And Provenance

Purpose: prevent too much generated material from becoming review burden.

Files:

- `core/templates/direction/concept-card.md`
- `core/templates/direction/concept-portfolio.md`
- `core/templates/evidence/evidence-contract.md`
- `core/templates/evidence/artifact-ledger-entry.md`
- `core/schemas/gate-verdict.schema.json`

Work:

- add generated-material-is-not-proof rule
- add observed/inferred/taste split
- add AI provenance fields
- add subtraction evidence
- add false precision ban

Proof:

- generated concepts or assets do not pass gates without claim-to-proof mapping

### Wave 11: Production Failure Protocols

Purpose: make cut, pivot, reboot, scope crisis, and parallel risk operational.

Files:

- `core/templates/production/concept-death-record.md`
- `core/templates/production/scope-crisis-record.md`
- `core/templates/production/parallel-risk-plan.md`
- `core/templates/production/temporary-cabal-contract.md`
- `core/templates/production/milestone-contract.md`

Work:

- add kill/pivot/reboot record
- add precommitted gate metrics
- add tepid response rule
- add pride bar
- add sustainability blocker
- add vertical slice production test

Proof:

- a failed concept produces salvage, decision clarity, and next route rather
  than silent abandonment

### Wave 12: Player Operations

Purpose: prevent public proof from creating unmanaged promise debt.

Files:

- `core/templates/release/player-operations-plan.md`
- `core/templates/release/playtest-cohort-brief.md`
- `core/templates/release/early-access-readiness.md`
- `core/templates/release/feedback-digest.md`
- `core/templates/release/community-promise-register.md`
- `core/templates/release/telemetry-question-plan.md`
- `core/gates/release.md`

Work:

- separate Playtest, demo, Early Access, beta, release, and post-launch update
- add release-promise consistency checks
- add accessibility and localization reality checks
- add what-players-taught-us note

Proof:

- public exposure cannot pass without feedback, support, moderation, and
  promise ownership

### Wave 13: Skill Contracts

Purpose: make skills behave like review protocols.

Files:

- `skills/game-onboarding/SKILL.md`
- `skills/game-director/SKILL.md`
- `skills/game-studio/SKILL.md`
- `skills/game-review-council/SKILL.md`
- `skills/game-evidence-gate/SKILL.md`
- `skills/game-execution/SKILL.md`

Work:

- require active stage, authority source, inspected artifacts, proof target,
  observed facts, design inferences, taste judgments, missing proof, human-only
  decision, next smallest proof, stop condition, and terminal outcome
- route auteur/systems-first
- stop for human authority when required

Proof:

- eval prompts show agents preserving taste, refusing unearned stage movement,
  and asking for smaller proof instead of more output

### Wave 14: Example Coverage

Purpose: prove the method in repo-native artifacts.

Examples:

- `examples/sample-auteur-systems-first/`
- `examples/sample-beginner-reference-translation/`
- `examples/sample-player-operations/`
- `examples/sample-direction-carry-in/`
- `examples/sample-brownfield-unknown/`
- `examples/sample-playable-proof/`

Proof:

- each example ends at a gate, next proof, cut, or human decision
- no example claims a complete game from prose alone
