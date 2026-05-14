# 03 Game Craft, Production, QA, And Release: Design Intent Survival

[Back to index](../03-game-craft-production-release.md)

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
