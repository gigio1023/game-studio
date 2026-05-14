# Game Feel, UX, Art, Audio, and Moment-to-Moment Craft

This research page turns durable game craft references into review criteria for Game Studio roles, gates, and project-local skills.

## Source Map

| Source | Area | Use in Game Studio |
| --- | --- | --- |
| Steve Swink, [Game Feel](https://www.routledge.com/Game-Feel-A-Game-Designers-Guide-to-Virtual-Sensation/Swink/p/book/9780123743282) | Game feel | Treat feel as a product of real-time control, simulation, and audiovisual response. |
| Doug Church, [Formal Abstract Design Tools](https://www.gamedeveloper.com/design/formal-abstract-design-tools) | Design language | Name the intended player action, perception, and consequence before production expands. |
| Robin Hunicke, Marc LeBlanc, Robert Zubek, [MDA](https://users.cs.northwestern.edu/~hunicke/MDA.pdf) | System-to-experience framing | Review mechanics by the player emotions and behaviors they create. |
| Jesse Schell, [The Art of Game Design](https://schellgames.com/art-of-game-design/) | Design review | Use lenses as focused review questions, not as broad opinion prompts. |
| Raph Koster, [A Theory of Fun](https://www.theoryoffun.com/) | Learning and mastery | Make moment-to-moment play teach patterns the player can recognize and test. |
| Katie Salen and Eric Zimmerman, [Rules of Play](https://mitpress.mit.edu/9780262240451/rules-of-play/) | Rules and meaning | Check whether authored systems produce readable choices and meaningful outcomes. |
| Celia Hodent, [The Gamer's Brain](https://www.routledge.com/The-Gamers-Brain-How-Neuroscience-and-UX-Can-Impact-Video-Game-Design/Hodent/p/book/9781138089969) | Game UX | Review attention, memory load, motivation, feedback, and usability as production risks. |
| Don Norman, [The Design of Everyday Things](https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/) | UX fundamentals | Require affordance, signifier, mapping, feedback, and recoverable error states. |
| Game Accessibility Guidelines, [guidelines](https://gameaccessibilityguidelines.com/) | Accessibility | Make accessibility a review input from prototype onward, not a release-only checklist. |
| Valve Developer Community, [Level Flow](https://developer.valvesoftware.com/wiki/Level_Flow) | Level design | Review spatial guidance, pacing, loops, landmarks, and player comprehension. |
| Chris McEntee, [Rayman Origins Level Design](https://www.gamedeveloper.com/design/rayman-origins-level-design) | Level craft | Teach mechanics in controlled setups before combining them into harder variations. |
| Pascal Luban, [The Rational Design Handbook](https://www.gamedeveloper.com/design/the-rational-design-handbook-an-intro-to-rdl) | Level tuning | Define objective difficulty, pacing, and encounter variables before tuning by taste. |
| Martin Jonasson and Petri Purho, [Juice It or Lose It](https://www.youtube.com/watch?v=Fy0aCDmgnxg) | Game feel and feedback | Use responsive animation, particles, hit pause, camera response, and sound to clarify action. |
| Jan Willem Nijman, [The Art of Screenshake](https://www.youtube.com/watch?v=AJdEqssNZ-U) | Action feedback | Use impact feedback deliberately; intensity must support readability and comfort. |
| Ben Cousins, [The Seven Rules of Camera Design](https://www.gamedeveloper.com/design/the-seven-rules-of-camera-design) | Camera feel | Review camera behavior as a control system with framing, prediction, and player trust. |
| Christophe Carrier, [No Man's Sky art direction](https://www.gdcvault.com/play/1024210/Art-Direction-Bootcamp-Art-Directing) | Art direction | Use shape language, color, atmosphere, and consistency to create readable worlds. |
| Eric Zimmerman, [Shape of Games to Come](https://www.gamedeveloper.com/design/the-shape-of-games-to-come) | Visual systems | Treat visual form as a rules-facing communication layer, not only as decoration. |
| Karen Collins, [Game Sound](https://mitpress.mit.edu/9780262537773/game-sound/) | Audio systems | Review adaptive audio, feedback sounds, ambience, and mix as part of the play loop. |
| Winifred Phillips, [A Composer's Guide to Game Music](https://mitpress.mit.edu/9780262534499/a-composers-guide-to-game-music/) | Music direction | Align score structure, interactivity, and emotional pacing with gameplay states. |
| Austin Wintory, [Making Music Interactive](https://www.gdcvault.com/play/1015525/Making-Music-Interactive) | Interactive music | Require music transitions to respond to player state instead of looping over it. |

## Principles

### Game feel is evidence, not an adjective

- **Control loop**: The player input, avatar response, camera, animation, sound, and result must complete a readable loop.
- **Latency budget**: Button response, cursor response, animation startup, and confirmation must be measured or recorded in playable validation.
- **Legibility before intensity**: Screen shake, particles, hit stop, and camera motion are useful only when they make state clearer.
- **Failure feel**: Misses, blocks, falls, reloads, and resets need feedback as carefully as successes.

### Level design teaches before it tests

- **Introduce**: Present one new rule in a low-pressure context.
- **Practice**: Let the player repeat the rule with a small variation.
- **Combine**: Combine the rule with an older rule only after the first rule is visible.
- **Verify**: Use playtest notes to check whether the player understood the intended path, affordance, risk, and reward.
- **Pace**: Alternate pressure, recovery, discovery, and decision moments.

### UX protects attention

- **Immediate goal**: The player should know what they are trying to do now.
- **State visibility**: Health, danger, resources, cooldowns, objectives, and fail states must be readable at gameplay speed.
- **Mapping**: Controls, prompts, iconography, and spatial actions must match player expectation.
- **Recovery**: Undo, retry, checkpoint, cancel, and confirm flows must be explicit where mistakes are costly.
- **Accessibility**: Text size, contrast, remapping, subtitles, motion comfort, color dependence, and difficulty assists need early review.

### Art direction is playable communication

- **Hierarchy**: The player, threat, objective, interactable, and background must not compete for the same visual priority.
- **Shape language**: Silhouettes should communicate role, danger, affordance, and faction before detail is visible.
- **Color role**: Color should separate gameplay state, mood, and navigation rather than decorate every area equally.
- **Material truth**: Texture, collision, and animation treatment should tell the player what can be touched, damaged, climbed, collected, or ignored.
- **Style constraint**: A smaller consistent style beats a large asset set with conflicting lighting, scale, or readability.

### Audio is part of the interface

- **Confirmation**: Inputs, pickups, hits, UI actions, and state changes need distinct feedback.
- **Priority mix**: Critical gameplay sounds must win over ambience and music.
- **Spatial information**: Direction, distance, occlusion, and threat type should be audible when the design depends on them.
- **Adaptive score**: Music should support intensity, discovery, safety, failure, and transition states.
- **Silence**: Removing sound can be a design event; it should be intentional and testable.

### Moment-to-moment craft is the smallest unit of quality

- **Verb**: Name what the player does every few seconds.
- **Read**: Name what information the player reads before acting.
- **Risk**: Name what can go wrong.
- **Response**: Name the audiovisual confirmation.
- **Learning**: Name what the player knows after the moment that they did not know before.

## Role Review Guidance

| Role | Review focus | Required evidence |
| --- | --- | --- |
| Game Director | Experience target, emotional arc, core promise, moment-to-moment identity. | Short capture with notes explaining what the player should feel and understand. |
| Creative Director | Tone, art/audio cohesion, fantasy, consistency across moment, scene, and milestone. | Visual target board, audio references, and a build capture showing them in play. |
| Systems Designer | Rule clarity, feedback, state transitions, failure cases, and mastery curve. | Test scenario that shows success, failure, escalation, and recovery. |
| Level Designer | Spatial readability, teaching sequence, pacing, landmarks, encounter setup. | Annotated level capture or map with intended player reads and decision points. |
| UX Designer | Goal clarity, controls, UI state, onboarding, accessibility, cognitive load. | First-time-player observation notes and UI/control screenshots or capture. |
| Art Director | Silhouette, value, color, material role, animation readability, visual hierarchy. | Gameplay capture with still frames marked for player, threat, objective, and background priority. |
| Audio Director | Feedback taxonomy, mix priority, ambience, adaptive music, spatial cues. | Audio capture or implementation notes for critical states and mix priority. |
| Technical Director | Performance, input latency, camera stability, tooling, asset budget, deterministic boundaries. | Build metrics, validation commands, and capture from target hardware or representative settings. |
| QA Lead | Reproducibility, playtest quality, bug severity, evidence completeness. | Build identifier, scenario, observed issues, successful moments, and gate verdict. |
| Producer | Scope, milestone fit, dependency risk, cost of polish, release promise. | Milestone contract showing what quality is required now and what is deferred. |

## Review Method for Visual and Playable Quality

1. Start from the milestone contract and player experience target.
2. Play or inspect a captured run before reading implementation notes.
3. Identify the primary verb, required player read, risk, feedback, and result.
4. Check the same moment through gameplay, UX, art, and audio lenses.
5. Mark each issue as `BLOCKER`, `RISK`, or `POLISH`.
6. Require a new capture when a fix changes timing, camera, UI, animation, VFX, or sound.
7. Apply the strictest role verdict when evidence conflicts.

Use this review shape for each critical moment:

| Field | Question |
| --- | --- |
| Intent | What should the player do now? |
| Read | What tells the player that action is available or risky? |
| Input | Does the control respond within the expected feel budget? |
| Feedback | What confirms success, failure, partial progress, or danger? |
| Camera | Does framing support action without stealing control? |
| Visual | Can the player separate foreground, objective, threat, and background? |
| Audio | Which sound has priority, and does it carry useful state? |
| Recovery | What happens after a mistake? |
| Evidence | Which capture, playtest note, or metric proves the answer? |

## Suggested Skill References

### Existing skills to reuse

- `skills/game-director/SKILL.md`: Add from the craft reference index prompts for thesis, player experience, and presentation value review.
- `skills/game-review-council/SKILL.md`: Route visual, audio, UX, and level findings to the strictest relevant role.
- `skills/game-evidence-gate/SKILL.md`: Require playable capture for feel, camera, UI, animation, VFX, and audio claims.
- `skills/game-execution/SKILL.md`: Use work packages that define the target moment and evidence before implementation.
- `skills/game-studio/SKILL.md`: During installation, copy craft rubrics and skill references into target projects.

### Skill references to add

- `skills/game-review-council/references/game-feel-review.md`: Control loop, latency, camera, feedback, hit response, and comfort review.
- `skills/game-review-council/references/level-design-review.md`: Teaching sequence, encounter pacing, path readability, and difficulty variables.
- `skills/game-review-council/references/ux-review.md`: Goal clarity, UI state, control mapping, accessibility, onboarding, and error recovery.
- `skills/game-review-council/references/art-direction-review.md`: Shape language, color role, visual hierarchy, animation readability, and asset consistency.
- `skills/game-review-council/references/audio-direction-review.md`: Feedback sounds, mix priority, adaptive music, ambience, and spatial information.
- `core/rubrics/moment-to-moment-rubric.md`: Shared rubric for a single playable moment across roles.
- `core/templates/evidence/playable-quality-capture.md`: Capture template for build ID, scenario, input device, frame rate, known issues, and role verdicts.

## Current Repo Gaps

- The production gate names visual and audio direction, but it does not define how to review them.
- The playtest rubric captures comprehension and emotion, but it does not ask for input latency, camera behavior, visual hierarchy, or audio priority.
- Role files include level, UX, art, and audio leads, but their review criteria are not documented.
- The evidence model warns that screenshots do not prove gameplay, but it does not yet define capture requirements for moment-to-moment quality.
- Engine profiles mention visual artifacts and game feel, but the requirement is not connected to a reusable rubric.
- Genre profiles ask strong first questions, but they do not map those questions to craft evidence.
- No from the craft reference index foundations page existed for game feel, level design, UX, art direction, or audio direction.
- Accessibility appears in release and UX language, but it lacks early-stage checks for controls, readability, captions, motion, and color reliance.
- There is no artifact template for comparing intended player reads against observed player behavior.
- There is no discipline-specific skill reference for art direction, audio direction, UX, or level design reviews.

## Adoption Path

1. Add the proposed review references under `skills/game-review-council/references/`.
2. Add `core/rubrics/moment-to-moment-rubric.md`.
3. Add `core/templates/evidence/playable-quality-capture.md`.
4. Update `core/gates/production.md` so `GS-PRESENTATION-VALUE` links to the new rubric.
5. Update `core/rubrics/playtest-rubric.md` with feel, camera, visual, audio, and accessibility observations.
6. Update engine and genre profiles so craft questions point to required evidence.
