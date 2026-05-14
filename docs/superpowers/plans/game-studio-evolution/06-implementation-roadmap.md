# 06 Implementation Roadmap

## Objective

Sequence the work so Game Studio improves coherently without turning into a giant rewrite.

## Phase 0: Research Lock And Source Decisions

- [ ] Keep [07-deep-source-notes.md](07-deep-source-notes.md) as the source
  synthesis for this plan.
- [ ] Keep [08-creative-discovery-novice-authorship.md](08-creative-discovery-novice-authorship.md)
  as the source for entry routing, taste-to-game, and playable-validation product
  language.
- [ ] Add adopted and rejected concepts to `docs/source-adoption-policy.md` when
  Phase 2 creates that file.
- [ ] Decide which ideas become core, profile, pack, adapter, contributor, or
  rejected concepts before implementation starts.
- [ ] Adopt `AI-assisted, playable-validation` as the public product phrase.
- [ ] Keep `evidence` as an internal ledger/schema term only.

Commit:

```bash
git add docs/superpowers/plans/game-studio-evolution
git commit -m "docs: deepen game studio evolution plan"
```

## Phase 1: Entry And Creative Discovery

- [ ] Add `docs/entry-model.md`.
- [ ] Add `docs/beginner-taste-to-game.md`.
- [ ] Add `docs/concept-development-method.md`.
- [ ] Add `docs/plain-language-game-design-glossary.md`.
- [ ] Add `skills/game-onboarding`.
- [ ] Add `skills/game-taste-interviewer`.
- [ ] Add `skills/game-concept-guide`.
- [ ] Add `skills/game-concept-portfolio`.
- [ ] Add `skills/game-direction-crystallizer`.
- [ ] Add `skills/game-scope-shaper`.
- [ ] Add `skills/game-prototype-planner`.
- [ ] Add intake, taste profile, concept card, concept portfolio, creative brief,
  constraint ladder, idea parking lot, and first prototype contract templates.
- [ ] Add pre-direction gates for entry route, taste clarity, concept slate,
  creative brief, constraint ladder, and prototype question.
- [ ] Update Codex and Claude bootstrap docs so they ask whether the project is
  carrying in an existing direction or turning taste/references into a game.

Commit:

```bash
git add docs/entry-model.md docs/beginner-taste-to-game.md docs/concept-development-method.md docs/plain-language-game-design-glossary.md skills/game-onboarding skills/game-taste-interviewer skills/game-concept-guide skills/game-concept-portfolio skills/game-direction-crystallizer skills/game-scope-shaper skills/game-prototype-planner core/templates/intake core/templates/direction core/templates/production core/gates/direction.md adapters/claude/bootstrap.md adapters/codex/bootstrap.md
git commit -m "feat: add creative discovery entry flow"
```

## Phase 2: Product Boundary And State

- [ ] Add `docs/product-boundary.md`.
- [ ] Add `docs/source-adoption-policy.md`.
- [ ] Add `entryMode`, `conceptStatus`, `directionSource`,
  `gameDevFluency`, and `explanationMode` to project state.
- [ ] Add `core/references/agent-operating-ethos.md`.
- [ ] Add project-local state reference, templates, and schemas.
- [ ] Add hot index plus sharded ledgers for proof, drift, decision, review,
  concept, playtest, and handoff state.
- [ ] Add state transition outcomes for done, done with concerns, blocked,
  needs context, failed, and user decision needed.
- [ ] Require explicit decision records for stage advancement.
- [ ] Update README and operating model to use the new product identity.

Commit:

```bash
git add README.md docs/product-boundary.md docs/source-adoption-policy.md docs/philosophy.md docs/operating-model.md core/references/agent-operating-ethos.md core/references/project-state-model.md core/templates/production core/schemas/project-state.schema.json core/schemas/proof-ledger.schema.json core/schemas/review-log-entry.schema.json adapters/claude/bootstrap.md adapters/codex/bootstrap.md
git commit -m "docs: define game studio operating substrate"
```

## Phase 3: Proof Protocol And Navigation

- [ ] Add review proof and internal evidence standard.
- [ ] Extend gate verdict and evidence schemas.
- [ ] Add game navigator skill.
- [ ] Add adoption audit skill.
- [ ] Add advisory diff-scope routing.
- [ ] Add risk-based review tiers so small internal edits do not trigger full
  council review.
- [ ] Add next-proof routing to every gate and task completion output.
- [ ] Route missing direction to Creative Discovery instead of forcing Direction
  Lock templates.

Commit:

```bash
git add core/references/review-evidence-standard.md core/schemas/evidence-contract.schema.json core/schemas/gate-verdict.schema.json skills/game-navigator skills/game-adoption tools/audit-project.mjs tools/check-diff-scope.mjs core/schemas/adoption-audit.schema.json core/schemas/diff-scope.schema.json core/workflows/workflow-catalog.yaml core/roles/coordination-rules.md
git commit -m "feat: add proof routing and adoption audits"
```

## Phase 4: Game Craft And QA

- [ ] Add feel, level, UX, art, audio, accessibility, and release review references.
- [ ] Add player walkthrough, design-intent survival, and mode-weighted design
  review references.
- [ ] Add concept playability review for pre-direction projects.
- [ ] Expand moment-to-moment, playtest, and accessibility rubrics.
- [ ] Add playtest triangulation rules for observation, metric, and interview
  evidence.
- [ ] Expand evidence, playtest, and bug triage templates.

Commit:

```bash
git add skills/game-review-council/references core/rubrics/moment-to-moment-rubric.md core/rubrics/playtest-rubric.md core/rubrics/accessibility-rubric.md core/templates/evidence core/templates/qa/bug-triage.md
git commit -m "docs: deepen game craft and qa review"
```

## Phase 5: Production And Release

- [ ] Expand milestone contract and schema.
- [ ] Add first prototype contract and proof budget fields.
- [ ] Add release material checks.
- [ ] Add demo readiness, credits, support, and post-release templates.
- [ ] Update production and release gates.

Commit:

```bash
git add core/templates/production/milestone-contract.md core/schemas/milestone.schema.json core/references/release-material-checks.md core/templates/release core/gates/production.md core/gates/release.md docs/validation-gates.md
git commit -m "docs: expand production and release proof"
```

## Phase 6: Install, Adapters, And Contributor Hygiene

- [ ] Add optional Claude hook examples.
- [ ] Add Codex checks README.
- [ ] Add install and upgrade docs.
- [ ] Add planned install, dry-run report, ownership matrix, and installed-state
  ledger.
- [ ] Add framework manifest and manifest/skill checks.
- [ ] Add adapter source-of-truth policy.
- [ ] Add optional automation loop safety pack.
- [ ] Add issue/support routing, PR shape, AI contribution disclosure, and
  security reporting policy.
- [ ] Move repository health command emphasis into `CONTRIBUTING.md`.
- [ ] Document that generated concept slates and direction changes require
  user-accepted decision records.

Commit:

```bash
git add adapters/claude/hooks adapters/codex/checks docs/install-and-upgrade.md docs/brownfield-adoption.md docs/starter-paths.md game-studio.manifest.json core/schemas/framework-manifest.schema.json tools/check-manifest.mjs tools/check-skills.mjs CONTRIBUTING.md adapters/claude/bootstrap.md adapters/codex/bootstrap.md
git commit -m "feat: add install manifest and contributor checks"
```

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
