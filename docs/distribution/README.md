# Distribution Preparation

Game Studio will ship as a plugin-first workflow, not as a standalone CLI
installer.

This directory records the distribution design, marketplace preparation work,
and release checks needed before publishing Game Studio for Claude Code and
Codex users.

## Current Decision

| Decision | Status |
| --- | --- |
| Primary install path | Plugin marketplaces |
| Fallback install path | Source checkout for maintainers only |
| Update model | Plugin shell plus remotely checked workflow pack |
| Target repo state | `.game-studio/` stores project state, not framework logic |
| Public skill entry points | Five task skills instead of every internal role skill |

## Contents

- Current decision
- Non-goals
- Plugin distribution architecture
- Repository layout
- Workflow pack
- Claude Code packaging
- Codex packaging
- Update policy
- Adapter migration
- Marketplace submission
- Validation
- Rollout backlog
- Research notes

## Non-Goals

- Do not add a `curl | bash` installer as the primary path.
- Do not make every game repository copy `core/` into `.game-studio/core/`.
- Do not depend on users enabling marketplace auto-update.
- Do not let framework updates overwrite game direction, milestones, or human
  decision records.

## Plugin Distribution Architecture

Game Studio distribution should separate install UX from methodology updates and
project state.

### Components

| Component | Owner | Purpose |
| --- | --- | --- |
| Plugin shell | Game Studio repo | Installs skills and bundled fallback references into Claude Code or Codex. |
| Workflow pack | Game Studio repo | Carries current methodology, templates, rubrics, stage rules, and migrations. |
| Target repo state | Game repo | Stores `.game-studio/` project state, decision records, milestone records, and generated docs. |

### Data Flow

```text
Plugin install
  -> public Game Studio skills become available
  -> skill checks bundled pack and remote pack manifest
  -> target repo gets or updates .game-studio/ state by user-approved diff
  -> prototype, review, gate, and decision records continue locally
```

### Why This Split

Plugin auto-update is not a reliable product contract across both supported
agent runtimes.

- Claude Code can auto-update marketplace plugins at startup, but third-party
  marketplaces are disabled by default for auto-update.
- Codex supports plugin marketplaces, but current public docs describe explicit
  marketplace upgrade commands rather than a stable automatic update contract.
- Target game repositories contain creative authority and production history.
  Those records must not change just because the framework changed upstream.

The plugin shell should stay small. Most Game Studio iteration should happen in
the workflow pack so a stale plugin can still notice a newer methodology pack
when network access is available.

### Runtime Boundary

The plugin shell may:

- expose skills
- include bundled fallback pack files
- check a remote pack manifest
- propose target repo file changes
- write project state only after user approval

The plugin shell must not:

- silently rewrite game direction
- advance stages without a decision record
- make release promises
- install global dependencies
- require a standalone `game-studio` command

### Public Skill Package

The public plugin should expose five skills.

| Skill | Job |
| --- | --- |
| `triage` | Classify entry mode and initialize project state. |
| `plan` | Turn direction into the next bounded playable prototype or milestone. |
| `review` | Run role-led review and gate verdicts. |
| `update` | Check workflow pack freshness and propose migrations. |
| `doctor` | Diagnose stale state, missing files, and broken setup. |

Existing internal skills can remain in the framework repo while the public
plugin exposes a smaller installed package.

## Repository Layout

Game Studio should package the public plugin in an isolated directory and keep
marketplace catalogs at repository-level discovery paths.

### Proposed Tree

```text
.
├── .claude-plugin/
│   └── marketplace.json
├── .agents/
│   └── plugins/
│       └── marketplace.json
├── plugins/
│   └── game-studio/
│       ├── .claude-plugin/
│       │   └── plugin.json
│       ├── .codex-plugin/
│       │   └── plugin.json
│       ├── skills/
│       │   ├── triage/
│       │   │   └── SKILL.md
│       │   ├── plan/
│       │   │   └── SKILL.md
│       │   ├── review/
│       │   │   └── SKILL.md
│       │   ├── update/
│       │   │   └── SKILL.md
│       │   └── doctor/
│       │       └── SKILL.md
│       ├── packs/
│       │   └── game-studio/
│       │       ├── manifest.json
│       │       ├── core/
│       │       ├── profiles/
│       │       ├── rubrics/
│       │       └── templates/
│       ├── assets/
│       │   ├── icon.png
│       │   └── logo.png
│       ├── README.md
│       ├── CHANGELOG.md
│       └── LICENSE
├── docs/
│   └── distribution/
└── skills/
    └── existing internal authoring skills
```

### Why Not Use The Repository Root As The Plugin

A root plugin would expose too much of the framework repository as installable
content. A package under `plugins/game-studio/` keeps the public plugin small
and prevents internal planning, research, examples, and old adapter files from
becoming runtime dependencies.

### Marketplace Files

| File | Runtime | Purpose |
| --- | --- | --- |
| `.claude-plugin/marketplace.json` | Claude Code | Lists `game-studio` and points to `./plugins/game-studio`. |
| `.agents/plugins/marketplace.json` | Codex | Lists `game-studio` and points to `./plugins/game-studio`. |

Both catalogs should point at the same plugin package. The package itself
contains runtime-specific manifests for Claude Code and Codex.

### Existing File Migration

| Current path | Future role |
| --- | --- |
| `skills/` | Internal authoring source. Public skills are curated into `plugins/game-studio/skills/`. |
| `core/` | Framework source. Runtime pack copy lives under `plugins/game-studio/packs/game-studio/core/`. |
| `profiles/` | Framework source. Runtime pack copy lives under `plugins/game-studio/packs/game-studio/profiles/`. |
| `adapters/` | Legacy source install guidance. Replace with plugin-first docs and compatibility notes. |

The first implementation can duplicate selected files into the plugin package.
A later implementation can add a packaging script that builds the plugin
package from framework source files.

## Workflow Pack

The workflow pack is the versioned Game Studio methodology that skills consult
before changing target repo state.

### Pack Contents

```text
packs/game-studio/
├── manifest.json
├── core/
├── profiles/
├── rubrics/
├── templates/
└── migrations/
```

The plugin package should include a bundled copy at
`plugins/game-studio/packs/game-studio/`. The bundled copy is the offline
fallback. The remote copy in the repository is the update source.

### Manifest

```json
{
  "schemaVersion": "1",
  "pack": "game-studio",
  "packVersion": "0.1.0",
  "minPluginShell": "0.1.0",
  "channel": "latest",
  "releasedAt": "2026-05-06",
  "files": [],
  "migrations": []
}
```

The manifest should stay small and machine-readable. Changelog detail belongs
in `CHANGELOG.md`.

### Target Repo Manifest

Each game repository managed by Game Studio should record the pack version it
last accepted.

```json
{
  "schemaVersion": "1",
  "installedBy": "game-studio",
  "pluginShell": "0.1.0",
  "pack": "game-studio",
  "packVersion": "0.1.0",
  "entryMode": "taste-to-game",
  "managedFiles": [
    ".game-studio/project-state.md",
    ".game-studio/manifest.json"
  ]
}
```

This file belongs at `.game-studio/manifest.json` in the target game repo.

### Runtime Check

Every public skill should follow the same update check.

1. Read `.game-studio/manifest.json` when present.
2. Read the bundled pack manifest.
3. Try to read the remote pack manifest when network access is available.
4. Compare `packVersion` and `schemaVersion`.
5. Report freshness before proposing project changes.
6. Ask before using a newer remote pack for the session.

### Migrations

Pack migrations should be proposed as diffs. They may:

- add a missing `.game-studio/manifest.json`
- add new optional templates
- update generated framework docs
- rename internal framework wording
- mark old target repo state as needing review

Pack migrations must not:

- rewrite accepted direction docs
- change selected concept
- advance stage
- delete milestone records
- change public promises

## Claude Code Packaging

Claude Code is the first publishing target because its plugin marketplace and
official directory paths are already documented for community distribution.

### Package Manifest

Claude Code plugins use `.claude-plugin/plugin.json` inside the plugin package.
The public Game Studio plugin should set:

| Field | Value |
| --- | --- |
| `name` | `game-studio` |
| `description` | Short install-area description for AI-assisted game production. |
| `author` | Repository owner or maintainer identity. |
| `homepage` | Public repository or docs page. |
| `repository` | Public GitHub repository. |
| `license` | `MIT` |

During early development, omit `version` so git-backed installs can use commit
SHA versioning. Add explicit semantic versions when the release process is
stable.

### Plugin Contents

Claude Code plugin components must live at the plugin root, not inside
`.claude-plugin/`.

```text
plugins/game-studio/
├── .claude-plugin/plugin.json
├── skills/
├── packs/
├── assets/
├── README.md
├── CHANGELOG.md
└── LICENSE
```

Do not put `skills/`, `hooks/`, `commands/`, or assets inside
`.claude-plugin/`.

### Marketplace Catalog

The repository-level Claude marketplace should live at
`.claude-plugin/marketplace.json` and point to the plugin package.

```json
{
  "name": "game-studio",
  "owner": {
    "name": "Game Studio"
  },
  "plugins": [
    {
      "name": "game-studio",
      "source": "./plugins/game-studio",
      "description": "Plugin-first workflow for AI-assisted game production."
    }
  ]
}
```

The exact owner and description should be finalized before submission.

### Install Paths

Users can add the repository as a marketplace and install the plugin.

```text
/plugin marketplace add gigio1023/game-studio
/plugin install game-studio@game-studio
/reload-plugins
```

Project teams can declare marketplace configuration in `.claude/settings.json`
so trusted repository users are prompted to install it.

### Update Behavior

Claude Code can auto-update marketplace plugins at startup when auto-update is
enabled for a marketplace. Official Anthropic marketplaces enable auto-update by
default. Third-party and local development marketplaces disable it by default.

Game Studio must not rely on this setting. The `update` and `doctor` skills
should check the workflow pack manifest independently.

### Validation

Before sharing a Claude marketplace:

```text
claude plugin validate .
claude --plugin-dir ./plugins/game-studio
```

Inside Claude Code, test each public skill:

```text
/game-studio:triage
/game-studio:plan
/game-studio:review
/game-studio:update
/game-studio:doctor
```

### Official Directory Submission

Claude accepts public plugin submissions through the Claude.ai and Console
submission forms. The repo must be public or submitted as a zip with the correct
folder structure. Run `claude plugin validate` before submitting.

After a plugin is published in the Claude plugin directory, updates pushed to
the GitHub repository are picked up by the public marketplace screening flow.

## Codex Packaging

Codex should be supported from the same plugin package, with a native Codex
manifest and repository marketplace.

### Package Manifest

Codex plugins use `.codex-plugin/plugin.json` inside the plugin package.

```json
{
  "name": "game-studio",
  "description": "Plugin-first workflow for AI-assisted game production.",
  "skills": "./skills/",
  "interface": {
    "displayName": "Game Studio",
    "shortDescription": "Playable validation workflow for game repositories."
  }
}
```

Add richer interface metadata before public release:

- `developerName`
- `category`
- `capabilities`
- `websiteURL`
- `privacyPolicyURL`
- `termsOfServiceURL`
- `composerIcon`
- `logo`
- `screenshots`

### Repository Marketplace

Codex can read a repo marketplace at `.agents/plugins/marketplace.json`.

```json
{
  "name": "game-studio",
  "interface": {
    "displayName": "Game Studio"
  },
  "plugins": [
    {
      "name": "game-studio",
      "source": {
        "source": "local",
        "path": "./plugins/game-studio"
      },
      "policy": {
        "installation": "AVAILABLE",
        "authentication": "ON_INSTALL"
      },
      "category": "Productivity"
    }
  ]
}
```

For Git-backed distribution, use a Git source entry instead of `local`.

### Install Paths

Codex users can add a marketplace from GitHub.

```text
codex plugin marketplace add gigio1023/game-studio --sparse .agents/plugins --sparse plugins/game-studio
```

After installation, users start a new thread and ask Codex to use Game Studio,
or explicitly invoke the plugin or one of its skills.

### Update Behavior

Current Codex docs describe explicit marketplace refresh commands.

```text
codex plugin marketplace upgrade
codex plugin marketplace upgrade game-studio
```

Game Studio should treat Codex plugin updates as optional shell updates. The
workflow pack check handles methodology freshness during normal use.

### AGENTS.md Boundary

Codex reads `AGENTS.md` files before work and merges global and project guidance
for a session. The plugin should not depend on shipping an `AGENTS.md` inside
the plugin package.

Instead, `triage` can propose a small target repo `AGENTS.md` snippet only when
the user wants persistent project guidance. That snippet should point to
`.game-studio/project-state.md` and the active workflow pack version.

### Public Directory Status

OpenAI documents plugin creation and local or Git-backed marketplace setup.
Self-serve official public plugin publishing is documented as coming soon.

The repo should still prepare a complete Codex plugin package now so it can be
published when the official public directory path opens.

## Update Policy

Game Studio updates should be visible, reversible, and separate from target game
state.

### Update Types

| Update type | Example | Default behavior |
| --- | --- | --- |
| Plugin shell | New skill, new manifest field, new packaged asset | User updates through marketplace. |
| Workflow pack | New rubric, template, wording, stage guidance | Skill checks latest pack and asks before use. |
| Target repo state | Direction, milestone, decision record, project manifest | User-approved diff only. |

### Default Behavior

Game Studio should check for newer workflow packs during `triage`, `plan`,
`review`, `update`, and `doctor`.

It should not apply updates silently.

```text
Current pack: 0.1.0
Latest pack: 0.2.0
Action: ask whether to use 0.2.0 for this session
```

### Allowed Automatic Actions

These actions can happen without changing target repo files:

- compare manifest versions
- summarize release notes
- load newer remote methodology for the current session after user approval
- report that plugin shell update is available

### Actions Requiring Approval

These actions require a visible diff or explicit user instruction:

- create `.game-studio/`
- write `.game-studio/manifest.json`
- write `.game-studio/project-state.md`
- add or update persistent `AGENTS.md` or `CLAUDE.md` snippets
- update generated framework docs in the target repo
- rename old target repo artifacts

### Stale Plugin Handling

A stale plugin shell can still function when the workflow pack format is
compatible.

If `minPluginShell` is higher than the installed shell version, Game Studio
should stop and ask the user to update the plugin. It should not guess how to
apply newer pack instructions.

### Release Channels

Use two channels after the first public release.

| Channel | Audience | Policy |
| --- | --- | --- |
| `stable` | Public users | Explicit semantic versions and changelog entries. |
| `latest` | Maintainers and early adopters | Commit SHA or prerelease versions. |

Claude Code can model release channels through separate marketplaces or refs.
Codex can use separate marketplace entries or refs.

## Adapter Migration

The current adapters describe a source checkout flow. Public distribution should
move to plugin-first setup.

### Current Adapter Model

The existing bootstrap files tell agents to work from a target game repository,
read `adapters/<runtime>/bootstrap.md`, create `.game-studio/`, copy `core/`,
copy `skills/`, merge runtime instruction snippets, and write project state.

That was useful for source installs. It is the wrong primary public UX.

### Future Plugin Model

The public install flow should be:

```text
Install Game Studio plugin
Open a target game repo
Invoke Game Studio triage
Approve creation of .game-studio/ state
Use workflow pack references from the plugin package or remote pack
```

The target repo should not receive a full framework copy by default.

### Migration Changes

| Area | Change |
| --- | --- |
| `adapters/codex/bootstrap.md` | Mark as legacy source-install guidance or replace with plugin setup notes. |
| `adapters/claude/bootstrap.md` | Mark as legacy source-install guidance or replace with plugin setup notes. |
| `adapters/*/*.snippet` | Keep only minimal persistent target repo guidance. |
| `skills/` | Keep as internal authoring source. Publish curated skills in plugin package. |
| `.game-studio/core/` | Stop creating by default. Use workflow pack references instead. |
| `docs/framework/` | Generate only project-specific summaries when needed. |

### Wording Cleanup

Public and adapter-facing copy should use:

- `playable validation`
- `playable prototype`
- `first playable`
- `role-led review`
- `gate verdict`
- `human decision record`

Avoid:

- the deprecated validation phrase listed in `docs/terminology.md`
- `playable proof` in public install copy
- `use proof-gate language in user-facing output`

`proof target` can remain an internal gate term when it names the artifact a
claim depends on.

### Compatibility

Keep a manual source install page for maintainers and air-gapped use.

That page should be clearly secondary:

```text
Manual source install is for framework development, local testing, and
restricted environments. Public users should install the plugin.
```

## Marketplace Submission

This page tracks what the repo must prepare before submitting Game Studio to
public plugin areas.

### Public Release Requirements

| Requirement | Reason |
| --- | --- |
| Public plugin package | Users and reviewers can inspect exactly what installs. |
| Small skill entry points | Installers understand what the plugin adds. |
| Clear update policy | Users know plugin updates do not rewrite game state. |
| Marketplace metadata | Install instructions show trustworthy copy and assets. |
| Validation output | Maintainers can prove package structure is loadable. |
| Privacy and terms links | Public directories expect user-facing policy links. |
| Changelog | Versioned releases need visible changes. |

### Claude Directory Path

Claude accepts plugin directory submissions through Claude.ai and Console forms.
The public submission can use a GitHub link or a zip file. The repository must
be public for source-based submission.

Before submitting:

1. Finish `plugins/game-studio/.claude-plugin/plugin.json`.
2. Finish `.claude-plugin/marketplace.json`.
3. Run `claude plugin validate .`.
4. Test with `claude --plugin-dir ./plugins/game-studio`.
5. Add screenshots or a minimal visual asset set.
6. Publish a release or tag.
7. Submit through the Claude plugin form.

After publication, updates pushed to the GitHub source are picked up by the
public marketplace screening flow. The repo should still publish changelog
entries for every release.

### Codex Directory Path

Codex currently supports plugin packages and Git-backed marketplace setup.
Official self-serve public plugin publishing is documented as coming soon.

Before that path opens:

1. Finish `plugins/game-studio/.codex-plugin/plugin.json`.
2. Finish `.agents/plugins/marketplace.json`.
3. Test repository marketplace loading.
4. Keep metadata aligned with Claude packaging.
5. Document Codex install and upgrade commands.

When official public publishing opens, reuse the same plugin package and asset
set.

### Marketplace Copy

Use concise marketplace listing copy.

```text
Game Studio helps AI coding agents turn game direction or creator taste into
playable builds, role-led game reviews, milestone decisions, and human decision
records.
```

Avoid public copy that says:

- the deprecated validation phrase listed in `docs/terminology.md`
- `AI game generator`
- `autonomous studio`
- `one prompt to finished game`
- `evidence proves fun`

### Submission Blockers

- Runtime skills still depend on clone-and-copy adapter assumptions.
- Public docs still imply every target repo should copy `core/`.
- Public skill descriptions expose too many internal framework terms.
- Plugin package has no icon, logo, or marketplace listing metadata.
- No validation transcript exists for Claude and Codex local installs.

## Distribution Validation

Validate plugin packaging before publishing or asking users to install it.

### Repository Checks

Run the repository health check after docs or package changes.

```text
node tools/check-repository.mjs
```

The repository check catches broken local conventions. It does not validate
Claude Code or Codex plugin loading by itself.

### Claude Code Checks

Validate marketplace and plugin structure.

```text
claude plugin validate .
```

Load the package directly during development.

```text
claude --plugin-dir ./plugins/game-studio
```

Inside Claude Code:

```text
/game-studio:triage
/game-studio:plan
/game-studio:review
/game-studio:update
/game-studio:doctor
```

Expected results:

- Skills appear under the `game-studio` namespace.
- Skills can read bundled pack files.
- Skills do not require a global CLI.
- Skills do not copy `core/` into a target repo without approval.
- `update` reports pack freshness before changing files.

### Codex Checks

Add the repo marketplace locally.

```text
codex plugin marketplace add ./
```

For a Git-backed smoke test, add the repository with sparse checkout paths.

```text
codex plugin marketplace add gigio1023/game-studio --sparse .agents/plugins --sparse plugins/game-studio
```

Then open `/plugins`, find Game Studio, install it, restart or start a new
thread, and invoke the plugin or skills.

Expected results:

- Codex lists the Game Studio marketplace.
- Plugin metadata renders correctly.
- Public skills are discoverable.
- The plugin can be disabled without changing target repo state.
- The target repo receives only user-approved `.game-studio/` changes.

### Target Repo Smoke Test

Use a disposable game repository.

1. Start from an empty repo.
2. Invoke `triage`.
3. Choose `taste-to-game`.
4. Accept creation of `.game-studio/manifest.json`.
5. Confirm no framework `core/` copy appears in `.game-studio/core/`.
6. Run `plan`.
7. Confirm the first prototype contract is proposed as a diff.
8. Run `doctor`.
9. Confirm it reports plugin, pack, and target state versions.

Repeat with a brownfield repo that already has a README, prototype, and
direction notes.

### Release Evidence

Each public release should keep a short validation note in the release PR or
release notes.

```text
Repository check: pass
Claude plugin validate: pass
Claude local plugin smoke: pass
Codex repo marketplace smoke: pass
Target repo smoke: pass
```

## Rollout Backlog

This backlog sequences repository preparation for plugin-first distribution.

### Phase 1: Documentation And Public Contract

- Add distribution docs under `docs/distribution/`.
- Update `docs/README.md` to link the distribution docs.
- Replace stale public `milestone-gated playable validation` wording in adapter-facing docs.
- Define the five public plugin skills.
- Define workflow pack manifest and target repo manifest.

### Phase 2: Plugin Package Skeleton

- Add `plugins/game-studio/.claude-plugin/plugin.json`.
- Add `plugins/game-studio/.codex-plugin/plugin.json`.
- Add `.claude-plugin/marketplace.json`.
- Add `.agents/plugins/marketplace.json`.
- Add `plugins/game-studio/README.md`.
- Add `plugins/game-studio/CHANGELOG.md`.
- Add minimal icon and logo assets.

### Phase 3: Public Skills

- Create `triage`, `plan`, `review`, `update`, and `doctor` skills.
- Keep descriptions short enough for Codex skill list limits.
- Move deep role and rubric material into pack references.
- Make every skill check pack freshness before target repo writes.
- Ensure skills ask before creating or updating `.game-studio/` files.

### Phase 4: Workflow Pack

- Add bundled `plugins/game-studio/packs/game-studio/manifest.json`.
- Package selected core, profiles, templates, and rubrics.
- Add target repo `.game-studio/manifest.json` template.
- Add migration proposal format.
- Add channel metadata for `stable` and `latest`.

### Phase 5: Adapter Migration

- Mark clone-and-copy bootstraps as legacy source install.
- Remove instructions that copy all `core/` by default.
- Replace target repo snippets with state-first plugin guidance.
- Keep source install only for maintainers and restricted environments.

### Phase 6: Validation

- Run repository health checks.
- Run `claude plugin validate .`.
- Smoke test `claude --plugin-dir ./plugins/game-studio`.
- Smoke test Codex repository marketplace install.
- Smoke test empty target repo setup.
- Smoke test brownfield target repo setup.

### Phase 7: Marketplace Release

- Publish a tagged prerelease.
- Share Claude marketplace install instructions.
- Submit to the Claude plugin directory.
- Keep Codex repo marketplace install instructions public.
- Submit to Codex public directory when self-serve publishing opens.

## Distribution Research Notes

These notes capture the official documentation findings that drive the
plugin-first plan.

### Claude Code

| Finding | Impact |
| --- | --- |
| Plugins are for shared, versioned, reusable extensions. | Game Studio should ship as a plugin, not as copied project config. |
| Plugin skills are namespaced as `/plugin-name:skill-name`. | Public skills should be designed as `/game-studio:triage` and similar commands. |
| Plugin components live at plugin root, while only `plugin.json` lives under `.claude-plugin/`. | The plugin package needs `skills/`, `packs/`, and assets at `plugins/game-studio/`. |
| Marketplaces can be hosted on GitHub and added by `owner/repo`. | The repo can distribute a marketplace without a custom installer. |
| Third-party marketplace auto-update is disabled by default. | Game Studio needs workflow pack checks independent of plugin auto-update. |
| Version resolution can use explicit versions or git commit SHA. | Early releases can omit plugin `version`; stable releases should use SemVer. |
| Official directory submission accepts public GitHub links or zip uploads. | The repo should prepare public metadata, validation, and submission assets. |

Primary sources:

- [Create plugins (Claude Code)](https://code.claude.com/docs/en/plugins)
- [Create and distribute a plugin marketplace (Claude Code)](https://code.claude.com/docs/en/plugin-marketplaces)
- [Discover and install plugins (Claude Code)](https://code.claude.com/docs/en/discover-plugins)
- [Plugins reference (Claude Code)](https://code.claude.com/docs/en/plugins-reference)
- [Submitting your plugin (Claude)](https://claude.com/docs/plugins/submit)

### Codex

| Finding | Impact |
| --- | --- |
| Plugins bundle skills, app integrations, and MCP servers. | Game Studio can ship skills without adding a CLI. |
| Codex plugins require `.codex-plugin/plugin.json`. | The plugin package needs a native Codex manifest. |
| Repo marketplaces use `.agents/plugins/marketplace.json`. | The repository can expose Game Studio before official public publishing. |
| Codex can read Claude-style marketplace files too. | A dual-runtime package can keep metadata aligned. |
| Marketplace refresh is documented through explicit upgrade commands. | Do not rely on automatic plugin updates in Codex. |
| Skills are loaded through progressive disclosure and descriptions are budgeted. | Public skill descriptions must be concise and scoped. |
| Codex reads `AGENTS.md` before work and merges project guidance. | Persistent target repo guidance should be proposed by `triage`, not bundled as plugin context. |
| Official public plugin publishing is documented as coming soon. | Prepare the package now and use repo marketplace distribution first. |

Primary sources:

- [Plugins (Codex)](https://developers.openai.com/codex/plugins)
- [Build plugins (Codex)](https://developers.openai.com/codex/plugins/build)
- [Agent Skills (Codex)](https://developers.openai.com/codex/skills)
- [Custom instructions with AGENTS.md (Codex)](https://developers.openai.com/codex/guides/agents-md)
