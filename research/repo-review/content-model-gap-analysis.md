# Content Model Gap Analysis

## Summary

Game Studio already has a strong public framing: direction first, staged proofs,
role authority, evidence, and project-local skills. The current repo structure
supports adoption well, but the content model still leans toward form completion,
gate verdicts, schema validation, and deterministic checks. That makes the
framework easy to install, but it under-specifies how Codex should make
substantive game-production judgments.

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
judgment inside each surface.

## Gap Findings

### 1. The philosophy promises judgment, but the operational surfaces mostly ask for verdicts

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

### 5. Evidence is framed as proof, but QA needs more qualitative judgment

`docs/evidence-gates.md` and `skills/game-evidence-gate/references/evidence-review.md`
are strong on observable proof. They are weaker on QA judgment for feel,
readability, comprehension, pacing, and player confusion.

The playtest rubric in `core/rubrics/playtest-rubric.md` asks useful questions,
but it is short and not integrated into the evidence skill. QA should not only
confirm that an artifact exists. QA should help Codex decide whether the build
produces the intended player experience.

Recommended changes:

- Expand `core/rubrics/playtest-rubric.md` with severity, reproduction,
  player-impact, design-impact, and fix-priority fields.
- Add `core/templates/evidence/playtest-report.md`.
- Add `core/templates/evidence/qa-finding.md`.
- Update `skills/game-evidence-gate/references/evidence-review.md` to separate:
  - Mechanical evidence
  - Playable evidence
  - Comprehension evidence
  - Feel evidence
  - Release evidence
- Update `docs/evidence-gates.md` so manual checks are treated as structured
  observations, not weaker leftovers after command output.

### 6. Production planning lacks prioritization, cuts, and capacity judgment

`core/templates/production/milestone-contract.md` asks for goals, non-goals,
scope, evidence, verification, roles, gates, risks, and exit decision. It does
not ask for capacity, schedule pressure, must-cut list, dependency risk, or
fallback milestone shape.

That omission pushes Codex toward validating whether a milestone document is
filled out, rather than judging whether the milestone is the right production
bet.

Recommended changes:

- Add fields to `core/templates/production/milestone-contract.md`:
  - Timebox
  - Capacity assumption
  - Must-keep scope
  - Cut candidates
  - Fallback proof
  - Dependency risk
  - Decision owner
- Add `core/templates/production/risk-register.md`.
- Add `core/templates/production/scope-cut-log.md`.
- Update `skills/game-studio/references/milestone-planning.md` with a producer
  pass that asks whether this is the smallest useful proof.
- Add `core/rubrics/production-judgment-rubric.md`.

### 7. Execution guidance protects scope, but needs more engineering judgment

`skills/game-execution/references/work-packages.md` is good for bounded work and
file ownership. It does not yet ask Codex to compare implementation approaches,
name architecture risks, or decide whether a refactor is justified.

The current model can split work safely, but it needs a stronger implementation
brief so Codex can lead on production-grade engineering decisions instead of
only following scoped handoffs.

Recommended changes:

- Expand `core/templates/execution/work-intake.md` with:
  - Proposed approach
  - Alternatives rejected
  - Architecture risk
  - Test strategy
  - Rollback plan
  - Player-facing risk
- Expand `core/templates/execution/implementation-handoff.md` with:
  - Design intent preserved
  - Behavior changed
  - Tradeoffs made
  - Follow-up cuts
  - Review notes for QA and director roles
- Add `core/rubrics/implementation-judgment-rubric.md`.
- Update `skills/game-execution/SKILL.md` so implementation work includes a
  short design-preservation check before completion.

### 8. Schemas are useful for invariants, but too narrow for rich review artifacts

The schemas in `core/schemas/` validate the basic shape of evidence contracts,
gate verdicts, and milestones. `core/schemas/gate-verdict.schema.json` in
particular is very narrow and disallows additional fields.

That is fine for a minimal machine-readable verdict, but it conflicts with the
need for richer review artifacts. If the same schema becomes the canonical
review shape, it will suppress judgment.

Recommended changes:

- Keep the current schemas as minimal interchange formats.
- Add richer Markdown templates for human-readable judgment.
- Add `core/schemas/review-summary.schema.json` only for a compact summary of a
  review, not for the full review body.
- Add guidance in `docs/evidence-gates.md` that scripts check invariants, while
  role reviews decide readiness.

### 9. Skills are correctly short, but the reference playbooks need real methods

Each skill entry point is concise and easy to trigger. The reference files are
also concise, but currently too thin to make Codex better at game direction or
production review.

Recommended changes by file:

- `skills/game-director/references/director-review.md`: add taste-risk review,
  player-promise review, anti-pillar check, and "make the call" guidance.
- `skills/game-studio/references/milestone-planning.md`: add scope-cut,
  timebox, fallback proof, and producer recommendation sections.
- `skills/game-execution/references/work-packages.md`: add implementation
  strategy, test strategy, and design-preservation sections.
- `skills/game-evidence-gate/references/evidence-review.md`: add QA observation
  handling and qualitative evidence levels.
- `skills/game-review-council/references/council-review.md`: add deliberation
  shape, dissent handling, and action-oriented recommendations.

### 10. Examples do not yet demonstrate Codex-led judgment

The sample project demonstrates the artifact shape but not the behavior change.
It shows a thesis, a protocol proof, and an evidence contract. It does not show
Codex rejecting a weak direction, cutting scope, making an implementation
tradeoff, or issuing a QA finding.

Recommended changes:

- Add `examples/sample-project/studio/decision-record.md`.
- Add `examples/sample-project/studio/council-review.md`.
- Add `examples/sample-project/studio/playtest-report.md`.
- Add `examples/sample-project/studio/scope-cut-log.md`.
- Add an example where a proposed feature is rejected because it violates a
  pillar or exceeds the milestone proof.

## Recommended Content Model

Use four artifact categories:

### 1. State

State files describe the current project truth.

Examples:

- `.game-studio/director-state.md`
- `.game-studio/milestones/current.md`
- `docs/direction/game-thesis.md`
- `docs/direction/creative-pillars.md`

### 2. Judgment

Judgment files record why Codex or a role made a call.

Recommended additions:

- `core/templates/production/decision-record.md`
- `core/templates/review/director-review.md`
- `core/templates/review/council-review.md`
- `core/templates/production/scope-cut-log.md`

### 3. Evidence

Evidence files prove what the build, playtest, or artifact actually showed.

Recommended additions:

- `core/templates/evidence/playtest-report.md`
- `core/templates/evidence/qa-finding.md`
- `core/templates/evidence/build-evidence.md`

### 4. Method

Method files teach agents how to think in a role.

Recommended additions:

- `core/roles/playbooks/*.md`
- `core/rubrics/*-judgment-rubric.md`
- Expanded `skills/*/references/*.md`

This split keeps deterministic checks useful without letting them own the
creative or production decision.

## Prioritized Integration Plan

### P0: Define judgment as a first-class artifact

Files to add or edit:

- Add `docs/content-model.md`.
- Add `core/templates/production/decision-record.md`.
- Edit `adapters/codex/AGENTS.md.snippet`.
- Edit `adapters/claude/CLAUDE.md.snippet`.
- Edit `skills/game-director/references/director-review.md`.

Acceptance criteria:

- Agentic assumptions are no longer only a note in a handoff.
- Direction-changing decisions have a standard file shape.
- Adapter snippets tell agents where to record judgment.

### P1: Make director and council reviews substantive

Files to add or edit:

- Add `core/templates/review/director-review.md`.
- Expand `core/templates/review/council-review.md`.
- Add `core/rubrics/council-review-quality-rubric.md`.
- Add `core/rubrics/direction-quality-rubric.md`.
- Edit `skills/game-review-council/references/council-review.md`.

Acceptance criteria:

- Reviews include rationale, player impact, production impact, evidence quality,
  and required next action.
- The final verdict is backed by role-specific reasoning.
- Dissent and accepted risk are visible.

### P2: Turn roles into behavioral playbooks

Files to add or edit:

- Add `core/roles/playbooks/game-director.md`.
- Add `core/roles/playbooks/producer.md`.
- Add `core/roles/playbooks/technical-director.md`.
- Add `core/roles/playbooks/qa-lead.md`.
- Edit `core/roles/README.md`.
- Edit `skills/game-review-council/references/council-review.md`.

Acceptance criteria:

- Role activation loads role behavior, not only role names.
- Default lean council roles each have distinct review questions and outputs.
- Role output can be audited without simulating consensus.

### P3: Strengthen production and execution judgment

Files to add or edit:

- Expand `core/templates/production/milestone-contract.md`.
- Add `core/templates/production/risk-register.md`.
- Add `core/templates/production/scope-cut-log.md`.
- Expand `core/templates/execution/work-intake.md`.
- Expand `core/templates/execution/implementation-handoff.md`.
- Add `core/rubrics/production-judgment-rubric.md`.
- Add `core/rubrics/implementation-judgment-rubric.md`.
- Edit `skills/game-studio/references/milestone-planning.md`.
- Edit `skills/game-execution/references/work-packages.md`.

Acceptance criteria:

- Milestones include cutlines, fallback proof, and capacity assumptions.
- Implementation handoffs explain tradeoffs, not only changed files.
- Codex can recommend a smaller proof when the requested milestone is too broad.

### P4: Upgrade QA and evidence beyond artifact presence

Files to add or edit:

- Expand `core/rubrics/playtest-rubric.md`.
- Add `core/templates/evidence/playtest-report.md`.
- Add `core/templates/evidence/qa-finding.md`.
- Edit `skills/game-evidence-gate/references/evidence-review.md`.
- Edit `docs/evidence-gates.md`.

Acceptance criteria:

- QA findings distinguish bugs, comprehension failures, feel issues, and
  promise mismatches.
- Evidence gates include structured manual observation.
- Playtest reports produce clear production recommendations.

### P5: Reposition scripts as invariant checks

Files to add or edit:

- Edit `tools/check-project.mjs`.
- Edit `tools/check-repository.mjs`.
- Edit `docs/documentation-style.md`.
- Add examples under `examples/sample-project/studio/`.

Acceptance criteria:

- Scripts verify public-safety, required files, JSON validity, and placeholders.
- Scripts do not imply creative readiness.
- Examples show that readiness comes from role review plus evidence, not command
  output alone.

## Sequencing Notes

Start with P0 and P1 before adding more scripts or schemas. The repo already has
enough deterministic validation for a public framework. The next improvement
should be content quality: teach Codex how to make, explain, and review game
production decisions.

After P0 and P1, update the examples. Examples will make the new model easier to
copy than another abstract documentation page.

Keep the public README short. Link to `docs/content-model.md` and one
"first adopted project" tutorial rather than expanding the README into the full
methodology.
