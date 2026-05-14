# 04 Adapters, Install, And Contribution Hygiene: Objective

[Back to index](../04-adapters-install-contribution.md)

## Objective

Make installation and upgrade usable without letting runtime hooks or repository health scripts become the product story.


## Files

- Create: `adapters/claude/hooks/README.md`
- Create: `adapters/claude/hooks/session-start.sh`
- Create: `adapters/claude/hooks/detect-gaps.sh`
- Create: `adapters/claude/hooks/pre-compact.sh`
- Create: `adapters/claude/hooks/post-compact.sh`
- Create: `adapters/claude/hooks/validate-skill-change.sh`
- Create: `adapters/codex/checks/README.md`
- Create: `game-studio.manifest.json`
- Create: `core/schemas/framework-manifest.schema.json`
- Create: `tools/check-manifest.mjs`
- Create: `tools/check-skills.mjs`
- Create: `docs/install-and-upgrade.md`
- Create: `docs/brownfield-adoption.md`
- Create: `docs/starter-paths.md`
- Modify: `adapters/claude/bootstrap.md`
- Modify: `adapters/codex/bootstrap.md`
- Modify: `CONTRIBUTING.md`
- Create: `SECURITY.md`
- Modify: `README.md`


## Rule About Repository Checks

Repository checks such as `node tools/check-repository.mjs` are contributor hygiene. They are not the main product verification story.

Where to mention them:

- `CONTRIBUTING.md`
- `docs/install-and-upgrade.md` under maintainer notes
- release checklist or local CI notes

Where not to foreground them:

- README hero
- Quick Start for game teams
- evidence gate explanation
- public product positioning

The user-facing verification story is:

```text
playable proof -> role-led review -> gate verdict -> next proof
```

Internal evidence ledgers still record the concrete proof materials: builds,
captures, playtest notes, QA results, decision records, and public-claim checks.


## Optional Adapter Hooks

- [ ] Create `adapters/claude/hooks/README.md`.

Required language:

```markdown
# Optional Claude Hooks

These hooks are adapter examples. They are not required core behavior.

They check cheap invariants and session continuity:

- session orientation
- missing project state
- compaction recovery reminders
- skill-change reminders

They do not decide game quality, milestone readiness, or release truth.
```

- [ ] Add hook scripts.

Constraints:

- POSIX-compatible shell.
- Exit 0 when not applicable.
- Never read secrets.
- Never mutate project files automatically.
- Print concise warnings only.

- [ ] Add `adapters/codex/checks/README.md`.

Codex checks should be described as optional local scripts until Codex-native hook support is intentionally documented for this repo.


## Install And Upgrade

- [ ] Create `docs/install-and-upgrade.md`.

Sections:

- fresh install
- brownfield install
- framework-owned files
- adapter-owned files
- profile-owned files
- project-owned files
- safe copy
- manual merge
- upgrade audit

Use the `career-ops` data-contract pattern as a reference for separating system-owned from user-owned files.

- [ ] Add a planned-install transaction model.

Required install phases:

1. request normalization
2. profile and adapter resolution
3. target inventory
4. operation plan
5. dry-run report
6. explicit user approval for overwrites
7. copy or generate files
8. write install state
9. emit next action

Operation records must classify each path as one of:

- requested
- resolved dependency
- copied
- generated
- transformed
- skipped
- user-owned
- conflict

The dry-run report must include:

- files to create
- files to modify
- files requiring manual merge
- files intentionally left untouched
- project-owned files that Game Studio must never overwrite
- next recommended skill or gate after install

- [ ] Add installed-state ledger.

Create `core/templates/production/install-state.md` with:

```markdown
# Game Studio Install State


## Install Date

## Framework Version

## Selected Profiles

## Selected Adapter

## Created Files

## Generated Files

## User-Owned Files

## Manual Merges
