# Adapters And Distribution

Game Studio's adoption value depends on how reliably it installs into a target
project. The framework should remain project-local by default.

## Current Adapter Model

Current adapters provide:

- Codex bootstrap instructions
- Claude Code bootstrap instructions
- agent instruction snippets
- project-local skill copy guidance
- `.game-studio/` state guidance

This is the right default. It avoids global dependencies and keeps each target
game repo responsible for its own direction, proof, and decisions.

## Distribution Improvements

| Improvement | Value |
| --- | --- |
| Add an install manifest | Makes copied files and target paths explicit. |
| Add adapter dry-run checklist | Lets contributors test installation without a real game. |
| Add Codex-specific notes | Clarifies `AGENTS.md`, project skills, and handoff expectations. |
| Add Claude-specific notes | Clarifies `.claude/skills`, optional subagents, and memory boundaries. |
| Add target project examples | Shows what installed state should look like. |

## Suggested Manifest

Add:

```text
adapters/manifest.yaml
```

The manifest should list:

- source path
- target path
- adapter
- required or optional
- merge or copy behavior
- post-install check

## Claude Code Subagent Option

Claude Code supports subagents and skills. Game Studio can provide optional
subagent guidance without making it required.

Candidate subagents:

- game-director-reviewer
- qa-proof-reviewer
- release-claim-auditor
- accessibility-reviewer

Each subagent should have a narrow role and should load the relevant skill or
playbook. It must not own human taste, Direction Lock, stage movement, or public
promises.

## Codex Option

Codex adoption should stay centered on:

- project-local instructions
- project-local skills when supported
- clear handoffs
- repository health checks as contributor tools
- role review for game quality

Do not make `node tools/check-repository.mjs` a public proof gate. It remains a
repository health check.

## Files To Change

- Add `adapters/manifest.yaml`.
- Add `adapters/README.md`.
- Add `adapters/codex/install-check.md`.
- Add `adapters/claude/install-check.md`.
- Update `tools/check-project.mjs` only if the required installed paths are
  stable.

## Proof Of Improvement

Run an install dry-run into a scratch target repo. The pass condition is:

- expected directories exist
- snippets are merged without overwriting user instructions
- project state is initialized
- first route can be selected
- `tools/check-project.mjs` reports installed structure
- no public docs imply that the structure check proves game quality
