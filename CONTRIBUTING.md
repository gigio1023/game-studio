# Contributing

Thanks for improving Game Studio.

This project is documentation, templates, role playbooks, and agent skills for
AI-assisted game development. Contributions should make agents produce better
game-development judgment, not only more process.

## Good Contributions

- Clearer role playbooks.
- Better rubrics for game direction, production, QA, accessibility, narrative, or craft.
- Small templates that create durable project artifacts.
- Source-backed research summaries.
- Examples that show how a team would use the framework.
- Fixes for broken links, unclear wording, or outdated guidance.

## Before You Open A Pull Request

1. Read `docs/substantive-review.md`.
2. Read `docs/documentation-style.md`.
3. Keep each page focused on one job.
4. Keep `SKILL.md` files short and move detail into `references/`.
5. Avoid private project names, personal paths, unreleased game details, and unrelated branding.
6. Run the repository health check:

```bash
node tools/check-repository.mjs
```

## Writing Rules

- Write in natural English.
- Prefer short pages over large documents.
- Link to source material when adding research-based rules.
- Explain how a rule changes agent behavior.
- Do not add a script when a role playbook or rubric is the right surface.

## Pull Request Shape

A good pull request explains:

- What problem it solves.
- Which users or agent workflows it helps.
- Which files should be read first.
- What evidence or source material supports the change.
- What remains intentionally out of scope.

## Review Standard

Maintainers review for clarity, public usefulness, source quality, and whether
the change helps agents make better game-development decisions.
