# Practitioner Cases — recurring-theme map

- Four themes recur across every case here: scope smaller than your ambition; the unprompted-stranger signal; recognising the moment you need non-development help; backup discipline.
- One case is a deliberate counter-example: Dwarf Fortress, where unbounded scope was chosen, funded, and continuously playable.
- Source strength varies sharply. Two cases have real GDC talks; five are press-interview or podcast only; one has **no primary source at all**.
- Rule: state the source tier when citing a case. "Press-interview-only" and "GDC postmortem" are not interchangeable evidence.
- Rule: numbers marked unverified in the corpus MANIFESTs stay marked unverified when quoted from here.
- All URLs below were fetched during the 2026-07-26 research and corpus pass; they were not re-fetched during distillation.

## Basics

### The four recurring themes

**1. Scope the first game smaller than your real ambition.** The most repeated
and best-corroborated theme in the set. Derek Yu argues for scaling *down* after
an abandoned project rather than up, and frames finishing as a trainable skill
that compounds. A Short Hike abandoned a larger project and shipped a small one
in about a quarter. The First Tree shipped an explicitly "compromised vision"
short by design. Entry point: [undertale.md](./undertale.md), which also flags
that the Undertale-specific version of this claim has no primary source.

**2. The unprompted-stranger signal beats solicited feedback.** One person
playing for hours without being asked outranks ten polite five-minute sessions.
Balatro's developer names this directly as the moment he knew the game worked.
Entry point: [balatro.md](./balatro.md).

**3. Solo developers hit a point where they need non-development help, and
recognising that moment is itself a skill.** Business, marketing, and QA work
displaces development work well before launch; the postmortems consistently
treat noticing this as the hard part. Entry point:
[animal-well.md](./animal-well.md).

**4. Backup discipline is a project-ending risk, not an IT afterthought.**
Stardew Valley was nearly lost to a drive failure with no backups. For a solo
developer the development machine and the company are the same object. Entry
point: [stardew-valley.md](./stardew-valley.md).

### Two cross-cutting patterns worth knowing

**Someone outside your head should own the date.** A Short Hike used funding
milestones; Hades published its update dates on the game's main menu; Derek Yu
recommends festivals and competitions specifically because they force cut
decisions self-imposed deadlines do not. Cave Story is the control case: no
external date, five years, one full restart.

**Designed content is not shipped content.** Animal Well cut roughly 500 of
about 750 designed encounters. Sid Meier's stated figure for Firaxis is that
about a third of what they try gets taken out
(`../corpus/gdc-postmortems/design-talks.md`). Plan for the ratio.

## Advanced

### Case-to-topic map

| Case | Developer | Primary use | Source tier |
| --- | --- | --- | --- |
| [a-short-hike.md](./a-short-hike.md) | Adam Robinson-Yu | Pre-authorized cut line; solo re-estimation habit; external deadline as a tool | GDC 2020 postmortem, digested from a detailed recap |
| [balatro.md](./balatro.md) | LocalThunk | Playtest signal quality; what counts as evidence a game works | Two 2024 developer interviews; no talk |
| [animal-well.md](./animal-well.md) | Billy Basso | Content cut rate; naming the non-dev help moment | Full-episode podcast interview (July 2024); no talk |
| [cave-story.md](./cave-story.md) | Daisuke "Pixel" Amaya | What happens with no external date; restart economics | Long-form trade-press interview; no talk |
| [stardew-valley.md](./stardew-valley.md) | Eric Barone | Backup discipline; long solo cycles; regret was writing depth, not scope | **Press interviews + book chapter only; no GDC postmortem** |
| [undertale.md](./undertale.md) | Toby Fox (attributed) | Ship smaller than your ambition | **No primary source for the Undertale claim; rule carried by three other named sources** |
| [dwarf-fortress.md](./dwarf-fortress.md) | Tarn Adams | The legitimate case for unbounded scope, and its three conditions | Trade-press developer Q&A; no talk |
| [studio-practices.md](./studio-practices.md) | Supergiant, Mega Crit | Burnout as budgeted risk; milestone cadence; feedback channels | Developer-sourced reporting + GDC talk summaries |

### How to use a case in a live conversation

1. Match the creator's situation to a theme, not to a game. The games are
   illustrations; the themes are the transferable content.
2. State the source tier out loud when the case is doing real work in a
   decision. "This is from a press interview, not a postmortem" changes how much
   weight the creator should give it.
3. Prefer the case that shares the creator's *constraints* over the case that
   shares their genre. Cave Story and A Short Hike are both small 2D solo
   projects; the useful difference between them is who owned the date.
4. When a creator invokes a case to defend a decision, check the conditions
   rather than the analogy — see the three conditions in
   [dwarf-fortress.md](./dwarf-fortress.md) for the clearest example.

### Deeper material

Full talk and postmortem digests live in `../corpus/gdc-postmortems/`
(feel talks, design talks, pitch and marketing talks, roguelike/tactics
postmortems, platformer/indie postmortems). Each lane's `MANIFEST.md` carries
per-file verification status; read it before quoting a number. Celeste, Slay the
Spire, Into the Breach and Hades are digested there and are not duplicated as
case files here.

## Cases

All nine files in this directory, by theme:

- Scope discipline — [undertale.md](./undertale.md),
  [a-short-hike.md](./a-short-hike.md), [animal-well.md](./animal-well.md)
- Schedule and date ownership — [cave-story.md](./cave-story.md),
  [a-short-hike.md](./a-short-hike.md), [dwarf-fortress.md](./dwarf-fortress.md)
- Evidence and playtesting — [balatro.md](./balatro.md)
- Sustainability and process — [studio-practices.md](./studio-practices.md),
  [stardew-valley.md](./stardew-valley.md)

## Checklist

Before citing any case from this directory:

- [ ] Which theme is this case being used to support?
- [ ] What is its source tier, and have you said so?
- [ ] Is the number you are about to quote marked unverified in the corpus
      MANIFEST?
- [ ] Does the creator's situation share the case's *constraints*, or only its
      genre?
- [ ] If the case is being used to justify an expansion of scope, have you
      checked the three Dwarf Fortress conditions?

## Sources

Per-case source lists live in each file. The set as a whole draws on:

- Corpus lane `../corpus/gdc-postmortems/` — five digest files plus
  `MANIFEST.md`, compiled 2026-07-26. The MANIFEST records verification status
  per entry and names Vampire Survivors and Stardew Valley as firm gaps with no
  citable GDC talk.
- Corpus lane `../corpus/canon-map/blood-sweat-pixels.md` — bibliographic record
  verified against Google Books and Open Library; per-chapter interpretations
  are reconstructed summaries and are not quotable.
- Corpus lane `../corpus/narrative-level-genre/genre-sim-and-idle.md` — design
  lineage for the Dwarf Fortress case.
- Practitioner interviews and talks named individually in each case file:
  PC Gamer and GamesRadar+ (Barone), Rolling Stone and Rogueliker (LocalThunk),
  AIAS Game Maker's Notebook (Basso), Game Developer (Amaya, Adams, Supergiant),
  Kotaku (Rao), GDC Vault (Robinson-Yu, Wehle, Giovannetti).
- Not represented: Laralyn McWilliams, *Battling Burnout: The Side Project
  Ritual*, GDC Summer 2020 — named in the research pass, never fetched. Marked
  unverified in [studio-practices.md](./studio-practices.md).
