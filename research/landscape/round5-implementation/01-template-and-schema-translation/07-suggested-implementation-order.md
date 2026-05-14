# Round 5 Implementation Translation: Suggested Implementation Order

[Back to index](../01-template-and-schema-translation.md)

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
