# Codex Packaging

Codex should be supported from the same plugin package, with a native Codex
manifest and repository marketplace.

## Package Manifest

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

## Repository Marketplace

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

## Install Paths

Codex users can add a marketplace from GitHub.

```text
codex plugin marketplace add gigio1023/game-studio --sparse .agents/plugins --sparse plugins/game-studio
```

After installation, users start a new thread and ask Codex to use Game Studio,
or explicitly invoke the plugin or one of its skills.

## Update Behavior

Current Codex docs describe explicit marketplace refresh commands.

```text
codex plugin marketplace upgrade
codex plugin marketplace upgrade game-studio
```

Game Studio should treat Codex plugin updates as optional shell updates. The
workflow pack check handles methodology freshness during normal use.

## AGENTS.md Boundary

Codex reads `AGENTS.md` files before work and merges global and project guidance
for a session. The plugin should not depend on shipping an `AGENTS.md` inside
the plugin package.

Instead, `triage` can propose a small target repo `AGENTS.md` snippet only when
the user wants persistent project guidance. That snippet should point to
`.game-studio/project-state.md` and the active workflow pack version.

## Public Directory Status

OpenAI documents plugin creation and local or Git-backed marketplace setup.
Self-serve official public plugin publishing is documented as coming soon.

The repo should still prepare a complete Codex plugin package now so it can be
published when the official public directory path opens.
