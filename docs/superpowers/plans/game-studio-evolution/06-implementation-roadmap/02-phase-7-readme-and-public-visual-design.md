# 06 Implementation Roadmap: Phase 7: README And Public Visual Design

[Back to index](../06-implementation-roadmap.md)

## Phase 7: README And Public Visual Design

- [ ] Rewrite README around product identity and operating loop.
- [ ] Create README hero system map.
- [ ] Create public docs and release copy guide.
- [ ] Replace evidence-heavy public copy with playable-validation product language while
  keeping evidence as an internal artifact term.
- [ ] Add taste-to-game and existing-direction entry paths to the first-screen
  explanation.
- [ ] Apply OSS-inspired routing: product docs, adoption, contribution,
  community, support, and security must each have a clear lane.
- [ ] Add repository/source, installed framework, and adapter
  distinctions to the README.
- [ ] Update visual and publication readiness reviews.
- [ ] Update examples README routing.

Commit:

```bash
git add README.md docs/assets docs/public-docs-and-release-copy.md docs/community/visual-readiness-review.md docs/community/publication-readiness-review.md examples/README.md
git commit -m "docs: improve readme and public visual presentation"
```


## Phase 8: Sample Project Full Loop

- [ ] Expand `examples/sample-project` into a complete installed example.
- [ ] Show one taste-to-game path from beginner intake to concept slate.
- [ ] Add project state, proof ledger, direction docs, milestone, evidence contract, council review, and playtest note.
- [ ] Show at least one `CONCERNS` verdict and one next proof.

Commit:

```bash
git add examples/sample-project
git commit -m "docs: expand sample project proof loop"
```


## Phase 9: Final Handoff

- [ ] Create `research/continuity/2026-05-05-game-studio-evolution-handoff.md`.
- [ ] Record adopted ideas, rejected ideas, remaining risks, and next lanes.

Commit:

```bash
git add research/continuity/2026-05-05-game-studio-evolution-handoff.md
git commit -m "docs: record game studio evolution handoff"
```


## Verification Expectations

Product verification:

- A target repo can start from existing direction, taste-to-game discovery, or
  ambiguous brownfield adoption.
- A target repo can follow the operating loop.
- Evidence contracts map claims to proof.
- Role reviews produce verdicts, confidence, missing evidence, and next proof.
- README explains the system without contributor tooling noise or evidence-heavy
  product language.

Contributor hygiene:

- Repository scripts parse schemas and detect broken references.
- These checks are documented in `CONTRIBUTING.md`, not treated as game-quality proof.


## Risk Controls

### Bloat

Every added artifact must answer:

- what decision it improves
- what evidence it produces
- when it should not run

### False Precision

Scores require evidence, confidence, and missing-evidence notes.

### Idea Spam

Concept generation must produce a small concept slate with proof budgets,
rejection reasons, and a selected next proof. Large unfiltered idea catalogs are
not acceptable outputs.

### AI Taste Ownership

AI may propose, compare, implement, and review, but user taste, Direction Lock,
stage movement, and public promises require an explicit decision record.

### Adapter Lock-In

Canonical behavior remains in `core/`; runtime specifics stay in adapters.

### Process Overload

Keep `solo`, `lean`, and `full` modes. Stage and risk determine review depth.

### Visual Overreach

The README needs one clear hero and one operating loop. Detailed diagrams belong in docs.
