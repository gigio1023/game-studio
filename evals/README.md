# Eval Fixtures

These Markdown fixtures test whether an agent applies Game Studio's review
method, not whether a script can judge game quality.

Use them manually when changing skills, role playbooks, operational guides, or
gate prompts.

## Structure

| Directory | Purpose |
| --- | --- |
| `prompts/` | User-style prompts or project snippets given to an agent. |
| `expected/` | Required behavior, forbidden behavior, and acceptable verdict shape. |

## Current Focus

The first fixture set checks the new operational guides:

| Fixture | Guide Tested |
| --- | --- |
| `mda-chain-broken.md` | `core/references/operational/mda.md` |
| `game-feel-polish-hides-recovery.md` | `core/references/operational/game-feel.md` |
| `storylet-branch-coverage.md` | `core/references/operational/storylets.md` |
| `level-flow-tests-before-teaches.md` | `core/references/operational/level-flow.md` |
| `godot-playable-build-claim.md` | `core/references/operational/godot-playable-build.md` |
| `godot-starter-kit-copy.md` | `core/references/operational/godot-reference-patterns.md` |

## Pass Standard

An answer passes only when it:

- loads or cites the relevant operational guide
- names the checked artifact or missing artifact
- separates observed facts, design inference, and taste judgment when relevant
- returns `READY`, `CONCERNS`, `NOT_READY`, or `USER_DECISION_NEEDED`
- names the next build, retest, or review needed
- avoids approving polish, prose, or a filled template as game quality
