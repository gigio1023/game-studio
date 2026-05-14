# 03 Game Craft, Production, QA, And Release: Objective

[Back to index](../03-game-craft-production-release.md)

## Objective

Translate game-development research into review references, templates, schemas, and gate rules that judge playable experience instead of artifact presence.


## Files

- Create: `skills/game-review-council/references/game-feel-review.md`
- Create: `skills/game-review-council/references/level-design-review.md`
- Create: `skills/game-review-council/references/ux-review.md`
- Create: `skills/game-review-council/references/art-direction-review.md`
- Create: `skills/game-review-council/references/audio-direction-review.md`
- Create: `skills/game-review-council/references/player-walkthrough-review.md`
- Create: `skills/game-review-council/references/design-intent-survival.md`
- Create: `skills/game-review-council/references/concept-playability-review.md`
- Create: `skills/game-review-council/references/accessibility-review.md`
- Create: `skills/game-review-council/references/release-review.md`
- Create: `core/references/release-material-checks.md`
- Create: `core/templates/release/demo-readiness.md`
- Create: `core/templates/release/credits-record.md`
- Create: `core/templates/release/support-plan.md`
- Create: `core/templates/release/post-release-retro.md`
- Modify: `core/rubrics/moment-to-moment-rubric.md`
- Modify: `core/rubrics/playtest-rubric.md`
- Modify: `core/rubrics/accessibility-rubric.md`
- Modify: `core/templates/evidence/playable-quality-capture.md`
- Modify: `core/templates/evidence/playtest-report.md`
- Modify: `core/templates/qa/bug-triage.md`
- Modify: `core/templates/production/milestone-contract.md`
- Modify: `core/schemas/milestone.schema.json`
- Modify: `core/gates/production.md`
- Modify: `core/gates/release.md`
- Modify: `docs/validation-gates.md`


## Game Craft Review Packs

- [ ] Create `concept-playability-review.md`.

Use this when a project is still before Direction Lock.

Required questions:

- What is the player fantasy?
- What is the first verb?
- What changes because the player acts?
- What does the player learn in the first minute?
- What can fail?
- What is the smallest playable proof?
- What would make this concept worth rejecting?

This review must not score ideas by excitement alone. It should judge whether a
concept can become a playable proof without losing the user's taste.

- [ ] Create `game-feel-review.md`.

Required questions:

- What is the input?
- What is the response?
- What is the camera doing?
- What confirms success?
- What confirms failure?
- What is the expected latency budget?
- What capture proves it?

- [ ] Create `level-design-review.md`.

Use level-flow and teaching-sequence lenses:

- path readability
- landmark use
- pacing
- low-pressure introduction
- practice
- variation
- combination
- recovery after error

- [ ] Create UX, art, and audio references.

UX:

- immediate goal clarity
- state visibility
- input mapping
- onboarding
- recovery
- accessibility impact

Art:

- visual hierarchy
- silhouette
- value
- color role
- material truth
- animation readability

Audio:

- confirmation sounds
- critical-state priority
- spatial information
- adaptive music
- subtitles and non-audio alternatives


## Player Walkthrough Review

- [ ] Create `skills/game-review-council/references/player-walkthrough-review.md`.

Required method:

- select one target persona and session context
- use the creator's taste profile or selected audience when the project came
  through Creative Discovery
- narrate the first 30 seconds, onboarding, first session, return session, and
  long-term loop when relevant
- state only what the current design or build proves
- mark unspecified moments as blind spots
- stop at phase boundaries when a real design decision is required

Required phase checkpoints:

- first visual impression
- first meaningful input
- first "I understand this" moment
- first failure and recovery
- first meaningful choice
- first natural stopping point
- first reason to return
- first monetization or public-promise touch if relevant

Output shape:

```markdown

## Persona

## Session Context

## Phase Findings

## Emotion Arc

## Blind Spots

## Churn Risks

## Next Proof
```
