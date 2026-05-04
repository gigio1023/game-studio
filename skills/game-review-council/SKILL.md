---
name: game-review-council
description: >
  Use when reviewing game design, implementation, milestone readiness, or release
  readiness from multiple role perspectives. Trigger on "council review", "role
  review", "director opinion", "producer opinion", "QA opinion", and "is this
  ready".
version: 0.1.0
tags:
  - game-development
  - review
  - council
---

# Game Review Council

## Quick Start

1. Read `references/council-review.md`.
2. Read `references/qualitative-review.md` when reviewing playtests, feel, narrative, or release readiness.
3. Determine review mode: `full`, `lean`, or `solo`.
4. Activate roles from profile, files, and gates.
5. Load relevant role playbooks from `.game-studio/core/roles/playbooks/`.
6. Review evidence before opinions.
7. Apply the strictest verdict.

## Gotchas

- Do not simulate consensus.
- Do not let style notes hide blocker findings.
- Do not approve without naming checked artifacts.

## Reference Files

| File | When to read | Content |
| --- | --- | --- |
| `references/council-review.md` | Every role review | Role activation and output |
| `references/qualitative-review.md` | Qualitative findings | Observation, severity, priority, confidence |
| `.game-studio/core/roles/README.md` | Role selection | Role file index |
| `.game-studio/core/roles/coordination-rules.md` | Multi-role work | Review and conflict rules |
| `.game-studio/core/templates/review/council-review.md` | Writing a review artifact | Review template |
