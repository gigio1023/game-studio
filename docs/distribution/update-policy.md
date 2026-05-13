# Update Policy

Game Studio updates should be visible, reversible, and separate from target game
state.

## Update Types

| Update type | Example | Default behavior |
| --- | --- | --- |
| Plugin shell | New skill, new manifest field, new packaged asset | User updates through marketplace. |
| Workflow pack | New rubric, template, wording, stage guidance | Skill checks latest pack and asks before use. |
| Target repo state | Direction, milestone, decision record, project manifest | User-approved diff only. |

## Default Behavior

Game Studio should check for newer workflow packs during `triage`, `plan`,
`review`, `update`, and `doctor`.

It should not apply updates silently.

```text
Current pack: 0.1.0
Latest pack: 0.2.0
Action: ask whether to use 0.2.0 for this session
```

## Allowed Automatic Actions

These actions can happen without changing target repo files:

- compare manifest versions
- summarize release notes
- load newer remote methodology for the current session after user approval
- report that plugin shell update is available

## Actions Requiring Approval

These actions require a visible diff or explicit user instruction:

- create `.game-studio/`
- write `.game-studio/manifest.json`
- write `.game-studio/project-state.md`
- add or update persistent `AGENTS.md` or `CLAUDE.md` snippets
- update generated framework docs in the target repo
- rename old target repo artifacts

## Stale Plugin Handling

A stale plugin shell can still function when the workflow pack format is
compatible.

If `minPluginShell` is higher than the installed shell version, Game Studio
should stop and ask the user to update the plugin. It should not guess how to
apply newer pack instructions.

## Release Channels

Use two channels after the first public release.

| Channel | Audience | Policy |
| --- | --- | --- |
| `stable` | Public users | Explicit semantic versions and changelog entries. |
| `latest` | Maintainers and early adopters | Commit SHA or prerelease versions. |

Claude Code can model release channels through separate marketplaces or refs.
Codex can use separate marketplace entries or refs.

