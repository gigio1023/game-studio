# Adapter Migration

The current adapters describe a source checkout flow. Public distribution should
move to plugin-first setup.

## Current Adapter Model

The existing bootstrap files tell agents to work from a target game repository,
read `adapters/<runtime>/bootstrap.md`, create `.game-studio/`, copy `core/`,
copy `skills/`, merge runtime instruction snippets, and write project state.

That was useful for source installs. It is the wrong primary public UX.

## Future Plugin Model

The public install flow should be:

```text
Install Game Studio plugin
Open a target game repo
Invoke Game Studio triage
Approve creation of .game-studio/ state
Use workflow pack references from the plugin package or remote pack
```

The target repo should not receive a full framework copy by default.

## Migration Changes

| Area | Change |
| --- | --- |
| `adapters/codex/bootstrap.md` | Mark as legacy source-install guidance or replace with plugin setup notes. |
| `adapters/claude/bootstrap.md` | Mark as legacy source-install guidance or replace with plugin setup notes. |
| `adapters/*/*.snippet` | Keep only minimal persistent target repo guidance. |
| `skills/` | Keep as internal authoring source. Publish curated skills in plugin package. |
| `.game-studio/core/` | Stop creating by default. Use workflow pack references instead. |
| `docs/framework/` | Generate only project-specific summaries when needed. |

## Wording Cleanup

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

## Compatibility

Keep a manual source install page for maintainers and air-gapped use.

That page should be clearly secondary:

```text
Manual source install is for framework development, local testing, and
restricted environments. Public users should install the plugin.
```
