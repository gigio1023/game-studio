# MANIFEST — Narrative Design, Level Design, and Genre-Specific Design Wisdom

Date compiled: 2026-07-26
Compiled by: corpus-narrative-level-genre research pass, for the game-studio redesign knowledge library (agent-skill corpus ingestion).

## Files in this corpus

| File | Topic | Words | Primary named frameworks covered |
|---|---|---|---|
| `branching-structure-patterns.md` | Narrative structure | ~1450 | Sam Kabo Ashwell's 8 macro-patterns (time cave, gauntlet, branch-and-bottleneck, quest, sorting hat, open map, floating modules, loop-and-grow) + Emily Short's 6 micro-structures |
| `storylets-and-qbn.md` | Narrative structure | ~1449 | Storylets, qualities, Quality-Based Narrative (Failbetter/StoryNexus/Fallen London), salience-based narrative, waypoint narrative (Glass) |
| `dialogue-barks-and-drama-managers.md` | Dynamic content selection | ~1592 | Elan Ruskin's rule-database dialogue (Left 4 Dead/DOTA), Façade's Drama Manager + ABL + beats/JDBs, Left 4 Dead AI Director phases |
| `narrative-techniques-and-theory.md` | Narrative theory | ~1411 | Environmental storytelling (Jenkins framework, narrative stratigraphy), ludonarrative dissonance/harmony (Hocking, BioShock, Spec Ops, Papers Please), kishōtenketsu as narrative structure |
| `level-teaching-sequences.md` | Level design | ~1252 | Nintendo four-step level (Hayashida), kishōtenketsu cross-link, Valve's Teach-Test-Twist, Valve's Cabal playtest-driven process |
| `spatial-and-architecture-theory.md` | Level design | ~1578 | Prospect-refuge theory (Appleton), landmarks/weenies (Disney Imagineering), Lynch-derived wayfinding + certainty-graded aid taxonomy, gates/keys/soft-locks vocabulary |
| `pacing-and-difficulty-curves.md` | Level design | ~1425 | Beat vocabulary (pulse/accent/rest/motif/variation/syncopation/set pieces), intensity graphs, Schell's interest curves + flow channel |
| `genre-roguelike.md` | Genre wisdom | ~963 | Berlin Interpretation, meta-progression debate, Slay the Spire (deckbuilder synthesis), Into the Breach (full-information design) |
| `genre-metroidvania-and-platformer.md` | Genre wisdom | ~1190 | Metroidvania ability-recontextualization promise, Hollow Knight production lesson, movement-first platformer feel (acceleration/deceleration, jump design) |
| `genre-puzzle.md` | Genre wisdom | ~1415 | Three theories of puzzle depth: Blow/Braid (minimal non-misleading), The Witness (wordless symbolic teaching), Baba Is You (ruleset as puzzle object) |
| `genre-sim-and-idle.md` | Genre wisdom | ~1249 | Dwarf Fortress/RimWorld story generation, AI Storyteller, idle/incremental number-curve design (Cookie Clicker), prestige loops |
| `genre-narrative-horror-and-scope.md` | Genre wisdom | ~1838 | Walking sim fork (Dear Esther vs. Gone Home lineages), horror safety-tension cycle (Resident Evil), deckbuilder acquisition economy (Dominion vs. Slay the Spire), multiplayer-lite scope warning for solo devs |

**Total: 12 files, ~16,800 words.**

## Coverage against the assigned brief

All requested topics from the mission brief are covered:
- Narrative: branching typology ✓, storylets/QBN ✓, drama managers (Façade, L4D Director) ✓, environmental storytelling ✓, ludonarrative harmony/dissonance ✓, dialogue/barks/salience (Ruskin) ✓, kishōtenketsu/non-conflict structures ✓.
- Level design: Mario four-step teaching sequence ✓, Valve playtest-driven flow (the Cabal) ✓, pacing/intensity curves ✓, prospect-refuge ✓, landmarks/weenies/gating/keys ✓, difficulty ramps ✓. (Encounter design as its own named framework was not found as a distinct citable taxonomy separate from pacing/beat design during this pass — folded into `pacing-and-difficulty-curves.md`'s beat/set-piece vocabulary; flagged as a gap below.)
- Genres: roguelike/roguelite ✓, metroidvania ✓, puzzle ✓, platformer ✓, simulation/management ✓, deckbuilder ✓, narrative/walking sim ✓, idle/incremental ✓, horror ✓, multiplayer-lite-for-solo-devs ✓.

## Confidence levels

**High confidence (primary source fetched directly, or consistent multi-source corroboration):**
- Branching narrative taxonomy (Ashwell's post fetched directly)
- Storylets/QBN/salience/waypoint narrative (Short's post fetched directly)
- Façade Drama Manager mechanics (AAAI-adjacent secondary source fetched directly, consistent with Wikipedia)
- Left 4 Dead pacing/AI Director phase structure (multiple consistent secondary sources)
- Level Design Book chapters on pacing and wayfinding (fetched directly, community-maintained but well-cited practitioner reference)
- Berlin Interpretation (RogueBasin, the community's own canonical reference page)
- Baba Is You rule-mechanics (Game Developer feature, fetched via search with consistent detail)
- Metroidvania gate/key vocabulary (dedicated academic-adjacent PDF source)

**Medium confidence (good secondary-source consistency, but no single authoritative primary text fetched directly):**
- Elan Ruskin's rule-database algorithm — the original GDC slide PDF and video could not be fetched directly (network/size errors); reconstructed from a detailed secondary analysis (Radiator Blog) plus abstract-level talk descriptions. The core mechanism (specificity-ranked criteria matching) is corroborated across multiple independent sources, but exact terminology from Ruskin's own slides was not independently verified.
- Jesse Schell's Interest Curve and Flow Channel — drawn from review/summary sources rather than *The Art of Game Design* directly.
- Henry Jenkins' "Game Design as Narrative Architecture" four-category framework (evocative spaces / enacting stories / embedded narrative / emergent narrative) — the original MIT-hosted essay is no longer live at its known URL; this file flags the specific paragraph as a reconstruction pending verification against the original chapter in *First Person* (2004).
- Tynan Sylvester's "systems are the engine of story" framing — attributed via secondary coverage; his book *Designing Games* was not directly re-verified.

**Lower confidence / explicitly flagged as under-sourced within the files themselves:**
- Jonathan Blow's "catalog of ideas" method, as specifically named in the mission brief — search did not surface a primary-source description of a method by that specific name. `genre-puzzle.md` covers Blow's actual documented design philosophy for *Braid* (completeness of design, no red herrings, minimalism) and explicitly flags the catalog-of-ideas naming as unconfirmed. This should be revisited with a targeted search once search budget is available, or by consulting Blow's own talks/streams directly.

## Gaps

1. **Elan Ruskin primary source unverified.** The GDC 2012 PDF (steamcdn-a.akamaihd.net) exceeded fetch size limits; the YouTube talk and GDC Vault page were not fetchable by this agent's tools. A future pass with video-transcript access or a smaller PDF mirror should verify the dialogue-barks-and-drama-managers.md Part 1 content against Ruskin's actual slides.
2. **Jonathan Blow's "catalog of ideas" method** (named explicitly in the mission brief) was not confirmed as a primary-sourced named method — see above.
3. **Encounter design** as a named, citable taxonomy (distinct from general pacing/beat theory) was not separately researched — general FPS/action encounter-design frameworks (e.g., named combat-arena design patterns) would be a natural follow-up file if this corpus is extended.
4. **Henry Jenkins' original essay** needs direct verification — current treatment in `narrative-techniques-and-theory.md` is explicitly flagged inline as reconstructed from secondary sources.
5. **WebSearch budget was exhausted mid-session** (200/200 calls used across the team). All research after that point relied on WebFetch against URLs already surfaced by earlier searches, or on material already gathered. No topic was left uncovered as a direct result, but deeper follow-up searches on the medium/low-confidence items above were not possible in this pass.
6. **Kabo Ashwell's and Short's posts were fetched via secondary AI-summarized extraction** (WebFetch tool summarizes fetched pages through an intermediate model rather than returning raw text) — treat quoted-sounding phrases in this corpus as paraphrase-level accurate, not verbatim-quote accurate, unless independently checked against the source URLs listed in each file.

## Recommended next steps if this corpus is extended

- Direct-fetch Ruskin's GDC talk transcript/video and Jenkins' original 2004 essay to upgrade those two sections from medium to high confidence.
- Add a dedicated "encounter design" file if the redesigned skill library wants combat/arena-specific taxonomy separate from general pacing.
- Cross-check `genre-puzzle.md`'s Blow section against a primary Blow talk (e.g., his IndieCade or GDC talks) to confirm or retire the "catalog of ideas" framing.
