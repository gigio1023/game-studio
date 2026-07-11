# Review Lenses

Compact craft lenses for reviewing playable work. Use only the lenses the
claim under review touches. Each lens ends with the same demand: what proof
was checked, what blocks, and what the next proof is.

## Contents

- Game feel
- Level design
- UX
- Art direction
- Audio direction
- Player walkthrough
- Design-intent survival
- Accessibility

## Game Feel

For a quick multi-lens pass over input, camera, animation, physics, UI timing,
feedback, or audio response in moment-to-moment play. The core skill routes the
full operational guide when feel is the primary claim.

Ask: What is the primary verb? What input starts it, and how quickly does the
game respond? What confirms success, failure, danger, and partial progress?
What does the camera do during the action? What recovery exists after a
mistake? What capture proves the feel claim?

Blocking: delayed or ambiguous input response; feedback that confirms style
but not consequence; camera motion that hides the action or steals control;
failure with no readable recovery path; a screenshot used where video or
direct play is required.

## Level Design

For a quick multi-lens pass over rooms, routes, encounters, puzzle spaces, hubs,
or tutorial sequences. The core skill routes the full operational guide when
level flow is the primary claim.

Ask: What should the player see first, and what landmark draws attention?
Where is the low-pressure introduction, where does the player practice the
rule, and where does the level vary or combine it? What happens after an
error? What proof shows the player learned the route or rule?

Blocking: the level tests before it teaches; the critical path competes with
decoration; failure restarts too far from the learning moment; landmarks,
exits, threats, and interactables share the same visual priority; the layout
needs explanation outside play.

## UX

For interface, onboarding, controls, state visibility, menus, and recovery
paths.

Ask: What is the player's immediate goal, and which state must be visible for
it? What error can the player make, and how do they recover? What text could
be removed because the interface teaches it? What proof shows the player
understood the UI?

Blocking: the player cannot tell what to do next; the UI hides state, cost,
cooldown, or consequence; tutorial text compensates for unclear interaction;
promised settings or remapping are not implemented; recovery from an invalid
action is unclear.

## Art Direction

For visual tone, readability, silhouette, color, materials, animation, and
VFX as they affect play.

Ask: What must the player read first? Are player, objective, threat,
interactable, and background separated? Does color carry gameplay state, and
is there a non-color fallback? Do silhouettes survive motion and scale? What
fidelity can stay fake for the current proof?

Blocking: visual polish competes with gameplay hierarchy; important state is
color-only; materials or lighting hide affordances; animation looks good but
obscures timing; style direction expands scope beyond the proof budget.

## Audio Direction

For sound effects, music, ambience, mix, voice, and their alternatives.

Ask: Which sound confirms the player's action, and which warns of danger?
Which sounds compete in the same moment, and does the mix preserve gameplay
priority? Are captions, subtitles, or visual alternatives needed? What capture
proves the audio claim?

Blocking: critical state exists only in audio; mix priority hides warnings or
dialogue; music tone contradicts the intended pressure; caption needs deferred
past the proof; audio polish that expands scope without improving play.

## Player Walkthrough

A player-centered pass before or after a playable proof. Before a build
exists, treat it as weak proof and say so.

Pick one target player and session context, then walk the checkpoints: first
visual impression, first meaningful input, first "I understand this" moment,
first failure and recovery, first meaningful choice, first natural stopping
point, first reason to return. State only what the current design or build
proves; mark unspecified moments as blind spots, not gaps to invent answers
for.

## Design-Intent Survival

For implementation that touches gameplay, camera, input, UI timing, feedback,
economy, narrative triggers, or tuning.

Ask: Is the selected concept still recognizable, and is the creative brief
still true? Did implementation silently change player experience? Are tuning
changes intentional and recorded? What proof shows the intended behavior
survived?

Silent drift to catch: update order or collision priority changing feel;
defaults changing difficulty or pacing; a refactor removing a feedback path;
an agent adding a generic genre feature outside the brief.

## Accessibility

For player-facing input, UI, text, audio, motion, difficulty, or public
accessibility claims.

Barrier categories: motor (remapping, alternative input, timing pressure),
vision (contrast, text size, color independence, motion), hearing (captions,
visual warnings, volume controls), cognitive (clear goals, memory load,
recovery, difficulty support), speech (voice alternatives).

Ask: Which core-path barrier could block a player, and is it solved, bounded,
disclosed, or out of scope? Which public claim depends on this support? What
retest is required after a fix?

Feature presence and mechanical checks can support narrow implementation claims.
They cannot prove that the whole game is accessible. Keep that broader claim
unverified until representative players, including players affected by the
barrier under review, have tested the relevant path.
