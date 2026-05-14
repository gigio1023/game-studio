# 04 Adapters, Install, And Contribution Hygiene

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
## Known Drift
## Next Upgrade Check
```

- [ ] Create `docs/starter-paths.md`.

Starter paths:

- taste-to-game
- existing direction
- blank idea
- existing prototype
- game jam project
- commercial indie
- narrative-heavy game
- public demo preparation
- release candidate rescue
- live game patch

Each path lists:

- entry mode
- first skill
- required artifacts
- first proof
- likely roles
- common backtrack

The `blank idea` path should be reframed as `taste-to-game`. It should not ask
novice creators to fill a game thesis before eliciting taste, reference moments,
desired emotion, hard noes, complexity tolerance, and first proof appetite.

## Framework Manifest

- [ ] Create `game-studio.manifest.json`.

Top-level shape:

```json
{
  "name": "game-studio",
  "version": "0.1.0",
  "core": [],
  "profiles": [],
  "adapters": [],
  "skills": [],
  "tools": [],
  "schemas": []
}
```

- [ ] Create `core/schemas/framework-manifest.schema.json`.

- [ ] Implement `tools/check-manifest.mjs`.

Checks:

- manifest JSON parses
- every path exists
- listed schemas parse
- listed skills have frontmatter
- listed adapter paths exist

- ownership is declared for every installable path
- generated files name their source template
- adapter files name their canonical core reference when applicable
- no manifest entry treats repository hygiene scripts as product gates

## Adapter Source Of Truth

- [ ] Add `docs/adapter-source-of-truth.md`.

Rules:

- Core stage semantics live in `core/`.
- Runtime-specific bootstrap wording lives in `adapters/`.
- Generated snippets must name the source file and generation command.
- Hand-edited adapter divergence requires a short decision note.
- Optional hooks may add warnings or context, but must not replace gate verdicts.

## Optional Loop Safety Pack

- [ ] Add `packs/automation-loop-safety/README.md`.

This pack is optional and should not be installed by default.

Required safeguards:

- max iterations
- max wall-clock duration
- rate-limit backoff
- circuit breaker after repeated equivalent outputs
- stop when no meaningful continuation remains
- stop when a user decision is required
- durable run log
- no autonomous direction rewrite without decision record
- no autonomous taste ownership
- stop when concept selection, Direction Lock, stage movement, or public promise
  requires user authority

- [ ] Implement `tools/check-skills.mjs`.

Checks:

- `SKILL.md` line count under local rubric limit
- frontmatter has `name` and `description`
- referenced files exist
- no skill requires running every role by default

## CONTRIBUTING Updates

- [ ] Move repository health commands into `CONTRIBUTING.md`.

Contributor commands:

```bash
node tools/check-repository.mjs
node tools/check-manifest.mjs
node tools/check-skills.mjs
```

Frame them as contributor checks, not proof that Game Studio works for a game.

- [ ] Add issue and support routing to `CONTRIBUTING.md`.

Required routing:

- Usage questions go to discussions or support, not bug issues.
- Bugs require reproducible steps, expected result, actual result, Game Studio
  version or commit, adapter used, and minimal target-repo state.
- Feature proposals require problem, target user, affected workflow, and why
  existing profiles, packs, or adapters do not cover it.
- Domain-knowledge contributions should name the affected role, rubric,
  template, or reference file.

- [ ] Add pull request shape to `CONTRIBUTING.md`.

Required PR rules:

- one behavioral change per PR
- test plan or explicit reason tests do not apply
- docs update when changing public commands, install paths, schemas, adapters,
  skills, templates, or gate behavior
- no broad stylistic refactor unless it enables a named fix
- evidence for AI-assisted generated changes when the diff is substantial

AI-assisted concept generation:

- disclose substantial AI-generated concept slates, direction rewrites, or
  creative-brief drafts
- identify the user decision record that accepted the direction
- do not submit bulk concept catalogs without proof budgets or rejection notes

- [ ] Add AI contribution disclosure.

Required policy:

- Contributors disclose substantial AI-assisted code or documentation generation.
- Maintainers may ask for a human explanation of intent, risk, and verification.
- Undisclosed or unverifiable generated bulk changes may be closed.

## Security Policy

- [ ] Create `SECURITY.md`.

Required sections:

```markdown
# Security Policy

## Reporting
## Scope
## Out Of Scope
## What To Include
## Maintainer Response
```

In scope:

- unsafe file mutation during install or upgrade
- secret exposure
- command injection
- malicious adapter behavior
- misleading install or upgrade behavior
- documentation that instructs unsafe credential handling

Out of scope:

- low-quality game advice
- contributor checks failing to judge game quality
- optional hooks that were not installed
- unsupported local modifications

Reports should include:

- reproduction steps
- affected version or commit
- adapter
- production framework
- redacted logs
- target-repo file shape when relevant

## Acceptance

- README does not imply repository scripts validate game quality.
- Contributor docs clearly explain hygiene checks.
- Adapter hooks are optional and runtime-specific.
- Install docs distinguish framework-owned and project-owned files.
- Security policy separates private vulnerability reporting from public support
  and game-quality critique.
