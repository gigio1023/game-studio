# Direction Review

Use these checklists when judging whether direction artifacts are solid enough
to build on. Return `READY`, `CONCERNS` (can advance with accepted risk), or
`NOT_READY` (advancing would create false confidence). Return
`USER_DECISION_NEEDED` instead of approving when the call belongs to the human.

Check the chain, not the nouns in the pitch: a story premise, a feature list,
or the word "fun" without observable player behavior is not direction.

## Thesis

- The player role is concrete.
- The core pressure is playable, not only thematic.
- The core decision and feedback loop are visible.
- The thesis rejects at least one tempting wrong direction.

## Pillars

- Each pillar can reject a feature.
- Pillars do not overlap, and anti-pillars exist.
- Pillars are visible in gameplay, UI, content, or production choices.

## Player Experience Targets

- 5-minute, 10-minute, and 20-minute feeling targets exist.
- Mechanics, dynamics, and intended experience are connected (for a rigorous
  pass, use the MDA guide in the game-review skill if installed).
- The first thing the player must learn is explicit.
- Confusion, friction, and failure are bounded, and the targets can be
  playtested.

## Taste Clarity

- Reference moments name what mattered, not only titles.
- Taste and anti-taste, desired emotion and undesired friction, are separated.
- Hard noes are explicit; agent inferences are marked as inferences.
- Contradictions are preserved rather than smoothed away early.
- The next step does not require the creator to already know genre, core loop,
  engine, or monetization.

## Concept Slate

- 3 to 5 concepts, each with player fantasy, core verb, intended emotion,
  distinctive bet, main risk, first playable proof, and a reason to reject.
- Concepts are compared by taste fit, proofability, production risk, and
  content burden.
- Parked and rejected concepts have reasons; the slate does not become active
  scope without a user decision.

## Creative Brief

- Names player promise, target player, core verb, core pressure, intended
  emotion, distinctive bet, and main risk.
- Pillars and anti-pillars can reject work; work to ignore for now is listed.
- First playable proof and proof budget are explicit.
- Marked candidate material until the creator accepts it.

## First Prototype Question

- Specific enough to pass, fail, or change direction.
- Names the player moment to prove, what to build, what to ignore, and what to
  capture.
- The minimum playable loop is small enough to finish.
- A stop condition and direction-change trigger are explicit.

## AI Authority (for games that use AI at runtime)

- Generation boundaries are explicit; deterministic systems own state
  transitions, scoring, law, economy, combat, and end states.
- Failures and fallbacks are designed.
- Generated outputs have provenance, rejection, and review rules.
- Player-facing AI claims are honest.

## Output

```text
Verdict: READY | CONCERNS | NOT_READY | USER_DECISION_NEEDED
Checked:
Findings:
Missing before Direction Lock:
Human decision needed:
Next proof:
```
