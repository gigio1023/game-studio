# Director Gates

Director gates are reusable review prompts. They should be referenced by ID from
milestone contracts and review requests.

## Verdict Vocabulary

- `READY`: The work can advance.
- `CONCERNS`: The work can advance only if listed concerns are accepted or fixed.
- `NOT_READY`: The work must not advance.

When multiple reviewers participate, the strictest verdict wins.

## Gate IDs

### GPH-THESIS

Question: Does the game thesis define a specific game identity?

Review:

- The player role is concrete.
- The core pressure is playable, not only thematic.
- The target audience is implied or stated.
- The thesis rejects at least one tempting wrong direction.

### GPH-PILLARS

Question: Are the creative pillars falsifiable and useful?

Review:

- Each pillar can reject a feature.
- Pillars do not overlap.
- Pillars are visible in gameplay, UI, content, or production choices.
- Anti-pillars exist.

### GPH-PLAYER-EXPERIENCE

Question: Does the plan specify what the player feels and understands over time?

Review:

- 5-minute, 10-minute, and 20-minute targets exist.
- Confusion, mystery, friction, and failure are bounded.
- The target experience can be tested in a playtest.

### GPH-AI-AUTHORITY

Question: If the game uses AI, who owns truth and consequences?

Review:

- AI generation boundaries are explicit.
- Deterministic systems own state transitions, scoring, law, economy, combat, or
  end states where relevant.
- Failures and fallbacks are designed.
- Player-facing AI requirements are honest.

### GPH-PROTOCOL-PROOF

Question: Has the project proven its central rule loop before broad production?

Review:

- Minimal loop exists.
- Success and failure are both observable.
- Evidence is produced.
- The proof maps to the thesis and pillars.

### GPH-PRESENTATION-VALUE

Question: Does the chosen presentation format earn its cost?

Review:

- 3D, 2D, text, or hybrid presentation produces gameplay value.
- Camera and input are playable.
- Visual and audio direction support the experience target.
- The project is not using presentation as a substitute for core loop proof.

### GPH-VERTICAL-SLICE

Question: Is this a true vertical slice?

Review:

- The slice is short but production-representative.
- Gameplay, content, UI, audio, visual, technical, and release promises align.
- External playtest evidence exists.
- Known missing features are outside the slice promise.

### GPH-RELEASE-PROMISE

Question: Can the project publicly promise what the build actually does?

Review:

- Store, README, trailer, demo page, and build truth match.
- Requirements and limitations are explicit.
- Localization and accessibility promises are accurate.
- Support and update expectations are realistic.
