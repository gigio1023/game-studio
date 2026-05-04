---
name: game-evidence-gate
description: >
  Use when verifying whether a game milestone, prototype, vertical slice, demo,
  or release claim is backed by concrete evidence. Trigger on "evidence",
  "validation gate", "prove this works", "playable artifact", and "release
  gate".
version: 0.1.0
tags:
  - game-development
  - verification
  - evidence
---

# Game Evidence Gate

## Quick Start

1. Read `references/evidence-review.md`.
2. Read `references/playable-evidence.md` when the claim is player-facing.
3. Read the evidence contract.
4. Check each required artifact.
5. Run listed verification commands when available.
6. Perform listed manual review checks.
7. Return `READY`, `CONCERNS`, or `NOT_READY`.

## Gotchas

- Screenshots do not prove gameplay by themselves.
- Passing tests do not prove game feel by themselves.
- Playtest notes without build identifiers are weak evidence.

## Reference Files

| File | When to read | Content |
| --- | --- | --- |
| `references/evidence-review.md` | Every evidence review | Evidence decision flow |
| `references/playable-evidence.md` | Player-facing milestone review | Playable evidence categories |
| `.game-studio/core/templates/evidence/evidence-contract.md` | Writing evidence contracts | Contract template |
| `.game-studio/core/templates/evidence/playtest-report.md` | Playtest review | Playtest report template |
| `.game-studio/core/templates/evidence/playable-quality-capture.md` | Feel and presentation review | Capture template |
| `.game-studio/core/rubrics/playtest-rubric.md` | Reviewing playtests | Playtest rubric |
| `docs/framework/evidence-gates.md` | Stage evidence | Project-facing evidence guide |
