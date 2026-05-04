---
name: game-execution
description: >
  Use when turning an approved game milestone into implementation work for
  Codex or Claude Code. Handles work intake, file ownership, handoff artifacts,
  verification ledgers, and drift logs. Trigger on "implement this milestone",
  "execution plan", "handoff", "parallel agents", and Korean equivalents.
version: 0.1.0
tags:
  - game-development
  - execution
  - agents
---

# Game Execution Framework

## Quick Start

1. Read the active milestone contract.
2. Read the evidence contract.
3. Split work by file ownership and role.
4. Make implementation assumptions explicit.
5. Verify and write a handoff before claiming completion.

## Parallel Work

Parallel agents need disjoint write scopes and the same milestone contract. Each
agent should return changed files, evidence, verification, and risks.

## Gotchas

- Do not let implementation expand the release promise.
- Do not let a visual pass hide a missing gameplay proof.
- Do not edit unrelated legacy systems unless the work intake allows it.

## Reference Files

- `core/templates/execution/work-intake.md`
- `core/templates/execution/implementation-handoff.md`
- `core/roles/coordination-rules.md`

## Output Shape

```text
Work packages:
File ownership:
Verification:
Evidence:
Drift risks:
Handoff path:
```
