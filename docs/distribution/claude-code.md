# Claude Code Packaging

Claude Code is the first publishing target because its plugin marketplace and
official directory paths are already documented for community distribution.

## Package Manifest

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

## Plugin Contents

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

## Marketplace Catalog

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

## Install Paths

Users can add the repository as a marketplace and install the plugin.

```text
/plugin marketplace add gigio1023/game-studio
/plugin install game-studio@game-studio
/reload-plugins
```

Project teams can declare marketplace configuration in `.claude/settings.json`
so trusted repository users are prompted to install it.

## Update Behavior

Claude Code can auto-update marketplace plugins at startup when auto-update is
enabled for a marketplace. Official Anthropic marketplaces enable auto-update by
default. Third-party and local development marketplaces disable it by default.

Game Studio must not rely on this setting. The `update` and `doctor` skills
should check the workflow pack manifest independently.

## Validation

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

## Official Directory Submission

Claude accepts public plugin submissions through the Claude.ai and Console
submission forms. The repo must be public or submitted as a zip with the correct
folder structure. Run `claude plugin validate` before submitting.

After a plugin is published in the Claude plugin directory, updates pushed to
the GitHub repository are picked up by the public marketplace screening flow.

