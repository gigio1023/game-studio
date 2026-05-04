---
name: game-execution
description: >
  Use when turning an approved game milestone into implementation work for Codex
  or Claude Code. Handles work intake, file ownership, handoff artifacts,
  verification ledgers, and drift logs. Trigger on "implement this milestone",
  "execution plan", "handoff", and "parallel agents".
version: 0.1.0
tags:
  - game-development
  - execution
  - agents
---

# Game Execution

## Quick Start

1. Run the entry check below before implementation.
2. Read `references/work-packages.md`.
3. Read the active milestone contract.
4. Read the proof target and internal evidence contract.
5. Split work by file ownership.
6. Read `references/design-preservation.md` for player-facing work.
7. Verify and write a handoff before claiming completion.

## Entry Check

Stop before implementation when required routing or proof records are missing.

- Missing entry mode: return `NOT_READY`. Route through onboarding and
  classify `direction-carry-in`, `taste-to-game`, or `brownfield-unknown`.
- Missing Direction Lock or first prototype contract: return
  `USER_DECISION_NEEDED`. The human must accept Direction Lock or approve the
  first prototype contract.
- Missing proof target: return `NOT_READY`. Name the playable or inspectable
  proof that implementation must produce.
- Missing internal evidence contract: return `NOT_READY`. Define the internal
  artifact records required to support the proof.

If filling a missing item would require taste, selected concept, Direction Lock,
stage movement, or public-promise authority, return `USER_DECISION_NEEDED`
instead of choosing for the human.

## Gotchas

- Do not expand the release promise during implementation.
- Do not assign overlapping write scopes to parallel agents.
- Do not claim completion without playable proof, internal evidence records, or
  an explicit blocker.
- Do not use implementation progress to silently change direction.

## Reference Files

| File | When to read | Content |
| --- | --- | --- |
| `references/work-packages.md` | Every implementation split | Work package rules |
| `references/design-preservation.md` | Player-facing implementation | Preserve design intent |
| `.game-studio/core/templates/execution/work-intake.md` | Starting work | Intake template |
| `.game-studio/core/templates/execution/implementation-handoff.md` | Ending work | Handoff template |
| `.game-studio/core/roles/coordination-rules.md` | Parallel or multi-role work | Coordination rules |
