---
name: game-review-council
description: >
  Use when reviewing game design, implementation, milestone readiness, or release
  readiness from multiple role perspectives. Trigger on "council review",
  "role review", "director/producer/QA opinion", "is this ready", and Korean
  equivalents.
version: 0.1.0
tags:
  - game-development
  - review
  - council
---

# Game Review Council

## Quick Start

1. Determine review mode: `full`, `lean`, or `solo`.
2. Activate roles from project profile, touched files, and gates.
3. Review evidence before opinions.
4. Produce role verdicts.
5. Apply the strictest verdict as the final verdict.

## Default Lean Council

- Game Director
- Producer
- Technical Director
- QA Lead

Add genre, engine, narrative, art, audio, UX, localization, or release roles when
the work touches those areas.

## Gotchas

- Do not simulate consensus. Disagreement is useful.
- Do not allow style notes to hide blocker findings.
- Do not approve without naming checked artifacts.

## Reference Files

- `core/roles/role-roster.yaml`
- `core/roles/coordination-rules.md`
- `core/templates/review/council-review.md`

## Output Shape

```text
Review mode:
Roles activated:
Evidence checked:
Role verdicts:
Final verdict:
Required fixes:
```
