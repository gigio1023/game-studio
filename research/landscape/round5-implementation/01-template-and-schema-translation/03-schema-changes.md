# Round 5 Implementation Translation: Schema Changes

[Back to index](../01-template-and-schema-translation.md)

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
