# Workflow Pack

The workflow pack is the versioned Game Studio methodology that skills consult
before changing target repo state.

## Pack Contents

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

## Manifest

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

## Target Repo Manifest

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

## Runtime Check

Every public skill should follow the same update check.

1. Read `.game-studio/manifest.json` when present.
2. Read the bundled pack manifest.
3. Try to read the remote pack manifest when network access is available.
4. Compare `packVersion` and `schemaVersion`.
5. Report freshness before proposing project changes.
6. Ask before using a newer remote pack for the session.

## Migrations

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

