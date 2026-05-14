# Round 5 Implementation Translation: Gate Changes

[Back to index](../01-template-and-schema-translation.md)

## Gate Changes

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
