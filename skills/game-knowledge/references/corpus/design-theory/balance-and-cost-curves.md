# Balance, Feedback Loops, and Cost Curves

## 1. Feedback loops: positive (snowballing) vs. negative (rubber-banding)

### 1.1 Source

The clearest named practitioner formulation traced this session is **Marc LeBlanc's "Tools for Creating Dramatic Game Dynamics,"** a talk/curriculum item from the annual **Game Design and Tuning Workshop** at GDC (the same workshop lineage that produced the MDA framework, Hunicke/LeBlanc/Zubek, 2004). LeBlanc's own full slides were not directly fetchable this session (his site, algorithmancy.8kindsoffun.com, failed a TLS certificate check), so the definitions below are drawn from two independent sets of attendee/reader notes on the talk (thediaryofagamesdesigner.blogspot.com and gameofdesign.blogspot.com), which agree closely with each other on wording and examples — increasing confidence that they accurately reflect the talk's content. Flagged as **secondary** (notes on a primary talk, not the primary slides themselves).

LeBlanc's framing starts from a stated premise about drama in games generally: *"We cannot create drama; we can only create the circumstances from which the drama will emerge."* Positive and negative feedback are presented as two of the concrete "tools" for shaping those circumstances.

### 1.2 Definitions, as given in the talk notes

- **Negative feedback**: "Strives to make the difference in score as small as possible. Sustains dramatic tension but can also cause game to stagnate." A negative feedback loop dampens a leader's advantage — it gives the trailing player(s) something that narrows the gap, keeping the contest close.
- **Positive feedback**: "Lets player keep the advantage over another. Aid to Dénouement: Dispels uncertainty, bringing climax, breaks the equilibrium and moves the game forward." A positive feedback loop amplifies a leader's advantage — the player who is already ahead gets tools that widen their lead further.

The two are explicitly **not** framed as a "good vs. bad" pair in LeBlanc's own account — both serve dramatic purposes. Negative feedback sustains the uncertainty that keeps a match dramatically alive; positive feedback provides the *inevitability* that lets a match actually resolve toward a climax rather than stalling in permanent equilibrium. The worked example given for positive feedback is **Liar's Dice**: as a player wins rounds, they end up seeing more dice than their opponents (an escalating informational advantage), which increases their competitive edge round over round — a mechanically direct amplification loop.

### 1.3 The common practitioner vocabulary: snowballing and rubber-banding

Building on this base mechanism, the wider design community (documented in general game-design writing surveyed this session, e.g. Machinations.io's systems-design material and general game-balance blogging) uses two informal names for the extreme ends of these loops in practice:

- **Snowballing**: the colloquial name for an unchecked positive feedback loop, where an early advantage compounds turn over turn until the outcome is effectively decided long before the game ends. The canonical example is **Monopoly**: a player who acquires an early monopoly can charge escalating rent, which bankrupts opponents faster, which lets them acquire more property — the "rich get richer" dynamic that MDA's own worked example (see the companion note on MDA) uses a thermostat-style feedback-loop diagram to formally model.
- **Rubber-banding**: the colloquial name for a strong negative feedback loop, evoking cars connected by a rubber band that pulls the leader back toward the pack and the trailing racers forward toward it. The canonical example is **Mario Kart's blue shell (Spiny Shell)** and its broader item-distribution system, which deliberately hands stronger catch-up items to racers further back in the pack.

### 1.4 Design implications: the tradeoff

- **Positive-feedback-dominant games** tend to produce **decisive, exciting** matches with a clear sense of momentum and escalating stakes — but risk feeling **unfair** to the player who falls behind early, since the mechanical structure itself (not just their own play) works against a comeback. Taken to an extreme, this can make the outcome feel predetermined well before the game ends, which cuts against the very uncertainty-of-outcome that (per Costikyan, in the companion note) defines a game as a game in the first place.
- **Negative-feedback-dominant games** tend to produce **close, dramatic** matches where the lead changes hands and no outcome feels locked in — but risk **diminishing skill expression**, since a strong player's advantage is actively and mechanically clawed back regardless of how well they continue to play. This is the substance of the long-running "blue shell" critique of Mario Kart: skilled players can feel that their lead is punished by the system rather than earned or lost through further play.
- Schreiber's course (§2 below) documents the same tension from the opposite direction, under the names **kingmaking**, **turtling**, **kill-the-leader**, and **sandbagging** — all failure modes that occur when feedback dynamics (or their absence) interact badly with player incentives in multiplayer games. Per Schreiber's Level 10 post: kingmaking requires (1) a losing player who has enough **information** to know the standings, (2) a **perceived elimination** state where that player believes they can't win themselves, and (3) a **mechanism** that lets them still affect who does win — three conditions a designer can remove independently (hide scores, add catch-up mechanics, remove late-game player-to-player interference) rather than treating "add negative feedback" as the only lever.

### 1.5 Critiques and limits

- **Neither loop is inherently good design** — LeBlanc's own framing treats them as two tools serving different dramatic purposes rather than a "good" (negative) vs. "bad" (positive) pair, which is a more nuanced position than the popular shorthand ("snowballing bad, rubber-banding good") often implies.
- **Too much negative feedback causes stagnation**, per LeBlanc's own definition above — if the game constantly equalizes players, no decisive momentum ever builds, and skilled or lucky early play stops mattering, which can make the whole match feel directionless.
- **Rubber-banding specifically draws sustained community criticism** (well documented in racing-game discourse around Mario Kart) for punishing skill: a mechanic that hands power specifically to whoever is behind, independent of *why* they're behind, doesn't distinguish between "unlucky" and "playing worse," which can feel arbitrary to competitive players even while it succeeds at keeping casual races close.
- **The right amount is genre- and audience-dependent**, not a universal constant — competitive/esport-oriented games generally minimize both loops (or use very mild negative feedback) to keep outcomes tightly correlated with skill, while party and family games often lean into stronger negative feedback specifically because closeness, not decisiveness, is the entertainment goal.

---

## 2. Ian Schreiber — *Game Balance Concepts* (2010)

### 2.1 Source

Schreiber, Ian. **Game Balance Concepts.** Free, blog-published course, gamebalanceconcepts.wordpress.com, 2010 — ten "Level" posts derived from an actual course Schreiber taught (he was a professor at the Rochester Institute of Technology at the time). Widely used and cited in the game-design field as an accessible, worked-example-heavy introduction to balance math. Content below is drawn directly from fetching the individual "Level" posts.

### 2.2 What "game balance" means, per Schreiber

Level 1 ("Intro to Game Balance") frames balance as fundamentally about **numbers**: "figuring out what numbers to use in a game," on the premise that "every game does in fact have numbers (even if they are hidden or implicit)" describing its state — explicit ones (chess piece values) or implicit ones (a player's running speed in a game of tag). He splits games into **deterministic** (Chess, Go — identical inputs always produce identical outputs) and **non-deterministic** (Poker, Ms. Pac-Man — randomness or hidden information is involved), and argues these require different balance-analysis approaches.

A load-bearing side point from Level 1: a **fully solved game stops being interesting**, because "the player isn't making any interesting decisions; every decision is obvious." Chess remains engaging despite being theoretically solvable because its complexity exceeds practical human (and even, so far, brute-force computer) solvability — this is the same phenomenon Costikyan's taxonomy (companion note) labels **analytic complexity**.

Level 10 ("Final Boss") adds an important corrective near the end of the course: balance and fun are **not** the same thing, despite Schreiber saying he used to believe "a fun game is a balanced game, and a balanced game is a fun game" and now considers that "very wrong." His counterexamples: **The Great Dalmuti** is a deliberately unbalanced game that stays fun because the imbalance is expected upfront, generates its own roleplay ("it's good to be king"), and includes mobility between rounds; **Betrayal at House on the Hill** stays fun despite acknowledged imbalance and randomness because it optimizes for narrative experience over mechanical fairness. His conclusion: "What game balance does is that it makes your game *fair*... In games where players expect a fair contest, balance is very important" — but games built around exploring unfairness or storytelling can succeed without it. The operative design question is not "is it balanced" but "what does the player expect to experience."

### 2.3 Transitive vs. intransitive mechanics

**Transitive mechanics** (Level 3, "Transitive Mechanics and Cost Curves"): a mechanic is transitive when its elements form a strict hierarchy — some things are simply, objectively better than others in their in-game effects, and the designer's job is to compensate for that with **cost**: "in a transitive mechanic, everything has a set of costs and a set of benefits, and all in-game effects can be put in terms of one or the other." A level-10 sword beating a level-1 sword is the textbook case: no situational nuance, strictly stronger, so it must cost strictly more (in gold, level requirement, drawback, etc.) to keep the choice meaningful.

**Intransitive mechanics** (Level 9, "Intransitive Mechanics"): the Rock-Paper-Scissors case — a system with **no single dominant strategy**, because every option is beaten by some other option in a cycle: "In fighting games, a typical pattern is that normal attacks are defeated by blocks, blocks are defeated by throws, and throws are defeated by attacks." Schreiber's treatment goes further than the naming, into the actual math of balancing an intransitive system: for classic Rock-Paper-Scissors the balanced mixed-strategy solution is 1:1:1 (each option played equally often), but if you change the *payoffs* — e.g., doubling how much Rock's win over Scissors is worth — the equilibrium mix shifts non-obviously: in his worked example, "Paper gets chosen half of the time, while Rock and Scissors each get chosen a quarter of the time." The design payoff of intransitivity, per Schreiber: "An intransitive game is at least more interesting than one with a single dominant strategy because you will see more variety in play" — and designers can deliberately skew costs/availability to engineer a desired frequency distribution in the resulting metagame, rather than leaving it to guesswork.

Real games routinely combine both patterns in the same system — Schreiber's own example: an RTS might have intransitive unit-type triangles (footmen beat archers, archers beat fliers, fliers beat footmen) layered with transitive tiers within a type (light infantry vs. heavy infantry, a strictly-better-but-costs-more relationship).

### 2.4 Cost curves

Per Level 3, a **cost curve** is the mathematical relationship between how much a game element costs and how much benefit it delivers. Schreiber defines **cost** broadly — not just currency, but "any kind of drawback or limitation": resource expenditure, situational restriction (only effective against certain enemies), equipment/class limitation, durability, or negative side effects (self-damage, being unable to cast further spells). **Benefit** covers the positive side: damage, special abilities, stat increases, or situational effectiveness.

The core principle: **"the goal is to get those two numbers to be equal. If the costs are less than the benefits, it's too good: add more costs or remove some benefits."**

Three curve shapes, and why flat/linear pricing tends to break down:

- **Linear**: each additional unit of cost buys a proportional unit of benefit. Schreiber notes this is "pretty rare" in practice, precisely because flat, uniform scaling gives no reason to prefer investing broadly vs. narrowly, and tends to be exploitable or boring at scale — a game that prices its tenth point of power exactly the same as its first point of power has no mechanism to make big investments feel appropriately weighty or risky.
- **Increasing** (superlinear) curves: escalating cost for each additional increment of benefit. Common in RPGs, where players receive increasing gold per encounter but equipment costs rise correspondingly — this encourages balanced stat distribution instead of dumping everything into one stat, and stretches out mid-game progression by making the last few points of power disproportionately expensive.
- **Decreasing** (diminishing marginal cost) curves: early units cost disproportionately more relative to what they return. Schreiber points to opportunity-cost-driven games like *Puerto Rico* and *Settlers of Catan*, where delaying a purchase risks losing a desired resource/slot to an opponent, which justifies front-loading higher effective cost onto early, safer choices and making later, riskier value cheaper.

He also demonstrates deriving a cost curve empirically from an existing game, using *Magic: The Gathering* (2011 core set) creature cards: isolating cards that differ in exactly one variable lets you solve for the value of that variable by arithmetic comparison — e.g., establishing that flat mana cost has components (1 baseline + 1 per colorless pip + 2 for a first colored pip + 3 for a second colored pip, with extra cost thresholds at higher mana values for certain colors), and that abilities like Flying, Haste, and Lifelink each contribute roughly "+1 benefit" while Deathtouch contributes "+2." Once a cost curve like this is established, Schreiber notes, most new content can be priced by formula with only light playtesting — a major practical payoff for live, persistently-expanding games, which also explains why such games experience **power creep**: each new set must match or exceed the established power baseline to feel worth buying, which gradually pushes the whole curve upward over time.

**Balance vocabulary from Level 3** (direct definitions):

- **Overpowered**: benefit is so high that no realistic cost increase alone fixes it — the effect itself needs to be reduced.
- **Underpowered**: benefit is so low that even a cost of zero wouldn't make it worth using.
- **Overcosted**: benefit is fine, but the price is too high relative to it — reduce cost, leave the effect alone.
- **Undercosted**: benefit is fine, but the price is too low relative to it — raise cost, leave the effect alone.
- **Above/below the curve**: general shorthand for an object that sits above or below the established cost-to-benefit line for its game.

### 2.5 Dominant and degenerate strategies

Schreiber's course does not, in the pages fetched this session, give a single glossary-style definition of "dominant strategy" or "degenerate strategy" by that exact name — the underlying concept is instead demonstrated through worked cases rather than defined in isolation, so the definitions below are the field's **standard vocabulary** (game-theory-derived, in general design-community use, consistent with how Schreiber applies the idea) rather than a direct quote:

- A **dominant strategy** is an option that is at least as good as every alternative regardless of what other players do or what the game state is — once identified, a rational player has no reason to ever pick anything else.
- A **degenerate strategy** is the design-practice term for a dominant strategy so strong that it collapses the intended decision space: all "rational" play converges on one path, and the rest of the game's options become decorative.

Schreiber's course demonstrates the practical damage of degenerate strategies directly, without using the term: his Level 1 "solvability" argument (a fully solved game has no interesting decisions left) *is* the degenerate-strategy problem stated generally, and his Level 10 case studies are concrete multiplayer instances of the same failure mode — **turtling** ("the wise player reacts to this by doing their best to *not* get in any fights, instead building up their defenses," making pure defense the de facto dominant strategy and rendering "attacking — you know, actually *playing the game*" suboptimal) and **kill-the-leader/sandbagging** (all players ganging up on whoever is ahead, which can make *playing worse on purpose* the dominant strategy for the current leader). His prescribed fixes are structural, not just numeric: reward aggression directly (e.g., territory bonuses in *Risk*), or add forced-interaction mechanics that remove the option to opt out of the game's core loop.

### 2.6 Critiques and limits (self-acknowledged in the source)

- The cost-curve model **assumes power is quantifiable and additively decomposable** ("+1 benefit" per keyword ability) — this works cleanly for card-game abilities but breaks down for genuinely **situational** effects, which is exactly why Schreiber devotes a separate Level (6, "Situational Balance") to abilities whose value depends on context (an area-of-effect spell is worthless against one enemy and enormously valuable against fifty clustered enemies) and argues these require **expected-value** reasoning (benefit × probability of the relevant situation occurring) rather than a fixed cost.
- Level 10's own late correction — that balance is not synonymous with fun, and some successful games are deliberately unbalanced — is itself a limit the course places on its own subject matter: cost-curve math is a tool for games where **fairness is the design goal**, not a universal recipe for good design.
- The intransitive-mechanics math (§2.3) assumes players will actually play a mixed-equilibrium strategy; in practice, human players often fixate on a perceived "best" option even in a genuinely intransitive system, which is a psychological/metagame factor the pure math doesn't capture.

---

## 3. Depth vs. complexity

### 3.1 A formal three-way split

The most precise formalization found this session is **Dan Felder's "Design 101: Complexity vs. Depth"** (Game Developer / Gamasutra). Felder's argument is that the popular "complexity vs. depth" debate conflates three genuinely different things, and separating them resolves most of the disagreement:

1. **Comprehension complexity** — "how difficult it is for the player to understand what the designer is communicating." Unclear rules, confusing ability text, a bad interface. Purely a cost; no upside.
2. **Tracking complexity** — "the task of mentally keeping track of multiple things at once" once the rules *are* understood — cognitive load from juggling many simultaneous conditional effects (his example: "gain 1 life when a creature is played next to a lake"-style stacking triggers). Also purely a cost past a certain point, since it crowds out attention that could go toward actual strategic reasoning.
3. **Depth** — "how difficult it is to figure out the best possible move," once the rules and state are already understood. This is where strategic engagement actually lives — evaluating options and finding strong play, whether that's character-building in an RPG, map control in an FPS, or itemization in a MOBA.

Felder's diagnosis of the recurring "is this game too complex" argument: players defending "complexity" usually mean **depth** (which they correctly value), while critics attacking "complexity" usually mean **comprehension** or **tracking complexity** (which are, correctly, costs to be minimized). His practical tie-breaker: when two design options are otherwise equal, pick whichever imposes less comprehension/tracking load, since depth — not raw rule-count — is what drives long-term engagement.

### 3.2 The classic, looser formulation

Independent of Felder's three-way split, the broader design-writing consensus (multiple overlapping secondary sources surveyed this session, none individually authoritative enough to single out as *the* originating formalization) states the distinction more simply:

- **Complexity** ≈ the size of the rule set / state space — "how many moving parts the game has," or how long the rulebook needs to be to explain everything.
- **Depth** ≈ the size of the *possibility space* of meaningfully distinct strategies the game supports — "how much can be accomplished" with those moving parts, or equivalently the game's practical **skill ceiling**.

**Note on attribution**: the task brief for this note named Stone Librande, Marc LeBlanc ("Tools for Creating Dramatic Game Dynamics"), and Soren Johnson as candidate sources for a named formulation of this distinction. This session's searches did not surface a specific, quotable passage from any of the three that formalizes depth vs. complexity in these terms — Librande's and Johnson's design writing is well known in the field and plausibly touches this territory, but a direct citation could not be confirmed here. This should be treated as a **gap**, not a confirmed sourcing chain — flagged explicitly rather than asserted.

### 3.3 The canonical example: Go

**Go** is the standard illustration precisely because it inverts the naive assumption that more rules mean more strategic richness: the entire ruleset fits on an index card (alternate placing stones, capture by surrounding, most territory wins), so **complexity is minimal** — yet the game supports a state space and strategic possibility space large enough that it remains professionally studied and only recently (relative to Chess) yielded to superhuman computer play. **Depth is enormous** precisely because a tiny rule set, applied to a large board with simple-but-combinatorially-explosive interactions, generates a vast space of meaningfully different strategies — this is the same phenomenon Costikyan's taxonomy (companion note) calls **analytic complexity**: full information, deterministic rules, yet practically inexhaustible.

### 3.4 Critiques and limits

- The looser "rules = complexity, strategy space = depth" formulation is intuitive but **not rigorously measurable** — there's no agreed formal unit for "size of possibility space" that lets two designers compare two different games' depth numerically; it remains a comparative, qualitative judgment in most practitioner writing.
- Felder's three-way split is more rigorous but is a **single author's proposed formalization**, not an established consensus term used consistently across the field — other writers use "complexity" to mean any and all of his three categories interchangeably, which is exactly the confusion his article is trying to fix rather than a pre-existing solved problem.
- "Maximize depth, minimize complexity" is a clean design slogan but underspecifies the actual hard part of design practice: much genuine depth is *created* precisely by adding interacting rules (new mechanics, new unit types, new systems) that also raise comprehension and tracking complexity — the tradeoff is real, not just a matter of avoiding unnecessary complexity. Orthogonal unit differentiation (§4) is one of the most concrete practitioner answers to *how* to add depth without a proportional rise in complexity.

---

## 4. Orthogonal unit differentiation — Harvey Smith

### 4.1 Source

Smith, Harvey. **"Orthogonal Unit Differentiation."** GDC talk, San Francisco, March 2003 (listed on GDC Vault as "Orthogonal Unit Design"). Smith was lead designer on *Deus Ex* and later *Dishonored*; the talk draws its examples primarily from *Deus Ex* and *Deus Ex: Invisible War*, plus comparative examples from *Thief III*, *System Shock*, *Ultima VIII*, and other period titles. The original slide deck was hosted at planetdeusex.com (no longer live); content below is drawn from a detailed slide-content digest (slideserve.com) that closely matches the talk's known reputation in the field, cross-referenced against a secondary compiled-terminology thread.

### 4.2 The principle

Smith's own three-part breakdown of the term, per the slide digest:

- **Orthogonal**: borrowed directly from mathematics — axes that are functionally independent of one another. As stated in the deck: "no amount of X will move Y (and vice versa)." Properties like armor rating and field-of-view/detection radius are orthogonal to each other — piling up one tells you nothing about the other.
- **Unit**: any game "piece" — player classes, enemies, vehicles, AI agents.
- **Differentiation**: giving units genuinely heterogeneous qualities along both **primary functionality** (a rogue's sneak attack vs. a wizard's spellcasting — different verbs entirely, not different numbers on the same verb) and **secondary traits** (HP, speed, damage), so that comparing two units is not just a matter of "which number is bigger."

The core design principle: **differentiate game elements along independent (orthogonal) axes rather than by linear power scaling**, so that choosing between them is a *qualitative* decision (what kind of tool do I want for this situation) rather than a *quantitative* one (which option has the bigger number).

Smith's own contrast, per the deck, is instructive: **two "lesser" archers vs. one "greater" archer** is a homogenous, purely degree-based difference — one is just a bigger/stronger version of the other, a transitive relationship in Schreiber's sense (§2.3). **An archer vs. a riverboat**, by contrast, is heterogeneously, orthogonally differentiated: "no number of archers equals a riverboat's transportation capability" — the riverboat isn't a stronger archer, it does something an archer structurally cannot do at all, on an axis (mobility/logistics) the archer doesn't participate in.

### 4.3 Why this produces better decision spaces and balance resilience

Per the slide digest, the stated benefits are:

- **Coverage of the design space**: orthogonal axes let a relatively small number of unit types span a large space of distinct tactical roles, since each unit occupies its own independent dimension rather than sitting at different points along one shared power line. This directly supports **emergent gameplay**, because independent axes combine in ways the designer doesn't have to hand-author individually.
- **Efficiency**: functionally distinct units require *fewer total units* to cover the same breadth of play than a purely linear power-tier system would, since each new orthogonal unit adds a genuinely new capability rather than a marginal increment on an existing one.
- **Clarity**: mapping units to distinct roles helps players build a mental model of "what does this thing do" quickly, rather than having to memorize a long linear ladder of power levels.
- **Tactics and synergy**: orthogonal differentiation creates real trade-offs (choosing the riverboat over the archer means giving something up, not just having "less power") and opportunities for units to combine in complementary ways, which a strictly transitive power ladder doesn't support — a stack of "bigger numbers" units mostly just adds up, rather than interacting.

This is the direct structural link to §3: orthogonal differentiation is a concrete mechanism for adding **depth** (more meaningfully distinct viable strategies) without a proportional increase in **complexity** (rule count), because the new content occupies a new independent axis rather than requiring the player to track an ever-longer linear hierarchy.

Smith's own deck acknowledges the principle isn't absolute: hybrid units (medics, engineers, multipurpose commandos, in his examples) are appropriate "when context demands it," so orthogonality is a strong default heuristic, not a rule to apply with no exceptions.

### 4.4 Critiques and limits

- **Balancing many independent axes is combinatorially harder than balancing one power line.** A purely transitive system has one dial (cost vs. power) to tune; a system with many orthogonal axes has to keep every pairwise combination of axes reasonable, which scales poorly as more units/axes are added — a common practitioner concern (reconstructed/secondary, not a direct Smith quote) about large rosters built this way (fighting games, MOBAs, asymmetric strategy games) is that late-stage balance work becomes substantially harder than in a comparable transitive system.
- **Pure orthogonality can hurt legibility for new players.** If nothing is ever "just better," players lose the simple, comforting heuristic of "bigger number = stronger" and must learn each axis and its interactions individually before they can compare options at all — which is in tension with minimizing Felder's comprehension/tracking complexity (§3.1). Most shipped games therefore blend the two approaches: orthogonal differentiation across a small number of "roles" or "classes," with transitive tiers *within* each role (a familiar hybrid pattern, also visible in Schreiber's RTS example in §2.3).
- **The line between "orthogonal" and "just a different stat" is a judgment call.** Smith's own archer/riverboat example is clean because transportation and combat are obviously different domains; in practice, many "orthogonal" design axes (e.g., "burst damage" vs. "sustained damage") are more like different flavors of the same underlying resource (damage output), and can still be transitively compared once a specific matchup or team composition is fixed — so orthogonality in the abstract design space doesn't always survive contact with a concrete play situation.
