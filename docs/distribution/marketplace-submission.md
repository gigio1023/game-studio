# Marketplace Submission

This page tracks what the repo must prepare before submitting Game Studio to
public plugin surfaces.

## Public Release Requirements

| Requirement | Reason |
| --- | --- |
| Public plugin package | Users and reviewers can inspect exactly what installs. |
| Small skill surface | Installers understand what the plugin adds. |
| Clear update policy | Users know plugin updates do not rewrite game state. |
| Marketplace metadata | Install surfaces show trustworthy copy and assets. |
| Validation output | Maintainers can prove package structure is loadable. |
| Privacy and terms links | Public directories expect user-facing policy links. |
| Changelog | Versioned releases need visible changes. |

## Claude Directory Path

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

## Codex Directory Path

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

## Marketplace Copy

Use concise install-surface copy.

```text
Game Studio helps AI coding agents turn game direction or creator taste into
bounded playable prototypes, role review, gate verdicts, and human decision
records.
```

Avoid public copy that says:

- `proof-gated`
- `AI game generator`
- `autonomous studio`
- `one prompt to finished game`
- `evidence proves fun`

## Submission Blockers

- Runtime skills still depend on clone-and-copy adapter assumptions.
- Public docs still imply every target repo should copy `core/`.
- Public skill descriptions expose too many internal framework terms.
- Plugin package has no icon, logo, or install-surface metadata.
- No validation transcript exists for Claude and Codex local installs.

