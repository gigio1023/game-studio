# Uncertainty and Randomness in Games

## 1. Greg Costikyan — "I Have No Words & I Must Design" (1994) and *Uncertainty in Games* (2013)

### 1.1 Sources

**The essay.** Costikyan, Greg. **"I Have No Words & I Must Design."** *Interactive Fantasy* #2, 1994. A revised version was later included in the Computer Game Developers Conference (CGDC) proceedings, 2002.

The title is a play on Harlan Ellison's short story "I Have No Mouth, and I Must Scream." It is widely cited as one of the first serious attempts to build a critical vocabulary for game design as a discipline — written before "game studies" existed as an academic field and before *Game Developer* magazine even existed.

Full primary text was not retrievable this session (Academia.edu blocked the fetch with a 403). The claims below are drawn from secondary notes and slide-deck digests of the essay (gamedesigntheory.wordpress.com, and two independent slide summaries), cross-checked against each other, and are marked accordingly.

**The book.** Costikyan, Greg. ***Uncertainty in Games***. MIT Press, 2013. Part of the **Playful Thinking** series — short-form MIT Press books on game studies topics. ISBN 9780262527538.

This is the primary book source. Content below is drawn from the publisher's description, reviews, and secondary summaries (analoggamestudies.org), since the book's full text was not directly fetchable this session — flagged as secondary where relevant.

### 1.2 Central claim

Costikyan's throughline across both works is that **uncertainty of outcome is the defining feature that makes something a game rather than a story or a fixed experience.**

From the essay (secondary, via slide-deck digest): "Stories are inherently linear; Games are inherently non-linear," and games depend on decision-making. His blunt formulation: "Gaming is NOT about telling stories."

A game master who refuses to let dice or player choice change the outcome "because it will ruin the story" has, in Costikyan's view, stopped running a game and started narrating a predetermined experience.

The book restates this claim in a broader, more general form. Per the MIT Press blurb (secondary): games are the "elaborate constructs that subject us to uncertainty but in a fictive and nonthreatening way" — a way of taking the uncertainty that pervades ordinary life and re-packaging it as something safe to seek out for pleasure.

A reviewer's paraphrase, which Costikyan is reported to endorse in interviews, captures the operational test cleanly: "If you know going in who is going to win, and how things will unfold, there's not much sense in playing."

In short: **remove all uncertainty of outcome, and what remains is not a game but a scripted sequence** — a story, a ritual, or a demo.

### 1.3 The taxonomy: eleven forms of uncertainty

*Uncertainty in Games* is organized around a taxonomy of the distinct *sources* of uncertainty that games can draw on. Costikyan's claim is not that games need "randomness" specifically, but that they need uncertainty — of which randomness is only one flavor among many.

Per secondary summary (analoggamestudies.org), the book identifies **eleven forms**, each framed around a question the player is implicitly asking:

**1. Performative uncertainty** — *"Will I be able to physically execute this maneuver?"*
Uncertainty about your own execution or skill: can you land the platforming jump, hit the free throw, land the parry. This is uncertainty about the player's own body/reflexes, not about the game state.

**2. Solver's uncertainty** — *"Can I solve the puzzle here?"*
Uncertainty about whether you personally can find the correct answer to a legible, in-principle-solvable challenge — the puzzle piece of games, distinct from pure execution.

**3. Analytic complexity** — *"What decision will I make, given this complex decision tree?"*
The game state is fully knowable in principle (no hidden information, no randomness), but the combinatorics of the decision tree exceed what a human — or even a computer, in extreme cases — can fully calculate. Chess and Go are the paradigm cases: perfect information, deterministic rules, yet uncertain outcomes because no player can exhaustively search the tree.

**4. Hidden information** — *"What information is being deliberately withheld?"*
Part of the true game state exists but is concealed from one or more players — an opponent's hand of cards, the contents of fog-of-war, a hidden role.

**5. Randomness** — *"What will fortune give me?"*
Genuinely stochastic elements: dice, shuffles, RNG calls.

**6. Player unpredictability** — *"How is my play experience contingent on the actions of others?"*
Uncertainty introduced by other agents in the game, distinct from randomness because other players are not random — they're strategic, but you cannot fully model their minds, so their choices remain uncertain to you.

**7. Narrative anticipation** — *"What's going to happen next?"*
Uncertainty about how a game's story will unfold, present in any game with narrative content — even though the plot may in fact be fixed, its unfolding is not yet known to the player.

**8. Development anticipation** — *"What new additions/releases will the publisher make?"*
A perceived uncertainty about future content — new cards, patches, expansions — most relevant to persistent, live-service games (CCGs, MMOs).

**9. Schedule uncertainty** — *"When will I next be able to return to this game?"*
Uncertainty about when the player will next get to play, relevant to episodic, session-gated, or social/mobile games.

**10. Uncertainty of perception** — *"How can I filter out certain data to perceive the important data?"*
A perceptual/attentional form of uncertainty: can you even pick the relevant signal out of the noise (spot the camouflaged enemy, read the tell).

**11. Semiotic uncertainty** — *"What will my playing this game mean?"*
Uncertainty about the meaning or interpretation of the act of play itself, in games with ambiguous or symbolically loaded content.

Note that the brief for this note grouped items 8–9 together as "development anticipation/schedule uncertainty," but per the source list they are two distinct entries in Costikyan's taxonomy, both concerned with uncertainty about the game's *future* rather than uncertainty within the current session.

### 1.4 Known critiques and limits

**Category overlap.** Several of the eleven types blur into each other in practice. Analytic complexity, solver's uncertainty, and hidden information can all be simultaneously present and hard to cleanly attribute in a single decision — e.g., in poker, is the difficulty of reading an opponent's range "hidden information," "player unpredictability," or "analytic complexity"? Arguably all three. The taxonomy is a descriptive vocabulary, not a set of mutually exclusive, formally testable categories.

**Descriptive, not operational.** Unlike Ian Schreiber's cost-curve toolkit (see the companion note on balance), Costikyan's taxonomy tells a designer *what kind* of uncertainty a mechanic produces, but not *how much* of it to use, or how the types interact quantitatively. It is a critical/analytical vocabulary first, a design tool second.

**Spans in-game and meta-game uncertainty.** Most of the eleven types (1–7, 10–11) concern uncertainty *within* a single play session. Two of them — development anticipation and schedule uncertainty — concern uncertainty *about the game as an ongoing product/service*. This stretches "uncertainty in games" to include something closer to "uncertainty about one's relationship to a game as a live product," a different phenomenon from outcome uncertainty within a match.

**Relation to other game-studies definitions** (reconstructed/secondary — not directly verified this session). Costikyan's uncertainty-of-outcome thesis runs parallel to Jesper Juul's classic-game-model in *Half-Real* (2005), which lists "uncertain outcome" as one of several necessary features of a game, alongside fixed rules, valorized outcome, player effort, player attachment to the outcome, and negotiable consequences. Costikyan's taxonomy is the more granular breakdown of *why* an outcome can be uncertain, but by itself does not address the other conditions — effort, valorization, attachment — that Juul argues are also necessary for something to count as a game. This comparison is offered as informed context, not a verified citation chain between the two authors.

### 1.5 Example

**Poker** is a clean composite illustration of Costikyan's taxonomy in a single game:

- **Randomness** — the shuffle and the community-card deal.
- **Hidden information** — opponents' hole cards.
- **Performative uncertainty**, in a soft sense — can you execute a credible bluff, keep a stable tell-free demeanor.
- **Player unpredictability** — what will this specific opponent, who is a strategic agent, actually do.
- **Analytic complexity** — pot-odds and range calculations that are in-principle computable but practically too complex to fully solve at the table.

No single type of uncertainty explains why poker is compelling. The taxonomy's value is exactly that it lets you name which of these five mechanisms a given rule change — e.g., adding a card face-up vs. face-down — is actually operating on.

---

## 2. Input Randomness vs. Output Randomness

### 2.1 Attempting to trace the origin (honest accounting)

This distinction is extremely widely used in practitioner game-design discourse, but pinning down a single originating citation proved difficult this session, and the popular attribution to Stone Librande could not be confirmed.

**Stone Librande.** He is the designer most commonly assumed by the community to have coined or popularized the terms — known for GDC talks on *Diablo III* and *SimCity* design, and for randomness/probability-adjacent talks. Searches for a Librande GDC talk specifically titled something like "Random and Chance" did not surface a confirmed match.

His confirmed GDC talk history in the results found here includes "The Paper Prototypes of Spore" (2009), "One Page Designs" (2010), "15 Games in 15 Years" (2011), "Designing Games for Game Designers" (2012), "Simulating a City — One Page at a Time" (2013), and "game < design" (2015) — none of which was confirmable as the source of this specific terminology in this session's research.

**Treat the Librande attribution as an unverified popular belief, not a confirmed citation.**

**Keith Burgun.** The clearest *explicit, named codification* found is Burgun's essay **"Randomness and Game Design"** (published on Gamasutra / Game Developer's site; exact publication date not confirmed this session, likely early-to-mid 2010s given Burgun's active blogging period).

Burgun defines output randomness as "noise injected between the player's decision and the outcome" and input randomness as randomness "that informs the player before he makes his decision." Notably, he does not cite a prior originator for the terms, suggesting he is presenting his own framework rather than attributing it.

**Ian Schreiber.** His *Game Balance Concepts* course, Level 5, "Probability and Randomness Gone Horribly Wrong" (gamebalanceconcepts.wordpress.com, posted August 4, 2010), independently makes essentially the same distinction — contrasting Poker (bet *after* seeing your cards) with Blackjack (bet *before* the deal is fully known) — without using the exact labels "input/output randomness."

This is a documented, dated (2010) articulation of the underlying idea that predates or is contemporaneous with the Burgun essay, which strengthens the case that the concept was circulating informally in the design community before any single canonical naming.

**Geoff Engelstein.** He discusses the same input/output framing specifically for tabletop games. His GDC talk "White, Brown, and Pink: The Flavors of Tabletop Game Randomness" addresses a related but distinct axis — the "color" or serial-correlation structure of randomness — and secondary summaries credit him with the view that "input randomness supports strategy, whereas output randomness undercuts players' strategic planning."

**David Sirlin.** His *Playing to Win* (2006) is frequently invoked in the same conversation because of its broader argument that randomness can undermine skill expression in competitive games. This session's fetch of the book's landing page did not turn up the specific terms "input randomness" / "output randomness" in his own text, so his direct terminological contribution could not be confirmed here.

**Honest summary:** no single, clearly-dated originating primary source for the exact terms could be confirmed this session. The concept itself is older and more diffuse than the labels; the labels appear to have crystallized through a mix of blog-essay codification (Burgun) and independent parallel articulation (Schreiber, Engelstein) circulating through the 2000s–2010s indie/tabletop design blogosphere.

### 2.2 The distinction itself

**Input randomness**: randomness that is resolved *before* the player commits to a decision. The random element becomes known information that the player then reasons about and plays optimally against.

Examples: a hand of cards dealt before betting begins, a procedurally generated level layout seen before you start navigating it, a shuffled draw pile whose top card is revealed before you choose whether to take it.

**Output randomness**: randomness that is resolved *after* the player commits to a decision, as part of resolving the consequences of that decision.

Examples: a to-hit or damage roll that fires after you declare an attack, a critical-hit chance applied after you commit to a strike, a random event that resolves after you've already locked in a move.

### 2.3 Why input randomness is generally considered better for agency and skill expression

With input randomness, the player has complete information at the moment of decision — the randomness has already happened and become part of the known game state. Any difference in outcome between two players facing the same random input therefore traces to the *quality of their decisions*, not to luck occurring after they've already committed.

This is why input randomness is broadly considered to "preserve skill expression": it lets the game be random (avoiding staleness/solvability) while still rewarding players who reason well about the randomized state they're given.

Output randomness inserts a stochastic gate *between* a decision and its result. Two players can make the identical, objectively correct decision and get different outcomes purely because of the die roll — which weakens the correlation between skill and result.

This is the mechanism competitive-game critiques point to when they say output randomness "feels unfair" or reduces "return on skill": a string of good decisions can still be undone by unlucky resolution.

### 2.4 Tradeoffs — why designers still use output randomness deliberately

**Dramatic tension at the moment of resolution.** A to-hit roll, a card flip, a crit chance — these create a suspenseful beat that pure input randomness, resolved quietly off-screen before play, doesn't provide in the same way.

**Keeps weaker players competitive and games less "solved."** Variance at the point of resolution means a strong player's advantage is probabilistic rather than deterministic, which sustains close, replayable matches. This is part of why party games and casual multiplayer games lean on output randomness more than serious competitive strategy games do.

**Enables genuine risk/reward tactical decisions.** "Do I take the 30%-chance shot for the kill, or the safe 90%-chance shot for less damage?" is only a meaningful decision *because* the outcome is stochastic — the randomness itself is the resource being managed.

**Emotional highs and lows drive engagement.** "Bad beats" and clutch crits are memorable precisely because output randomness can override expectation at the last moment — a property input randomness, resolved calmly before the decision, doesn't produce.

### 2.5 It's not a strict binary — critiques of the framing

**It's a continuum, not two discrete buckets** — Burgun's own caveat. Input randomness placed *immediately* before a decision, without enough time for the player to process and respond to it, functions like output randomness in practice. The player hasn't had a real chance to plan around it, so the "informed decision" the input-randomness argument depends on doesn't actually happen.

**Chained randomness blurs the model.** A counterargument Burgun addresses directly, attributed to "Dan Cole" in his essay: output randomness in one turn simply becomes input randomness for the next turn, so the categories collapse into each other over a sequence of decisions.

Burgun's rebuttal is that randomness placed too close to a decision still curtails meaningful strategy regardless of what you call it — but the critique correctly shows that in any multi-step game, the boundary between "input" and "output" depends entirely on which decision you're indexing to. A single die roll can be output randomness relative to the attack you just declared, and input randomness relative to the retreat-or-press-on decision you're about to make.

**Magnitude matters as much as placement** (reconstructed/secondary). Low-magnitude output randomness — say, ±10% damage variance — preserves far more skill expression than high-magnitude output randomness, such as a coin-flip critical hit that can double damage, even though both are technically "output randomness" by the placement-only definition. A pure before/after binary doesn't capture this, which is why some designers treat variance magnitude as a second, independent axis alongside placement.

**Engelstein's "color of noise" framework is an orthogonal axis.** His white/brown/pink-noise metaphor for tabletop randomness — independent rolls vs. serially correlated/bounded randomness, e.g. drawing without replacement — shows that *how* random events are distributed over time is a separate design lever from *when* the randomness resolves relative to a decision. Input/output placement is one dimension of a larger design space for randomness, not the whole of it.

### 2.6 Concrete examples

**Pure input randomness.** A roguelike's procedurally generated dungeon (*Rogue*, *Spelunky*) is fixed and fully knowable once generated and revealed; you then play optimally against that known layout. A drafted hand of cards in *Dominion*, or *Slay the Spire*'s relic/card offers, are also input randomness — you see the randomized options, then choose.

**Pure output randomness.** An *XCOM* or classic tabletop-RPG to-hit roll, resolved only after you've already declared and committed to the attack. A *Diablo*-style item-drop roll after a kill is a related but distinct "reward randomness" — it doesn't affect whether your immediately-preceding decision succeeded, but shares the after-the-fact resolution structure.

**Chained/mixed example.** *Mario Kart*'s item boxes are output randomness relative to the decision "should I drive over this box" — you don't know what you'll get. But the item you receive then becomes a known quantity that is input to your next decision: "how do I use this shell/banana/star now that I know what it is." This is a clean illustration of how output and input randomness chain into each other across a single mechanic — exactly the kind of case the "it's a continuum" critique points at.
