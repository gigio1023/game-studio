# Player Operations And Public Proof

This page translates live ops, player feedback, release operations, community
management, accessibility, and localization research into Game Studio planning.

Source:
[Player Operations](../../../research/landscape/round4-liveops-community/01-player-operations.md).

## Decision

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

## Operating Principle

Every public docs is a promise area.

Steam language metadata, accessibility tags, patch notes, Discord statements,
roadmaps, store pages, demo descriptions, and Early Access Q&A text must match
the build, support capacity, and update cadence.

## New Templates

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

## New Gates

Add:

- `GS-PLAYTEST-COHORT`
- `GS-EARLY-ACCESS-READINESS`
- `GS-PLAYER-OPERATIONS`

Update:

- `GS-RELEASE-PROMISE`
- `GS-PRESENTATION-VALUE`
- `GS-VERTICAL-SLICE`

## Release Distinctions

Agents must not blur these:

- Playtest: learning from a cohort without selling an unfinished promise.
- Demo: a sampling and marketing artifact.
- Early Access: paid public development with honest current-state disclosure.
- Beta branch: update-risk isolation for existing players.
- Default release: the supported player build.
- Post-launch update: a new promise plus a learning loop.

## Small-Team Translation

A small project should start with:

- one feedback channel of record
- one public source of truth
- one patch-note owner
- one support owner
- one moderation path
- minimal telemetry tied to named questions
- release-lane separation where possible
- accessibility and localization claims checked against the build

## Proof Of Improvement

Before public exposure, the agent should be able to answer:

- What build is public?
- What can players affect?
- What is uncertain?
- What support load is expected?
- What feedback is being requested?
- What will not be promised?
- What accessibility and localization claims are being made?
- What is the next player-facing update cadence?
