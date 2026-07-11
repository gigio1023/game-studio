# Contributing

Thanks for improving Game Studio.

This repository is a set of portable agent skills for AI-assisted game
development. Contributions should make agents produce better game-development
judgment, not more process.

## Good Contributions

- A gotcha added to a skill from an observed agent failure.
- Sharper trigger descriptions, backed by the trigger fixtures.
- Better craft references, linked to primary sources.
- New eval fixtures that expose a real failure mode.
- Fixes for broken paths, unclear wording, or outdated guidance.

## Before You Open A Pull Request

1. Keep each `SKILL.md` short; put detail in that skill's `references/`.
   References stay one level deep and must live inside the skill folder so the
   skill stays self-contained when installed alone.
2. Keep frontmatter to `name` and `description`. The wider Agent Skills spec
   allows optional fields, but this repository uses the two-field cross-harness
   profile shared by its target runtimes.
3. Do not add process the target models already handle: no step-by-step
   transcripts of obvious work, no emphasis spam, no hidden-reasoning requests.
4. Avoid private project names, personal paths, and unrelated branding.
5. Run the repository check:

```bash
node tools/check-repository.mjs
```

6. For behavioral changes, run the eval protocol in `evals/README.md`
   (no-skill vs current vs candidate, per target harness) and report the
   result in the pull request.

## Pull Request Shape

Explain what problem the change solves, which agent behavior it improves,
what evidence supports it (fixture runs, traces, sources), and what stays out
of scope.
