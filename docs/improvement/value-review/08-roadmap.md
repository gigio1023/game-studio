# Roadmap

This roadmap sequences the value improvements into small, reviewable waves.

## Wave 1: Commit Current Consistency Fixes

Purpose: stabilize the active local fixes before adding larger product work.

Work:

- Keep README concise and below the health-check limit.
- Keep `expert` as the canonical creator fluency value.
- Separate gate verdict from terminal outcome.
- Keep stage name mapping documented.
- Add the creative director playbook.
- Decide whether to keep or refine the proof-loop diagram iteration arrow.

Review:

- `node tools/check-repository.mjs`
- `git diff --check`
- visual inspection of the README diagram
- schema parse check

## Wave 2: Add Skill Navigator

Purpose: make agents choose the right workflow before acting.

Work:

- Add `skills/game-navigator/`.
- Add `core/references/skill-routing.md`.
- Add a routing matrix to active skill references.
- Align terminal outcome language across skills and templates.

Review:

- Run eval prompts for vague taste, carried direction, brownfield audit,
  missing proof, and public promise drift.

## Wave 3: Prove All Entry Modes

Purpose: make the product promise credible across real user states.

Work:

- Add `examples/sample-direction-carry-in/`.
- Add `examples/sample-brownfield-unknown/`.
- Add or link one tiny playable proof example.
- Update `examples/README.md` to index all paths.

Review:

- A fresh reviewer can follow each entry path from start context to next proof
  or stop condition.

## Wave 4: Deepen Role Reviews

Purpose: make role playbooks produce production judgment.

Work:

- Add release manager, accessibility lead, level designer, localization lead,
  and community marketing lead playbooks.
- Add strong proof, weak proof, blocker, and advisory sections to key playbooks.
- Update council review template and sample reviews.

Review:

- A council review preserves dissent and applies the strictest verdict.
- Human-owned decisions route to `USER_DECISION_NEEDED`.

## Wave 5: Add Proof Artifact And Eval Fixtures

Purpose: measure whether Game Studio changes agent behavior.

Work:

- Add Markdown eval prompts and expected outputs.
- Add proof artifact standards.
- Tighten schema required fields where they represent operating contracts.
- Add link or structure checks for examples if useful.

Review:

- Agents consistently pick the intended first skill and stop condition.
- Missing proof is not confused with missing repository structure.

## Wave 6: Improve Adapter Distribution

Purpose: make installation dependable without creating a heavy product.

Work:

- Add adapter manifest and install check docs.
- Clarify Codex and Claude Code installation differences.
- Optionally add Claude subagent guidance.
- Run a scratch target install dry-run.

Review:

- The installed target repo has project-local state, skills, snippets, and first
  route guidance without global dependencies.

## Wave 7: Public Docs And Archive Cleanup

Purpose: keep the public repo focused on the product, not internal planning
history.

Work:

- Keep README and diagram aligned with public docs and release copy.
- Sanitize or archive internal plan docs that include personal paths or
  tool-specific instructions.
- Keep contributor checks in contributor docs.

Review:

- A first-time reader can understand the product without seeing internal
  planning scaffolding.
- The repository health check remains green.

## Continued Waves

Rounds 4-5 added a larger research-backed implementation map. Keep this page as
the stabilization roadmap for waves 1-7, then continue with
[Implementation Map From Rounds 4-5](20-implementation-map-round4-5.md).
