# Rollout Backlog

This backlog sequences repository preparation for plugin-first distribution.

## Phase 1: Documentation And Public Contract

- Add distribution docs under `docs/distribution/`.
- Update `docs/README.md` to link the distribution docs.
- Replace stale public `proof-gated` wording in adapter-facing docs.
- Define the five public plugin skills.
- Define workflow pack manifest and target repo manifest.

## Phase 2: Plugin Package Skeleton

- Add `plugins/game-studio/.claude-plugin/plugin.json`.
- Add `plugins/game-studio/.codex-plugin/plugin.json`.
- Add `.claude-plugin/marketplace.json`.
- Add `.agents/plugins/marketplace.json`.
- Add `plugins/game-studio/README.md`.
- Add `plugins/game-studio/CHANGELOG.md`.
- Add minimal icon and logo assets.

## Phase 3: Public Skills

- Create `triage`, `plan`, `review`, `update`, and `doctor` skills.
- Keep descriptions short enough for Codex skill list limits.
- Move deep role and rubric material into pack references.
- Make every skill check pack freshness before target repo writes.
- Ensure skills ask before creating or updating `.game-studio/` files.

## Phase 4: Workflow Pack

- Add bundled `plugins/game-studio/packs/game-studio/manifest.json`.
- Package selected core, profiles, templates, and rubrics.
- Add target repo `.game-studio/manifest.json` template.
- Add migration proposal format.
- Add channel metadata for `stable` and `latest`.

## Phase 5: Adapter Migration

- Mark clone-and-copy bootstraps as legacy source install.
- Remove instructions that copy all `core/` by default.
- Replace target repo snippets with state-first plugin guidance.
- Keep source install only for maintainers and restricted environments.

## Phase 6: Validation

- Run repository health checks.
- Run `claude plugin validate .`.
- Smoke test `claude --plugin-dir ./plugins/game-studio`.
- Smoke test Codex repository marketplace install.
- Smoke test empty target repo setup.
- Smoke test brownfield target repo setup.

## Phase 7: Marketplace Release

- Publish a tagged prerelease.
- Share Claude marketplace install instructions.
- Submit to the Claude plugin directory.
- Keep Codex repo marketplace install instructions public.
- Submit to Codex public directory when self-serve publishing opens.

