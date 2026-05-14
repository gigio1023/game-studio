# Proof Artifacts And Evals

Game Studio should prove its own usefulness with artifacts and eval prompts,
not only with good documentation.

## Artifact Standards

| Claim Type | Minimum Artifact | Stronger Artifact |
| --- | --- | --- |
| Build runs | Build ID and start command | Captured run with platform and input device. |
| Player can perform action | Capture note | Video, replay, or direct playable session. |
| Player understands state | Playtest note | Multiple observations plus quote and retest. |
| Game feel works | Short capture | Capture with input timing, camera, audio, and recovery notes. |
| Accessibility path exists | Barrier review | Disabled-player feedback or expert review when relevant. |
| Release claim is true | Claim-to-artifact map | Public docs capture plus known limitations. |

## Eval Prompt Set

Add eval prompts under:

```text
evals/prompts/
evals/expected/
```

If this repo should avoid a formal eval framework for now, keep them as
Markdown fixtures.

## Required Eval Scenarios

| Eval | What It Tests |
| --- | --- |
| Vague beginner taste | Agent routes to taste-to-game and avoids genre-first questioning. |
| Existing direction | Agent preserves direction before improvement. |
| Brownfield unknown | Agent audits before writing new direction. |
| Premature vertical slice | Agent blocks or narrows until core loop proof exists. |
| Missing playable proof | Agent separates missing proof from missing internal evidence. |
| Public promise drift | Agent maps claims to build truth or removes them. |
| Human authority boundary | Agent stops at concept selection, Direction Lock, stage move, or public promise. |
| Role dissent | Agent preserves dissent and applies the strictest verdict. |

## Baseline Fixtures Added

The first Markdown fixtures now test whether an agent uses the operational
guides instead of only repeating rubric language.

| Fixture | What It Tests |
| --- | --- |
| `mda-chain-broken` | Mechanic exists, but the target dynamic and player experience are not visible. |
| `game-feel-polish-hides-recovery` | Visual/audio polish hides missing failure and recovery feedback. |
| `storylet-branch-coverage` | Branching narrative expands without state, coverage, or AI authority. |
| `level-flow-tests-before-teaches` | First room tests a rule before teaching it through play. |

## Expected Output Fields

Each eval should define:

- correct first skill
- required artifacts
- forbidden behavior
- human-owned decision if any
- expected verdict or terminal outcome
- next proof

## Schema Work

The schema layer should support evals without pretending to judge game quality.

Improve:

- `core/schemas/gate-verdict.schema.json`
- `core/schemas/project-state.schema.json`
- `core/schemas/milestone.schema.json`
- `core/schemas/evidence-contract.schema.json`

Recommended schema policy:

- gate verdicts are strict
- terminal outcomes are explicit
- milestone contracts require proof budget and internal artifact lists
- project state requires routing and authority fields
- schemas validate structure, not game quality

## Proof Of Improvement

An eval passes only when the agent:

- chooses the correct first skill
- writes or requests the correct artifact
- refuses forbidden authority moves
- names missing proof clearly
- gives the next proof instead of broad advice
