# Postmortems: Roguelikes & Tactics

Design/production postmortems from three critically and commercially
successful roguelike-adjacent and tactics games, each built by very small
teams. Shared thread: all three used Early Access or long iterative
testing periods as a core design tool, not just a launch strategy.

---

## 'Slay the Spire': Metrics Driven Design and Balance

- **Speaker:** Anthony Giovannetti (co-founder, Mega Crit Games)
- **Venue / year:** GDC 2019, March 20
- **URLs:** GDC Vault — https://www.gdcvault.com/play/1025731/-Slay-the-Spire-Metrics
  · YouTube — https://www.youtube.com/watch?v=7rqfbvnO_H0
- **Verification status:** Summary-only, and noticeably thin on granular
  numbers — GDC Vault requires a paywalled account for full slides, and
  no working transcript source was found. What's below is corroborated
  across three independent secondary sources (GDC's own announcement
  copy, Game Developer coverage, and a Class Central course listing) that
  agree on structure but don't reproduce specific metric values. Treat
  the design-philosophy claims as solid; treat the absence of concrete
  numbers as a real gap, not an oversight.

### Core claims

**Context.** *Slay the Spire* — a deckbuilding roguelike fusion — sold
over 1 million copies within its first year, largely built and balanced
during a lengthy Steam Early Access period.

**Methodology.** Mega Crit adopted a metrics-driven focus *early* in
development and sustained it through the entire Early Access run, rather
than treating metrics as a late-stage balancing pass. Concretely: an
internal **Slack channel** fed by a **metric server** was used to
surface player data (win rates, card usage, etc. — specific tracked
fields not confirmed) to the team continuously.

**Explicit caution about the method itself.** Giovannetti is reported to
have warned that metrics **can be misleading if not carefully
interpreted** — i.e., the talk isn't a naive "just follow the data"
pitch; it includes a warning about over-trusting aggregate numbers
without contextual judgment.

**Card design philosophy.** Every card is supposed to "have its place" —
the team's goal was to avoid centralizing power in a small number of
overpowered cards, in order to preserve build diversity. A specific
argument for *why this matters more in a single-player roguelike than in
a competitive game*: since runs are private and non-competitive, the team
could tolerate rare, powerful combos existing (which feel great for the
player who finds them) without those combos harming anyone else's
experience the way an OP strategy would in a multiplayer game — a
genre-specific balancing latitude that doesn't transfer directly to PvP
design.

**Feedback loop structure.** Weekly updates during Early Access, active
monitoring of Discord community feedback, use of **ascension levels**
(the game's built-in difficulty-scaling system) as a tool for reading how
skilled/dedicated players were finding the game, and deliberate attention
to **streamer play** as a distinct feedback channel from ordinary player
metrics (streamers surface different failure modes — e.g., stalling,
confusing UI moments — that raw win-rate data doesn't capture on its
own).

### What problem it solves for a solo dev

A template for running a metrics-informed balance process on a solo/
small-team budget: cheap infrastructure (a Slack channel + a basic metric
server, not a full analytics stack), a genre-aware tolerance for
imbalance (single-player roguelikes can carry more variance than
competitive games), and a mixed-signal approach that combines quantitative
data with qualitative channels (Discord, streamers) rather than trusting
either alone.

### Gap

No specific numeric example (a card's win rate before/after a balance
pass, a specific ascension-level tuning number, or the shape of the
metric server's dashboard) was recoverable. This is the weakest-verified
entry in this file and is a strong candidate for a follow-up pass if
GDC Vault access or a transcript becomes available.

---

## 'Into the Breach' Design Postmortem

- **Speaker:** Matthew Davis (co-founder, Subset Games)
- **Venue / year:** GDC 2019
- **URLs:** GDC Vault — https://www.gdcvault.com/play/1025772/-Into-the-Breach-Design
  · YouTube — https://www.youtube.com/watch?v=s_I07Iq_2XM · Slides PDF
  (link found but returns 403 on automated fetch; may work in a browser) —
  https://ubm-twvideo01.s3.amazonaws.com/o1/vault/gdc2019/presentations/Into%20the%20Breach%20Postmortem%20Final.pdf
- **Verification status:** Summary-only, and thinner than most entries in
  this corpus — the slide PDF and YouTube transcript were both
  inaccessible through automated fetch (403 / no caption track exposed),
  so this digest is built entirely from session-description-level
  secondary sources. Flagged as a priority gap for a follow-up pass.

### Core claims

**Context.** *Into the Breach* took **four years** to develop after
Subset Games finished *FTL: Faster Than Light* — a long, iteration-heavy
follow-up to a hit, which the talk frames explicitly around design
maturity gained the hard way.

**Stated topic coverage (from the session description):** designing
with hard constraints, **UI-guided design** (the interface itself as a
design tool — *Into the Breach*'s core hook is that enemy attacks are
fully telegraphed one turn ahead, which is as much a UI problem as a
combat-design problem), strategy-layer development (the overworld
"islands" meta-structure sitting on top of individual tactical battles),
and final balancing decisions.

**Structure detail recovered.** The game is organized as a sequence of
islands, each containing a set of tactical scenarios. After completing
the first island, the player chooses which subsequent island to defend
next; islands carry different modifiers/conditions that alter how combat
scenarios play out on them — i.e., the meta-structure itself is a
difficulty/variety lever, not just a level-select menu.

**Design questions the talk explicitly addresses (per its own framing,
not fully answered in available sources):** how to decide what to cut
after years of iteration; how to "steal" design elements from other games
(the deterministic, fully-telegraphed-threat design lineage runs through
turn-based tactics generally) while still landing on something original;
how to calibrate correct difficulty; and how much randomness (RNG) a
tactics game should tolerate, given that *Into the Breach*'s core design
identity is specifically about **minimizing RNG** relative to most tactics
games (attacks are guaranteed, positions are the primary variable) —
this is the game's most-cited design thesis relative to the broader
tactics genre, though the talk's specific articulation of *why* wasn't
recoverable verbatim.

### What problem it solves for a solo dev

Frames "years of cut content" as a normal outcome of iterating on a
sequel to a hit, not a sign of failure — useful context for a solo dev
mid-iteration on a follow-up project who's accumulated a large amount of
discarded design work and needs a model for how much churn is normal at
this budget/timeline level.

### Gap — priority follow-up

This is the thinnest-verified postmortem in the whole corpus. The primary
slide deck exists at a stable-looking URL but returns 403 to automated
fetch; a future agent with browser access or a GDC Vault account should
prioritize re-fetching it, since the "UI-guided design" and "how much RNG"
threads are exactly the kind of concrete, appliable content this corpus
is meant to capture and neither was recovered in enough detail here.

---

## Hades — Early Access Process (Supergiant Games)

Not a single named postmortem talk; this entry bundles several related
Supergiant appearances that together cover their Early Access process and
narrative-design approach, since the brief asked for "Supergiant's early
access process talks" as a cluster.

- **Sources bundled:**
  - GDC Podcast episode 16, "Welcome to Hades: Roguelikes and Narrative
    Design with Supergiant's Greg Kasavin" (audio interview, **not a
    conference-stage talk** — flagged explicitly since it's GDC's own
    podcast, distinct in format from a GDC session) —
    https://gdconf.com/article/roguelikes-and-narrative-design-with-hades-creative-director-greg-kasavin-gdc-podcast-ep-16/
  - GDC 2021 session, "Breathing Life into Greek Myth: The Dialogue of
    'Hades'" — Greg Kasavin (creative director) & Darren Korb (audio
    director) — https://gdcvault.com/play/1027149/Breathing-Life-into-Greek-Myth
  - Process detail sourced from Game Developer's own reporting:
    https://www.gamedeveloper.com/design/supergiant-s-fourth-outing-i-hades-i-introduces-a-more-mature-organized-dev-process
- **Verification status:** Summary-only across all three sources; decent
  corroboration between the podcast and the Game Developer article
  specifically on the milestone-cadence claims below.

### Core claims

**Early Access was a from-the-start design decision, not a fallback.**
Kasavin, quoted: "we conceived of that aspect of this game as part of the
whole package right from the start." The team expected the Early Access
period to run **over a year**, treating "developing out in the open" and
building "in partnership with the community" as core to how the game's
narrative structure specifically would be validated — a roguelike with
persistent narrative continuity (bosses "remember" previous encounters
and the game keeps a running tally of wins/losses against them) is
unusually dependent on long-horizon player feedback to check whether the
memory system is actually landing.

**Monthly milestone cadence with three internal phases.** Rather than
long, traditional production milestones, Supergiant ran monthly
milestones structured as: an **early phase** where major code changes
were still permitted; a **mid phase** where code got locked but
data-driven content (narrative text, voice-over, event definitions)
could still change; and a **late phase** for testing, bug-fixing, and
polish ahead of the public update. Kasavin: "we have a monthly
milestone... where we have certain goals, and the month is divided up
into certain phases."

**Public accountability mechanism.** Committed update dates were
displayed directly on the game's **main menu**, visible to every player —
turning the internal milestone cadence into a public promise, which the
team used as forcing-function accountability.

**Decoupling narrative from code for update velocity.** Narrative
content, voice-over, and event triggers were built to run independently
of core code changes, so Kasavin could add new story beats without
requiring a full rebuild — this is presented as the specific technical
choice that made monthly narrative-content updates sustainable during a
year-plus Early Access run.

**Team size and platform-focus tradeoff.** Team was under 20 people.
Rather than shipping simultaneous updates across every platform,
Supergiant deliberately concentrated Early Access on a single storefront
first (Epic Games Store) specifically to preserve update velocity and
quality control — an explicit tradeoff of platform reach for iteration
speed.

**Narrative/difficulty tension, named directly.** Kasavin: "there's
nothing more frustrating in games where you're really engaged with the
story, but then you hit a difficulty wall and can't make any more
progress" — framed as the central design risk of pairing a hard roguelike
combat loop with a story players are meant to stay invested in across
failed runs.

### What problem it solves for a solo dev

A concrete cadence template for running a long Early Access period
without losing narrative coherence: fixed monthly sprints with a defined
code-lock point partway through, decoupling story content from code so
narrative can keep shipping even when engineering is heads-down, and
publishing your own update dates as a discipline-forcing public
commitment. Especially relevant for any solo/small-team roguelike or
narrative-driven live-service-adjacent project considering Early Access.

### Gap

None of the three bundled sources is a full stage-talk transcript; the
GDC 2021 dialogue-specific talk (Breathing Life into Greek Myth) wasn't
independently fetched beyond its session listing, so voice-over/script-
scale production numbers (line count, recording schedule) weren't
captured here and would be a good target for a follow-up pass.
