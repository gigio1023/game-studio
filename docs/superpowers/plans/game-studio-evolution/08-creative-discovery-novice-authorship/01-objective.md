# 08 Creative Discovery And Novice Authorship: Objective

[Back to index](../08-creative-discovery-novice-authorship.md)

## Objective

Add a explicit entry layer for users who do not already have a stable game
direction. Game Studio should support both existing team direction and
taste-to-game discovery without becoming a one-click game vending machine.

Public product phrase:

```text
AI-assisted game production framework for playable validation.
```

Meaning:

- discovery-driven: the system can start from taste, references, scenes,
  desired emotions, disliked friction, or an existing direction
- milestone-gated playable validation: ideas advance through playable build, review, and explicit
  decisions rather than persuasive prose
- AI game production: Codex and Claude Code can propose, plan, implement,
  review, and continue work within the user's authority boundaries

Terminology:

- Use `proof`, `playable build`, `proof target`, `proof budget`, and
  `validation` in public-facing product language.
- Use `evidence` for internal artifact classes: captures, builds, playtest
  notes, QA results, decision records, telemetry, screenshots, videos, and
  release claim checks.
- Do not use locked-evidence phrasing as the product phrase.


## Files

- Create: `docs/entry-model.md`
- Create: `docs/beginner-taste-to-game.md`
- Create: `docs/concept-development-method.md`
- Create: `docs/plain-language-game-design-glossary.md`
- Create: `skills/game-onboarding/SKILL.md`
- Create: `skills/game-onboarding/references/entry-routing.md`
- Create: `skills/game-taste-interviewer/SKILL.md`
- Create: `skills/game-taste-interviewer/references/taste-elicitation.md`
- Create: `skills/game-concept-guide/SKILL.md`
- Create: `skills/game-concept-guide/references/concept-generation.md`
- Create: `skills/game-concept-portfolio/SKILL.md`
- Create: `skills/game-concept-portfolio/references/concept-comparison.md`
- Create: `skills/game-direction-crystallizer/SKILL.md`
- Create: `skills/game-direction-crystallizer/references/brief-to-direction.md`
- Create: `skills/game-scope-shaper/SKILL.md`
- Create: `skills/game-scope-shaper/references/constraint-ladder.md`
- Create: `skills/game-prototype-planner/SKILL.md`
- Create: `skills/game-prototype-planner/references/prototype-path.md`
- Create: `core/templates/intake/project-intake.md`
- Create: `core/templates/intake/direction-carry-in-audit.md`
- Create: `core/templates/intake/beginner-taste-interview.md`
- Create: `core/templates/direction/taste-profile.md`
- Create: `core/templates/direction/reference-games-map.md`
- Create: `core/templates/direction/concept-card.md`
- Create: `core/templates/direction/concept-portfolio.md`
- Create: `core/templates/direction/one-page-creative-brief.md`
- Create: `core/templates/direction/direction-decision-record.md`
- Create: `core/templates/production/constraint-ladder.md`
- Create: `core/templates/production/first-prototype-contract.md`
- Create: `core/templates/production/idea-parking-lot.md`
- Create: `core/schemas/entry-intake.schema.json`
- Create: `core/schemas/taste-profile.schema.json`
- Create: `core/schemas/concept-card.schema.json`
- Create: `core/schemas/concept-portfolio.schema.json`
- Create: `core/schemas/creative-brief.schema.json`
- Create: `core/schemas/constraint-ladder.schema.json`
- Create: `core/schemas/prototype-path.schema.json`
- Modify: `README.md`
- Modify: `docs/philosophy.md`
- Modify: `docs/operating-model.md`
- Modify: `core/workflows/stage-model.md`
- Modify: `core/workflows/workflow-catalog.yaml`
- Modify: `core/gates/direction.md`
- Modify: `core/rubrics/direction-quality-rubric.md`
- Modify: `adapters/codex/bootstrap.md`
- Modify: `adapters/claude/bootstrap.md`


## Product Position

Game Studio has two legitimate beginnings:

1. A team already has a direction, mandate, prototype, pitch, or task.
2. A creator has taste, references, curiosity, scenes, emotions, or constraints
   but no stable direction.

The current plan is strong after direction exists. This extension makes the
pre-direction path explicit.

Public README language should say:

```text
Game Studio helps Codex and Claude Code turn either an existing game direction
or a player's taste profile into a playable, reviewed, finishable game project.
It is not a one-click game vending machine; it is a creative production
autopilot with human authorship control.
```

Avoid:

- standalone defensive disclaimers about not generating games
- implying that scripts or schemas judge game quality
- implying that AI owns taste, direction, stage advancement, or public promises
- audit-heavy evidence language as the first-screen product phrase


## Entry Model

- [ ] Create `docs/entry-model.md`.

Entry modes:

| Mode | User state | First action | Output |
| --- | --- | --- | --- |
| `direction-carry-in` | Existing game direction, company task, team mandate, prototype, pitch, or public promise | audit direction authority and missing proof | direction audit, stage inference, missing proof |
| `taste-to-game` | Taste and interest exist, but game-development vocabulary is weak | elicit taste and generate a small concept slate | taste profile, concept slate, creative brief |
| `brownfield-unknown` | Repo, notes, or prototype exist, but authority and direction are unclear | adoption audit plus entry routing | current state classification and next proof |

Required route output:

```markdown

## Entry Mode

## Direction Source

## Creator Fluency

## Authority Owner

## Current Concept Status

## First Required Artifact

## Next Skill Or Gate

## Stop Condition
```

Routing rules:

- If a direction already exists, preserve it before improving it.
- If only taste exists, do not ask for a full thesis first.
- If the repo is ambiguous, audit before writing new direction documents.
- If the next step requires user taste, direction selection, stage movement, or
  a public promise, return `USER_DECISION_NEEDED`.
