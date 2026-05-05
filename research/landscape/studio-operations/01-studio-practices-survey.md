# Real Studio Operating Practices Survey

## Research Methodology

This survey was conducted via 13 WebSearch queries and 11 WebFetch calls covering first-party studio blogs, gamedeveloper.com postmortems, industry consultant writing, and named GDC talk descriptions. GDC Vault full session content was not accessible without a paid account; session landing pages were used where available. Sources were prioritized in this order: first-party studio writing, named developer postmortems, industry consultant analysis, journalist summaries. Journalist summaries of studio practices were used only when corroborated by a primary source.

Skepticism notes applied throughout: practices described in postmortems are retrospective reconstructions, not real-time logs. Successful studios describe what worked after the fact; the same practices may have existed at studios that failed and are therefore absent from the public record.

---

## Research Questions

1. How do successful indie studios decide "next milestone is vertical slice vs. another short prototype"? Find actual decision criteria, not platitudes.
2. What does "vertical slice" actually mean at successful studios in practice vs. in marketing? Find at least 3 named studios with documented definitions.
3. How do studios document and execute concept death — killing a long-running prototype that isn't working? Look for explicit retrospectives, not just "we cut it."
4. What concrete public production artifacts (vision docs, milestone docs, retrospectives, scope-cut logs) have successful studios shared?
5. What documented scope-cut decision frameworks exist? When deadline pressure forces a 50% cut, how do real producers choose?
6. How do studios handle parallel prototyping (multiple risks tested in parallel)?

---

## Sources Surveyed

- Supergiant Games blog, "From Alpha to Content Lock" (supergiantgames.com/blog): First-party, covers Transistor alpha/content-lock phases and what alpha means at the studio.
- Game Developer, "Quality is Worth Killing For: Supercell's Ruthless Approach to Production" (gamedeveloper.com): Named studio, named individuals (Jonathan Dower), documented kill stages and champagne ritual.
- Game Developer, "Maybe It's Time to Kill Your Game: Supercell on Cutting Its Losses" (gamedeveloper.com): Follow-up Supercell piece with gut-feeling vs. metrics discussion.
- Game Developer, "Spelunky Designer: Learn How to Finish Games Reliably" (gamedeveloper.com): Derek Yu on prototype velocity and tepid-response criterion.
- Game Developer, TOEM Postmortem (gamedeveloper.com): First-party postmortem from Something We Made covering five design overhauls and concept death.
- Game Developer, Starcom: Nexus Postmortem (gamedeveloper.com): Solo dev; named sunk-cost ("bygones") framework and three milestone dates.
- Rami Ismail, "Prototypes and Vertical Slice" (ltpf.ramiismail.com): Industry consultant; clean prototype-vs-slice distinction used widely in indie circles.
- Geoff Ellenor (People Can Fly Montreal), "Don't Over-Focus on the Vertical Slice" (Medium): Creative director critique of vertical-slice theater; three neglected preproduction pillars.
- GDC Vault, "Into the Breach Design Postmortem" — Matthew Davis (gdcvault.com): Session description only; vault content paywalled but search results confirm four-year iteration and "gutted everything" multiple times.
- Game Developer, "How Subset Games Made the Jump from FTL to Into the Breach" (gamedeveloper.com): Organic prototype origin ("check this out, do you want to poke at this?") and peer playtesting at PAX/GDC.
- VentureBeat, "How Supercell Kills Its Darlings" (venturebeat.com): Stats on 30+ killed games, confirms cell structure and company-playable milestone.
- Supergiant Games / AIAS Podcast, Amir Rao + Greg Kasavin (libsyn/Apple Podcasts): "The game is the design document" philosophy; early-access as a live vertical slice mechanism.
- Eric Barone, Stardew Valley, Game Developer interview (gamedeveloper.com): Psychological endurance model, no formal milestone structure documented publicly.

---

## Key Findings

### Q1: Prototype to Vertical Slice — Decision Criteria

**Finding 1.** The clearest public criterion is Rami Ismail's two-question gate: a prototype answers "should we make this?" while a vertical slice answers "can we make this?" The transition is triggered only after all major design questions are resolved in prototype — core loop validated, not just playable. Source: ltpf.ramiismail.com

**Finding 2.** Supergiant Games uses an implicit gate they never formally name but describe in practice: they begin treating the game as a vertical slice when they can "plan the game from the very start" and commit to a roadmap. On Hades, early-access launch itself served as the vertical-slice commitment point — the studio was effectively publishing a living vertical slice with player feedback shaping production. This is distinct from pre-launch studios. Source: AIAS Podcast; gamedeveloper.com/design

**Finding 3.** Geoff Ellenor (People Can Fly) warns that vertical slices built without production tooling create a false gate — teams exit preproduction with a polished demo made via hacks, then discover they cannot build the actual game at scale. His counter-criteria: a valid milestone also requires (a) real editor and data tooling, (b) generative gameplay systems not handcrafted levels, and (c) established approval workflows. Source: Medium/@gellenor

**Finding 4.** Subset Games (Into the Breach) used an informal social gate: Matthew Davis showed a prototype to Justin Ma with "check this out, do you want to poke at this?" — continuation depended on a collaborator finding it worth exploring, not a formal review. They "gutted everything multiple times" across four years before committing. No single moment of "now it's a vertical slice." Source: gamedeveloper.com/business/how-subset-games

### Q2: What "Vertical Slice" Actually Means in Practice

**Finding 5.** At Supergiant Games, "alpha" — not "vertical slice" — is the named milestone. Alpha means: all environments and characters exist, game playable start-to-finish, no placeholders, interesting to play and worth playing. Three months post-alpha is "content lock" (near-shipping quality, no new content). Vertical slice is not a term Supergiant uses publicly. Source: supergiantgames.com/blog/from-alpha-to-content-lock

**Finding 6.** The Ask A Game Dev Tumblr (industry producer with triple-A background) distinguishes four terms studios conflate in marketing: Prototype (design risk test), Vertical Slice (production risk test at near-final fidelity), First Playable (publisher reporting milestone, often just proves engine works), MVP (shippable minimum). "Vertical slice" in publisher/funding context is often closer to what developers call alpha. Source: tumblr.com/askagamedev

**Finding 7.** TOEM (Something We Made) implicitly hit a vertical-slice inflection after abandoning four design iterations: they "grabbed the enjoyable things from earlier versions" and focused on the camera/photography mechanic that caused players to "slow down and look at its aesthetic." This was not named a vertical slice — it was described as "figuring out what to do before moving forward." Source: gamedeveloper.com/production/postmortem-toem

### Q3: Concept Death — Killing a Long-Running Prototype

**Finding 8.** Supercell's kill ritual is the most explicitly documented in the public record. Named stages: (1) prototype kill, (2) company-playable kill (game released internally to all employees), (3) soft-launch kill. The decision authority sits with the small cell (3–15 people), not management. The kill is confirmed "good" when developers feel the pull of another game stronger than commitment to the current one. Ritual: the team gets beers, sits in a sauna, then informs leadership. A champagne toast follows company-wide. Source: gamedeveloper.com/business/quality-is-worth-killing-for; gamedeveloper.com/design/maybe-its-time-to-kill

**Finding 9.** TOEM documented a concept death in their postmortem: after four design overhauls and increasing team anxiety, the project was effectively cancelled in early 2019. Restart in late 2019 was triggered by distance — stepping away completely allowed the team to re-evaluate what was actually enjoyable. The kill was undocumented internally; the restart was described as "some talking on how to move forward." Source: gamedeveloper.com/production/postmortem-toem

**Finding 10.** Derek Yu's documented criterion for concept death: if external playtest feedback is tepid, do not extend development to fix the problem — the problem is probably structural. Instead, finish faster and move on. This is not a formal ritual; it is a heuristic about sunk cost vs. velocity. Source: gamedeveloper.com (Spelunky designer piece)

**Finding 11.** Subset Games killed "multitude of experimental prototypes" between FTL and Into the Breach over two years. No formal kill documented publicly — kills happened quietly as neither developer pursued the prototype further. The game that survived was the one a collaborator voluntarily kept "poking at." Source: gamedeveloper.com/business/how-subset-games

### Q4: Public Production Artifacts

**Finding 12.** Supergiant Games blog (supergiantgames.com/blog) is one of the most detailed public development journals from a consistently successful indie. Posts cover named milestones ("alpha," "content lock"), team discipline, and production philosophy. The blog covers Transistor and implicitly Hades' early-access cadence.

**Finding 13.** Lucas Pope's dev logs at dukope.com/devlogs and the TIGSource developer forums contain granular production diaries for Papers, Please and Return of the Obra Dinn. Pope noted that if he had seen the full scope of Obra Dinn's memory-retracing system at the start "I might have stopped making it" — a documented near-concept-death from scope surprise, not external feedback. Source: gamingbible.com/features/lucas-pope

**Finding 14.** Starcom: Nexus postmortem (Cogmation/solo dev) is one of the most transparent scope-cut documents publicly available, including named milestones (beta by mid-summer 2018, Early Access within 12 months) and explicit "bygones principle" framing for sunk-cost decisions. Source: gamedeveloper.com/business/starcom-nexus-postmortem

**Finding 15.** Valve Handbook for New Employees (steamcdn-a.akamaihd.net) describes the "cabal" project structure and employee-driven project selection, but does not contain milestone documentation or production kill criteria. It is a culture document, not a production process document.

### Q5: Scope-Cut Decision Frameworks

**Finding 16.** The only named prioritization framework found in documented studio practice is the "bygones principle" from Starcom: Nexus — evaluate whether remaining development can generate value going forward, ignoring past investment. This maps to standard economic sunk-cost reasoning but the developer named and applied it explicitly. Source: gamedeveloper.com/business/starcom-nexus-postmortem

**Finding 17.** Supercell's scope-cut model under deadline: the cell decides unanimously by consensus or extended debate ("keep hashing it out"). No formal prioritization matrix — decisions are governed by experienced gut judgment on whether the game can sustain long-term engagement ("years and years"). Source: gamedeveloper.com/business/quality-is-worth-killing-for

**Finding 18.** Geoff Ellenor's production advice inverts the scope-cut framing: instead of cutting features late under deadline, the correct approach is to avoid committing to features that cannot be built with the actual tools and processes in place. Cut during preproduction by validating production pipeline, not during alpha/beta crunch. Source: Medium/@gellenor

**Finding 19.** Derek Yu's heuristic: if the core loop is not clearly enjoyable to non-developer players, cutting additional features will not save the game — the correct cut is the entire project, made faster. Non-developers are better scope signal than developer peers. Source: gamedeveloper.com (Spelunky designer)

### Q6: Parallel Prototyping

**Finding 20.** Subset Games ran informal parallel prototyping between FTL and Into the Breach — both developers built experimental prototypes independently and shared them with each other as potential next projects. No formal process or time-boxing; continuation depended on mutual interest. Source: gamedeveloper.com/business/how-subset-games

**Finding 21.** Supercell's cell structure enables parallel prototyping at the company level: multiple 3–15 person cells each own a prototype simultaneously. The company-playable milestone aggregates results by opening each game to all employees, creating an implicit parallel comparison. The decision about which cell's game to continue is not a committee review — each cell decides independently whether their own game should live or die. Source: gamedeveloper.com/business/quality-is-worth-killing-for; venturebeat.com/2016/11/15/how-supercell-kills

**Finding 22.** Geoff Ellenor notes that parallel prototyping without corresponding investment in tooling and systems leads to a false positive: the best-looking prototype wins, but the winning prototype was built with hacky one-off work that cannot be the foundation for production. Source: Medium/@gellenor

---

## Studio Snapshots

### Supercell (mobile, Clash of Clans, Brawl Stars)

Named practices: (1) Three public kill gates — prototype, company-playable (all 180 staff play it), soft-launch; (2) cell autonomy — kill decisions made by 3–15 person cell, not management; (3) kill ritual — sauna + beers with cell, then champagne toast company-wide; (4) primary kill signal — gut feeling that another game is more compelling, not metrics; (5) 30+ games killed across company history, about 70% killed at prototype stage. The champagne toast is not ironic — it signals that the courage to try and the learning acquired are worth celebrating independent of outcome.

### Supergiant Games (PC, Hades, Transistor, Bastion)

Named practices: (1) Alpha = all content present, playable start-to-finish, no placeholders, "worth playing"; (2) content lock = near-shipping quality, tuning and voiceover timing locked; (3) early access as live production gate — Hades used player feedback loops to replace the internal vertical slice decision; (4) no forced crunch — milestone schedule built around sustainable pace, with forced vacation as a production tool; (5) "the game is the design document" (Amir Rao) — builds happen before full design specs, with direction emerging from what the running game reveals.

### Something We Made (TOEM)

Named practices: The team documented five design iterations publicly, including four failed attempts spanning 2018–2019. Kill trigger: accumulated anxiety and inability to explain the game at external showcases. Restart trigger: temporal distance + extraction of the single mechanic (camera perspective shift) that players responded to. No formal process — kills and restarts were social and emotional, documented only in retrospect. This is the most honest documented concept death from a small indie team found in this survey.

### Starcom: Nexus (solo dev, Cogmation)

Named practices: (1) Three explicit milestone dates set in advance; (2) "development freeze" before full release to prioritize stability; (3) explicit sunk-cost ("bygones") framing for scope cuts; (4) feature cut documented with before/after description (planet mini-game replaced by simplified scan). The postmortem at gamedeveloper.com is one of the most operational public scope-management documents available from an indie developer.

---

## Relevance To Game Studio Framework

### Gap (a): Reference-moment to design-constraint translation

Finding 5 (Supergiant's alpha criteria: "interesting to play and worth playing") and Finding 3 (Ellenor's tooling/systems/process triad) both point to the same gap: reference moments describe feel, but production gates need functional criteria — is the experience reproducible? Does the system generate it or was it handcrafted for the demo? The framework should add a translation layer: reference moment identifies the target feel; the prototype gate tests whether a system produces that feel without handcrafting. The vertical-slice gate tests whether production tooling can reproduce it at scale.

Proposed change: Add a "feel reproducibility check" between prototype and vertical-slice gates. Criteria: can a non-author trigger the reference feel in 3 out of 5 playtests using the system as built, without designer intervention?

### Gap (b): Production dark rituals (concept death, scope crisis, parallel risk, deadline mode)

Finding 8 (Supercell kill ritual), Finding 9 (TOEM concept death), Finding 10 (Yu's tepid-response heuristic), and Finding 17 (Supercell consensus model) together form a usable dark-rituals playbook. The key insight: concept death is not a rational decision, it is a social event that requires ritual to be psychologically safe. Supercell's champagne toast operationalizes this. TOEM's "took a break and came back" operationalizes it differently for small teams. Deadline-mode scope cuts are best front-loaded (Ellenor) not crisis-managed.

Proposed change: Add three named rituals to the framework: (1) "Company Playable" gate (all agents can play it, not just the producing agent) as a kill-or-continue trigger; (2) "Tepid Response Protocol" — if external playtest produces neutral response, start a scope-cut sprint not an extension sprint; (3) "Sauna Rule" — concept death requires a named social acknowledgment before declaring it official, not just a task deletion.

### Gap (c): LLM-native generative leverage

Finding 2 (Supergiant's "game is the design document") and Finding 8 (Supercell's "company playable") both point to the value of running state over documented state. For LLM agents, the analog is: the running prototype output is more authoritative than any spec document. The framework could leverage this by treating agent-generated playtest logs as first-class production artifacts that override prior design documents when they conflict.

Proposed change: Introduce a "live document" principle — playtest output from the running prototype supersedes the intake spec. When Codex or Claude Code generates a system, have the agent run a self-playtest and write findings as a new milestone artifact, not a changelog.

### Gap (d): Converting source-map citations to operational worked guides

Finding 14 (Lucas Pope dev logs), Finding 12 (Supergiant blog), and Finding 13 (Starcom postmortem) are all primary sources with operational detail that could be converted to worked guides. The gap is extraction: these sources describe what was done but not why the decision was the right call in retrospect. The framework needs a "retrospective extraction template" that pulls: (1) the decision made, (2) the signal that triggered it, (3) the outcome, (4) what would have happened with the alternative choice.

Proposed change: Add a citation-to-guide conversion template to the intake pipeline. When a reference source is cited, the framework should prompt for extraction along four axes: decision, trigger, outcome, counterfactual.

---

## Cross-Studio Patterns (Synthesis)

Across all studios surveyed, four patterns appear repeatedly regardless of studio size or genre:

**Pattern A: The kill signal is social before it is analytical.** Supercell's "gut feeling about the other game," TOEM's accumulated anxiety, Derek Yu's tepid-response test — none of these are metric dashboards. They are the point at which continued commitment requires self-deception. Metrics confirm a kill; they rarely initiate one. The framework should treat this as a design constraint: any kill gate that relies purely on data will be gamed or ignored.

**Pattern B: Prototype-to-production transitions fail at tooling, not design.** Geoff Ellenor's critique is the clearest statement of a phenomenon visible across other studios: games that look good in a vertical slice often collapse in production because the demo was built with one-off hacks. Supergiant's distinction between "alpha" (content present, actually interesting to play) and a mere vertical slice demo encodes this same concern. The moment to validate tooling is before the vertical slice, not after.

**Pattern C: Scope cuts made under deadline are downstream of earlier decisions not to cut.** Every studio that documented scope crisis also documented a prior phase where adding features felt costless. The Starcom: Nexus "development freeze" before release and Ellenor's front-loaded preproduction cuts are the only two practices in this survey that explicitly address the root cause rather than the crisis.

**Pattern D: Parallel prototyping survives as informal social process, not managed portfolio.** Supercell at company scale and Subset Games at two-person scale both ran parallel prototypes, but in both cases the selection mechanism was personal enthusiasm, not a structured comparison. The "company playable" milestone at Supercell creates a brief window of structured comparison — all employees play all games — but the kill decision still stays with the originating cell.

---

## Open Questions

1. **Vertical slice in LLM-native context**: All documented vertical-slice practices assume a human team building over months. What is the equivalent gate for a Codex+Claude loop that can generate functional systems in hours? The 1-3 month timeline is irrelevant; the criteria (reproducible feel, production tooling, team process) may still apply but need re-anchoring.

2. **Concept death for AI-generated work**: Supercell and TOEM concept deaths involve psychological investment by human creators. Does concept death have the same function for LLM agents, or is the relevant analog a different gate? The framework has no documented answer.

3. **Parallel prototyping coordination**: Supercell's cell structure works because each cell is autonomous. If Codex and Claude Code run parallel prototypes, what is the coordination mechanism for selecting which to continue? No studio examined has a multi-agent parallel prototype model.

4. **Non-player external signal**: Derek Yu distinguishes non-developer feedback as higher signal. In a human-in-loop AI framework, the human creator is likely the only non-developer available for signal. How does the framework account for this single-observer bias?

5. **Scope-cut criteria under LLM time economics**: Traditional scope cuts trade features for time. LLM agents can generate features faster but may generate inconsistent or fragile systems. The tradeoff is different. No existing studio practice maps cleanly to this.

6. **Documentation of killed work**: No studio surveyed had a public artifact of their kill decisions at the time of the kill — only retrospective postmortems. The framework should consider whether kill decisions should be logged in real time and what format that log takes.

7. **Survivor bias ceiling**: All studios in this survey shipped at least one successful game. We have no documented evidence of studios that applied identical practices and failed. Supercell's 30+ kills show internal variation but all came from a studio that already had Clash of Clans as financial base. The practices may require financial runway that the framework cannot assume.

8. **The GDC Vault paywalled postmortem problem**: Matthew Davis's Into the Breach postmortem at GDC 2019 and multiple Naughty Dog production talks were not fully accessible. The most operationally specific production documents are behind GDC Vault paywalls or exist only as YouTube summaries. A follow-up research pass with vault access would yield sharper criteria from larger studio contexts.

---

## Citations

1. https://www.supergiantgames.com/blog/from-alpha-to-content-lock/
2. https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production
3. https://www.gamedeveloper.com/design/maybe-it-s-time-to-kill-your-game-and-move-on-supercell-on-cutting-its-losses
4. https://venturebeat.com/2016/11/15/how-supercell-kills-its-darlings-to-focus-on-potential-hits/
5. https://ltpf.ramiismail.com/prototypes-and-vertical-slice/
6. https://gellenor.medium.com/dont-over-focus-on-the-vertical-slice-c304964ed747
7. https://www.gamedeveloper.com/production/postmortem-toem
8. https://www.gamedeveloper.com/business/starcom-nexus-postmortem-an-indie-dev-journey
9. https://www.gamedeveloper.com/business/how-subset-games-made-the-jump-from-i-ftl-i-to-i-into-the-breach-i-
10. https://www.gdcvault.com/play/1025772/-Into-the-Breach-Design
11. https://www.gamedeveloper.com/design/-i-spelunky-i-designer-want-to-be-an-indie-then-learn-how-to-finish-games-reliably
12. https://dukope.com/devlogs/
13. https://www.gamingbible.com/features/lucas-pope-papers-please-return-of-the-obra-dinn-and-no-sequels-20220523
14. https://interactive.libsyn.com/hades-with-supergiant-games-amir-rao-and-greg-kasavin
15. https://www.gamedeveloper.com/production/how-i-stardew-valley-i-creator-eric-barone-coped-with-a-four-year-dev-cycle
16. https://tumblr.com/askagamedev/746300998961741824/game-dev-glossary-prototype-vertical-slice
17. https://www.gamedeveloper.com/design/watch-greg-kasavin-discuss-the-development-of-supergiant-games-i-hades-i-
18. https://gamereactor.eu/vertical-slice-supergiant-games/
