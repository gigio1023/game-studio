# Documentation Style

Write docs as small surfaces with one job.

## Structure

Use [Diátaxis](https://diataxis.fr/) as the information architecture:

- Tutorials teach a path.
- How-to guides solve a task.
- Reference pages define facts.
- Explanation pages give context.

This repository maps those forms to project files:

- `README.md`: entry point and quick start.
- `docs/`: explanation and operating model.
- `core/`: reference material.
- `core/templates/`: copyable task artifacts.
- `skills/*/SKILL.md`: short agent entry points.
- `skills/*/references/`: detailed agent playbooks.

## Page Rules

- Keep one topic per page.
- Start each section with at most one context sentence.
- Put long detail in a linked page, not a closing notes section.
- Use tables only when rows share the same shape.
- Prefer active voice.
- Use U.S. English.

## Procedure Rules

Follow the Microsoft Learn guidance for procedures: use numbered lists for
multi-step tasks and put one action in each step.

```text
1. Select the project profile.
2. Copy the adapter snippet.
3. Run the project check.
```

## Command Rules

Follow the Kubernetes docs pattern for commands:

- Do not include a shell prompt.
- Separate commands from expected output.
- Use link text that describes the destination.
- Address the reader as `you` when the instruction is user-facing.

```bash
node tools/check-project.mjs /path/to/game
```

The output lists missing project surfaces.

## Example Rules

Follow the Pydantic docs bias for examples: keep them short, complete, and
testable.

Every example should state:

- The starting context.
- The command or artifact.
- The expected result.

## Skill Rules

Follow the local `skill-builder` pattern:

- `SKILL.md` stays under 500 lines.
- `SKILL.md` explains when to trigger and what to do first.
- `references/` holds detailed playbooks.
- Scripts handle deterministic checks.
- Gotchas stay close to the entry point.

## Review Checklist

- The page has one job.
- The first screen tells the reader what to do next.
- Bullets use the same shape.
- Commands are runnable.
- Links are contextual.
- No private project names, personal paths, or unreleased game details appear.
