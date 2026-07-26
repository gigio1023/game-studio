# Design Theory Corpus — Manifest

Date compiled: 2026-07-26
Scope: Game design frameworks and decision theory (one of several parallel corpus lanes — this lane excludes GDC talks-as-postmortems, game feel/UX, production/business, and narrative/level/genre theory, which are covered elsewhere under `corpus/`).

Method: four parallel research passes, each using WebSearch/WebFetch against primary sources first (original papers, books, blog posts, talk transcripts), falling back to cross-checked secondary digests only where primary text was paywalled, 403'd, or otherwise unreachable in-session — and explicitly labeling every such fallback inline in the files themselves rather than presenting it as verified. Do not strip those inline labels when reusing this corpus; they mark exactly which claims still need a follow-up verification pass.

## Files

| File | Lines | Coverage |
|---|---|---|
| `mda-and-successors.md` | 181 | MDA (Hunicke/LeBlanc/Zubek 2004) — full primary paper read: 3-layer definitions, designer/player perspective inversion, 8 aesthetics with paper's own taglines, Monopoly tuning example, AI Babysitter case study; DDE successor (Walk/Görlich/Barrett 2017); Duarte's 2015 non-linearity critique (read in full); explicit negative result on "MDA2"/"FDD" (searched, found not to exist as named frameworks). |
| `schell-lenses.md` | 846 | Jesse Schell's Lens system — all 100 lenses from the physical Deck of Lenses, verbatim framing text and questions, grouped into 12 teaching categories; the Elemental Tetrad; numbering-discrepancy note against the 3rd-edition book (deck vs. book numbering diverge by ~12 due to inserted lenses); two worked examples from Schell Games' own "Lens of the Month" blog. |
| `koster-theory-of-fun.md` | 163 | Raph Koster's *Theory of Fun* — pattern-recognition/dopamine mechanism, "KFUN," iconification, boredom-as-mastery-decay, competition argument, sourced from Koster's own 2003/2012 conference-deck PDFs. Weakest-verified file in the corpus (see Confidence notes). |
| `meaningful-play-and-decisions.md` | 158 | Salen & Zimmerman's meaningful play (discernability + integration), second-order design, magic circle/lusory attitude, rules/play/culture schemas; Sid Meier's "interesting decisions" across three talks (1989/2010/2012 GDC) with his own heuristics; Juul's six-part classic game model and half-real thesis. Each sub-theory has a sourced critique (Taylor, Woodford, a Csikszentmihalyi-based critique of Juul) and a worked example. |
| `loops-arcs-and-skill-atoms.md` | 137 | Daniel Cook's skill atom (Action→Simulation→Feedback→Modeling), mastery/burnout/"milking" lifecycle, skill chains, and the 2012 "Loops and Arcs" essay — sourced directly from five Lost Garden primary essays (2006–2012), the least mainstream-summarized theory in the brief and the one leaned on primary text hardest for. |
| `uncertainty-and-randomness.md` | 170 | Costikyan's 11-part uncertainty taxonomy (performative, solver's, analytic complexity, hidden information, randomness, player unpredictability, narrative/development/schedule anticipation, perception, semiotic) with poker worked example; input vs. output randomness distinction, definitions, agency rationale, tradeoffs, and continuum/chaining critiques (Burgun, Schreiber, Engelstein, Mario Kart worked example). |
| `balance-and-cost-curves.md` | 169 | Positive/negative feedback loops (Marc LeBlanc's dramatic-dynamics framing, snowballing/rubber-banding vocabulary, Monopoly/Mario Kart examples, kingmaking/turtling/sandbagging failure modes); Ian Schreiber's *Game Balance Concepts* (transitive/intransitive mechanics with RPS payoff math, cost curves, over/undercosted, fetched directly from source); depth vs. complexity (Dan Felder's comprehension/tracking/depth three-way split — not the Librande/LeBlanc/Johnson attribution the brief guessed at, see gaps); Harvey Smith's Orthogonal Unit Differentiation (GDC 2003, archer-vs-riverboat example). |
| `player-motivation-models.md` | 195 | Bartle's player types (full two-axis derivation, population-dynamics tension diagram, 2004 8-subtype revision) read from Bartle's own essay; Quantic Foundry's 12 motivations/6 clusters verified against primary source and its explicit empirical break from Bartle; Self-Determination Theory/PENS from the full 2006 Ryan/Rigby/Przybylski paper (all subscales, all four studies); Flow theory (Csikszentmihalyi's channel + 8 components) and Jenova Chen's 2006 thesis argument for active/embedded-choice DDA over passive DDA, plus the Left 4 Dead AI Director vs. rubber-banding DDA debate. |

8 files, 2,019 lines total (design-theory corpus only; MANIFEST.md not counted).

## Scope check against the original brief

All items in the three assigned scope buckets are covered:

- **Core frameworks:** MDA + successors ✓, Schell's lenses ✓ (enumerated, not summarized), Koster's Theory of Fun ✓, Costikyan's uncertainty ✓, Juul's classic game model ✓, Sid Meier's interesting decisions ✓, Daniel Cook's loops/arcs/skill-chemistry ✓, Salen & Zimmerman's meaningful play/second-order design ✓.
- **Decision & systems theory:** feedback loops ✓, balance theory (transitive/intransitive, cost curves) ✓, input vs. output randomness ✓, depth vs. complexity ✓ (different named source than the brief guessed, flagged), orthogonal unit differentiation ✓.
- **Player psychology & motivation:** Bartle + critiques ✓, Quantic Foundry ✓, Self-Determination Theory ✓, flow theory + DDA debate ✓.

Nothing in scope was left uncovered or silently dropped.

## Not covered / out of scope by design

- GDC talks as postmortems, game feel/UX, production/business, narrative/level/genre theory — explicitly assigned to other parallel lanes in this corpus effort, not duplicated here.
- Academic game-studies theory beyond what the brief named (e.g. ludology-vs-narratology debate broadly, procedural rhetoric/Bogost, formalist play theory) — not requested, not pursued.
- Any visual/diagrammatic content (Schell's tetrad diagrams, Csikszentmihalyi's flow channel chart, Koster's own book diagrams, LeBlanc's feedback-loop slide visuals) — text-only environment, so all diagrams are described in prose from source text, never reproduced as images. Flagged inline in the affected files.

## Confidence notes — read before treating any single claim as citable

**High confidence (primary text read directly this session):**
- MDA framework core content (full AAAI paper) and the Duarte 2015 critique (full article).
- Schell's 100 lens questions (verbatim deck transcription, internally consistent, cross-checked against an official O'Reilly numbering fragment).
- Bartle's 1996 essay (including the rarely-reproduced population-dynamics section) and his 2004 revision.
- Ryan/Rigby/Przybylski's 2006 SDT paper (full text, all four studies).
- Jenova Chen's 2006 flow thesis (full argument).
- Daniel Cook's five Lost Garden essays (2006–2012).
- Ian Schreiber's *Game Balance Concepts* Level posts (fetched directly).
- Quantic Foundry's 12-motivation/6-cluster model (verified against primary site, not guessed).

**Medium confidence (cross-checked secondary sources, internally consistent, but primary text unreachable this session):**
- Koster's *Theory of Fun* — sourced from his own conference-deck PDFs (text/outline layer only, not the book's full prose), so the core mechanism is Koster's own words but several supporting examples (chess/checkers/Tetris, the animal-play analogy) are reconstructed/secondary and flagged as such in the file. **This is the corpus's weakest-verified entry** — a follow-up pass fetching the actual book text (not just deck outlines) would meaningfully strengthen it.
- Costikyan's 11-part uncertainty taxonomy — both his 1994 essay and 2013 book were unreachable directly (403s); taxonomy assembled from two independent, mutually-consistent secondary digests. The taxonomy shape is very likely accurate (internal consistency is high) but no passage is a verbatim Costikyan quotation.
- The DDE (Design, Dynamics, Experience) successor to MDA — Springer chapter paywalled; reconstructed from Semantic Scholar/ResearchGate/a secondary blog, author names corrected from the brief's guess (verified: Wolfgang Walk, Daniel Görlich, Mark Barrett).
- Marc LeBlanc's feedback-loop talk — slides unreachable (TLS failure on his own site); reconstructed from two independent, closely-agreeing attendee note sets.
- Harvey Smith's Orthogonal Unit Differentiation — original GDC slides unreachable; core principle and archer/riverboat example sourced secondarily.
- Juul's half-real rules-vs-fiction mechanism — the six-part classic-game-model was obtained verbatim from Juul's own site, but the "half-real" elaboration itself rests on secondary characterization (two direct sources 403'd/404'd).

**Explicit gaps and honest negative results (do not paper over these on reuse):**
- **Input vs. output randomness origin is unresolved.** The popular attribution to Stone Librande could not be confirmed — his searchable GDC talk list doesn't contain a matching title. Keith Burgun's Gamasutra essay is the clearest *named* codification found; Ian Schreiber's 2010 course independently makes the same distinction without the label. Treat any claim that Librande coined the term as unverified.
- **Depth vs. complexity's named originator does not match the brief's guess.** Librande/LeBlanc/Soren Johnson could not be confirmed as the source; the file instead uses Dan Felder's comprehension/tracking/depth three-way split as the best-sourced formalization found. Flagged explicitly in `balance-and-cost-curves.md` rather than silently substituted.
- **"MDA2" and "FDD" do not appear to exist as citable named frameworks** — actively searched for per the brief, explicit negative result reported rather than a fabricated citation.
- **Sid Meier's "10–20% skill vs. luck" figure could not be verified** against any primary source and is flagged as unverified rather than stated as fact.
- **Quantic Foundry's specific critiques** (self-report bias, commercial-tool framing) and **the Mario Kart / Resident Evil 4 DDA-backlash examples** in the motivation file rest on general model knowledge rather than a fetched source — WebSearch quota (shared across the four parallel research passes) was exhausted before these could be independently verified. Flagged inline.
- Daniel Cook's "skill chemistry" is thinner than its name implies: per his own writing, he explicitly declined to extend the atom/molecule metaphor when a reader proposed it — the file flags this subsection as looser than the rest of the model.

## Process note

Research ran as four agents in parallel against a shared WebSearch quota; several of the gaps above trace directly to that quota being exhausted mid-pass rather than the sources not existing. A follow-up pass with a fresh quota, aimed specifically at the "explicit gaps" list, would likely close most of them without needing to redo the high/medium-confidence material.
