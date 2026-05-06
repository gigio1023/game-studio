# Distribution Validation

Validate plugin packaging before publishing or asking users to install it.

## Repository Checks

Run the repository health check after docs or package changes.

```text
node tools/check-repository.mjs
```

The repository check catches broken local conventions. It does not validate
Claude Code or Codex plugin loading by itself.

## Claude Code Checks

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

## Codex Checks

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

## Target Repo Smoke Test

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

## Release Evidence

Each public release should keep a short validation note in the release PR or
release notes.

```text
Repository check: pass
Claude plugin validate: pass
Claude local plugin smoke: pass
Codex repo marketplace smoke: pass
Target repo smoke: pass
```
