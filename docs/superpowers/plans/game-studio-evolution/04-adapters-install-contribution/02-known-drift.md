# 04 Adapters, Install, And Contribution Hygiene: Known Drift

[Back to index](../04-adapters-install-contribution.md)

## Known Drift

## Next Upgrade Check
```

- [ ] Create `docs/starter-paths.md`.

Starter paths:

- taste-to-game
- existing direction
- blank idea
- existing prototype
- game jam project
- commercial indie
- narrative-heavy game
- public demo preparation
- release candidate rescue
- live game patch

Each path lists:

- entry mode
- first skill
- required artifacts
- first proof
- likely roles
- common backtrack

The `blank idea` path should be reframed as `taste-to-game`. It should not ask
novice creators to fill a game thesis before eliciting taste, reference moments,
desired emotion, hard noes, complexity tolerance, and first proof appetite.


## Framework Manifest

- [ ] Create `game-studio.manifest.json`.

Top-level shape:

```json
{
  "name": "game-studio",
  "version": "0.1.0",
  "core": [],
  "profiles": [],
  "adapters": [],
  "skills": [],
  "tools": [],
  "schemas": []
}
```

- [ ] Create `core/schemas/framework-manifest.schema.json`.

- [ ] Implement `tools/check-manifest.mjs`.

Checks:

- manifest JSON parses
- every path exists
- listed schemas parse
- listed skills have frontmatter
- listed adapter paths exist

- ownership is declared for every installable path
- generated files name their source template
- adapter files name their canonical core reference when applicable
- no manifest entry treats repository hygiene scripts as product gates


## Adapter Source Of Truth

- [ ] Add `docs/adapter-source-of-truth.md`.

Rules:

- Core stage semantics live in `core/`.
- Runtime-specific bootstrap wording lives in `adapters/`.
- Generated snippets must name the source file and generation command.
- Hand-edited adapter divergence requires a short decision note.
- Optional hooks may add warnings or context, but must not replace gate verdicts.


## Optional Loop Safety Pack

- [ ] Add `packs/automation-loop-safety/README.md`.

This pack is optional and should not be installed by default.

Required safeguards:

- max iterations
- max wall-clock duration
- rate-limit backoff
- circuit breaker after repeated equivalent outputs
- stop when no meaningful continuation remains
- stop when a user decision is required
- durable run log
- no autonomous direction rewrite without decision record
- no autonomous taste ownership
- stop when concept selection, Direction Lock, stage movement, or public promise
  requires user authority

- [ ] Implement `tools/check-skills.mjs`.

Checks:

- `SKILL.md` line count under local rubric limit
- frontmatter has `name` and `description`
- referenced files exist
- no skill requires running every role by default


## CONTRIBUTING Updates

- [ ] Move repository health commands into `CONTRIBUTING.md`.

Contributor commands:

```bash
node tools/check-repository.mjs
node tools/check-manifest.mjs
node tools/check-skills.mjs
```

Frame them as contributor checks, not proof that Game Studio works for a game.

- [ ] Add issue and support routing to `CONTRIBUTING.md`.

Required routing:

- Usage questions go to discussions or support, not bug issues.
- Bugs require reproducible steps, expected result, actual result, Game Studio
  version or commit, adapter used, and minimal target-repo state.
- Feature proposals require problem, target user, affected workflow, and why
  existing profiles, packs, or adapters do not cover it.
- Domain-knowledge contributions should name the affected role, rubric,
  template, or reference file.

- [ ] Add pull request shape to `CONTRIBUTING.md`.

Required PR rules:

- one behavioral change per PR
- test plan or explicit reason tests do not apply
- docs update when changing public commands, install paths, schemas, adapters,
  skills, templates, or gate behavior
- no broad stylistic refactor unless it enables a named fix
- evidence for AI-assisted generated changes when the diff is substantial

AI-assisted concept generation:

- disclose substantial AI-generated concept slates, direction rewrites, or
  creative-brief drafts
- identify the user decision record that accepted the direction
- do not submit bulk concept catalogs without proof budgets or rejection notes

- [ ] Add AI contribution disclosure.

Required policy:

- Contributors disclose substantial AI-assisted code or documentation generation.
- Maintainers may ask for a human explanation of intent, risk, and verification.
- Undisclosed or unverifiable generated bulk changes may be closed.
