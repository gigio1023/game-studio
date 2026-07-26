# MDA Framework and Its Successors

## 1. Origin and citation

**Primary source (fetched and read in full for this entry):**

Hunicke, Robin; LeBlanc, Marc; Zubek, Robert (2004). **"MDA: A Formal Approach to Game Design and Game Research."** Proceedings of the AAAI Workshop on Challenges in Game AI (WS-04-04), Game Developers Conference material, San Jose, 2001–2004 workshop lineage. AAAI Workshop Papers 2004.

- Authors' institutional emails at time of writing: hunicke@cs.northwestern.edu, marc_leblanc@alum.mit.edu, rob@cs.northwestern.edu (Northwestern University CS department, per byline).
- Official listing: https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/
- Direct PDF (verified live, downloaded and read for this note): https://cdn.aaai.org/Workshops/2004/WS-04-04/WS04-04-001.pdf
- Mirror also confirmed live: https://www.ixperium.nl/wp-content/uploads/2023/02/MDA_A_Formal_Approach_to_Game_Design_and_Game_Rese.pdf

The paper states its own origin directly: it was "developed and taught as part of the Game Design and Tuning Workshop at the Game Developers Conference, San Jose 2001-2004 [LeBlanc, 2004a]." So MDA predates this 2004 paper by three years as a GDC workshop curriculum; the AAAI paper is the first formal written codification. The paper's own stated goal: "MDA is a formal approach to understanding games — one which attempts to bridge the gap between game design and development, game criticism, and technical game research."

All quotations below, unless explicitly marked "secondary" or "reconstructed," are taken directly from this PDF as read.

## 2. The three-layer definition, exactly as the paper states it

The paper frames games as artifacts, not media: "the content of a game is its *behavior* — not the media that streams out of it towards the player." This framing matters — it is why the layers below are about *behavior and system response*, not about content delivery.

The paper gives two parallel diagrams. The consumption-side (generic) version:

```
Rules → System → "Fun"
```

...and its design-side counterpart, the three named layers:

```
Mechanics → Dynamics → Aesthetics
```

The paper's exact definitions, verbatim:

> **Mechanics** describes the particular components of the game, at the level of data representation and algorithms.
>
> **Dynamics** describes the run-time behavior of the mechanics acting on player inputs and each other's outputs over time.
>
> **Aesthetics** describes the desirable emotional responses evoked in the player, when she interacts with the game system.

Note precisely what each layer is *not*:
- Mechanics is not "features" in a marketing sense — it is data structures and algorithms (the paper's own examples: "the mechanics of card games include shuffling, trick-taking and betting"; "the mechanics of shooters include weapons, ammunition and spawn points"; "the mechanics of golf include balls, clubs, sand traps and water hazards").
- Dynamics is not observable "gameplay" loosely defined — it is specifically the *emergent, run-time* behavior produced by mechanics interacting with player input and with each other's outputs. The paper's own examples of what mechanics produce as dynamics: card-game mechanics (shuffling, trick-taking, betting) → **bluffing** emerges; shooter mechanics (weapons, ammo, spawn points) → **camping and sniping** emerge; golf mechanics (clubs, hazards) → **broken or drowned clubs** emerge. In each case the dynamic is not directly authored — it is a second-order effect of the mechanic.
- Aesthetics is explicitly scoped to *emotional response*, not "art style" or "graphics" (a common misreading of the word "aesthetics" in this framework — the paper deliberately repurposes the word away from its everyday visual-design meaning).

## 3. Designer perspective vs. player perspective

This is the paper's central structural claim, and it gets its own labeled section, "MDA as Lens":

> Each component of the MDA framework can be thought of as a "lens" or a "view" of the game — separate, but causally linked. [LeBlanc, 2004b].
>
> From the designer's perspective, the mechanics give rise to dynamic system behavior, which in turn leads to particular aesthetic experiences. From the player's perspective, aesthetics set the tone, which is born out in observable dynamics and eventually, operable mechanics.

The paper's diagram shows this literally as two arrows on the same M-D-A chain: a **designer arrow running M → D → A**, and a **player arrow running A → D → M** (drawn as a reversed/dashed arrow beneath it), with the designer icon anchored on the Mechanics side and the player icon anchored on the Aesthetics side.

The paper draws a direct methodological consequence from the inversion and states it as a deliberate choice of exposition order:

> As such, we begin our investigation with a discussion of Aesthetics, and continue on to Dynamics, finishing with the underlying Mechanics.

In other words: because *players* meet the game aesthetics-first, the paper's own internal structure (Aesthetics section → Dynamics section → Mechanics section) is written to mirror the player's order of encounter, even though the *designer's* causal order of construction is the reverse (M → D → A). The stated payoff of holding both perspectives simultaneously: "It helps us observe how even small changes in one layer can cascade into others. In addition, thinking about the player encourages experience-driven (as opposed to feature-driven) design."

## 4. The taxonomy of player aesthetics ("8 kinds of fun")

The paper is explicit that this list is a *starting vocabulary*, not a closed enumeration: "In describing the aesthetics of a game, we want to move away from words like 'fun' and 'gameplay' towards a more directed vocabulary. This includes but is not limited to the taxonomy listed here." That qualifier ("but is not limited to") is in the original text and is important — the framework itself disclaims completeness.

The eight categories, each given a one-line "Game as ___" gloss in the paper (this is the entirety of the paper's own per-item definition — it does not expand each into a paragraph; the tagline *is* the definition):

1. **Sensation** — Game as sense-pleasure
2. **Fantasy** — Game as make-believe
3. **Narrative** — Game as drama
4. **Challenge** — Game as obstacle course
5. **Fellowship** — Game as social framework
6. **Discovery** — Game as uncharted territory
7. **Expression** — Game as self-discovery
8. **Submission** — Game as pastime

(Note on naming: the task brief and several secondary sources refer to #8 as "Submission (sometimes called Abnegation)." The primary paper as fetched uses only "Submission" — "Abnegation" does not appear in the AAAI 2004 text. "Abnegation" appears to be a later relabeling used in some secondary write-ups/talks, not in this source; flagged here as unverified against the primary text.)

A revealing detail from the paper's own worked example (Section: Aesthetics, game breakdowns below): when applying the taxonomy to *Quake*, the paper lists **"Competition"** as one of the game's aesthetic components — a term that is not one of the eight canonical categories above. This is a small but real internal inconsistency in the source text itself, and it is exactly the kind of looseness later critiques point at (see §7): the taxonomy is used more loosely in practice, within the same paper, than its own numbered list suggests.

## 5. Practical use: MDA as a lens for critique and tuning

The paper is explicit that MDA is meant as a *working tool for iteration*, not just a descriptive taxonomy. Two mechanisms it proposes:

**Aesthetic models** — using the 8-category vocabulary "like a compass" to name what a design is trying to achieve, then reasoning about what dynamics that requires. Worked example from the paper: *Charades* and *Quake* are both driven by a **competitive** aesthetic model — "They succeed when the various teams or players in these games are emotionally invested in defeating each other. This requires that players have adversaries... and that all parties want to win." The paper draws the design implication directly: "supporting adversarial play and clear feedback about who is winning are essential to competitive games. If the player doesn't see a clear winning condition, or feels like they can't possibly win, the game is suddenly a lot less interesting."

**Dynamic models** — formal/quantitative models of how mechanics produce dynamics, used to predict and debug player experience *before* or *during* tuning. The paper's central worked example is Monopoly:
- A probability model of 2d6 rolls is used to estimate how long it takes a player to circle the board.
- A **feedback-loop model** (explicitly compared to a thermostat's controller/thermometer feedback loop, with a diagram) is used to explain why Monopoly runs away toward a single winner: "as the leader or leaders become increasingly wealthy, they can penalize players with increasing effectiveness. Poorer players become increasingly poor... As the gap widens, only a few (and sometimes only one) of the players is really invested. Dramatic tension and agency are lost."
- From that diagnosis, the paper proposes concrete **mechanics-level fixes**: subsidies for poor players, taxes for rich players (e.g., calculated at Go, at jail-release, or above a monopoly-value threshold), or mechanics that add time pressure (resource depletion, doubled monopoly payouts, randomized low-value property distribution) to shorten the runaway-leader window.

The paper names this whole loop **"Tuning"** as its own section, and is explicit about what MDA contributes to it: "When tuning, our aesthetic vocabulary and models help us articulate design goals, discuss game flaws, and measure our progress as we tune... our dynamic models help us pinpoint where problems may be coming from." The Conclusion restates this as the framework's core value proposition: "MDA supports a formal, iterative approach to design and tuning. It allows us to reason explicitly about particular design goals, and to anticipate how changes will impact each aspect of the framework and the resulting designs/implementations."

## 6. Worked examples, directly from the paper

### 6.1 Aesthetic breakdowns of named games

The paper applies its own taxonomy to four real games side by side, to demonstrate that "each game pursues multiple aesthetic goals, in varying degrees" rather than chasing one flavor of fun:

> **Charades:** Fellowship, Expression, Challenge.
> **Quake:** Challenge, Sensation, Competition, Fantasy.
> **The Sims:** Discovery, Fantasy, Expression, Narrative.
> **Final Fantasy:** Fantasy, Narrative, Expression, Discovery, Challenge, Submission.

The paper's own comparative reading: "Charades emphasizes Fellowship over Challenge; Quake provides Challenge as a main element of gameplay." It explicitly disclaims a unifying formula: "there is no Grand Unified Theory of games or formula that details the combination and proportion of elements that will result in 'fun'."

### 6.2 The AI Babysitter example ("MDA at Work")

This is the paper's extended case study, applied specifically to game-AI design (its target venue was an AAAI *game AI* workshop). A single base premise — a hide-and-seek "tag" game where the player must find and interact with an AI-controlled character — is re-targeted across three audiences to show how a change in the **Aesthetics** target cascades down through Dynamics into different **Mechanics**, including different AI requirements:

- **First pass** — a "Babysitting" demo for 3–7 year-olds: target aesthetics are Exploration/Discovery, not Challenge. The AI baby's dynamics are tuned to "express emotions like surprise, fear, and anticipation" rather than to compete. Mechanics: hard-coded hiding spots and paths, simple talk/chase/sneak/tag verbs.
- **Second pass** — a Nickelodeon "Rugrats"-style game for 7–12 year-old girls: target aesthetics add Challenge and Narrative (multi-level story structure). Dynamics now track multiple characters simultaneously, add time pressure ("get them all to bed before 9 pm") and a "mess factor" emotional-state system. Mechanics correspondingly need AI babies to choose their own hiding places and track individual internal state rather than following static hard-coded paths.
- **Third pass** — a stealth military sim in the vein of *Splinter Cell* or *Thief*, for 14–35 year-old men: target aesthetics shift to Fantasy (role-playing spy-hunter or rogue) and Challenge bordering on Submission, with far less overt emotional expression from opponent agents ("agents should express fear and loathing at the very hint of his presence" rather than baby-like reactions). Dynamics now include earning/purchasing equipment and stealth/evasion tactics. Mechanics scale up to tech/skill trees, multiple enemy unit types, and variable visibility/mobility terrain — requiring materially more sophisticated AI (sound propagation modeling, terrain navigation, whether agents may "cheat").

The paper's own takeaway from this case study, stated directly: "there are no 'AI mechanics' as such — intelligence or coherence comes from the interaction of AI logic with gameplay logic. Using the MDA framework, we can reason explicitly about aesthetic goals, draw out dynamics that support those goals, and then scope the range of our mechanics accordingly." This is the clearest statement in the paper of MDA used generatively (top-down, from a target Aesthetic) rather than only analytically (bottom-up, from an existing game).

## 7. Known critiques and limits

### 7.1 "Dynamics" is doing too much conceptual work (secondary/synthesized)

Multiple later commentators single out "Dynamics" as the framework's weakest-defined layer — it is asked to cover run-time system behavior, emergent play patterns, *and* (implicitly) the gap between what a designer intended players to feel and what a given playthrough actually produces, without the paper distinguishing these. This is the throughline that the DDE framework (§8.1) was explicitly built to address — DDE's stated motivation, per secondary summaries of it, is that MDA "has no clean way to distinguish the experience you intended from the experience the player actually had."

### 7.2 The 8-category taxonomy is loosely grounded

Secondary sources (aggregated from web search synthesis, not independently verified against a single primary critique paper) describe the eight-aesthetics list as "a rather arbitrary list of emotional targets, which lack fundamentals," open to expansion but without a stated principle for what belongs on it or why exactly eight. This matches an observation directly verifiable in the primary text itself: the paper's own worked Quake example uses "Competition" as an aesthetic label (§4), a category absent from its own numbered list of eight — i.e., the paper does not consistently apply its own taxonomy as closed, which is itself evidence for the "loosely grounded, not a sealed system" critique.

### 7.3 Scope: MDA is gameplay-first, and is weaker for narrative/UX/tech-driven design (secondary, attributed to Brian Winn)

Per secondary summary (not independently verified against Winn's primary text in this pass): game-design scholar Brian Winn is cited as concluding that MDA "does not specifically address aspects of game design beyond the gameplay, including the storytelling, user experience, and influence of technology on the design." This lines up with the general critique that MDA was built by and for systems/rules-driven game design (its own worked examples are Charades, Quake, Monopoly, a stealth-AI prototype — all systemic, rules-forward genres) and does not have a native vocabulary for narrative-authorship or interface/UX concerns as first-class design objects.

### 7.4 Digital-game bias and the linearity assumption (primary source read directly)

Luiz Claudio Silveira Duarte, **"Revisiting the MDA Framework,"** *Game Developer* (formerly Gamasutra), published 2015-02-03. https://www.gamedeveloper.com/design/revisiting-the-mda-framework — fetched and read for this note.

Duarte's core argument: MDA's designer→player reversal (M→D→A vs. A→D→M) implicitly assumes a *digital* game, where the software enforces mechanics invisibly and the player only ever perceives aesthetics first, discovering dynamics and mechanics through play. He argues this breaks down for board/tabletop games, where a novice player typically must *read the rules* — i.e., encounter Mechanics directly — before any dynamics or aesthetics can occur at all: "It is impossible for a Chess novice to learn its rules simply by moving the men around the board." Duarte's proposed fix is a **non-linear model** in which the three planes (Mechanics/Dynamics/Aesthetics) interact dynamically rather than being read strictly forward or strictly backward, so the framework can accommodate both digital and non-digital games and varying player-onboarding paths. He does not discard MDA; he argues its causal *arrows* are medium-specific rather than universal.

### 7.5 On "MDA2" and "FDD" — explicit negative result

Per the task brief's suggestion, I searched specifically for "MDA2" and "FDD framework game design" as named successor/revision frameworks. **I found no evidence that either exists as a citable, named framework.** Search results for "MDA2" returned only the original 2004 paper and general MDA explainers, with no revision or sequel attributable to Hunicke, LeBlanc, or Zubek under that name. "FDD" as a games-specific formal-design-dynamics framework did not surface in search results either (the acronym collides with the unrelated software-engineering "Feature-Driven Development" methodology, which is not a game-design framework and is not what was being searched for). Stating this as an honest negative result rather than fabricating a citation.

## 8. Successor and critique frameworks

### 8.1 DDE — Design, Dynamics, Experience (the strongest-sourced successor found)

**Walk, Wolfgang; Görlich, Daniel; Barrett, Mark (2017). "Design, Dynamics, Experience (DDE): An Advancement of the MDA Framework for Game Design."** Published as a chapter in the Springer book *Game Dynamics: Best Practices in Procedural and Dynamic Game Content Generation* (eds. Korn, O. & Lee, N.), Springer, 2017. DOI: 10.1007/978-3-319-53088-8_3.

Author-name correction worth flagging explicitly: the task brief's working guess at the authors' first names ("Bernd Walk, Barbara Görlich, Kai Barrett") does not match what multiple independent sources (Semantic Scholar, ResearchGate, a secondary blog citing the chapter) converge on: **Wolfgang Walk, Daniel Görlich, and Mark Barrett**. This note uses the verified names.

I was unable to retrieve the chapter's own abstract text directly — Springer's link.springer.com redirected to an authentication wall (idp.springer.com) on every fetch attempt, and the ResearchGate page returned HTTP 403. The description below is therefore reconstructed from converging secondary sources (a Semantic Scholar listing, a ResearchGate figure-caption page, and a third-party blog post summarizing the chapter's figures) rather than the primary chapter text — flagged accordingly.

What secondary sources converge on for DDE's structure and intent:
- It keeps a three-layer shape but renames and restructures the first and third layers. **Design** replaces (and subsumes) Mechanics, and is itself broken into three parts: a *Blueprint* (conceptual world-building — narrative, character, art direction), *Mechanics* (code-level rules and object interaction, invisible to the player, closer to MDA's original Mechanics), and *Interface* (everything the player actually sees/hears that communicates the game world). **Dynamics** is retained largely as MDA defined it — run-time behavior emerging from the Design elements interacting, including unpredictable player choices. **Experience** replaces Aesthetics, structured around three dimensions — sensory response, emotional response, and intellectual/decision-making challenge — and is explicitly framed to separate the *player's actual lived experience* from what the designer intended, closing the gap MDA's single "Aesthetics" term collapsed.
- DDE's stated advancement over MDA (per secondary summary) is twofold: (1) it reinforces non-linearity in the design process rather than a strict one-way M→D→A pipeline, and (2) it explicitly adds a distinction MDA lacks — intended vs. actual player experience — plus attention to *transfer*: knowledge, actions, and emotions carrying over between the game world and the real world (relevant for serious games / training contexts, which is also why a microlearning-industry blog picked up DDE specifically for instructional-design use).
- One source describes players in the Experience layer as becoming "Player-Subjects" capable of exploring difficult scenarios safely — again pointing toward DDE's leanings into serious-games/training applications, beyond DDE's use in pure entertainment design.

Caveat: because this section rests on secondary sources rather than the chapter text itself, treat the specific sub-layer names (Blueprint/Mechanics/Interface) as good-confidence but not primary-verified.

### 8.2 Other named critique/successor material found (lighter-sourced, listed for completeness)

- **Joris Dormans, *Engineering Emergence: Applied Theory for Game Design*** — surfaced as a citation in the MDA framework's Wikipedia article as a theoretical critique/extension addressing MDA's limits around emergent dynamics specifically (dynamics as *emergent systems* needing their own formal modeling toolkit, e.g. Dormans' Machinations framework for simulating game economies). Not independently fetched/verified in this pass beyond the Wikipedia citation; flagged as secondary.
- **"The 6-11 Framework: A New Methodology for Game Analysis and Design"** — also surfaced only as a citation title in the MDA Wikipedia article's alternative-frameworks discussion. I could not retrieve author, venue, or year for this one in this pass (search budget was exhausted mid-research; a follow-up WebFetch of the underlying paper would be needed to cite it properly). Listed here only so a future pass knows it exists and needs verification — do not treat it as confirmed content.
- **Brian Winn's critique** (§7.3) is consistent with Winn being the author of a distinct named framework — **Design, Play, Experience (DPE)** — which is fairly well known in academic game-design literature as a serious-games-oriented alternative to MDA. This note flags DPE's existence from general model knowledge, **not verified against a primary or secondary source in this research pass** (the WebSearch budget was exhausted before this could be checked), so treat the DPE attribution as reconstructed/unconfirmed rather than citable as-is.

## 9. Quick-reference summary

| Layer | Paper's definition | Who "owns" it | Player encounters it... |
|---|---|---|---|
| Mechanics | Rules, data representation, algorithms | Designer authors directly | ...last (inferred from play) |
| Dynamics | Run-time behavior of mechanics acting on input/each other over time | Emerges from Mechanics, not directly authored | ...second (observed as play unfolds) |
| Aesthetics | Emotional responses evoked in the player | Designer's target, player's actual experience | ...first (this is what "fun" feels like before it's analyzed) |

Eight aesthetics (paper's own taglines): Sensation (sense-pleasure), Fantasy (make-believe), Narrative (drama), Challenge (obstacle course), Fellowship (social framework), Discovery (uncharted territory), Expression (self-discovery), Submission (pastime) — explicitly "not limited to" this list.

## Sources

- Hunicke, R., LeBlanc, M., Zubek, R. (2004). "MDA: A Formal Approach to Game Design and Game Research." AAAI Workshop Papers 2004 (WS-04-04). Primary PDF fetched and read in full: https://cdn.aaai.org/Workshops/2004/WS-04-04/WS04-04-001.pdf. Listing: https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/
- Duarte, L.C.S. (2015-02-03). "Revisiting the MDA Framework." Game Developer. https://www.gamedeveloper.com/design/revisiting-the-mda-framework — fetched and read.
- Walk, W., Görlich, D., Barrett, M. (2017). "Design, Dynamics, Experience (DDE): An Advancement of the MDA Framework for Game Design." In *Game Dynamics*, Springer. DOI: 10.1007/978-3-319-53088-8_3. Primary text not directly accessible (paywalled); reconstructed from Semantic Scholar (https://www.semanticscholar.org/paper/Design,-Dynamics,-Experience-(DDE):-An-Advancement-Walk-G%C3%B6rlich/f6cafb04f69b88d47b4b841bc28bc88bb97a78ae), a ResearchGate figure page, and a secondary summary blog (https://maxlearn.com/blogs/dde-framework-for-game-design-in-microlearning/).
- Wikipedia, "MDA framework" (https://en.wikipedia.org/wiki/MDA_framework), fetched for its Criticism section and reference list (Dormans and "6-11 Framework" citations sourced from here, not independently verified).
- Search-synthesis-only claims (Brian Winn quote, "arbitrary taxonomy" phrasing, DPE framework existence) are explicitly labeled inline as secondary/reconstructed above and should be re-verified against primary text before being treated as firmly citable.
