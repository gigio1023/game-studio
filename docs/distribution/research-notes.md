# Distribution Research Notes

These notes capture the official documentation findings that drive the
plugin-first plan.

## Claude Code

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

## Codex

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

