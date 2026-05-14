# Content Model Gap Analysis: Gap Findings

[Back to index](../content-model-gap-analysis.md)

## Gap Findings

### 5. Evidence is framed as proof, but QA needs more qualitative judgment

`docs/validation-gates.md` and `skills/game-evidence-gate/references/evidence-review.md`
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
- Update `docs/validation-gates.md` so manual checks are treated as structured
  observations, not weaker leftovers after command output.


## Gap Findings

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


## Gap Findings

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


## Gap Findings

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
- Add guidance in `docs/validation-gates.md` that scripts check invariants, while
  role reviews decide readiness.


## Gap Findings

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


## Gap Findings

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
