# Game Studio Evolution Handoff

Date: 2026-05-05

## Adopted Direction

Game Studio now presents itself as a discovery-driven, milestone-gated playable validation AI game
production system.

The core product loop is:

```text
Taste or Direction -> Concept Brief -> First Playable -> Role-Led Game Review -> Milestone Decision -> Next Build
```

Public docs should use proof, playable validation, proof target, proof budget,
milestone-gated playable validation, validation, and claim-to-proof. Evidence remains an internal
artifact term for builds, captures, playtest notes, QA results, decision
records, schemas, and release claim checks.

## Main Changes

- README now leads with the product identity, entry paths, operating loop, and
  quick starts for Codex and Claude Code.
- Entry routing is first-class through `direction-carry-in`, `taste-to-game`,
  and `brownfield-unknown`.
- Creative discovery now has intake, taste profile, concept portfolio, creative
  brief, proof budget, constraint ladder, first prototype, and first playable
  proof artifacts.
- Gate routing now includes pre-direction gates:
  `GS-ENTRY-ROUTE`, `GS-TASTE-CLARITY`, `GS-CONCEPT-SLATE`,
  `GS-CREATIVE-BRIEF`, and `GS-PROTOTYPE-QUESTION`.
- Agent adapters and skills now route missing direction through onboarding
  before Direction Lock.
- Review council now has craft references for game feel, level design, UX, art,
  audio, walkthroughs, design intent survival, accessibility, and release.
- Schemas now allow proof-oriented gate verdicts and project state.
- The sample project now demonstrates a taste-to-game path with a `CONCERNS`
  first playable review and a next proof.

## Important Boundaries

- Human creators own taste, selected concept, Direction Lock, stage movement,
  and public promises.
- AI agents may propose concepts, compare tradeoffs, draft briefs, implement
  bounded proofs, and recommend next proof.
- Repository health scripts are contributor hygiene. They are not game-quality
  proof.
- Do not treat a concept slate as production approval.
- Do not call a prototype a vertical slice before the core loop is proven.

## Files To Read First

- `README.md`
- `docs/product-boundary.md`
- `docs/entry-model.md`
- `docs/beginner-taste-to-game.md`
- `docs/operating-model.md`
- `core/workflows/stage-model.md`
- `core/workflows/workflow-catalog.yaml`
- `skills/game-onboarding/SKILL.md`
- `examples/sample-project/README.md`

## Verification Run

- `node tools/check-repository.mjs`
- `git diff --check`
- Markdown local link scan
- JSON parse check for `core/schemas/*.json`

## Remaining Risks

- The framework still has no install manifest or automated adapter dry-run.
- There is no dedicated link-check script in `tools/`; the current link check
  was run as an ad hoc Node command.
- No sample exists yet for `direction-carry-in` or `brownfield-unknown`.
- No engine-specific project has been installed from this new flow yet.
- Some plan documents remain broader than the current implementation and should
  be treated as future source material, not completed scope.
