# Studio Kill Rituals: Deep Dive

## Research Questions

1. Supercell's three kill gates: explicit kill criteria at each stage, decision authority,
   metrics or qualitative signals, published material beyond the Paananen blog post.
2. TOEM (Something We Made): full postmortem details on what triggered each of the five
   design overhauls, what nearly killed the project, what caused restarts, and how long
   each phase took.
3. Other documented studio kills with operational detail: Riot R&D rejections, Subset
   Games prototype kills after FTL, Derek Yu / Mossmouth iteration kills.
4. Solo developer kill rituals: Lucas Pope prototype kills before Papers Please and Obra
   Dinn, Derek Yu's Spelunky-era scraps, Jonathan Blow.
5. Kill aftermath: what teams do after the kill day, week, and month.
6. Game Outcomes Project findings on what predicts kill-worthiness vs. salvageability.

---

## Sources Surveyed

- **gamedeveloper.com/production/postmortem-toem** — primary source postmortem by
  Something We Made team; covers five iterations and near-cancellation in 2019.
- **pocketgamer.biz BAFTA lecture summary** — Ilkka Paananen lecture notes; clearest
  single-source statement of three-stage kill model, metrics targets, and champagne ritual.
- **danielscrivner.com BAFTA transcript** — full transcript of same Paananen lecture;
  adds Smash Land detail, sauna decision scene, team autonomy framing.
- **gamedeveloper.com "Quality is worth killing for"** — Supercell GDC/feature coverage;
  10-game kill ratio (7/10 at prototype, 2/10 at soft-launch, 1/10 global); Smash Land
  10-month timeline.
- **gamedeveloper.com "Maybe it's time to kill your game"** — Jonathan Dower (Supercell)
  on emotional kill signals; introduces "once you get the feeling about the other game"
  trigger.
- **supercell.com/en/news/learning-from-failures/** — first-person accounts of Clash Mini
  and Hay Day Pop kills; formalised lessons; 800-employee event format.
- **corporate-rebels.com Supercell failure sessions** — five-phase kill gate model detail;
  Friday ceremony format; champagne toast procedure.
- **riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality** — Riot
  prototype-stage kill signals; playtest failure diagnosis loop; ~10% pitch-to-prototype
  rate.
- **riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan** — confirms 90%
  kill rate at or before incubation; debate/research/comparison decision method.
- **intelligenceengine.blogspot.com Game Outcomes Project Part 3** — Tozour; design risk
  management (0.57 correlation), team focus (0.50), crunch avoidance (0.44) as top
  outcome predictors; names mid-project design thrashing as a kill precursor.
- **gamedeveloper.com Lucas Pope Papers Please IGF road** — 9-month timeline; no
  documented prior prototype kills in this source.
- **gamedeveloper.com Lucas Pope Obra Dinn design problems** — documents one killed
  prototype concept (first-person last-minute reenactment) killed in pre-production as
  "too ambitious for one person."
- **vice.com "Why It Took Subset Games So Long"** — Subset post-FTL slump; individual
  prototyping then convergence on Into the Breach; no named kills disclosed publicly.

---

## Studio-By-Studio Operational Detail

### Supercell

**Kill Gates (three named stages):**

| Stage | Name | Gate Question | Kill Trigger |
|---|---|---|---|
| 1 | Founding prototype | Does the founding cell feel confident in potential? | Apprehension about viability ends the cell here |
| 2 | Company playable | Do invited Supercell colleagues enjoy it? | Falls flat with internal audience |
| 3 | Soft-launch / beta | Do pre-set retention, engagement, DAU, monetization targets pass? | Failure to hit predetermined numerical targets, regardless of executive preference |

Note: These are not branded as "Gate 1/2/3" in official materials. They emerge from the
BAFTA lecture and the Corporate Rebels interview. The third gate is the most documented:
teams set explicit numeric targets *before* entering beta, and the game is killed if those
targets are not met "no matter how much [the CEO] personally would love the game."

**Decision authority:** The game development cell itself, not executives. The Smash Land
team made the kill call in a sauna over beers and then notified Paananen as a passing FYI
while he was traveling. This is by design: "Nobody tells the games teams what to do,
no matter what."

**Kill metrics named:** Retention rate, engagement, daily active users (DAU), monetization
performance, session data. Targets are set before the soft-launch beta begins; they are
not negotiated post-hoc.

**Kill ceremony:**
1. The cell discusses the kill decision privately, often in an informal social setting.
   The Smash Land kill happened in a sauna with beers.
2. The cell sends a company-wide email announcing the decision and their reasoning.
3. At the Friday all-hands meeting, the team presents learnings on stage.
4. The entire company toasts with champagne. The toast is explicitly framed as celebrating
   the learning, not the failure itself: "We are not trying to pretend that failing is fun,
   because it sucks."

**Kill statistics:** Of the last 10 tracked Supercell games, 7 killed at prototype, 2 killed
at soft-launch, 1 achieved global launch (Clash Royale). Nine additional games were killed
during the two-year development of Clash Royale alone.

**Kill aftermath:** Teams are not disbanded. Members rotate to other cells. The presenting
team at the Friday ceremony positions lessons as "so valuable they're worth celebrating."
The Hay Day Pop team was described as "regretting with fire in their hearts" and
continuing on new projects. No public record of layoffs tied to individual kills.

**Emotional kill trigger (Jonathan Dower framing):** "Once you get that feeling about
the 'other game' — the game you *should* be making — you've probably already killed your
game." This is a qualitative signal, not a metric. It is used alongside the numeric targets.

**Hay Day Pop specific lesson:** The team relied on performance data instead of intuition
and player empathy; they lacked intrinsic motivation for the puzzle genre. Formalized
lesson: "Will we be proud?" supersedes "Will it work?" as the primary decision question.

**Clash Mini lesson:** Deferred critical decisions on art direction and identity across
years of incremental changes; required a 10x increase in monetization in the final update
to survive. The lesson: constraints and early trade-offs force better decisions faster.

---

### Riot Games

**Kill rate:** Approximately 90% of pitches never reach the prototype stage. The ratio
is confirmed in the Incubation article: "No pitch has ever made it through the gate on
its first pass, and very few pitches, approximately 10%, ever make it into Prototype."

**Decision method at incubation:** "Debate, research, and comparison." No single named
decision-maker; the article does not identify a committee or authority structure.

**Prototype-stage kill signals:**
1. Playtest failure: the primary signal. Successful playtests "identify new issues";
   unsuccessful ones require diagnosis of whether execution or approach is flawed.
2. Feasibility failure: "upon trying it we realized it just wouldn't work" — cited as
   the trigger for a complete pivot on a 4-month-old project.
3. Theory invalidation: the team must hold a theory of how work will be experienced by
   players; if the theory fails to survive testing, the prototype is killed or redirected.

**Named kill stage:** Progression to "pre-production" is the surviving gate; projects
that do not reach it are killed at incubation. Riot publishes an article titled "Game
Over, Good Game!" on pausing, pivoting, and cancelling, but its operational content was
behind access restrictions at time of research.

**Authority:** "The team" in published materials; no named role or committee.

---

### Subset Games (FTL to Into the Breach)

Subset did not publicly disclose named killed prototypes after FTL. The Vice interview
(2018) documents a period of paralysis: "a sophomoric slump" in which Justin Ma and
Matthew Davis each prototyped ideas independently before showing each other. One idea
"called out to both of them" — this became Into the Breach after months of refining a
single prototype. The kill signal for the others was apparently the absence of mutual
resonance between the two founders.

**Kill authority:** Mutual founder consensus. The filter was shared passion, not metrics.

**No ceremony documented.** The process is described as natural selection during a
deliberate slow-down rather than a formal kill event.

---

### Lucas Pope (Solo Developer)

**Obra Dinn killed concept:** Pope's first design had players step into victims' boots
and reenact the last minute of their deaths. He killed this in pre-production because it
was "far too ambitious for a one-person dev." The kill signal was a scope-to-team-size
mismatch recognized before significant build time was invested.

**Papers Please:** No documented prior prototype kills found in available sources. The
core border-inspection concept arrived from Pope's travel observations and moved directly
to a 9-month build. No pre-Papers-Please iteration postmortem is publicly available.

**Obra Dinn mid-development pivot:** Pope discovered midway through development that the
core question was not "how did they die?" (visually obvious) but "who are they?" (a logic
puzzle). This is a mid-game kill of a design assumption rather than a full concept kill,
but it changed the entire player experience model.

---

### Derek Yu / Mossmouth

Derek Yu describes his solo development as assembling a "Frankenstein's monster from body
parts" — unfinished past prototypes contribute to future projects rather than being fully
discarded. UFO 50 scrapped six early prototypes during rapid iteration. No single-project
kill ceremony documented; the practice is continuous portfolio pruning.

**Kill signal:** Prototype elements that "never made it out to the public" simply stayed
internal; Yu does not describe a formal kill event.

---

## Solo Developer Patterns

Solo developers show a different structural pattern from studio kills:

- **Scope-to-capacity kill:** Pope killed the Obra Dinn reenactment concept because
  it exceeded one-person build capacity. The criterion was explicit: "too ambitious for
  a one-person dev."
- **Frankenstein carry-forward:** Yu rarely fully kills; he cannibalizes prototype parts
  into subsequent projects. No ceremony; no archive. The "kill" is the decision not to
  continue a prototype as a standalone game.
- **Mutual resonance filter (2-person team):** Subset used shared founder enthusiasm as
  the kill criterion. Prototypes that did not excite both founders were set aside without
  formal process.
- **No documented kill rituals for solo devs:** None of the surveyed solo developers
  describe a ceremony, retrospective document, or formal learning extraction process
  on individual kills. The kills are private, undocumented, and informal.

---

## Kill Trigger Taxonomy

| Trigger Name | Description | Source | Stage Typically Fires |
|---|---|---|---|
| Metric Gate Miss | Pre-set quantitative targets (retention, DAU, monetization) not met | Supercell | Soft-launch / beta |
| Colleague Flatness | Internal company playtest generates no enthusiasm | Supercell | Company-playable |
| Founder Apprehension | The founding cell itself doubts the concept's potential | Supercell | Prototype |
| Other-Game Feeling | Team members mentally inhabiting a better game they should make | Supercell (Dower) | Any stage |
| Genre Mismatch | Team lacks intrinsic motivation or expertise for the target genre | Supercell (Hay Day Pop) | Any stage |
| Deferred Identity | Core art/design decisions pushed forward indefinitely without resolution | Supercell (Clash Mini) | Late prototype / beta |
| Playtest Theory Failure | Theory of player experience fails to survive structured playtest | Riot Games | Prototype |
| Feasibility Collapse | Attempting the approach reveals it fundamentally will not work | Riot Games | Prototype |
| Pitch Gate Miss | Pitch fails debate/research/comparison review; does not advance to prototype | Riot Games | Incubation |
| Scope-to-Capacity Mismatch | Concept exceeds team size or build capacity for the intended output | Pope / solo devs | Pre-production |
| Mutual Resonance Absent | Two-person team cannot align on shared excitement for a prototype | Subset Games | Early prototype |
| Explainability Failure | Team cannot answer "what do you do in it?" after repeated attempts | TOEM / Something We Made | Mid-development |
| Design Thrashing | Major design changes repeatedly during active development | Game Outcomes Project | Any stage |
| Mid-Development Assumption Kill | Core design assumption (not whole concept) found false mid-build | Pope (Obra Dinn) | Mid-production |

---

## Aftermath Patterns

**Same-week (kill day):**
- Supercell: informal social gathering (sauna, beers) where the kill decision is finalized
  collaboratively; company-wide email sent by the team announcing the decision.
- Solo devs: no documented same-day event. The kill is often a quiet decision to stop
  opening a project folder.

**Same-week (kill week):**
- Supercell: Friday all-hands presentation by the killed-project team; champagne toast
  with the full company.
- TOEM: consulting work taken on by both co-developers to maintain financial stability
  while the project was on hold.

**First month:**
- Supercell: formal lesson extraction. The Smash Land, Hay Day Pop, and Clash Mini
  lessons were each condensed into named principles presented to ~800 employees.
  The company treats killed-game presentations as required professional development.
- Supercell: team members rotate to other cells. No penalty structure documented.

**Formalized learning:**
- Supercell encodes lessons into named heuristics. Examples from Hay Day Pop and
  Clash Mini: "Will we be proud?" (over "Will it work?"), "Constraints enable ambition,"
  "Intrinsic motivation matters." These circulate as internal operating principles.
- Riot does not publicly describe its post-kill learning extraction process.
- TOEM: no formal kill retrospective; the two developers pursued other income, then
  returned to reassess with fresh eyes approximately 6-9 months later.

---

## Relevance to Game Studio Framework

### Changes warranted in `docs/improvement/value-review/11-production-failure-protocols.md`

The current Concept Death Protocol (Ritual 1) is structurally correct but too abstract
for replication. Specific additions based on this research:

1. **Name the three kill gates explicitly** rather than listing generic triggers. The
   Supercell model maps cleanly: (a) founding-team gate (internal doubt), (b) lean-council
   gate (does the council want to keep playing it?), (c) pre-beta metric gate (do
   pre-set targets hold at soft-proof?). The framework currently has no equivalent of
   the metric-gate — it has proof verdicts but no pre-committed quantitative targets.

2. **Add the "other-game feeling" as a named qualitative trigger.** The current protocol's
   triggers are all proof-failure signals. The Dower trigger ("you've already killed your
   game when you feel the pull toward the better one") is a leading indicator that fires
   before proof failure. It belongs in the trigger list.

3. **Require pre-committed targets before entering any proof phase**, not just at
   soft-launch. Supercell's practice of setting numeric targets *before* beta starts,
   and treating post-hoc renegotiation as illegitimate, would strengthen the framework's
   current lean-gate logic.

4. **The kill ceremony is missing entirely.** The protocol describes steps 1-5 for
   recording a kill but names no ceremony or social acknowledgment. A one-sentence
   ceremony requirement — the team names the concept dead together, in a shared session
   rather than a solo document edit — changes the psychological meaning of the action.

5. **"Explainability failure" is a strong early kill signal** (from TOEM) that the
   framework does not name. If the team cannot answer "what do you do in it?" after
   two attempts, that is structurally equivalent to the current trigger "a required
   reference moment cannot be reproduced after two attempts" but fires earlier and
   requires no build artifact.

### Changes warranted when `core/templates/production/concept-death-record.md` is created

The template should include:

- **Pre-committed targets field:** the numeric targets that were set *before* the
  last proof phase, not reconstructed after the kill.
- **Kill trigger field (named):** must reference one of the taxonomy triggers above,
  not a free-text reason. This enforces cross-concept comparability.
- **"Other-game description" field:** a one-sentence description of what the team
  would rather be making. This areas implicit redirection before it becomes
  a performance or morale problem.
- **Team ceremony record:** who was present, what was said, and what the shared
  acknowledgment was. Even a two-person team should record this.
- **Learning extraction fields:** three named heuristics or constraints the kill
  taught, in the format Supercell uses ("Intrinsic motivation matters"; "Deferred
  identity kills projects"). These become reusable vocabulary across the studio.
- **Artifact disposition:** current protocol says move to `direction/killed/` archive.
  Add a field for which specific artifacts (mechanics, art, audio) are candidates for
  Frankenstein carry-forward into future concepts, following Derek Yu's practice.

---

## Open Questions

1. **Riot's "Game Over, Good Game!" article content** — the title suggests operational
   detail on pausing, pivoting, and cancelling, but it was access-restricted during
   research. It may contain the most specific Riot kill criteria available.

2. **Supercell's exact metric targets at soft-launch** — retention and DAU benchmarks
   are referenced but never quantified in public sources. Internal target values (e.g.,
   D1/D7/D30 retention thresholds) would make the metric-gate model directly usable.

3. **Documented solo developer kill ceremonies** — none found. Whether the absence
   reflects that they do not exist, or that they exist but are never written about,
   is unresolved. A survey of itch.io devlogs may area informal examples.

4. **Post-kill team mental health patterns** — Supercell describes teams "regrounding
   with fire in their hearts" but this is marketing language. The Game Outcomes Project
   excluded cancelled projects from its dataset, so there is no quantitative baseline
   for team health after kills.

5. **Whether Riot's 90% kill rate applies at prototype or at incubation** — the two
   articles slightly contradict each other on where the 90% applies. The Prototype
   article implies "most ideas won't work out" at prototype; the Incubation article
   pins the 10% number to the incubation-to-prototype gate.

---

## Citations

1. https://www.gamedeveloper.com/production/postmortem-toem
2. https://www.pocketgamer.biz/5-lessons-from-ilkka-paananens-bafta-games-lecture/
3. https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/
4. https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production
5. https://www.gamedeveloper.com/design/maybe-it-s-time-to-kill-your-game-and-move-on-supercell-on-cutting-its-losses
6. https://supercell.com/en/news/learning-from-failures/
7. https://www.corporate-rebels.com/blog/failure-sessions-supercell
8. https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality
9. https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan
10. https://intelligenceengine.blogspot.com/2015/01/the-game-outcomes-project-part-3-game.html
11. https://www.gamedeveloper.com/business/the-game-outcomes-project-part-1-the-best-and-the-rest
12. https://www.gamedeveloper.com/design/for-lucas-pope-i-return-of-the-obra-dinn-i-was-a-bunch-of-appealing-design-problems
13. https://www.gamedeveloper.com/design/road-to-the-igf-lucas-pope-s-i-papers-please-i-
14. https://www.vice.com/en/article/why-it-took-subset-games-so-long-to-make-a-game-after-ftl/
15. https://nielsthooft.com/derek-yu
