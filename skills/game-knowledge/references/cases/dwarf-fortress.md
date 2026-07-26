# Dwarf Fortress — Tarn Adams

- 20+ years of continuous development, donation-funded for most of that span.
- Unbounded scope is the stated design philosophy, not an accident or a failure mode.
- The game was playable and improving continuously throughout — never a pre-release project.
- Rule: unbounded scope is legitimate only when it is chosen, funded, and continuously playable.
- Fails any one of those three conditions and the same shape is scope creep with a philosophy attached.
- Verification: trade-press developer Q&A with direct quotes. No GDC postmortem in this corpus.

## Basics

This case exists in the set as a counter-example. Every other case here argues
for constraining scope; Dwarf Fortress is the documented instance where refusing
to constrain scope was the right call, and it is worth knowing precisely why, so
the argument cannot be borrowed by projects that do not qualify.

**Three conditions make it work:**

1. **Chosen, not defaulted.** The unbounded scope is the design thesis — a
   simulation whose value comes from depth that has no natural stopping point.
   It is not an ambition that outran a plan.
2. **Funded by something that does not require a ship date.** Donations paid for
   development. No funder was waiting on delivery, so "not done" was never a
   default event.
3. **Continuously playable.** The game was released and played throughout,
   improving in public. There was never a long unplayable stretch justified by
   future scope.

Remove any one condition and the case stops transferring. A project with
unbounded scope, no funding, and nothing playable is not following this model —
it is the failure mode this model happens to resemble.

## Advanced

**Why the design lineage matters here.** Dwarf Fortress established the "story
generator" category: fun comes from watching unscripted stories emerge from
player actions colliding with simulated systems, rather than from reaching
authored objectives. That property is what makes unbounded scope coherent —
each new simulated system multiplies the space of emergent stories instead of
adding another authored item to a finite list. Games whose content is authored
rather than emergent do not get that multiplier and cannot justify the same
scope posture. The design-side treatment is in
`../corpus/narrative-level-genre/genre-sim-and-idle.md`, including the
RimWorld contrast (a deliberately smaller, more legible cast layered with
explicit relationship generation, trading simulation depth for narrative
legibility).

**The honest use of this case in a review.** When a creator invokes
"Dwarf Fortress did it" to defend an expanding project, the useful response is
the three conditions, checked one at a time. Most projects fail condition 2 or
3 immediately, and the conversation moves to which one they intend to fix.

**What is not claimed here.** Nothing in this case supports 20-year timelines as
a goal, nor donations as a reliable funding model, nor unbounded scope as
appropriate for a first project. It supports exactly one claim: unbounded scope
can be a legitimate, eyes-open design decision under specific conditions.

## Cases

- [animal-well.md](./animal-well.md) — long solo timeline that is a consequence
  of a high cut rate, not a philosophy.
- [cave-story.md](./cave-story.md) — no deadline as a default rather than a
  decision.
- [a-short-hike.md](./a-short-hike.md) — the opposite pole: externally owned
  date, pre-authorized cuts.
- [undertale.md](./undertale.md) — ship smaller first; the standard advice this
  case is the exception to.

## Checklist

- [ ] Is the unbounded scope a stated design thesis, or an ambition that grew?
- [ ] What funds development, and does that funder need a ship date?
- [ ] Is the game playable and improving in public right now? For how long has
      that been true?
- [ ] Is the content emergent (systems multiplying outcomes) or authored (a
      finite list)? Only the first justifies open-ended scope.
- [ ] If any of the above is a no, which one are you fixing — the scope, the
      funding, or the release posture?

## Sources

- Tarn Adams, *Q&A: Dissecting the development of Dwarf Fortress*, Game
  Developer.
  https://www.gamedeveloper.com/design/q-a-dissecting-the-development-of-i-dwarf-fortress-i-with-creator-tarn-adams
  — accessed 2026-07-26. Developer interview with direct quotes, rated
  high-quality in the research pass.
- No GDC postmortem for Dwarf Fortress was located in the 2026-07-26 pass; the
  production claims above are interview-sourced.
- Design-lineage material (story generator category, RimWorld contrast):
  `../corpus/narrative-level-genre/genre-sim-and-idle.md`, which cites Game
  Developer coverage of Tynan Sylvester. Sylvester's own *Designing Games*
  (2013) is the primary origin for that thinking and was not re-verified in the
  research pass — treat quotes attributed to it as unverified.
