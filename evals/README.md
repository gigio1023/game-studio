# Eval Fixtures

These Markdown fixtures test whether an agent applies Game Studio's method,
not whether a script can judge game quality. Run them manually when changing a
skill or its references.

## Structure

| Directory | Purpose |
| --- | --- |
| `prompts/` | User-style prompts or project snippets given to an agent. |
| `expected/` | Required behavior, forbidden behavior, and acceptable verdict shape. |
| `triggers.md` | Positive and near-miss prompts for skill discovery. |

## Behavior Fixtures

| Fixture | Skill and reference tested |
| --- | --- |
| `mda-chain-broken.md` | game-review — `skills/game-review/references/mda.md` |
| `game-feel-polish-hides-recovery.md` | game-review — `skills/game-review/references/game-feel.md` |
| `storylet-branch-coverage.md` | game-review — `skills/game-review/references/storylets.md` |
| `level-flow-tests-before-teaches.md` | game-review — `skills/game-review/references/level-flow.md` |
| `godot-playable-build-claim.md` | game-production — `skills/game-production/references/godot-playable-build.md` |
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

## Pass Standard

An answer passes only when it:

- applies (or asks for) the relevant craft reference rather than answering
  from vibes
- names the checked artifact or the missing artifact
- separates observed facts, design inference, and taste judgment
- returns `READY`, `CONCERNS`, `NOT_READY`, or `USER_DECISION_NEEDED`
- names the next build, retest, or review needed
- refuses to approve polish, prose, or a filled template as game quality
