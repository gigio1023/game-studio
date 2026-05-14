# 03 Game Craft, Production, QA, And Release: Review Roles

[Back to index](../03-game-craft-production-release.md)

## Review Roles

## Expected Media

## Exit Decision
```

- [ ] Add `core/templates/production/first-prototype-contract.md`.

Required headings:

```markdown
# First Prototype Contract


## Selected Concept

## Prototype Question

## Player Moment To Prove

## What To Ignore

## What To Build

## What To Capture

## What Would Change The Direction

## Stop Condition
```

- [ ] Update `core/schemas/milestone.schema.json`.

Require enough fields to prevent task-list milestones:

```json
["id", "name", "stage", "goal", "researchQuestion", "qualityCriteria", "requiredEvidence", "gates", "exitDecision"]
```


## Release Material

- [ ] Create `core/references/release-material-checks.md`.

Include:

- Steam build and store review.
- demo eligibility and timing.
- public page truth.
- screenshots and trailer claims.
- credits.
- localization.
- accessibility feature claims.
- support path.
- archive readiness.

- [ ] Create release templates:

```text
core/templates/release/demo-readiness.md
core/templates/release/credits-record.md
core/templates/release/support-plan.md
core/templates/release/post-release-retro.md
```


## Acceptance

- Creative Discovery produces proof-ready concept artifacts, not only polished
  prose.
- Presentation Value Gate requires capture for camera, input, UI, visual hierarchy, audio, and performance risk.
- Core Loop Prototype and Vertical Slice require playtest evidence with participant fit and retest status.
- Release Candidate requires public claim-to-evidence mapping.
- Credits and support are release scope, not afterthoughts.
