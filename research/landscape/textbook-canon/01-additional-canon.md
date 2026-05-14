# Additional Canonical Texts For Source Map

## Research Questions

1. What major canonical game design texts is the current craft reference index missing?
2. What academic books on game studies (Bogost, Juul, Galloway, etc.) would add depth?
3. What canonical creative-process books (not specific to games but applicable) fill gaps?
4. What papers from FDG, DiGRA, AIIDE, CHI Play on design methodology / agent-assisted design should be in the craft reference index?
5. What recent (2022-2026) production texts have been published?
6. What virtual world / persistent world / live ops design texts belong?
7. What narrative-as-system texts beyond Emily Short and current sources belong?
8. What design pedagogy curricula at NYU Game Center, USC IMD, Carnegie Mellon ETC, MIT publish reading lists worth mining?

---

## Sources Surveyed

- MIT OpenCourseWare CMS.608 Game Design readings (https://ocw.mit.edu/courses/comparative-media-studies-writing/cms-608-game-design-spring-2008/readings/): Complete reading list including Caillois, Bateman/Boon, Salen/Zimmerman anthology.
- Jesper Juul, "The Art of Failure" landing page (https://jesperjuul.net/artoffailure/): Thesis, framing, and reader scope.
- Ian Bogost books page (https://bogost.com/books/persuasive_games/): Procedural rhetoric concept summary.
- GitHub: awesome-game-production by vhladiienko (https://github.com/vhladiienko/awesome-game-production): Curated production resources including Schreier, Chandler, postmortems.
- ArXiv survey on LLM/PCG integration (https://arxiv.org/html/2410.15644v1): 2023-2024 LLM wave in procedural content generation.
- Game Developer, "Revisiting the MDA Framework" (https://www.gamedeveloper.com/design/revisiting-the-mda-framework): Non-linearity critique, board game edge case.
- Game Developer, "Agile Game Development is Hard" (https://www.gamedeveloper.com/programming/agile-game-development-is-hard): Structural Scrum critique for game teams.
- Game Developer, "Why We Should Stop Saying Vertical Slices" (https://www.gamedeveloper.com/design/why-we-should-stop-saying-vertical-slices-): Critique of vertical slice orthodoxy.
- ResearchGate, "What Went Wrong? A Survey of Problems in Game Development" (https://www.researchgate.net/publication/220686446_What_went_wrong_A_survey_of_problems_in_game_development): Empirical scope/crunch analysis across 155 postmortems.
- Routledge product page, "Procedural Storytelling in Game Design" (https://www.routledge.com/Procedural-Storytelling-in-Game-Design/Short-Adams/p/book/9781138595309): Editor/contributor overview.
- Bartle, Designing Virtual Worlds, Wikipedia/Internet Archive (https://en.wikipedia.org/wiki/Designing_Virtual_Worlds): Scope, player taxonomy, 2026 edition note.
- ACM / DiGRA Digital Library (https://dl.digra.org/): LLM/game papers 2023-2024.
- Shneiderman, Creativity Support Tools, ACM (https://dl.acm.org/doi/10.1145/1323688.1323689): CST framework lineage.
- Sicart, "Play Matters" and "Against Procedurality" (https://gamestudies.org/1103/articles/sicart_ap): Ethics, play philosophy, procedural critique.
- Academia.edu review of "The Art of Failure" (https://www.academia.edu/25363530/): Failure-as-design signal framing.

---

## Recommended Additions

### Gap (a): Taste-to-Design Translation

**A Theory of Fun for Game Design**
- Author: Raph Koster
- Year: 2005 (revised 2013)
- Gap filled: The current craft reference index has no text addressing why fun works at a cognitive level — what the brain is doing when it experiences play. Koster's thesis (fun is the act of pattern recognition and mastery) gives designers a first-principles answer to "why does this feel good?" that goes deeper than MDA aesthetics categories.
- Source-map slot: Design Foundations, adjacent to MDA.
- Operational moves enabled: Agents reviewing a mechanic can ask "what skill/pattern does this teach?" as a gate condition. The Koster frame also flags when a mechanic has exhausted its learning curve (boredom onset), which is actionable earlier than playtesting catches it.
- Note: The 2013 10th-anniversary edition adds full-color illustrations and minor framing updates but the core argument is unchanged. The text is short, accessible, and has broad acceptance across academia (ACM) and industry (GDC). Its absence from the craft reference index is the single most glaring gap.

**Man, Play, and Games**
- Author: Roger Caillois
- Year: 1958 (English translation 1961)
- Gap filled: Caillois provides a pre-design-era taxonomy of play types (agon/competition, alea/chance, mimicry/simulation, ilinx/vertigo) and the paidia-to-ludus continuum. This gives agents a vocabulary for classifying what kind of play a design calls on that is orthogonal to both MDA and Schell's lenses. MIT's CMS.608 course assigns it as primary reading.
- Source-map slot: Design Foundations.
- Operational moves enabled: Concept intake can classify play type mix early, letting scope decisions account for the difference between a competition-heavy design (needs balancing budget) versus an ilinx design (needs feel/feedback budget). Also grounds the framework in a tradition that predates digital games.

**Half-Real: Video Games between Real Rules and Fictional Worlds**
- Author: Jesper Juul
- Year: 2005
- Gap filled: The current craft reference index has no text addressing the rules/fiction duality — the fact that games are simultaneously formal rule systems and fictional worlds. Juul's framework is the standard reference for this distinction. It directly supports design decisions about when to break fictional consistency for rule clarity (or vice versa), a judgment call that comes up in every proof review.
- Source-map slot: Design Foundations, adjacent to Rules of Play.
- Operational moves enabled: Gate reviews can check whether a design's fiction/rules tension is resolved intentionally or by omission. Agents can invoke Juul when a playtest note says "this doesn't make sense in the world" versus "the rule is unclear."

---

### Gap (a) + (d): Taste-to-Design Translation / Creative Process

**A Theory of Fun for Game Design** is already listed above. The following fill the broader creative process gap.

**The Creative Habit: Learn It and Use It Forever**
- Author: Twyla Tharp
- Year: 2003
- Gap filled: No current source has an account of how professional creative practitioners actually structure daily practice — not methodology, but habit, ritual, and the management of creative energy across long projects. Tharp's framework (preparation, spine, the box) maps directly onto the problem of maintaining creative momentum through a multi-month proof cycle.
- Source-map slot: New section, "Creative Process."
- Operational moves enabled: The "box" concept (collect everything relevant to a project before starting) can become a concrete intake step for concept development. The "spine" (a one-sentence creative purpose) aligns with the framework's existing one-page brief but adds a process rationale for why it must exist before work begins.

**Where Good Ideas Come From: The Natural History of Innovation**
- Author: Steven Johnson
- Year: 2010
- Gap filled: Johnson's "adjacent possible" and "slow hunch" concepts address the mechanism by which creative constraints produce novel combinations rather than blocking them. This is directly applicable to the framework's playable-validation structure: bounded scope should, per Johnson, increase the density of adjacent possible moves, not reduce them. The current craft reference index has no language for this claim.
- Source-map slot: New section, "Creative Process," or Design Foundations preamble.
- Operational moves enabled: Agents can use "adjacent possible" as a justification for tight scoping in early proofs — the argument becomes epistemic (more combinations per unit time) rather than just risk management.

**A Technique for Producing Ideas**
- Author: James Webb Young
- Year: 1940 (still in print)
- Gap filled: Young's five-step process (gather raw material, digest it, let it incubate unconsciously, recognize the idea, develop it for use) is the shortest complete account of the idea-generation process ever written. It is applicable to all creative disciplines and fills the gap between "have a taste" and "have a design." Young predates every game design text in the current craft reference index and is the upstream source of much subsequent creativity literature.
- Source-map slot: New section, "Creative Process."
- Operational moves enabled: The incubation step is explicitly not in the current framework. Agents could identify when a concept is stuck and prescribe a deliberate pause rather than more generation attempts.

---

### Gap (b): Production Failure Protocols — Concept Death, Scope Crisis, Parallel Risk

**Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind How Video Games Are Made**
- Author: Jason Schreier
- Year: 2017
- Gap filled: The current production sources (Chandler, Keith, Lemarchand) cover methodology. None cover the phenomenology of production failure — the specific ways games die or nearly die, from scope explosion to publisher interference to technical bets that don't pay out. Schreier's ten case studies give agents pattern-matching material for recognizing a crisis before it is named.
- Source-map slot: Production, adjacent to Game Production Toolbox.
- Operational moves enabled: The risk-register template can reference specific failure modes from the book (e.g., the Destiny "direction collapse," the Diablo III "auction house trap") as named archetypes. Agents doing production review can compare current project state against documented crisis shapes.

**"What Went Wrong? A Survey of Problems in Game Development"**
- Author: Petrillo, Pimenta, et al.
- Year: 2008 (published in proceedings; widely cited)
- Gap filled: This empirical study of 155 postmortems is the closest thing to a systematic dataset on game production failure. It quantifies that scope/feature creep accounts for ~23% of documented problems, making it the single largest failure category. The current craft reference index has no empirical grounding for its production risk assumptions.
- Source-map slot: Production, as a reference document.
- Operational moves enabled: Scope gates can cite an evidence base rather than common wisdom. The risk register can prioritize scope-related risks by empirical frequency, not by what feels most alarming.

**"Why We Should Stop Saying 'Vertical Slices'"**
- Author: Geoff Ellenor (via Game Developer)
- Year: 2022
- Gap filled: The framework uses "proof" as a deliberately distinct term from vertical slice, but does not document why the distinction matters. This article areas the structural argument: vertical slices optimize for demonstrating polish to publishers rather than validating core design risk. That is the exact critique the framework's proof-gate system is implicitly responding to.
- Source-map slot: Production, as a critique/contrast reference.
- Operational moves enabled: Gate templates can explicitly state "this is not a vertical slice" and reference Ellenor's argument, preventing stakeholders from confusing the two. Playbook entries on proof scope can point here.

---

### Gap (b) + Contrarian: Critique of Agile for Games

**"Agile Game Development is Hard" and related postmortem analysis**
- Source: Game Developer (multiple authors), ResearchGate (Petrillo et al.)
- Year: 2008-2022
- Gap filled: The framework currently cites Agile Game Development with Scrum (Keith) without contrarian context. The empirical record shows Scrum adoption in games hovers around 21% and that the "sequel are not iterations" problem makes continuous improvement models structurally incompatible with how most game studios actually work. The framework should know this so it can prescribe Scrum-derived practices selectively.
- Source-map slot: Production, as a critique reference.
- Operational moves enabled: Playbook entries for milestone planning can explicitly flag which Scrum practices transfer to games (sprint reviews, retrospectives) versus which do not (velocity tracking across a creative design phase).

---

### Gap (c): AI/LLM Creative Collaboration

**"Procedural Content Generation in Games: A Survey with Insights on Emerging LLM Integration"**
- Authors: Multiple (arXiv 2410.15644)
- Year: 2024
- Gap filled: The current craft reference index has no academic reference for procedural content generation or LLM-assisted design. This survey covers the 2023 wave in which LLM usage in PCG research increased by an order of magnitude, documents specific applications (MarioGPT, SCENECRAFT, 1001 Nights), and identifies the shift from open to closed model deployment. This is the empirical foundation for any claim the framework makes about AI-assisted design being a new category.
- Source-map slot: New section, "AI-Assisted Design," or expand the Design Foundations section with an "Emerging Tools" note.
- Operational moves enabled: Codex and Claude prompts for level generation, NPC scripting, or content variation can reference specific PCG patterns documented in this survey rather than improvising. The survey also identifies what LLMs are systematically poor at in PCG (structural consistency, playability validation), which directly informs where human gates are required.

**Creativity Support Tools (CST) research lineage — Shneiderman et al.**
- Key papers: "Creativity Support Tools" (2002), "Creativity Support Tools: Accelerating Discovery and Innovation" (2007)
- Authors: Ben Shneiderman et al.
- Year: 2002-2007
- Gap filled: The framework positions agents as "creative collaborators" without grounding that positioning in the HCI literature on what makes tools support (versus suppress) creativity. Shneiderman's CST framework identifies six dimensions (exploration, engagement, expressiveness, immersion, collaboration, and results worth sharing) that a good support tool must satisfy. This gives agents criteria against which to evaluate their own contributions.
- Source-map slot: New section, "AI-Assisted Design."
- Operational moves enabled: The creative director playbook can ask "am I functioning as a CST or as a constraint?" at each turn. Gate verdicts can include a CST self-assessment dimension.

---

### Gap (d): Creative Process Beyond Games

**Procedural Storytelling in Game Design**
- Editors: Tanya X. Short, Tarn Adams
- Year: 2019 (Routledge)
- Gap filled: Emily Short's storylets post is already in the craft reference index but covers only one narrative pattern. This edited volume collects 30+ practitioners (Dwarf Fortress, Moon Hunters, The Sims narrative systems) covering character generation, procedural dialogue, world-building grammars, and emergence-from-rules approaches. It is the practitioner-facing companion to Short's theoretical essays.
- Source-map slot: Narrative, directly adjacent to Emily Short on storylets.
- Operational moves enabled: Narrative agents can draw on specific documented techniques (e.g., grammar-based world description, procedural quest assembly) rather than improvising narrative architecture. Gate reviews for narrative proofs can check against the checklist of failure modes documented in contributors' essays.

**Designing Virtual Worlds**
- Author: Richard Bartle
- Year: 2003 (2026 second edition, CC licensed)
- Gap filled: The framework currently has no reference for persistent world design — player identity over time, social ecosystem design, economy as a designed system rather than a balancing tool, and the relationship between world rules and community norms. Bartle covers MUD-to-MMORPG design, the 8-type player taxonomy (extension of the famous 4-type), and the ethics of virtual world governance. This is essential for any scoped proof that involves multiplayer, social, or live-service elements.
- Source-map slot: Production or Design Foundations, as a specialized reference.
- Operational moves enabled: Intake templates for multiplayer or persistent-world proofs can require a Bartle player-type analysis. Risk registers for social games can reference documented failure modes from the book's governance sections.

---

## Critiques And Contrarian Voices

**Against Procedurality (Sicart, 2011)**
- Published in Game Studies 11(3)
- Sicart's argument: Bogost's procedural rhetoric over-privileges rules as the locus of meaning and marginalizes the role of player interpretation and ethics. This directly challenges the MDA framework's assumption that mechanics causally produce aesthetics. For the framework, the implication is that a proof that passes all mechanic/dynamic checks can still fail to communicate intended meaning if player interpretation diverges from designer intent.
- Applicable to: Gate verdicts that rely on MDA causality to claim a design "achieves" a target aesthetic.

**DDE Framework (Design, Dynamics, Experience)**
- Source: Braxton Boren, "Design, Dynamics, Experience: An Advancement of the MDA Framework" (Springer, 2017)
- Critiques MDA for: omitting graphical/audio design, treating aesthetics as outputs (they are also inputs to player framing), and failing to handle non-digital games.
- Applicable to: Any gate review that uses MDA as a checklist. The DDE reframe suggests the current craft reference index should acknowledge MDA as one model, not the model.

**"Agile Game Development is Hard" and related empirical critique**
- Already listed in Gap (b) above. Reproduced here for completeness: the contrarian position is that Scrum as prescribed by Keith (already in craft reference index) has a documented failure rate in game contexts. The framework should cite the critique alongside the prescription.

**Ellenor on vertical slices**
- Already listed in Gap (b). The contrarian: "vertical slice" as a concept optimizes for publisher demonstration rather than design validation, which is the opposite of what a proof-gate framework needs.

---

## Pedagogy Reading Lists Referenced

**MIT OpenCourseWare CMS.608 (Game Design, 2008 and 2010)**
- Primary texts: Rules of Play (Salen/Zimmerman), Game Design Workshop (Fullerton), Man Play and Games (Caillois), The Game Design Reader (Salen/Zimmerman anthology), 21st Century Game Design (Bateman/Boon).
- Notable gap the course exposes: The current craft reference index includes Rules of Play and Game Design Workshop but not Caillois or the Game Design Reader anthology, both of which MIT treats as co-equal primary texts.

**Carnegie Mellon ETC Press**
- ETC Press publishes Game Design Research (eds. Lankoski/Bjork), which collects research methods for game design as an academic discipline. Not a reading list per se but signals that CMU treats design research methodology as a distinct competency from design practice — a gap the current craft reference index does not address.

**NYU Game Center MFA**
- Core required courses: Game Design 1 (meaningful choice, non-digital focus), Games 101 (history from ancient to contemporary), Game Studio 1. The curriculum's emphasis on non-digital games as primary design study aligns with the argument for adding Caillois to the craft reference index.

---

## Relevance To Game Studio

| Addition | Framework Gap | Proposed Change |
|---|---|---|
| Koster, A Theory of Fun | (a) taste-to-design | Add to Design Foundations; gate prompt: "what skill does this mechanic teach?" |
| Caillois, Man Play and Games | (a) taste-to-design | Add to Design Foundations; intake: classify play type mix (agon/alea/mimicry/ilinx) |
| Juul, Half-Real | (a) taste-to-design | Add to Design Foundations; gate: is rules/fiction tension resolved deliberately? |
| Tharp, The Creative Habit | (d) creative process | Add new section; intake: require a "spine" (one-sentence purpose) before concept work |
| Johnson, Where Good Ideas Come From | (d) creative process | Add new section; scope rationale: adjacent possible argument for tight proofs |
| Young, A Technique for Producing Ideas | (d) creative process | Add new section; gate: is the concept stuck? prescribe incubation before more generation |
| Schreier, Blood Sweat and Pixels | (b) production failure protocols | Add to Production; risk register: reference named failure archetypes |
| Petrillo et al., What Went Wrong | (b) production failure protocols | Add to Production; scope gate: empirical justification for scope as #1 risk |
| Ellenor, Why We Should Stop Saying Vertical Slices | (b) production failure protocols | Add to Production; proof-gate template: "this is not a vertical slice, here is why" |
| Short/Adams, Procedural Storytelling | (a)+(d) narrative | Add to Narrative; replace improvised narrative architecture with documented patterns |
| Bartle, Designing Virtual Worlds | (b)+(d) live ops | Add specialized reference; multiplayer intake: require Bartle player-type analysis |
| PCG/LLM survey (arXiv 2024) | (c) AI collaboration | Add new section; Codex/Claude prompts: reference documented PCG patterns and failure modes |
| Shneiderman, CST papers | (c) AI collaboration | Add new section; playbook: agent CST self-assessment at each gate |
| Sicart, Against Procedurality | (b) critique | Add as critique reference alongside MDA; gate: check player interpretation divergence |

---

## Open Questions

1. The 2026 second edition of Designing Virtual Worlds is newly published. It is not yet reviewed in academic literature. It is unclear whether the revisions meaningfully update the 2003 argument or merely extend it with live-service case studies. The framework should wait for a review before treating it as the canonical reference over the 2003 edition.

2. The CHI Play 2024 proceedings contain a growing body of work on LLM-assisted game design specifically (not just LLM in PCG). A targeted survey of CHI Play 2023 and 2024 proceedings was not completed in this research round and should be done before finalizing the AI-Assisted Design section of the craft reference index.

3. Caillois (1958) is over 60 years old and his taxonomy has been critiqued for being overly categorical (Sutton-Smith's "rhetorics of play" work challenges it directly). The framework should decide whether to cite Caillois as a foundational vocabulary or as a starting point that requires the Sutton-Smith critique alongside it.

4. The "creative process" section (Tharp, Johnson, Young) is drawn from non-game domains. It is not clear how these texts are currently used in game design pedagogy at the programs surveyed. This is an inference-from-applicability recommendation, not an observation of actual adoption. If this round's research proves insufficient, a targeted survey of GDC talks citing these books would strengthen the case.

5. The Shneiderman CST framework predates generative AI by 15 years. A more recent framing specific to generative AI collaboration (e.g., Bown et al. on co-creative AI, 2020) may be a better entry point. This round found the Shneiderman lineage but did not locate a current-generation successor paper.

---

## Citations

- https://www.amazon.com/Theory-Game-Design-Raph-Koster/dp/1449363210
- https://www.oreilly.com/library/view/theory-of-fun/9781449363208/
- https://mitpress.mit.edu/9780262516518/half-real/
- https://jesperjuul.net/artoffailure/
- https://bogost.com/books/persuasive_games/
- https://gamestudies.org/1103/articles/sicart_ap
- https://mitpress.mit.edu/9780262534512/play-matters/
- https://en.wikipedia.org/wiki/Man,_Play_and_Games
- https://nideffer.net/classes/270-08/week_01_intro/Caillois.pdf
- https://ocw.mit.edu/courses/comparative-media-studies-writing/cms-608-game-design-spring-2008/readings/
- https://www.routledge.com/Procedural-Storytelling-in-Game-Design/Short-Adams/p/book/9781138595309
- https://en.wikipedia.org/wiki/Designing_Virtual_Worlds
- https://mud.co.uk/richard/DesigningVirtualWorlds.pdf
- https://arxiv.org/html/2410.15644v1
- https://dl.digra.org/index.php/dl/article/download/2426/2419/2455
- https://dl.acm.org/doi/10.1145/1323688.1323689
- https://creativetech.mat.ucsb.edu/readings/schneiderman_creativitysupport.pdf
- https://www.amazon.com/Blood-Sweat-Pixels-Triumphant-Turbulent/dp/0062651234
- https://www.researchgate.net/publication/220686446_What_went_wrong_A_survey_of_problems_in_game_development
- https://www.gamedeveloper.com/design/why-we-should-stop-saying-vertical-slices-
- https://www.gamedeveloper.com/programming/agile-game-development-is-hard
- https://www.gamedeveloper.com/design/revisiting-the-mda-framework
- https://link.springer.com/chapter/10.1007/978-3-319-53088-8_3
- https://press.etc.cmu.edu/books/game-design-research
- https://gamecenter.nyu.edu/academics/game-design-mfa/
- https://www.amazon.com/Creative-Habit-Learn-Use-Life/dp/0743235274
- https://www.amazon.com/Where-Good-Ideas-Come-Innovation/dp/1594485380
- https://www.amazon.com/Technique-Producing-Ideas-James-Young/dp/198781746X
