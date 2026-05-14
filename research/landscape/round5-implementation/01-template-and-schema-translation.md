# Round 5 Implementation Translation

Research date: 2026-05-05

This note translates Round 4 research into concrete repository changes. It is
not a new research synthesis. It is an implementation map for small templates,
schemas, gates, skill contracts, examples, and docs updates.

Design rule for this round: prefer small, composable files over giant guides.
Do not add ceremony unless it changes a proof target, stop condition, verdict,
or human-owned decision.

## New Templates

### Entry And Direction

Add `core/templates/intake/reference-constraint-sheet.md`.

Fields:

- `Reference`
- `Specific moment`
- `Player action`
- `Object, rule, space, or system involved`
- `Resistance or uncertainty`
- `Perceived consequence`
- `Emotional or aesthetic response`
- `What not to copy`
- `Inferred design constraint`
- `Alternative interpretation`
- `Author-confirmed priority`
- `Contradiction with other references`
- `Next prototype question`

Update `core/templates/intake/beginner-taste-interview.md` instead of adding a
larger beginner guide.

New fields:

- `Specific Moment`
- `Player Action`
- `Perceived Consequence`
- `What Not To Copy`
- `Design Dimension Inference`
- `Author Must Preserve`
- `Productive Ambiguity`
- `Missing Decision`
- `Next Reference Constraint Sheet`

Add `core/templates/intake/auteur-systems-first-intake.md`.

Fields:

- `Starting material`: system, toy, formal constraint, personal statement,
  visual rule, narrative device, or aesthetic rule.
- `Why this must remain strange`
- `What player behavior should emerge`
- `What the agent must not normalize`
- `Smallest playable study`
- `What would make this no longer itself`
- `Human-only direction decision`

Add `core/templates/direction/human-only-decision-log.md`.

Fields:

- `Decision area`: taste, selected concept, Direction Lock, stage movement,
  public promise, kill/pivot/reboot.
- `Options AI proposed`
- `Option human accepted`
- `Options human rejected`
- `Reason in creator's words`
- `Decision AI is not allowed to make`
- `Revisit condition`

Update `core/templates/direction/concept-card.md`.

New fields:

- `Human-authored choice`
- `Could this be generic?`
- `Generated material used`
- `What was subtracted`
- `Fragile novelty risk`
- `Empty novelty risk`
- `Proof before more generation`

Update `core/templates/direction/concept-portfolio.md`.

New fields:

- `Intentional failure variants`: two worse variants per concept with named
  failure modes.
- `Review economy cut`: concepts removed before presentation and why.
- `Taste veto record`: if the creator rejects a recommendation, capture why.
- `Selected human decision log`

### Beginner Craft Exercises

Add these small exercise templates instead of one large curriculum document:

- `core/templates/direction/formal-elements-map.md`
- `core/templates/direction/experience-chain.md`
- `core/templates/direction/primary-verb-feel-sheet.md`
- `core/templates/direction/level-teaching-plan.md`
- `core/templates/evidence/beginner-playtest-report.md`
- `core/templates/direction/taste-preservation-decision.md`

`experience-chain.md` should use this shape:

```text
Desired player experience:
Runtime dynamic that could create it:
Mechanic or content rule that could produce that dynamic:
Non-mechanical material that matters:
What the player must understand:
What a playtest should show:
What players might appropriate:
Authorial choice to preserve:
```

`beginner-playtest-report.md` should require:

- `Research question`
- `Participant fit`
- `Scenario or task`
- `Observed behavior`
- `Player quote`
- `Designer inference`
- `Severity`
- `Confidence`
- `Proposed change`
- `Retest condition`

### Production And Proof

Add `core/templates/production/milestone-review-555.md`.

Fields:

- `Milestone`
- `Five wins`
- `Five losses`
- `Five changes`
- `Importance rank 1-5 for each item`
- `Owner`
- `Deadline`
- `Next proof affected`

Add `core/templates/production/concept-death-record.md`.

Fields:

- `Concept`
- `Decision trigger`
- `Failed proof targets`
- `Pre-committed targets`
- `Kill trigger taxonomy`: failed proof, other-game feeling, explainability
  failure, tepid response, proof-budget impossibility, pride-bar failure.
- `Evidence checked`
- `Owner verdict`
- `Human closeout note`
- `Salvageable work`
- `Carry-forward candidates`
- `Artifacts moved to archive`
- `Next route`

Add `core/templates/production/scope-crisis-record.md`.

Fields:

- `Remaining proof targets`
- `Largest uncertainty per target`
- `Cheapest proof that retires the largest uncertainty`
- `Cuts made`
- `Public promise impact`
- `Owner accepting the cut`
- `Revisit condition`

Add `core/templates/production/parallel-risk-plan.md`.

Fields:

- `Independent risks`
- `Why they can run in parallel`
- `Write or artifact boundaries`
- `Shared reviewers`
- `Separate proof budgets`
- `Conflict rule`
- `Dissolve condition`

Add `core/templates/production/temporary-cabal-contract.md`.

Fields:

- `Purpose`
- `Coordinator`
- `Decision owner`
- `Contributors`
- `Artifact boundaries`
- `Review cadence`
- `Dissolve condition`

Update `core/templates/production/milestone-contract.md`.

New fields:

- `Prototype Question`: should this game exist, and what player, audience, or
  thesis assumption would prove or disprove it?
- `Pre-committed Gate Metrics`
- `Tepid Response Rule`
- `Pride Bar`
- `Sustainability Blocker`
- `Generated Material Policy`
- `Candidate Next Proofs`
- `Vertical Slice Production Test`
- `Subtraction Evidence`

### Release And Player Operations

Add these small release templates:

- `core/templates/release/player-operations-plan.md`
- `core/templates/release/playtest-cohort-brief.md`
- `core/templates/release/early-access-readiness.md`
- `core/templates/release/patch-note-contract.md`
- `core/templates/release/feedback-digest.md`
- `core/templates/release/community-promise-register.md`
- `core/templates/release/telemetry-question-plan.md`
- `core/templates/release/accessibility-release-reality-checklist.md`
- `core/templates/release/localization-release-reality-checklist.md`
- `core/templates/release/launch-week-triage-rule.md`
- `core/templates/release/what-players-taught-us.md`

`player-operations-plan.md` should require:

- `Release lane`
- `Player promise`
- `Current-state disclosure`
- `Known risks`
- `Feedback channels`
- `Telemetry questions`
- `Community areas`
- `Moderation owner`
- `Support owner`
- `Accessibility claims`
- `Localization claims`
- `Patch-note cadence`
- `Next review date`

`feedback-digest.md` should require:

- `Top issues by severity`
- `Top issues by frequency`
- `Representative links or quotes`
- `Telemetry correlation`
- `Decision`
- `Non-decision rationale`
- `Owner`
- `Player-facing response`

### Evidence And Provenance

Update `core/templates/evidence/evidence-contract.md`.

New fields:

- `Generated material is not proof`: explicit checkbox.
- `Proof class`: implementation, design, player, accessibility, release.
- `Claim-to-proof mapping`
- `Telemetry question`
- `Known data bias`
- `Qualitative confirmation needed`
- `Consent or disclosure note`

Update `core/templates/evidence/artifact-ledger-entry.md`.

New fields:

- `AI provenance`: none, generated, generated then human-edited, placeholder,
  cannot ship without replacement or legal review.
- `Human selection made`
- `What this does not prove`
- `Deletion or collapse rule`

## Schema Changes

### `core/schemas/project-state.schema.json`

Add entry mode:

- `auteur-systems-first`

Add concept status:

- `KILLED`

Add optional fields:

- `authorityOwner`
- `currentHumanOnlyDecision`
- `publicOperationMode`: `none`, `playtest`, `demo`, `early-access`,
  `released`, `post-launch`.
- `playerOperationsPlan`
- `communityPromiseRegister`
- `activeGeneratedMaterialPolicy`

### `core/schemas/gate-verdict.schema.json`

Keep schema validation structural. Do not validate game quality.

Add required fields after migration:

- `reasoning`
- `reviewBasis`
- `terminalOutcome`

`reviewBasis` object:

- `observedFacts`: array of strings.
- `designInferences`: array of strings.
- `tasteJudgments`: array of strings.
- `publicClaimsChecked`: array of strings.
- `generatedMaterialChecked`: array of strings.

Add optional fields:

- `humanOnlyDecision`
- `nextSmallestProof`
- `stopCondition`
- `processHarmCheck`
- `falsePrecisionCheck`

Add rule in schema description and docs:

- Numeric scores for taste, fun, novelty, or quality are not allowed unless the
  field cites an observed metric, pre-committed threshold, or playtest count.

### `core/schemas/milestone.schema.json`

Replace string-only `experienceHypothesis` with an object shape while keeping
string compatibility during one migration wave.

Object fields:

- `targetPlayer`
- `specificFriction`
- `designMechanism`
- `intendedExperience`
- `falsificationCondition`

Add fields:

- `prototypeQuestion`
- `precommittedGateMetrics`
- `tepidResponseRule`
- `prideBar`
- `sustainabilityBlocker`
- `velocityBaseline`
- `verticalSliceProductionTest`
- `generatedMaterialPolicy`
- `subtractionEvidence`
- `candidateNextProofs`
- `publicExposurePlan`

`verticalSliceProductionTest` object:

- `firstUnit`
- `secondRepeatableUnit`
- `timeToFirstUnit`
- `timeToSecondUnit`
- `pipelineChangesAfterFirstUnit`
- `toolingExercised`
- `approvalWorkflowExercised`
- `costRisk`

### `core/schemas/evidence-contract.schema.json`

Add fields to each evidence item:

- `proofClass`
- `claimType`
- `buildIdentifier`
- `generatedMaterialStatus`
- `aiProvenance`
- `humanSelection`
- `consentOrDisclosure`
- `knownBias`
- `qualitativeFollowup`
- `staleAfter`

Add allowed `artifactType` vocabulary:

- `build`
- `screenshot`
- `video`
- `replay`
- `playtest note`
- `QA result`
- `telemetry sample`
- `decision record`
- `release check`
- `community feedback`
- `patch note`
- `store page capture`
- `accessibility check`
- `localization check`

## Gate Changes

### Direction Gates

Update `GS-ENTRY-ROUTE`.

New questions:

- Is `auteur-systems-first` the correct route because the creator starts from
  a formal constraint, toy, system, visual rule, or personal statement rather
  than taste references or carried direction?
- Is the next step blocked by a human-owned decision?

Add `GS-REFERENCE-CONSTRAINT`.

Question: Has a reference moment been translated into constraints without
copying or normalizing away the creator's taste?

Review:

- Moment, action, resistance, consequence, and response are separated.
- What not to copy is explicit.
- Agent interpretations are marked as inferences.
- Creator priority is recorded.
- Contradictions are preserved until the creator resolves them.

Add `GS-AUTEUR-SYSTEMS-FIRST`.

Question: Is the project allowed to begin from a system, constraint, toy,
personal statement, or aesthetic rule without forcing a generic player
experience target too early?

Review:

- Starting material is concrete.
- The agent names what must not be normalized.
- The next proof is a small playable study.
- The creator owns the direction decision after the study.

Update `GS-TASTE-CLARITY`.

New questions:

- What exact reference moment matters?
- What player action and perceived consequence created the response?
- What part of the user's personal taste must not be normalized away?
- Is the ambiguity productive, expressive roughness, missing decision, missing
  craft, incoherence, or overreach?

Update `GS-CONCEPT-SLATE`.

New questions:

- Could this artifact be recreated from genre tags without losing its identity?
- What human-authored choice makes each concept specific?
- What generated material was pruned before presentation?
- What did the slate subtract?
- Does every concept name one first proof before more generation?

Update `GS-CREATIVE-BRIEF`.

New questions:

- What decisions did AI propose, the human accept, and the human reject?
- What is AI not allowed to decide?
- Is the brief short enough to reduce ambiguity without elaborating an
  unproven idea into false precision?

Update `GS-PROTOTYPE-QUESTION`.

New questions:

- What proof budget exists before any generation or implementation?
- What is the cut criterion if the prototype gets a tepid response?
- What player behavior would disprove the assumption?
- Would the owner be proud to keep developing this if the proof technically
  works?

### Production Gates

Update `GS-PROTOCOL-PROOF`.

New questions:

- Is generated material tied to a player action, system response, visible
  consequence, capture, QA note, or playtest observation?
- What does the proof not prove?

Update `GS-CORE-LOOP`.

New questions:

- Did players understand but not want another run?
- If yes, is the next action cut, pivot diagnosis, or a smaller proof instead
  of feature expansion?

Update `GS-PREPRODUCTION-EXIT`.

New questions:

- Are kill, pivot, and reboot triggers predeclared?
- Is any required overtime recorded as a sustainability blocker?
- Are temporary work groups named with decision owners and dissolve
  conditions?

Update `GS-PRESENTATION-VALUE`.

New questions:

- Is presentation proving gameplay value, or hiding a missing core loop?
- What input, camera, animation, audio, feedback, and recovery variables are
  being tested for the primary verb?

Update `GS-VERTICAL-SLICE`.

New questions:

- What second repeatable unit was produced?
- How long did the second unit take compared with the first?
- What tooling, pipeline, approval, localization, accessibility, QA, and
  release workflows were exercised?
- What invisible deliverables remain unproven?

### Release Gates

Add `GS-PLAYTEST-COHORT`.

Question: Is this cohort designed to answer one production question without
creating public promise debt?

Review:

- Cohort question, invited audience, release lane, branch or app ID, start and
  end date, consent or data note, observation tasks, success threshold, and
  post-test decision meeting are explicit.

Add `GS-EARLY-ACCESS-READINESS`.

Question: Is the current build worth buying now without relying on future
promises?

Review:

- Durable current loop exists.
- Scope disclosure is honest.
- What players can affect is explicit.
- Save-break and known-risk warnings exist where relevant.
- Update cadence, support capacity, community rules, and store Q&A refresh
  owner exist.
- If not ready, use Playtest, private keys, demo, or closed community testing.

Add `GS-PLAYER-OPERATIONS`.

Question: Can the team sustain the feedback, support, moderation, patch-note,
accessibility, localization, and telemetry promises created by public play?

Review:

- Player operations plan exists.
- Feedback digest owner exists.
- Patch-note cadence exists.
- Accessibility and localization claims match the build.
- Telemetry questions are minimal, disclosed as needed, and paired with
  qualitative follow-up.

Update `GS-RELEASE-PROMISE`.

New questions:

- Are accessibility tags, store languages, in-game languages, subtitles,
  controls, support channels, and known limitations consistent?
- Are public roadmap items classified as commitment, intent, experiment, or
  rejected request?
- Is launch-week priority ordered around launch blockers, crashes, save
  corruption, progression blockers, accessibility blockers, server/login,
  entitlement, localization-breaking text, exploits, then feature requests?

## Skill Contract Changes

All skills should close with the same output fields. This is a contract, not a
style preference.

Required closure fields:

- `Status`
- `Active skill`
- `Entry mode`
- `Current stage or concept status`
- `Authority source`
- `Inspected artifacts`
- `Proof target`
- `Observed facts`
- `Design inferences`
- `Taste judgments`
- `Generated material status`
- `Missing proof`
- `Human-only decision`
- `Next smallest proof`
- `Next skill or gate`
- `Stop condition`
- `Terminal outcome`

Role review skills should also include:

- `Role stance`
- `Proof checked`
- `Internal evidence checked`
- `Player impact`
- `Production impact`
- `Confidence`
- `Blocker or advisory`
- `Required change`
- `Accepted risk`
- `Dissent`
- `Next proof`

`skills/game-onboarding/SKILL.md` should add:

- Route `auteur-systems-first`.
- Use `reference-constraint-sheet.md` before concept slate when the user starts
  from references.
- Ask for moment, action, consequence, and what not to copy before genre or
  engine.
- Stop at `USER_DECISION_NEEDED` for concept selection and Direction Lock.

`skills/game-director/SKILL.md` should add:

- Beginner teaching mode: preserve, clarify, compare, prototype, test, decide.
- Formalist mode: allow system-first or constraint-first direction before
  player-experience wording is stable.
- Required observed / inferred / taste split before verdict.
- Process harm check: is review preserving taste or making the project more
  conventional because conventional work is easier to review?

`skills/game-studio/SKILL.md` should add:

- Milestone contracts must include pre-committed metrics when external player
  data is expected.
- Vertical slice requires second-unit velocity and invisible deliverables.
- Public exposure requires player operations plan or a `NOT_READY` result.
- Overtime becomes a sustainability blocker, not hidden commitment.

`skills/game-review-council/SKILL.md` should add:

- Every review must separate observation, inference, and taste judgment.
- Generated concepts, assets, barks, scenes, NPC outputs, and prototypes are
  input material until tied to proof.
- Reviews must end with one of: pass gate, revise same proof, reduce scope,
  request player evidence, request implementation evidence, request release
  evidence, stop for human authority.

`skills/game-evidence-gate/SKILL.md` should add:

- Check claim-to-proof mapping.
- Check generated-material provenance.
- Check what each artifact does not prove.
- Treat telemetry as an investigation queue, not an automatic design verdict.

`skills/game-execution/SKILL.md` should add:

- For agent-authored implementation, require artifact ledger entries for
  generated content and player-facing changes.
- Require branch or worktree isolation where available for broad agentic edits.
- Do not expand public promises during implementation.

## Example Projects Needed

Add or extend examples only when they demonstrate a route, proof, review, or
stop condition. Do not create large showcase projects.

Add `examples/sample-auteur-systems-first/`.

Required artifacts:

- system-first intake
- one formal constraint or toy
- smallest playable study
- taste-preservation decision
- first proof review

Add `examples/sample-beginner-reference-translation/`.

Required artifacts:

- beginner taste interview
- two reference constraint sheets
- concept portfolio with intentional failure variants
- human-only decision log
- first playable proof contract

Add `examples/sample-player-operations/`.

Required artifacts:

- playtest cohort brief
- telemetry question plan
- feedback digest
- patch note contract
- what players taught us note

Extend existing or planned examples:

- `examples/sample-direction-carry-in/`: include protected direction, missing
  proof audit, and no direction overwrite.
- `examples/sample-brownfield-unknown/`: include playable truth versus written
  claims, authority uncertainty, and `USER_DECISION_NEEDED`.
- `examples/sample-playable-proof/`: include tiny runnable proof, capture note,
  playtest note, council review, and next proof after `CONCERNS`.

## Documentation Index Updates

Update `docs/README.md`.

Add rows:

- `Player Operations` -> `docs/player-operations.md`
- `Beginner Craft Exercises` -> `docs/beginner-craft-exercises.md`
- `AI Provenance And Anti-Slop` -> `docs/ai-provenance-and-anti-slop.md`

Add `docs/player-operations.md`.

Keep it short. Link to release templates and explain Playtest, demo, Early
Access, beta branch, default release, support, moderation, telemetry,
accessibility, localization, and patch notes as distinct operating areas.

Add `docs/beginner-craft-exercises.md`.

Keep it as an index over the exercise templates. Do not reproduce the canon.
Link to `docs/beginner-taste-to-game.md` and the new direction/evidence
templates.

Add `docs/ai-provenance-and-anti-slop.md`.

Keep it operational:

- Generated material is not proof.
- False precision ban.
- Review economy rule.
- AI provenance field.
- Taste veto rule.
- Play before explaining.
- Subtraction evidence.

Update `docs/beginner-taste-to-game.md`.

Add:

- Reference-to-constraint method.
- Formalist / auteur route link.
- Beginner critique protocol: preserve, clarify, compare, prototype, test,
  decide.
- Canon-flattening anti-pattern link.

Update `docs/entry-model.md`.

Add:

- `auteur-systems-first` as a fourth entry route.
- Stop conditions for human-owned concept, Direction Lock, and taste veto.

Update `docs/validation-gates.md`.

Add:

- Generated material is not proof.
- Claim-to-proof mapping.
- Telemetry bias and qualitative follow-up.
- Artifact provenance.

Update `docs/production-layer.md`.

Add:

- prototype versus vertical slice distinction
- concept death record
- scope crisis record
- parallel risk plan
- temporary cabal contract
- sustainability blocker

Update `docs/director-layer.md`.

Add:

- pillars optional for solo work
- process harm check
- observed / inferred / taste split

Update `docs/product-boundary.md`.

Add public positioning:

```text
Not a game generator: a taste-to-prototype guidance layer that turns AI output into playable
proofs, reviews, gates, and human decisions.
```

Update `docs/anti-patterns.md`.

Add:

- `AI slop as proof`
- `false precision`
- `canon flattening`
- `paid prototype trap`
- `feedback theater`
- `metrics absolutism`

Update `research/landscape/README.md`.

Add Round 4 and Round 5 sections:

- Round 4: agentic co-creation, design pedagogy, live ops/community, studio
  operations, contrarian quality.
- Round 5: implementation translation.

Update `docs/improvement/value-review/README.md`.

Add this Round 5 implementation note as the handoff from research into
implementation sequencing.

## Suggested Implementation Order

1. Schema safety first.
   - Add `KILLED`, `auteur-systems-first`, gate verdict `reviewBasis`, and
     evidence provenance fields.
   - Keep compatibility where templates currently use strings.

2. Add the smallest entry templates.
   - `reference-constraint-sheet.md`
   - `auteur-systems-first-intake.md`
   - `human-only-decision-log.md`
   - Update beginner taste interview, concept card, and concept portfolio.

3. Update gate text.
   - Add `GS-REFERENCE-CONSTRAINT`, `GS-AUTEUR-SYSTEMS-FIRST`,
     `GS-PLAYTEST-COHORT`, `GS-EARLY-ACCESS-READINESS`, and
     `GS-PLAYER-OPERATIONS`.
   - Tighten existing prototype, concept slate, vertical slice, and release
     questions.

4. Update skill closure contracts.
   - Apply the shared closure fields to all skills.
   - Add observed / inferred / taste split to review and director paths.
   - Add generated-material provenance to evidence and execution paths.

5. Add production crisis templates.
   - `concept-death-record.md`
   - `scope-crisis-record.md`
   - `parallel-risk-plan.md`
   - `temporary-cabal-contract.md`
   - `milestone-review-555.md`

6. Add release/player-operations templates.
   - Start with `player-operations-plan.md`, `playtest-cohort-brief.md`,
     `feedback-digest.md`, `patch-note-contract.md`, and
     `telemetry-question-plan.md`.
   - Add the accessibility, localization, launch-week, Early Access, and
     what-players-taught-us templates next.

7. Add beginner craft exercise templates.
   - Add the six small exercise files.
   - Link them from a short docs index instead of writing a large curriculum.

8. Build examples.
   - Add beginner reference translation and auteur-systems-first examples.
   - Then add player operations.
   - Then extend direction carry-in, brownfield unknown, and playable proof.

9. Update docs indexes and public boundary.
   - Keep public copy concise.
   - Keep proof language public and evidence language internal.

10. Add eval fixtures after examples exist.
    - Test vague beginner taste, systems-first start, existing direction,
      brownfield unknown, premature vertical slice, missing proof, public
      promise drift, role dissent, and generated-material-as-proof failure.
