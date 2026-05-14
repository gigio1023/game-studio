# Role-Led Game Review Handoff

This handoff explains how to continue the research and integration work from a
fresh device or a new agent session.

## Current Direction

Game Studio should stay a project-local operating framework for AI-assisted game
development. The center of gravity is no longer structural checking. Scripts
only guard cheap invariants. Codex and Claude Code should use role playbooks,
rubrics, templates, and the craft reference index to judge game quality.

## Research Added

Read these reports when expanding the framework:

- `research/foundations/game-design-foundations.md`
- `research/foundations/game-production-and-direction.md`
- `research/foundations/narrative-and-scenario-design.md`
- `research/foundations/qa-playtesting-and-accessibility.md`
- `research/foundations/game-feel-ux-art-audio.md`
- `research/repo-review/content-model-gap-analysis.md`

## Integration Already Done

- Added craft references from the craft reference index in `core/references/`.
- Added role playbooks under `core/roles/playbooks/`.
- Added rubrics for direction, production, accessibility, council review, and moment-to-moment quality.
- Added narrative, QA, release, evidence, production, and playable-quality templates.
- Added `skills/narrative-director/`.
- Expanded existing skills so they load design, production, qualitative review, playable validation, and design-preservation references.
- Added `docs/role-led-game-review.md` to separate repository checks from game-quality judgment.

## How To Continue

1. Start from `docs/role-led-game-review.md`.
2. Read `core/references/codex-review-practice.md`.
3. Use `core/references/game-craft-reference-index.md` to trace a rule back to source material.
4. Load only the role playbooks required by the current milestone.
5. Treat `research/` as background, not active workflow text.
6. Add new rules to skills only when they change agent behavior.
7. Add new templates only when they create a durable artifact a team would use.

## Open Work

- Add stronger examples that show a complete direction pack and review pack.
- Add a credits and post-release support template.
- Add a localization readiness template for text-heavy games.
- Add sample council reviews for narrative, accessibility, and playable quality.
- Add profile guidance that maps genre questions to required evidence.
- Keep scripts limited to repository health and adopted-project structure.

## Review Standard

A future change is useful only if it helps an agent answer at least one of these:

- What game is this?
- What proof is the current milestone pursuing?
- What evidence shows the player experience is real?
- Which role has authority to approve, block, cut, or defer?
- What public promise can the build honestly support?
