# Content Model Gap Analysis: Summary

[Back to index](../content-model-gap-analysis.md)

## Summary

Game Studio already has a strong public framing: direction first, staged proofs,
role authority, evidence, and project-local skills. The current repo structure
supports adoption well, but the content model still leans toward form completion,
gate verdicts, schema validation, and deterministic checks. That makes the
framework easy to install, but it under-specifies how Codex should make
game-production judgments.

The stated goal is a shift from script-centered validation toward Codex-led
judgment across game direction, design, production, implementation, QA, and
review. The repo should keep deterministic checks for repository hygiene and
artifact presence, but move the center of gravity into richer role playbooks,
judgment rubrics, decision records, critique templates, and examples that show
Codex making defensible production calls.


## Current Shape

The repository is organized into clear layers:

- `docs/` explains the operating model, philosophy, and layer boundaries.
- `core/gates/` defines stable gate prompts and verdict vocabulary.
- `core/roles/` defines role activation and authority.
- `core/rubrics/` defines readiness checks for documents, milestones, skills,
  and playtests.
- `core/templates/` provides copyable artifacts for direction, production,
  execution, evidence, and review.
- `skills/` gives short agent entry points with reference playbooks.
- `tools/` checks repository safety and adopted-project completeness.
- `profiles/` adapts the framework by engine, scope, and genre.
- `examples/` provides a fictional adopted-project shape.

This is a coherent foundation. The gap is not structure. The gap is depth of
judgment inside each area.


## Gap Findings

### 1. The philosophy promises judgment, but the operational areas mostly ask for verdicts

`docs/philosophy.md` says agents can draft, implement, inspect, and review while
games still need direction, constraints, taste, and evidence. That is the right
thesis. The active workflows then reduce most outputs to `READY`, `CONCERNS`, or
`NOT_READY`.

That verdict vocabulary is useful, but it should be the end of a judgment, not
the whole shape of the judgment. The current skills and templates do not ask
Codex to explain taste, reject tempting alternatives, choose between viable
directions, or defend production tradeoffs.

Recommended changes:

- Expand `skills/game-director/references/director-review.md` with a
  "judgment pass" before verdict selection.
- Expand `core/templates/review/council-review.md` with fields for rationale,
  tradeoff accepted, dissent, and reversal cost.
- Add `core/templates/production/decision-record.md` for agentic decisions.
- Add `docs/content-model.md` to define which files hold state, judgment,
  evidence, and reusable methodology.


## Gap Findings

### 2. Direction templates are blank forms, not creative decision aids

The direction templates in `core/templates/direction/` are useful starters, but
they mostly ask the adopter to fill blanks. They do not teach Codex what a good
answer looks like or how to challenge a weak answer.

Examples:

- `core/templates/direction/game-thesis.md` asks why the game should exist, why
  the presentation format matters, and why AI is necessary, but does not include
  evaluation criteria for strong versus weak answers.
- `core/templates/direction/creative-pillars.md` asks what each pillar approves
  and rejects, but does not force a comparison against common genre defaults.
- `core/templates/direction/player-experience-targets.md` asks for evidence, but
  does not distinguish player comprehension, emotion, friction, and action.

Recommended changes:

- Add "strong answer" and "weak answer" criteria to each direction template.
- Add `core/rubrics/direction-quality-rubric.md` for thesis, pillars,
  anti-pillars, presentation choice, and AI necessity.
- Add `core/templates/direction/design-tension-map.md` to capture conflicts such
  as clarity versus mystery, authored content versus systemic emergence, and
  scope versus novelty.
- Add a filled fictional example under `examples/sample-project/direction/` that
  shows a strong thesis, pillars, and player experience targets.


## Gap Findings

### 3. Roles define authority, but not enough role behavior

The YAML files under `core/roles/` define role names, tiers, activation triggers,
and authority areas. This is enough to select reviewers, but not enough to make
Codex behave like those reviewers.

For example, `core/roles/directors.yaml` says the Game Director owns thesis,
creative pillars, player experience, and identity changes. It does not say what
questions the Game Director must ask, what evidence counts, which risks are
blockers, or how to write a director-level critique.

Recommended changes:

- Add `core/roles/playbooks/` with one Markdown playbook per major role.
- Start with these files:
  - `core/roles/playbooks/game-director.md`
  - `core/roles/playbooks/producer.md`
  - `core/roles/playbooks/technical-director.md`
  - `core/roles/playbooks/qa-lead.md`
  - `core/roles/playbooks/systems-designer.md`
  - `core/roles/playbooks/ux-designer.md`
- Update `skills/game-review-council/references/council-review.md` to load the
  relevant role playbooks after role activation.
- Add role output expectations: "blocking concern", "advisory concern",
  "accepted risk", "recommended cut", and "next proof".


## Gap Findings

### 4. The council review model is strict but not deliberative

`skills/game-review-council/references/council-review.md` correctly says the
strictest verdict wins. That prevents false approval. It does not yet create a
useful design review.

The current `core/templates/review/council-review.md` has one notes column per
role. That is too small for serious disagreement. A real review needs role
stance, evidence quality, missing context, product risk, and a recommendation
that can be acted on.

Recommended changes:

- Expand `core/templates/review/council-review.md` with:
  - Role stance
  - Evidence checked
  - Player impact
  - Production impact
  - Confidence
  - Required change
  - Optional improvement
- Add `core/rubrics/council-review-quality-rubric.md`.
- Add an example at `examples/sample-project/studio/council-review.md`.
- Update `skills/game-review-council/SKILL.md` so "opinion" triggers require a
  file-backed review artifact when the request affects milestone readiness.
