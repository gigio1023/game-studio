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

1. Read `references/work-packages.md`.
2. Read the active milestone contract.
3. Read the evidence contract.
4. Split work by file ownership.
5. Read `references/design-preservation.md` for player-facing work.
6. Verify and write a handoff before claiming completion.

## Gotchas

- Do not expand the release promise during implementation.
- Do not assign overlapping write scopes to parallel agents.
- Do not claim completion without evidence or an explicit blocker.

## Reference Files

| File | When to read | Content |
| --- | --- | --- |
| `references/work-packages.md` | Every implementation split | Work package rules |
| `references/design-preservation.md` | Player-facing implementation | Preserve design intent |
| `.game-studio/core/templates/execution/work-intake.md` | Starting work | Intake template |
| `.game-studio/core/templates/execution/implementation-handoff.md` | Ending work | Handoff template |
| `.game-studio/core/roles/coordination-rules.md` | Parallel or multi-role work | Coordination rules |
