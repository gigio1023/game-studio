# 03 Game Craft, Production, QA, And Release

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

## Design Intent Survival

- [ ] Create `skills/game-review-council/references/design-intent-survival.md`.

Use this before generic implementation review when a diff affects gameplay,
camera, input, UI timing, feedback, level flow, economy, narrative triggers, or
save/load behavior.

Checks:

- selected concept, creative brief, and first proof are still recognizable after
  implementation
- handoff acceptance criteria still have code or content paths
- "soul" of the mechanic is protected by test, data, assertion, comment, or
  explicit tuning owner
- in-scope, placeholder-ok, and out-of-scope items still match the handoff
- gameplay values match the design or record an intentional tuning decision
- refactors did not silently change player experience through update order,
  collision priority, iteration order, defaults, or event names

## Playtest Triangulation

- [ ] Expand `core/rubrics/playtest-rubric.md`.

Adopt this evidence strength model:

- one source: hypothesis, investigate only
- two sources: pattern, schedule or prioritize
- three sources: high-confidence finding, block or fix depending on severity

Source types:

- observation: player behavior, hesitation, body language, timing
- metric: completion rate, time, count, retry, churn point
- interview: player words, separated from facilitator interpretation

Add severity by frequency:

- critical plus high frequency: fix before next playtest
- critical plus segment frequency: investigate root cause and likely fix
- high plus high frequency: fix in next sprint
- medium or low: backlog unless tied to milestone proof

Creative discovery use:

- before a playable build exists, treat walkthroughs, paper prototypes, and
  reference analysis as weak proof only
- after the first playable proof exists, prefer observation over opinion
- do not turn "I like this concept" into production approval without a prototype
  question and a review verdict

## Mode-Weighted Craft Review

- [ ] Add mode weights to `core/rubrics/game-design-doc-rubric.md`.

Required modes:

- mobile or short-session
- PC or console
- multiplayer or competitive
- narrative-heavy
- tabletop or rules-first

Each mode should adjust relative weight for:

- core loop clarity and depth
- session fit
- progression and retention
- economy and monetization
- player motivation
- system coherence
- accessibility and input fit

## Moment-To-Moment Rubric

- [ ] Update `core/rubrics/moment-to-moment-rubric.md`.

Every critical moment should ask:

```text
Verb -> Read -> Risk -> Response -> Learning -> Evidence
```

Score only when evidence exists. If evidence is missing, mark the moment unproven.

## QA And Accessibility

- [ ] Create `accessibility-review.md`.

Barrier categories:

- motor
- vision
- hearing
- cognitive
- speech
- general settings

Each barrier records:

- player impact
- current support
- missing access path
- evidence
- release claim impact

- [ ] Expand `core/templates/evidence/playtest-report.md`.

Add:

- research question
- participant profile
- task scenario
- build id
- capture path
- observed behavior
- participant quote
- facilitator inference
- severity
- recommendation
- confidence
- retest status

- [ ] Expand `core/templates/qa/bug-triage.md`.

Separate:

- severity
- priority
- affected player group
- workaround
- owner
- verification step
- waiver status

## Production And Milestone Contracts

- [ ] Expand `core/templates/production/milestone-contract.md`.

Add:

```markdown
## Direction Source
## Selected Concept
## Proof Budget
## Research Question
## Experience Hypothesis
## Deliverables
## Quality Criteria
## Dependencies
## QA Walkthrough
## Review Roles
## Expected Media
## Exit Decision
```

- [ ] Add `core/templates/production/first-prototype-contract.md`.

Required headings:

```markdown
# First Prototype Contract

## Selected Concept
## Prototype Question
## Player Moment To Prove
## What To Ignore
## What To Build
## What To Capture
## What Would Change The Direction
## Stop Condition
```

- [ ] Update `core/schemas/milestone.schema.json`.

Require enough fields to prevent task-list milestones:

```json
["id", "name", "stage", "goal", "researchQuestion", "qualityCriteria", "requiredEvidence", "gates", "exitDecision"]
```

## Release Material

- [ ] Create `core/references/release-material-checks.md`.

Include:

- Steam build and store review.
- demo eligibility and timing.
- public page truth.
- screenshots and trailer claims.
- credits.
- localization.
- accessibility feature claims.
- support path.
- archive readiness.

- [ ] Create release templates:

```text
core/templates/release/demo-readiness.md
core/templates/release/credits-record.md
core/templates/release/support-plan.md
core/templates/release/post-release-retro.md
```

## Acceptance

- Creative Discovery produces proof-ready concept artifacts, not only polished
  prose.
- Presentation Value Gate requires capture for camera, input, UI, visual hierarchy, audio, and performance risk.
- Core Loop Prototype and Vertical Slice require playtest evidence with participant fit and retest status.
- Release Candidate requires public claim-to-evidence mapping.
- Credits and support are release scope, not afterthoughts.
