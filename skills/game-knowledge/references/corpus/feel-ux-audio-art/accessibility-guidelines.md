# Accessibility as UX: The Game Accessibility Guidelines Tier Structure

Primary source: [gameaccessibilityguidelines.com](https://gameaccessibilityguidelines.com/), a straightforward reference for inclusive game design maintained by a working group of accessibility specialists across the industry. The framing worth carrying into skill guidance: this is not a compliance checklist bolted on after the game is designed — it's organized so that the cheapest, highest-impact items are also the ones that double as general UX quality (remappable controls, adjustable text size, difficulty options) rather than being accessibility-only features.

## The tier logic

Guidelines are organized into three tiers — **Basic, Intermediate, Advanced** — across six categories: **Motor, Cognitive, Vision, Hearing, Speech, General**. The tier a guideline sits in is determined by weighing three factors, not by how "advanced" the feature sounds:

- **Reach** — how many players benefit.
- **Impact** — how much difference the feature makes for those players.
- **Value** — the cost/effort to implement relative to reach and impact.

Basic-tier items are, by this formula, *low-cost and high-impact* — they are framed explicitly as things "no title should ship without," not aspirational stretch goals. This reframes accessibility triage for a team with limited time: doing all of Basic across every category is a far better return on effort than doing Advanced in one category while skipping Basic in others.

## Motor (control / mobility)

- **Basic**: adjustable game speed; haptics toggle/slider; large, well-spaced touch/interactive targets; adjustable control sensitivity; UI reachable via the same input method as gameplay; simplified control alternatives; full control remapping.
- **Intermediate**: don't rely on motion tracking tuned to one body type; macro system support; resizable/rearrangeable interface; avoid requiring held buttons (offer toggle alternatives); windowed-mode support on PC (compatibility with on-screen/assistive keyboards); eliminate rapid button-mashing and QTEs; all key actions performable via simple digital input (complex/analog input optional, not required); avoid requiring simultaneous multi-input actions like click-drag; keep accuracy-demanding elements stationary rather than moving; support more than one input device.
- **Advanced**: simple control schemes compatible with assistive tech (switch access, eye-tracking); a minimum ~0.5-second cooldown option between inputs; eliminate precise-timing requirements or provide alternatives/pause options; support both landscape and portrait play.

## Cognitive (thought / memory / processing)

- **Basic**: avoid flickering images and repetitive strobing patterns (also a photosensitivity/seizure-safety concern, not just cognitive load); self-paced text progression (no auto-advancing dialogue on a timer); interactive tutorials rather than text walls; simple, clear language; quick game start without navigating multiple menu layers; clear text formatting and readable default font sizes.
- **Intermediate**: highlight important words; text color/contrast options; save-file thumbnails; voice and text chat support in multiplayer; reinforce instructions with visuals/speech rather than text alone; narrative summaries for long/complex stories; simple narrative structures as an option; practice modes without failure consequences; on-demand reminders of controls and objectives during play; contextual help/guidance; clearly identifiable interactive elements; distinct sounds for key objects/events; option to reduce background movement/clutter; separate volume controls for effects/speech/music; speed adjustment.
- **Advanced**: option to hide all non-interactive/decorative elements; ability to replay all narrative content and instructions; avoid sudden unexpected movements or jump-scare-style events as a toggle; option to disable blood/gore; pre-recorded voiceover for *all* text, including menus and installers; symbol-based chat for players who can't process text quickly.

## Vision

- **Basic**: high contrast between text/UI and background; clear text formatting and readable default font size; avoid VR/motion-sickness triggers; sensible default field of view; never convey essential information via color alone; large, well-spaced interactive elements.
- **Intermediate**: don't place essential time-sensitive info outside the player's natural eye-line; screen-reader-friendly manuals/websites (accessibility starts before the game even launches); clearly indicated interactive elements; choice of cursor/crosshair color and design; distinct sound design for key objects; adjustable contrast option; mobile screen-reader support; background-movement toggle; surround sound support; adjustable field of view; separate volume controls; resizable interface.
- **Advanced**: audio description track; binaural audio simulation; distinct sound/music design for all objects/events, not just key ones; full screen-reader support including menus and installers; digital-only control compatibility for players who can't use analog/motion input; easy compass-point orientation and movement; voiced GPS/navigation; pre-recorded voiceover for all text; pingable sonar-style audio map for spatial awareness without sight; adjustable font size.

## Hearing

- **Basic**: clearly presented, readable subtitles/captions; no essential information conveyed by sound alone; separate volume controls for effects/speech/music; subtitles for all important speech.
- **Intermediate**: stereo/mono toggle; replicate audio directional cues (footsteps, off-screen threats) in text or visuals; customizable subtitle presentation (size, background, position); visual speaker identification in subtitles (who is talking); captions for significant background/environmental sounds, not just dialogue; option to show subtitles before/without needing sound enabled; subtitles for supplementary/incidental speech, not just main dialogue; minimize background noise competing with speech; visual options for multiplayer communication; text and voice chat support; preference setting for whether multiplayer partners must use voice chat.
- **Advanced**: sign-language video option; subtitle pacing/reading-speed appropriate to target age group; symbol-based chat.

## Speech

- **Basic**: speech input should never be *required* — only supplementary or offered as an alternative input method.
- **Intermediate**: small-vocabulary voice recognition (individual words like "yes"/"no" rather than full sentences); visual communication options in multiplayer; text and voice chat support; voice-chat preference setting.
- **Advanced**: symbol-based chat; volume-threshold-based recognition (detecting that a sound was made) as an alternative to word-based recognition for players who can vocalize but not form recognizable speech.

## General

- **Basic**: actively solicit accessibility feedback from players; remember all settings between sessions; document accessibility features in-game; document them on packaging/storefront/website too (so a player can decide *before* purchase); offer a wide range of difficulty levels.
- **Intermediate**: expose gameplay variables for fine-tuning rather than fixed difficulty presets alone; multiplayer matching preference for accessibility-feature users; auto-save plus manual save; assist modes (auto-aim, assisted steering); ability to skip non-core gameplay elements; include players with impairments in playtesting (not just theoretical compliance); ability to alter difficulty mid-session rather than only at game start.
- **Advanced**: real-time text-to-speech and speech-to-text transcription; save settings across multiple profiles; include a representative spread of impairment categories in playtesting, not just one.

Source: [Game Accessibility Guidelines — Full List](https://gameaccessibilityguidelines.com/full-list/); [Game Accessibility Guidelines — Basic](https://gameaccessibilityguidelines.com/basic/); [Game Accessibility Guidelines — Why and How](https://gameaccessibilityguidelines.com/why-and-how/).

## Why this belongs in a UX/feel corpus, not a separate "compliance" bucket

Several Basic-tier items are functionally identical to core usability pillars in [[ux-cognition-hodent]] — remappable controls and adjustable sensitivity are "flexibility"; clear text formatting and never conveying info by color alone are direct extensions of the readability/contrast material in [[onboarding-and-readability]]; separate volume controls for effects/speech/music sit directly upstream of the ducking/mixing material in [[adaptive-audio-systems]]. The practical takeaway for a skill giving design guidance: accessibility and general UX quality are not competing priorities to trade off against each other — most Basic-tier accessibility work *is* general UX polish, just evaluated against a wider range of player capability than "how does this feel to an unimpaired playtester."

## Named examples

- **The Last of Us Part II** (Naughty Dog, 2020) is the most frequently cited industry benchmark for Advanced-tier accessibility implementation — full screen-reader-style navigation assistance, high-contrast modes, and an unusually granular set of exposed gameplay variables, widely covered in games press as a step-change in what Advanced-tier support looks like in a shipped AAA title.
- **Celeste** (Extremely Ok Games, 2018) ships a prominent, no-shame "Assist Mode" exposing gameplay variables (game speed, infinite stamina, invincibility) directly to the player mid-run — a clean example of the General-tier "expose gameplay variables for fine-tuning" and "alter difficulty during gameplay" guidelines implemented as a first-class feature rather than a hidden option.

## Gaps / confidence notes

- The tier lists above were extracted directly from the official Game Accessibility Guidelines site's full-list page and are treated as high-confidence primary-source content, not reconstructed from memory.
- Named examples (Last of Us Part II, Celeste) reflect broad industry consensus/press coverage rather than a specific citation checked against the guidelines site itself; treat as illustrative, not as officially endorsed reference implementations by the guidelines project.
