# Research Findings To Changes: What The Research Forces The Framework To Hedge

[Back to index](../15-research-findings-to-changes.md)

## What The Research Forces The Framework To Hedge

### Drop The "Riot Six-Component Thesis" Framing

The verification round found this is false attribution: Riot's published
framework uses three components (Opportunity / Thesis / Audience). The
six-component structure is an analyst inference, not a Riot artifact.

Action: where any plan document references a "Riot six-component
thesis," rephrase to "extended thesis structure" or cite the documented
three-component version. Do not invent attribution.

### Add MDA Critique Alongside MDA Citation

[Craft Reference Curriculum](../13-craft-reference-curriculum.md) lists
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
[core/gates/production.md](../../../../core/gates/production.md) to ask
"What production tooling, pipelines, and approval workflows were
exercised in producing this slice? What still needs to be built to
scale to the full game?"

### Pillars Treated As Optional, Not Default

The Round 3 critique found pillars are often post-hoc rationalization
and are solved-by-other-means at solo scale.

Action: update [Director Layer](../../../director-layer.md) to mark
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

Action: update [AI-Assisted Design Workflows](../12-ai-assisted-design-workflows.md)
prelude to acknowledge LLM limits explicitly. The five generative moves
are candidate generation and reflection scaffolding, not design
judgment.

### Scope "Fail Fast" To Concept Validation, Not Craft Iteration

The "fail fast" framing is documented as toxic for solo long-form craft
work.

Action: update [Production Failure Protocols](../11-production-failure-protocols.md)
Ritual 1 (Concept Death Protocol) prelude to state: "This protocol
applies during concept validation. Sustained craft iteration on a
proven concept is not the failure mode this ritual addresses. Killing a
working game in iteration is its own anti-pattern."

### Add The Formalist Counter-Position

Game Studio currently presents taste-to-game / playcentric design as
canonical. The formalist counter-position (Blow, Anthropy, systems-first
design) is documented as the path some of the most original games took.

Action: add a "Formalist Variant" section to
[beginner-taste-to-game.md](../../../beginner-taste-to-game.md) noting
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

Action: update [Product Thesis](../02-product-thesis.md) to include
"game design review workflow" language alongside "production system." Document
explicitly what the AI coaches the human toward — which skills,
heuristics, and failure modes.

### Skills As Distributable Open Standard

Anthropic published Agent Skills as an open standard (October 2025).
No public game-design skill registry exists. First-mover opportunity.

Action: decide whether to publish the framework's skills as a
distributable bundle. If yes, expand
[Adapters And Distribution](../07-adapters-and-distribution.md).

### Coaching Layer Has Lower Infra Cost Than NPC Tools

Convai shutdown and Inworld's cost pivot in 2025 confirm
infrastructure-layer AI NPC tools are failing on economics. Game
Studio's coaching/review layer is positioned correctly. Documenting
this defensively in [Product Thesis](../02-product-thesis.md) makes the
position explicit.


## Implementation Sequencing

Slot into [Roadmap](../08-roadmap.md) waves:

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
