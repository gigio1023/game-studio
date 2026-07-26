# Player Motivation Models in Games

Four influential models of why people play games, in roughly historical/methodological order: an armchair taxonomy built from one community's folklore (Bartle), an empirically-derived response to it (Quantic Foundry), a general psychology theory imported into games (Self-Determination Theory), and a psychology-of-optimal-experience concept that reshaped how designers think about difficulty (Flow). Each entry gives the actual mechanism in teachable detail, the originating source, known critiques, and at least one concrete game example.

---

## 1. Bartle's Player Types (1996)

### The model

Richard Bartle, a co-creator of the original MUD (Multi-User Dungeon), wrote "Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs" for the *Journal of MUD Research* (later reprinted in the *Journal of Virtual Environments*), Vol. 1, No. 1, 1996. Primary text: <http://www.mud.co.uk/richard/hcds.htm>.

The taxonomy is built from two perpendicular axes describing what a player's actions are *directed at* and what *kind* of engagement they seek:

- **Y-axis: Acting vs. Interacting.** *Acting* means doing things *to* the game or to other people — imposing your will on them. *Interacting* means engaging with the game or other people in a way that lets them *surprise you back* — a two-way exchange rather than a one-way imposition.
- **X-axis: World vs. Players.** Whether the player's attention is on the game's environment/systems, or on other people.

Crossing these axes produces four quadrants, each mapped onto a card suit:

1. **Achievers (♦ Diamonds — "act on world").** Interested in *doing things to the game*, i.e., acting on the world: accumulating treasure, points, levels, gear, and mastering the game's systems as an end in itself. Bartle's illustrative dialogue: "I'm busy." / "Sure, I'll help you. What do I get?" Diamonds because achievers are always seeking treasure.
2. **Explorers (♠ Spades — "interact with world").** Interested in *having the game surprise them* — interacting with the world to discover hidden mechanics, map spaces, and understand how the system works at a depth beyond what's needed to "win." Illustrative dialogue: "Hmm…" / "I haven't tried that one, what's it do?" Spades because they dig for information.
3. **Socializers (♥ Hearts — "interact with players").** Interested in interacting with *other players*: forming relationships, empathizing, chatting. Illustrative dialogue: "Hi!" / "Really? Oh no! Gee, that's terrible!" Hearts because they empathize with other players.
4. **Killers (♣ Clubs — "act on players").** Interested in *doing things to people* — acting on other players to impose superiority, cause distress, or demonstrate power over them (not necessarily literal PvP killing; the underlying motive is imposition, not violence per se). Illustrative dialogue: "Ha!" / "Coward!" / "Die! Die! Die!" Clubs because they hit people with them.

Bartle's summary framing: a MUD is simultaneously a **game** to achievers, a **pastime** to explorers, a **sport** to killers, and an **entertainment** to socializers — four different media experienced through the same software.

### The dynamic-tension diagram

The essay's most design-relevant (and least often reproduced) content is a set of population-dynamics arguments about how growth in one player-type population affects the others — not a static pie chart but a system with feedback loops:

- **Killers ↔ Achievers** sit in direct tension: more achievers (visible targets/status to dominate) attract killers, but once killers become too numerous they drive achievers away, which in turn starves the killer population — a self-limiting equilibrium loop.
- **Explorers** are comparatively inert — their numbers barely move in response to the other types, *except* that a large killer population will eventually suppress them too.
- **Socializers** are the most volatile population, with a positive feedback loop (more socializers attract more socializers) that killers can wipe out almost entirely.
- Bartle's key design claim: **explorers are the stabilizing type** — "massively increasing the number of explorers is the only way to reduce the number of killers without also reducing the player numbers in other groups." Explorer-friendly content is therefore a lever for taming a killer-dominated economy without simply banning PvP.

From these dynamics Bartle derives three stable large-scale configurations a MUD (or by extension, a persistent online game) can settle into: a **"gamelike"** configuration dominated by the killer–achiever equilibrium, a **"social"** configuration dominated by socializers with few killers, and an **"all-round"** configuration where all four types coexist in balance — the hardest to reach, but the most stable once achieved.

### Critiques and limits

- **Single-community origin.** The model was extrapolated from discussions among experienced players of one game — Bartle's own MUD1 — in the early-1990s UK MUD scene, not from systematic data collection across games or genres. It is a practitioner's folk taxonomy formalized into an essay, not a validated instrument.
- **Category vs. component framing.** Nick Yee (whose own work is covered in Section 2) has argued a "component" framework — where a player has a *profile* of scores across motivations — has more explanatory power than a "category" framework that assigns one player to one bucket, because real players are mixtures rather than single types.
- **Empirical stress-tests found gaps.** A later empirical analysis of roughly 7,000 MMO players found that Bartle's Explorer category didn't hold up as a coherent factor: its proposed sub-facets — "exploring the world" and "analysing the game mechanics" — didn't correlate with each other in the data, undermining the idea that "Explorer" is a single unified motivation rather than two distinct ones.
- **Competing four-quadrant models.** Game designer Jon Radoff proposed an alternative four-quadrant model built around immersion, cooperation, achievement, and competition, explicitly pitched as more portable across genres than Bartle's MUD-specific framing.
- **Generalizability beyond MUDs.** The model predates graphical MMOs, mobile games, battle royales, and live-service shooters by years; whether "acting/interacting" and "world/players" cleanly map onto genres with very different social and economic structures (e.g., a single-player roguelike, a MOBA, a cooperative survival game) is a standing open question rather than something Bartle tested.
- **Fixed types vs. context-dependent motivation.** The most persistent critique in game design discourse is that Bartle types get used as if they were fixed personality traits ("I am an Achiever") rather than motivations that shift by game, by session, and by mood — a critique the Quantic Foundry model (Section 2) was explicitly built to address empirically.

### Bartle's own revision

Bartle did revisit the model himself: in his 2003/2004 book *Designing Virtual Worlds* (New Riders, 2004), he added a third axis — **implicit vs. explicit** — to the original two, producing eight subtypes instead of four: Achievers split into **Planner** (explicit) and **Opportunist** (implicit); Explorers into **Scientist** and **Hacker**; Socializers into **Networker** and **Friend**; Killers into **Politician** and **Griefer**.

Bartle himself noted the practical cost of this expansion: "The 4-part version is easy to draw because it's 2D, but the 8-part one is 3D; it's therefore much harder to draw in such a way as it doesn't collapse in a mass of lines" — a candid admission that the richer model is harder to actually *use* as a design tool than the original, which is likely why the original 4-type version remains the one that circulates in industry practice. Richard M. Ryan, C. Scott Rigby, and Andrew Przybylski's 2006 SDT paper, covered in Section 3, independently confirms that Bartle "revisited" the typology in *Designing Virtual Worlds* — corroborating this revision from a second primary source.

### Applied example

*World of Warcraft*'s parallel endgame systems map cleanly onto the four types without much interpretive stretch: raid gear score and achievement points serve **Achievers**; exploration-focused content (lore-hunting, hidden areas, transmog collecting) serves **Explorers**; guilds, roleplay servers, and looking-for-group social tools serve **Socializers**; and PvP battlegrounds/arenas and world-PvP servers serve **Killers**. Bartle's population-dynamics argument also shows up in that game's history: PvP servers that skewed too heavily "killer" (rampant world-PvP griefing of low-level players) saw population flight to PvE servers — an observed instance of the killer-driving-out-achievers/socializers dynamic Bartle predicted.

**Source:** Bartle, R. (1996). "Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs." *Journal of MUD Research*, 1(1). <http://www.mud.co.uk/richard/hcds.htm>. Revised in: Bartle, R. (2004). *Designing Virtual Worlds*. New Riders.

---

## 2. Quantic Foundry's Gamer Motivation Model

### The model

Quantic Foundry (Nick Yee and Nicolas Ducheneaut, founded 2015) built an empirically derived model of player motivation from large-scale survey data, explicitly positioned as an evidence-based alternative to armchair typologies. The model organizes **12 motivations into 6 named clusters**:

| Cluster | Motivations |
|---|---|
| **Action** | Destruction, Excitement |
| **Social** | Community, Competition |
| **Mastery** | Challenge, Strategy |
| **Achievement** | Completion, Power |
| **Immersion** | Fantasy, Story |
| **Creativity** | Design, Discovery |

These 6 clusters further pair up into **3 higher-order macro-clusters**, each given a one-word descriptor in Quantic Foundry's own materials:

- **Action-Social** ("BRIGHT") — Action + Social clusters combined: immediacy and adrenaline, energetic and gregarious play, wanting to be excited by the game itself or by other players.
- **Mastery-Achievement** ("TALL") — Mastery + Achievement clusters combined: cool-headed, long-term, cumulative play — strategic gameplay, taking on challenges, watching progress (cities, farms, characters) accumulate over time.
- **Immersion-Creativity** ("WIDE") — Immersion + Creativity clusters combined: expansive, expressive play — narrative engagement, world exploration, self-expression.

Quantic Foundry has also mapped these motivations onto a 2D "map of gaming motivations" using Multidimensional Scaling (MDS — a technique that compresses pairwise distances between variables into a 2D layout while preserving their relative distances). On that map, **Discovery** sits as a bridge motivation linking Immersion-Creativity to Mastery-Achievement, and **Power** bridges Action-Social to Mastery-Achievement — i.e., the clusters aren't fully discrete bins but a continuous space with connective tissue between adjacent regions.

### Empirical methodology

Quantic Foundry's own account of how the model was built (Yee, N. (2015). "How We Developed the Gamer Motivation Profile v2." quanticfoundry.com) describes a standard psychometric scale-development pipeline: a literature review of existing motivation frameworks (including Bartle's) → cataloguing candidate motivations → generating roughly 50 survey items → a pilot study of **1,127 gamers** (skewed toward MMO players) → a replication/validation pass on **600 participants** drawn from a more representative gaming population → **Exploratory Factor Analysis (EFA)** to determine which items statistically clustered together.

The model was then scaled up via an ongoing public "Gamer Motivation Profile" quiz; the 2015 "map of gaming motivations" analysis drew on data from **140,000+ gamers**, and later public talks (e.g., their GDC 2019 session "A Deep Dive into the 12 Motivations") cite **400,000+**, with other Quantic Foundry materials citing **500,000+** gamers as the dataset continued to grow. This N, and the use of factor analysis to *derive* categories from response patterns rather than *assert* them from developer intuition, is the model's central methodological claim to being an empirical improvement over prior frameworks.

### Positioning against Bartle

Quantic Foundry explicitly frames its horizontal map axis as a re-derivation of Bartle's world/player distinction: "The left side of the map emphasizes action on elements of the world and its narrative, and the right side emphasizes interaction and action on other players" — i.e., they recover something Bartle-shaped from the data, which is itself a form of validation of Bartle's original intuition.

But they also report a specific empirical *departure* from Bartle-derived models: in their data, **Competition** clusters with **Social** motivations, not with Achievement/Power — whereas "the earlier model[s] drew heavily from Bartle's Player Types and the MUD-era of domination-oriented competition... [which] is biased towards power-based Achievement." In plain terms: Bartle's Killer type conflates "wanting to beat other people" with "wanting to dominate/impose on them," but the survey data show that for most players, competitive motivation is a social-engagement motivation (playing *against* people as a form of playing *with* them), not a power/domination motivation. This is the model's sharpest empirical correction of Bartle's 1996 armchair framework.

### Critiques and limits

- **Self-report survey limitations.** Like any self-report psychometric instrument, the model measures what players *say* motivates them, filtered through whatever vocabulary the survey items use — not directly observed behavior. This is a standard limitation of the survey-factor-analysis method itself, not unique to Quantic Foundry, but worth naming given the model's empirical-rigor framing.
- **Self-selection / sampling bias.** The underlying data comes from people who voluntarily took an online "gamer motivation" quiz — a population that is not a random sample of all game players, and the earliest pilot data (1,127 respondents) was explicitly noted by Quantic Foundry itself as skewed toward MMO players before the replication pass corrected for this. Even at N = 400,000+, non-probability internet-survey samples carry structural skews (toward people who engage with gaming-motivation content online, toward certain platforms/regions/age bands) that a large N does not automatically fix. *(This point is analytical synthesis / general survey-methodology reasoning rather than a specific third-party critique publication found during this research pass — flagged as reconstructed.)*
- **Commercial-tool framing.** Quantic Foundry is a consulting business that sells the Gamer Motivation Profile as a product to publishers and studios for audience research and UA (user-acquisition) targeting. This doesn't invalidate the underlying factor analysis, but it means the model's public-facing packaging is optimized for actionable segmentation (marketing personas) as much as for psychological accuracy, and its incentive structure differs from an academic-only research program. *(Reconstructed observation based on the model's publicly stated commercial use, not a sourced external critique.)*

### Applied example

Quantic Foundry has run its Gamer Motivation Profile survey against specific game communities as case studies — for example, publishing a Gamer Motivation Profile analysis of *Sea of Thieves*' playerbase, using the 12-motivation breakdown to explain what draws players to (and repels them from) that specific game's blend of open-world exploration, PvP raiding, and cooperative sailing — i.e., using the model diagnostically to explain why a game with heavy **Excitement**/**Competition** content (ship combat, PvP) sitting alongside heavy **Discovery**/**Community** content (treasure hunting, crewing up) produces a bifurcated playerbase with very different motivational profiles depending on which axis of the game they engage with.

**Sources:** Yee, N. & Ducheneaut, N., Quantic Foundry, <https://quanticfoundry.com/>. Key documents: "How We Created the Gamer Motivation Profile" (2015-06-18) and "How We Developed the Gamer Motivation Profile v2" (2015-07-20); "The Gamer Motivation Model in Handy Reference Chart and Slides" (2015-12-15); "Gaming Motivations Group Into 3 High-Level Clusters" (2015-12-21); GDC talk "A Deep Dive into the 12 Motivations: Findings from 400,000+ Gamers" (GDC 2019).

---

## 3. Self-Determination Theory (SDT) Applied to Games

### The general theory

Self-Determination Theory is a decades-long research program by Edward Deci and Richard Ryan on human motivation, well-being, and personality. The canonical general-audience summary is Ryan, R. M., & Deci, E. L. (2000). "Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being." *American Psychologist*, 55, 68–78. SDT proposes **three basic psychological needs**, argued to be universal and each independently necessary for motivation and psychological wellness — satisfying only two of the three still leaves "distinct functional costs":

- **Autonomy** — a sense of volition, choice, and self-endorsement in one's actions; acting because you want to (interest, personal value) rather than because you feel controlled or pressured, regardless of whether the action is done alone or with others. (Autonomy in SDT is about *internal* freedom/willingness, not about independence from other people — a common point of confusion.)
- **Competence** — a sense of effectiveness and mastery: being optimally challenged, acquiring skills, and receiving feedback that confirms one's actions are working.
- **Relatedness** — a sense of connection to and caring for others; feeling that one's social bonds are genuine and mutual.

### The games-specific application

The primary source for applying SDT to games is Ryan, R. M., Rigby, C. S., & Przybylski, A. (2006). "The Motivational Pull of Video Games: A Self-Determination Theory Approach." *Motivation and Emotion*, 30(4), 344–360. DOI: 10.1007/s11031-006-9051-8.

The paper's central claim, stated directly: **"games are primarily motivating to the extent that players experience autonomy, competence and relatedness while playing."** Need *satisfaction* predicts continued motivation to play; need *frustration* predicts players quitting. The paper also predicts that short-term psychological well-being changes from a play session (vitality, mood, state self-esteem) are a function of how much need satisfaction that session provided — i.e., SDT is offered as an explanation both of *why people keep playing* and of *whether playing is good for them*, in the same framework.

To test this, the authors built the **PENS scale — Player Experience of Need Satisfaction** — developed at Rigby's company, Immersyve Inc. PENS operationalizes SDT for game-testing purposes via named subscales, each validated with sample items in the paper:

- **In-Game Competence** (5 items) — e.g., "I felt very capable and effective"; "The game kept me on my toes but did not overwhelm me."
- **In-Game Autonomy** (5 items) — e.g., "I did things in the game because they interested me"; "I felt controlled and pressured to be a certain way" (reverse-scored).
- **In-Game Relatedness** (3 items, added when testing multiplayer/MMO contexts) — e.g., "I find the relationships I form in the game fulfilling."
- **Presence** (9 items across three sub-facets — physical presence, emotional presence, and narrative presence) — a sense of immersion in the game world, treated as an *outcome* of autonomy/competence satisfaction rather than a fourth basic need.
- **Intuitive Controls** (3 items) — how easily the interface between player and game is mastered; framed as "the price of admission," not the experience itself — a mediation analysis in the paper shows intuitive controls only predict motivation *through* the competence and autonomy they enable, and stop mattering once autonomy/competence are accounted for.

The paper reports four studies: a single-game platform-game study (*Super Mario 64*) isolating competence/autonomy effects; a head-to-head comparison of two 3D-adventure games pre-selected for popularity differences (see Applied Example below); a four-game, multi-level (hierarchical linear modeling) study separating between-person and within-person effects; and a 730-person survey of an online MMO-player community testing all three needs, including relatedness.

Across all four, autonomy and competence (and, in multiplayer contexts, relatedness) independently predicted enjoyment, preference for future play, and — notably — Yee's older three-factor motive model (Achievement/Social/Immersion; see Yee, N. (2006), "Motivations of Play in Online Games," *CyberPsychology & Behavior* — a precursor to the later Quantic Foundry model in Section 2) did **not** explain additional variance once the SDT/PENS variables were controlled for, which the authors use as their central evidence that need-satisfaction is a more fundamental account than either Bartle's or Yee's earlier typologies.

### Critiques and limits

- **Authors' own stated limitations.** The 2006 paper is unusually candid about its own limits: studies 1–3 are lab experiments with *assigned* (not self-selected) play, which is an artificial approximation of voluntary real-world play; all measured outcomes are short-term (a single 20–40 minute session), with no claim about long-term engagement or "addiction"; and the PENS/Presence scales were, at the time, newly developed and explicitly flagged as needing "further refinement and more extensive construct validation."
- **General SDT critique (unfalsifiability / measurement concerns).** Psychologist Steven Reiss (2017) critiqued SDT more broadly on grounds including a lack of clear definitions distinguishing intrinsic from extrinsic motivation, unreliable measurement, and inadequately designed supporting experiments — a critique aimed at SDT as a general theory of motivation, not games specifically, but relevant to any claim built on top of it.
- **Tension with operant-conditioning ("dark pattern") accounts of engagement.** A well-known alternative framework, from outside the SDT literature, explains sustained play through B. F. Skinner-style operant conditioning rather than psychological need satisfaction: John Hopson's "Behavioral Game Design" (Gamasutra, 2001) applies reinforcement-schedule theory directly to game design, arguing that **variable-ratio reward schedules** (rewards delivered after an unpredictable number of actions — the mechanism behind slot machines, loot boxes, and gacha pulls) produce "the highest overall rates of activity of all the schedules," independent of whether the player feels autonomous, competent, or connected.

  This is the crux of a live debate the SDT-for-games literature has not fully resolved: compulsive engagement loops in games with heavy monetization (loot boxes, energy timers, gacha) appear to keep players playing at high rates precisely in contexts many critics describe as low on autonomy (players feel *compelled*, not free) — which is hard to square with SDT's claim that engagement tracks need satisfaction, unless one argues (as some SDT researchers do) that such loops produce compulsive but not genuinely *motivated* or *well-being-enhancing* engagement, i.e., that quantity of play and quality of the psychological experience come apart. The 2006 paper itself anticipates a version of this concern by explicitly separating "hours played" from "enjoyment" and "intended future play" as distinct outcomes, and found in Study 4 that Yee's achievement/power motive predicted more hours played per week but *negatively* predicted post-play mood — a data point consistent with the idea that high engagement volume and genuine need satisfaction can diverge.

### Applied example

Study 2 of the 2006 paper is a clean, data-backed example: the authors compared *The Legend of Zelda: Ocarina of Time* (1998) — rated 97.8% favorability on GameRankings.com within its genre — against *A Bug's Life* (1999) — rated 56.6% in the same genre — using undergraduates who played both. Participants reported higher enjoyment, presence, and preference for future play for *Zelda*, and this difference was statistically accounted for by higher in-game autonomy and competence ratings for *Zelda*, not by any difference in how "intuitive" the controls were (controls scored about the same for both games). The paper's interpretation: *Zelda*'s open structure (more choice over tasks, sequencing, and exploration) and well-tuned challenge curve generated more autonomy and competence satisfaction than *A Bug's Life*'s more linear, constrained platforming — which the authors argue is *why* one commercially out-performed the other, not merely a correlation.

**Sources:** Ryan, R. M., & Deci, E. L. (2000). "Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being." *American Psychologist*, 55, 68–78. Ryan, R. M., Rigby, C. S., & Przybylski, A. (2006). "The Motivational Pull of Video Games: A Self-Determination Theory Approach." *Motivation and Emotion*, 30(4), 344–360. Rigby, C. S., & Ryan, R. M. (2011). *Glued to Games: How Video Games Draw Us In and Hold Us Spellbound*. Praeger. *(Book content reconstructed from general knowledge — not directly fetched during this research pass; treat book-specific claims with lower confidence than the 2006 journal paper, which was read in full.)*

---

## 4. Flow Theory and Its Game-Specific Adaptations

### Csikszentmihalyi's original model

Mihaly Csikszentmihalyi's *Flow: The Psychology of Optimal Experience* (Harper Perennial, 1990) defines **flow** as a state of complete, energized focus in an activity, marked by high enjoyment and a loss of self-consciousness. The central mechanism is the **challenge–skill balance**: plot an activity's challenge level on one axis and the person's skill level on the other, and flow occurs in a diagonal channel where the two are both high *and* closely matched.

- **Challenge > Skill** → **anxiety** (the activity feels overwhelming).
- **Challenge < Skill** → **boredom** (the activity feels unstimulating).
- **Challenge ≈ Skill (both nontrivial)** → the **flow channel**, a "fuzzy safe zone" wide enough to tolerate some mismatch without breaking the state.

Beyond the challenge-skill diagram, Csikszentmihalyi names several other components that characterize the flow experience — cited directly (via Jenova Chen's thesis synthesis of the 1990 book) as: (1) a challenging activity that requires skill, (2) the merging of action and awareness, (3) clear goals, (4) direct/immediate feedback, (5) concentration on the task at hand, (6) a sense of control, (7) loss of self-consciousness, and (8) transformation (distortion) of the sense of time. A ninth component frequently cited from the original book in broader flow literature is **autotelic experience** — the activity becomes worth doing for its own sake, independent of external reward. Csikszentmihalyi's own framing: not all components are required simultaneously for flow to occur.

### Jenova Chen's "Flow in Games" (2006)

Jenova Chen's MFA thesis, *Flow in Games* (University of Southern California Interactive Media program, 2006) — full text: <https://www.jenovachen.com/flowingames/Flow_in_games_final.pdf> — is the foundational design-side adaptation of flow theory to games, and it makes a specific, falsifiable argument against treating the flow channel as fixed.

**The critique of "static flow" and passive/system-oriented DDA.** Chen distinguishes game **content** (the "soul," a specific experience the designer wants to convey) from game **system** (the "body," the interactive software delivering that content), and argues flow is fundamentally a *system* property. He rejects two existing approaches:

1. **Game tuning** — iterative manual polishing via playtesting — which he argues produces a *static*, one-size-fits-all flow channel: it's tuned to the specific testers and designers involved, who "cannot represent the variety of the mass audience."
2. **Passive (system-oriented) DDA** — automated difficulty adjustment based on monitoring player performance data — which Chen argues has four unsolved problems: **no direct data** (games can't read what a player is actually feeling, only limited controller inputs); **performance does not mirror flow** (e.g., a player happily "jumping around in Super Mario Bros without finishing any level" is in flow by any subjective measure, but a performance-tracking DDA system would misread this as failure); **analysis based on assumptions** (a player enjoying a "suicidal stunt" in *Grand Theft Auto* isn't unskilled just because their death count is high — the system can't tell intent from failure); and **changes based on rigid design** (the adjustment logic itself is still just one designer's manually pre-set preferences, which don't generalize to a mass audience any better than static tuning did).

**Chen's proposed alternative: player-oriented "Active DDA."** Rather than a system inferring what a player needs and quietly changing the game (which he calls *passive* adjustment), Chen proposes designing games where players **actively, continuously choose their own challenge level** through ordinary gameplay choices — a widened flow zone with a *network* of paths through it rather than one fixed channel, so different skill levels can each find their own line through the same content. He frames this via Csikszentmihalyi's own metaphor of flow as "driving a small boat in parallel to the current" — control comes both from freely steering (micro-level autonomy) and from being carried by the current (macro-level structure).

The catch: because monitoring systems "are still not mature enough to... detect player's Flow," the choices must be **embedded directly into core gameplay** (not presented as an explicit settings menu) so players make them intuitively, as part of play, rather than as an interruption.

**Two prototypes, with an instructive negative result.** Chen tested this with two games. *Traffic Light* — a minimal timing-reflex prototype where players are asked between rounds whether to play faster or slower — successfully extended play sessions from roughly 1–2 minutes to 5–12 minutes, but Chen reports a genuinely important caveat: **"the frequent DDA choices broke the player's Flow. It started offering the player a sense of control, but eventually reduces the player's control"** — i.e., explicit, frequent choice-prompts are themselves a flow-breaking interruption, which is exactly why the second prototype embeds choice implicitly.

*flOw* (2006) — the game that resulted from applying the fully embedded-choice version of the methodology, later expanded into the PS3 title *flOw* by Chen's studio thatgamecompany — lets the player swim and eat as a small organism across 20 levels; choosing what to eat determines whether the player advances to harder levels or returns to easier ones, with a soft death penalty (bumped back one level, not to the start) so players self-regulate their own difficulty purely through normal play actions. The prototype drew 350,000+ downloads in its first two weeks online, was presented at GDC 2006's Experimental Gameplay Workshop, and won *EDGE* magazine's Internet Game of the Month (May 2006) — with "addicting" as the most common word used to describe it in contemporary write-ups Chen quotes in the thesis.

### The dynamic-difficulty-adjustment (DDA) debate

Chen's thesis is one entry in a broader, still-live design argument about whether games should adjust difficulty in response to the player at all:

**For DDA — Left 4 Dead's AI Director (Valve, 2008).** Widely cited as the best-regarded implementation of dynamic difficulty in a shipped commercial game. The AI Director tracks each player's status, skill, and location in real time and uses that to vary enemy placement and spawn quantities (rather than fixed spawn points), shape pacing and atmosphere through emotional cues (dynamic music, visual effects, character barks) to build and release tension, and calibrate challenge to avoid both boredom and overwhelm — functioning as a form of *procedural* difficulty and pacing rather than scripted set-pieces, which is a large part of why the game supports high replay value. Critically, this is closer to Chen's *active/embedded* model than to naive passive DDA: the Director doesn't just watch performance stats, it shapes the *experience* (mood, tempo) around the party's real-time state.

**Against DDA — rubber-banding critiques.** The generic term for catch-up mechanics in competitive games — where trailing players/AI get boosted and leading players/AI get hindered — is **rubber-banding**, and it is the most commonly cited example of DDA done in a way that provokes backlash. The standing objection, widely discussed in game-design circles, is that rubber-banding can remove the sense of *earned* mastery: if a skilled player's lead gets algorithmically eroded (the recurring complaint leveled at *Mario Kart*'s catch-up items, most infamously the blue shell, across multiple installments), skill expression feels punished rather than rewarded.

A related, sharper version of the objection is about **invisibility**: DDA that operates silently, without the player's knowledge or consent, can feel manipulative once discovered — a frequently cited example in design discourse is *Resident Evil 4*'s hidden difficulty-scaling system, which adjusted enemy damage and drop rates based on player performance without disclosing this to players, generating pushback once data-miners exposed the mechanism, from players who felt their in-game outcomes (a "hard-won" versus "unearned" win) had been quietly authored by the system rather than genuinely earned. *(This paragraph — the Mario Kart and Resident Evil 4 specifics — is reconstructed from general industry-discourse knowledge rather than a specific document fetched during this research pass; the underlying critique pattern — earned-mastery objection and invisibility-as-manipulation objection — is well established in design discourse even where the exact examples should be treated as illustrative rather than freshly verified.)*

Chen's own framework offers a specific resolution to this tension that is worth naming explicitly: his argument is that DDA provokes backlash specifically when it is *passive* (system-imposed, invisible, based on inferred performance) rather than *active* (player-chosen, embedded in visible gameplay decisions) — Left 4 Dead's Director sits closer to the "active/experiential" end by shaping mood and pacing around player state rather than secretly rewriting player-vs-player outcomes, while rubber-banding items in a racing game sit closer to the "passive, outcome-rigging" end that most directly threatens a player's sense that they earned their result.

**Sources:** Csikszentmihalyi, M. (1990). *Flow: The Psychology of Optimal Experience*. Harper & Row / Harper Perennial. Chen, J. (2006). *Flow in Games* (MFA Thesis, University of Southern California). <https://www.jenovachen.com/flowingames/Flow_in_games_final.pdf>.
