# Eval Fixtures

These Markdown fixtures test whether an agent applies Game Studio's method,
not whether a script can judge game quality. Run them manually when changing a
skill or its references.

## Structure

| Directory | Purpose |
| --- | --- |
| `prompts/` | User-style prompts or project snippets given to an agent. |
| `expected/` | Required behavior, forbidden behavior, and acceptable verdict shape. |
| `fixtures/` | Small runnable artifacts used for current-run success and failure evidence. |
| `triggers.md` | Positive and near-miss prompts for skill discovery. |

## Behavior Fixtures

| Fixture | Skill and reference tested |
| --- | --- |
| `direction-carry-in-preservation.md` | game-direction — carry-in preservation and audit-only authority |
| `taste-to-game-normal-path.md` | game-direction — normal discovery path and human concept ownership |
| `production-plan-only-boundary.md` | game-production — plan mode and mutation boundary |
| `production-implementation-success.md` | game-production — bounded local implementation and current-run proof |
| `release-scope-map.md` | game-production — whole-game scope map and plan-only authority |
| `long-run-support-checkpoint.md` | game-production — support circuit breaker, blocker, and sparse checkpoints |
| `mda-chain-broken.md` | game-review — `skills/game-review/references/mda.md` |
| `game-feel-polish-hides-recovery.md` | game-review — `skills/game-review/references/game-feel.md` |
| `storylet-branch-coverage.md` | game-review — `skills/game-review/references/storylets.md` |
| `level-flow-tests-before-teaches.md` | game-review — `skills/game-review/references/level-flow.md` |
| `godot-playable-build-claim.md` | game-review — readiness routing and `skills/game-review/references/evidence-and-release.md` |
| `review-ready-lantern-loop.md` | game-review — current-run playable evidence and a bounded `READY` verdict |
| `review-runtime-check-failure.md` | game-review — failed proof and review-only authority |
| `accessibility-feature-claim.md` | game-review — feature evidence versus a broad accessibility claim |
| `godot-starter-kit-copy.md` | game-production — `skills/game-production/references/godot-reference-patterns.md` |

## Run Protocol

Compare three conditions on the same fixture, holding the model, harness, tool
surface, and effort setting fixed:

1. Target model with no skill installed — the frontier baseline.
2. Target model with the currently published skill.
3. Target model with the candidate change.

Accept a skill change only when condition 3 beats condition 2 without losing
strengths visible in condition 1. Treat a tie as rejection for behavioral
edits. Test Claude Code and Codex separately when both are targets; a pass on
one is not proof for the other.

Record each run with:

```text
Fixture and condition: no skill | current | candidate
Model, harness, and effort:
Available tools and missing prerequisites:
Output artifact or verdict:
Evidence provenance and checks:
File or external-state diff:
Pass or fail, with rubric item:
Latency, tokens, and cost when available:
Untested cells:
```

## Pass Standard

Common invariants:

- choose the skill and request mode from the user's decision, not only the
  engine or topic
- honor review-only, plan-only, local-edit, git, external, and human-owned
  authority boundaries
- preserve evidence provenance without upgrading provided prose into inspected
  artifacts or current-run tool results
- separate observed facts, design inference, and taste judgment when the claim
  depends on them
- name the next proof, decision, or genuine blocker

When a task judges quality or completion, also distinguish checked, missing,
and failed proof; state failed, skipped, and unverified checks; and refuse to
approve polish, prose, file presence, or a filled template as game quality.

Skill-specific requirements:

- `game-direction`: preserve carry-in direction, source load-bearing facts,
  name concept status and first playable proof, and leave human-owned calls to
  the creator.
- `game-production`: return the selected mode, milestone or proof, player-facing
  change or plan, evidence results, cuts or assumptions, blocker, and next proof.
- `game-review`: return exactly one evidence verdict — `READY`, `CONCERNS`,
  `NOT_READY`, or `USER_DECISION_NEEDED` — plus provenance, residual risk, and
  the required next proof.
