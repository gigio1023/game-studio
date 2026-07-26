# MANIFEST — Feel / UX / Audio / Art Theory Corpus

Date compiled: 2026-07-26
Scope: game feel, animation/polish, UX/cognition, audio, visual/art direction — theory-level, teaching-grade, for a future agent-skill knowledge library. This lane owns mechanisms/parameters/named principles; the GDC-talk lane (separate corpus) owns talk-by-talk digests.

## Files

| File | Covers |
|---|---|
| `game-feel-model.md` | Swink's real-time-control/simulated-space/polish model, ADSR response envelope, input-latency perception research (challenges to the "100ms rule" with genre-specific thresholds), practitioner friction/acceleration ranges |
| `platformer-feel-parameters.md` | Coyote time, jump buffering, variable jump height, apex modifier, asymmetric rise/fall gravity, corner correction — as an interacting system, with typical parameter ranges |
| `animation-principles-in-games.md` | Full 12 animation principles reframed for games; the named anticipation/follow-through vs. responsiveness tension; easing-curve selection practice |
| `screenshake-hitstop-parameterization.md` | Trauma-based screenshake with Eiserloh's exact formulas/pseudocode (GDC 2016), rotational-vs-translational 2D/3D guidance, hitstop/hitlag mechanics and frame-data interaction, particle feedback grammar |
| `ux-cognition-hodent.md` | Hodent's Gamer's Brain model (perception/attention/memory), the usability-pillars checklist (7 items, well-sourced), the engage-ability side (partial — see gaps), flow theory as engagement backbone, affordance |
| `onboarding-and-readability.md` | FTUE/onboarding theory and principles, readability framework (silhouette priority, value hierarchy, urgency-based contrast), shape language as readability tool, diegetic/non-diegetic/spatial/meta UI taxonomy |
| `accessibility-guidelines.md` | Full Game Accessibility Guidelines tier breakdown (Basic/Intermediate/Advanced × Motor/Cognitive/Vision/Hearing/Speech/General), reach/impact/value tiering logic, framed as UX quality not compliance |
| `adaptive-audio-systems.md` | Vertical layering vs. horizontal re-sequencing, sound feedback roles (confirmation/state/anticipation), ducking/sidechain mixing mechanics, Karen Collins' interactive-audio framework, FMOD/Wwise event-model concepts |
| `art-direction-for-solo-devs.md` | Readability-hierarchy-first art direction, limited-palette strategies and techniques, shape language as art-direction system, the named "juice vs. clarity" tension and its resolution pattern |

9 files, ~13,000 words total, all with inline named-source citations (author/talk/book + year + URL where available) and a named game example per file section.

## Coverage against the brief

- **Game feel (Swink's model + metrics)**: covered — three-part definition, ADSR model, response-curve practice. Gap: the literal enumerated "15 metrics" list was not recoverable from sources checked (see below).
- **Input latency / human perception thresholds**: covered with real numbers — genre-differentiated thresholds (50–60ms fast-paced, ~100ms FPS, ~500ms third-person, ~1000ms RTS/omnipresent, ~15ms expert-player detection floor), sourced from HCI/games-research literature, not just the 100ms heuristic.
- **Platformer feel as a system**: covered — all five named techniques (coyote time, jump buffering, variable jump height, apex modifier, corner correction) plus asymmetric gravity, with practitioner parameter ranges.
- **12 animation principles applied to games**: covered in full, with explicit treatment of the anticipation/responsiveness tension the brief called out.
- **Easing curves**: covered inside the animation file rather than as a standalone file (reconciled with ADSR/slow-in-slow-out to avoid presenting the same idea under three unconnected names).
- **Screenshake/hitstop parameterization**: covered in strong depth — Eiserloh's actual GDC formulas and pseudocode were recovered (trauma², trauma³, noise-driven offset/rotation, asymptotic camera-follow), not just secondary paraphrase.
- **Particle feedback grammar**: covered inside the screenshake file.
- **Hodent's Gamer's Brain / UX framework**: covered — usability pillars are well-sourced (7-item checklist with examples); engage-ability checklist is only partially covered (see gaps).
- **Onboarding theory**: covered.
- **Readability/silhouette/color contrast**: covered, including a numeric contrast-ratio reference (4.5:1) and the diegetic/non-diegetic/spatial/meta taxonomy.
- **Accessibility as UX (Game Accessibility Guidelines tiers)**: covered in full — all six categories × three tiers extracted directly from the primary source site.
- **Adaptive/dynamic music (vertical layering vs. horizontal resequencing)**: covered.
- **Sound feedback roles**: covered.
- **Mixing basics (ducking/sidechaining dialog)**: covered, including the DSP mechanism (sidechain compression), not just the effect.
- **Karen Collins' game sound framework**: covered at the level available from secondary sources (see gaps — did not access the book directly).
- **Audio middleware (FMOD/Wwise) at concept level**: covered — event/parameter abstraction as the portable concept, plus current practitioner characterization of the two tools' differing philosophies.
- **Readability hierarchy (gameplay > mood)**: covered.
- **Palette-limited strategies for solo devs**: covered with concrete techniques (tonal ramps, hue mixing, dithering) and palette-size ranges.
- **Shape language**: covered in both the readability file (as a legibility tool) and the art-direction file (as a broader system), cross-linked rather than duplicated.
- **Juice-vs-clarity tension**: covered, including the specific "juice problem" critical-literature counter-current.

## Gaps (explicit, for follow-up)

1. **Swink's literal "15 metrics of game feel" list** — not recovered verbatim from any source checked in this pass (a direct PDF-to-text fetch of a derivative course document failed technical extraction; no secondary source reproduced the full enumerated list). The three-part model and the ADSR response model are solid substitutes for practical guidance, but if a downstream skill needs the literal metric names, source them from the physical/ebook text directly.
2. **Hodent's engage-ability checklist** — the usability-pillar checklist (7 items) is well-sourced, but its counterpart engage-ability checklist was only found referenced as a "forthcoming" follow-up in the secondary source used; not captured in full. Flow theory is presented as complementary/consistent theory, not a direct restatement of her chapter.
3. **Karen Collins' framework** — covered at the level of a MIT Press abstract/review summary (ResearchGate, Archive.org listing), not the book's full text; the framework description here should be treated as an accurate high-level gloss, not a chapter-level summary.
4. **Ducking attack/release timing** — no single authoritative numeric default found; presented as a qualitative range ("tens to low hundreds of milliseconds"), tuned per scene.
5. **Palette-size recommendation** — practitioner sources disagree (4–5 vs. 8–16 vs. "start at 16"); presented as a genuine range rather than reconciled to one number.

## Confidence notes

- **Highest confidence / primary-source-quality**: Eiserloh's trauma-shake formulas (recovered via archive.org transcript of the actual GDC talk), the Game Accessibility Guidelines tier lists (extracted directly from the guidelines' own site), the diegetic/non-diegetic/spatial/meta taxonomy (stable, well-attested academic origin).
- **Solid secondary-source consensus**: the 12 animation principles reframing, FTUE/onboarding principles, coyote-time/jump-buffering/variable-jump-height parameter ranges, vertical-layering/horizontal-resequencing audio technique split.
- **Practitioner-convention level (useful but not authoritative)**: specific numeric parameter ranges throughout (friction ratios, gravity multipliers, palette sizes, ducking timing) — these are gathered from tutorials/practitioner blogs/forum consensus rather than peer-reviewed or first-party specification, and different shipped games diverge from them. Presented in the files as starting points for iteration, explicitly flagged as such.
- Every file ends with its own "Gaps / confidence notes" section for file-specific caveats not repeated here.

Do not edit `~/git/agent-skills-orch/game-studio/` — this corpus is standalone research output, not yet integrated into the shipped skill.
