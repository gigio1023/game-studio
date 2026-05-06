# Repository Layout

Game Studio should package the public plugin in an isolated directory and keep
marketplace catalogs at repository-level discovery paths.

## Proposed Tree

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

## Why Not Use The Repository Root As The Plugin

A root plugin would expose too much of the framework repository as installable
surface. A package under `plugins/game-studio/` keeps the public plugin small
and prevents internal planning, research, examples, and old adapter files from
becoming runtime dependencies.

## Marketplace Files

| File | Runtime | Purpose |
| --- | --- | --- |
| `.claude-plugin/marketplace.json` | Claude Code | Lists `game-studio` and points to `./plugins/game-studio`. |
| `.agents/plugins/marketplace.json` | Codex | Lists `game-studio` and points to `./plugins/game-studio`. |

Both catalogs should point at the same plugin package. The package itself
contains runtime-specific manifests for Claude Code and Codex.

## Existing File Migration

| Current path | Future role |
| --- | --- |
| `skills/` | Internal authoring source. Public skills are curated into `plugins/game-studio/skills/`. |
| `core/` | Framework source. Runtime pack copy lives under `plugins/game-studio/packs/game-studio/core/`. |
| `profiles/` | Framework source. Runtime pack copy lives under `plugins/game-studio/packs/game-studio/profiles/`. |
| `adapters/` | Legacy source install guidance. Replace with plugin-first docs and compatibility notes. |

The first implementation can duplicate selected files into the plugin package.
A later implementation can add a packaging script that builds the plugin
package from framework source files.

