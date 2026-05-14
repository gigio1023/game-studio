# Round 5 Implementation Translation: New Templates

[Back to index](../01-template-and-schema-translation.md)

## New Templates

### Production And Proof

Add `core/templates/production/milestone-review-555.md`.

Fields:

- `Milestone`
- `Five wins`
- `Five losses`
- `Five changes`
- `Importance rank 1-5 for each item`
- `Owner`
- `Deadline`
- `Next proof affected`

Add `core/templates/production/concept-death-record.md`.

Fields:

- `Concept`
- `Decision trigger`
- `Failed proof targets`
- `Pre-committed targets`
- `Kill trigger taxonomy`: failed proof, other-game feeling, explainability
  failure, tepid response, proof-budget impossibility, pride-bar failure.
- `Evidence checked`
- `Owner verdict`
- `Human closeout note`
- `Salvageable work`
- `Carry-forward candidates`
- `Artifacts moved to archive`
- `Next route`

Add `core/templates/production/scope-crisis-record.md`.

Fields:

- `Remaining proof targets`
- `Largest uncertainty per target`
- `Cheapest proof that retires the largest uncertainty`
- `Cuts made`
- `Public promise impact`
- `Owner accepting the cut`
- `Revisit condition`

Add `core/templates/production/parallel-risk-plan.md`.

Fields:

- `Independent risks`
- `Why they can run in parallel`
- `Write or artifact boundaries`
- `Shared reviewers`
- `Separate proof budgets`
- `Conflict rule`
- `Dissolve condition`

Add `core/templates/production/temporary-cabal-contract.md`.

Fields:

- `Purpose`
- `Coordinator`
- `Decision owner`
- `Contributors`
- `Artifact boundaries`
- `Review cadence`
- `Dissolve condition`

Update `core/templates/production/milestone-contract.md`.

New fields:

- `Prototype Question`: should this game exist, and what player, audience, or
  thesis assumption would prove or disprove it?
- `Pre-committed Gate Metrics`
- `Tepid Response Rule`
- `Pride Bar`
- `Sustainability Blocker`
- `Generated Material Policy`
- `Candidate Next Proofs`
- `Vertical Slice Production Test`
- `Subtraction Evidence`


## New Templates

### Release And Player Operations

Add these small release templates:

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

`player-operations-plan.md` should require:

- `Release lane`
- `Player promise`
- `Current-state disclosure`
- `Known risks`
- `Feedback channels`
- `Telemetry questions`
- `Community areas`
- `Moderation owner`
- `Support owner`
- `Accessibility claims`
- `Localization claims`
- `Patch-note cadence`
- `Next review date`

`feedback-digest.md` should require:

- `Top issues by severity`
- `Top issues by frequency`
- `Representative links or quotes`
- `Telemetry correlation`
- `Decision`
- `Non-decision rationale`
- `Owner`
- `Player-facing response`


## New Templates

### Evidence And Provenance

Update `core/templates/evidence/evidence-contract.md`.

New fields:

- `Generated material is not proof`: explicit checkbox.
- `Proof class`: implementation, design, player, accessibility, release.
- `Claim-to-proof mapping`
- `Telemetry question`
- `Known data bias`
- `Qualitative confirmation needed`
- `Consent or disclosure note`

Update `core/templates/evidence/artifact-ledger-entry.md`.

New fields:

- `AI provenance`: none, generated, generated then human-edited, placeholder,
  cannot ship without replacement or legal review.
- `Human selection made`
- `What this does not prove`
- `Deletion or collapse rule`
