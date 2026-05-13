# Public Surface Style

Public Game Studio docs should explain the product without making contributor
tooling, internal schemas, or research scaffolding feel like the main value.

## Positioning

Use:

> Discovery-driven AI game production system for playable validation.

Then explain:

> Game Studio helps Codex and Claude Code turn either an existing game
> direction or a player's taste profile into playable prototypes, reviews, gates,
> and production decisions.

## First Screen Rules

The first screen should answer:

- What is this?
- Who uses it?
- Does it start from an existing direction or from taste?
- What does it produce next?
- What does it refuse to promise?

## Public Terms

Prefer:

- playable prototype
- first playable
- vertical slice
- playable validation
- role-led review

Use internal gate terms only when naming framework mechanics:

- proof target
- proof budget
- claim-to-proof

Use `evidence` only for internal artifacts such as evidence contracts,
captures, playtest notes, QA results, schemas, and release claim checks.

## README Shape

Recommended order:

1. Product identity.
2. One sentence about Codex and Claude Code.
3. Operating loop diagram or text map.
4. Entry paths.
5. What the framework gives a target repo.
6. What it can automate and what remains human-owned.
7. Quick starts.
8. Repository map.
9. Community and license.

## Visual Rules

- Show the actual operating loop, not abstract decoration.
- Make entry mode, target repo, playable prototype, review, gate, and next prototype
  visible.
- Do not make contributor scripts the center of the visual story.
- Do not imply one-prompt finished games.
- Use a high-resolution PNG in the README for dependable rendering; keep SVG as
  the sharp review/export artifact.
- Keep diagram quality tied to comprehension: one dominant path, stable arrow
  grammar, readable labels, meaningful color, and no overlapping elements.
- Avoid bottom legends or footer explanation inside the diagram; the layout
  should carry the meaning.
- For the README hero map, use a compact product map: light canvas, restrained
  color by responsibility, straight routing, and one strongly emphasized
  playable prototype.

## Copy Rules

- Be specific about artifacts and decisions.
- Keep claims tied to playable validation or review.
- Avoid defensive disclaimers unless they clarify the supported path.
- Avoid inflated role lists when authority is not clear.
- Prefer short tables for routes, surfaces, and responsibilities.
