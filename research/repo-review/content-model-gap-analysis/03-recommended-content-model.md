# Content Model Gap Analysis: Recommended Content Model

[Back to index](../content-model-gap-analysis.md)

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

### P1: Make director and council reviews game-quality reviews

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
- Edit `docs/validation-gates.md`.

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
