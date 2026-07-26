# Cave Story — Daisuke "Pixel" Amaya

- About five years of development, made around a full-time day job.
- The first roughly two years were scrapped and the project restarted.
- No external milestones, no deadline, no publisher, no external pressure of any kind.
- Rule: with no external date-owner, the schedule is set by whatever the developer tolerates.
- Restarting is survivable but expensive — here it cost about two years.
- Verification: long-form trade-press interview. No GDC talk or written postmortem.

## Basics

Cave Story is the control case for [a-short-hike.md](./a-short-hike.md). Same
category of project — a solo developer building a small-scope 2D game — and the
single largest difference in inputs is that nobody outside the project owned a
date. The outcome was five years instead of one quarter, and a complete restart
in the middle.

**The absence of external pressure was the defining condition**, not an
incidental detail. There were no milestones to miss, no funder expecting
delivery, and no announced date. Development proceeded in whatever time a day
job left over, for as long as it took.

**The restart cost two years and the project still shipped.** This matters
because the standing advice cuts the other way. Derek Yu's "Finishing a Game"
argues explicitly against restarting: "your code will always be a mess. You will
have learned a lot. It will never be perfect," and restarting repeats the same
mistakes under a new name
(`../corpus/gdc-postmortems/design-talks.md`). Cave Story is a documented
counter-example, and the honest reading is not that Yu is wrong — it is that
restarting is survivable when the developer has unlimited schedule tolerance and
no external commitments. Change either condition and the same decision ends the
project.

## Advanced

**When "no deadline" is the correct choice.** It is defensible when all of these
hold: the project is funded by something other than the project (here, a day
job), no one has been promised a date, and the developer genuinely accepts a
multi-year timeline rather than hoping it will be shorter. That last condition
is the one that usually fails — most no-deadline projects are not deliberate,
they are projects whose owner privately expects to be done sooner.

**Diagnostic question for a project with no date.** Ask: if this takes five
more years, is that acceptable? A clear yes means [dwarf-fortress.md](./dwarf-fortress.md)
territory — unbounded scope chosen with eyes open. Anything other than a clear
yes means the project needs a date that someone else owns, and the mechanism for
getting one is in [a-short-hike.md](./a-short-hike.md).

**Restart decision rule.** Before restarting, name what specifically the restart
fixes and what it costs in months. If the answer is "the code is messy," Yu's
argument applies and the restart is a trap. If the answer names a structural
problem that blocks the design and cannot be refactored around, the restart may
be real — and it should be scheduled and budgeted like any other work, not
treated as a reset to zero.

**Day-job pacing is a legitimate model.** Cave Story and *The First Tree* (David
Wehle, roughly 1,000 hours over about 18 months at ~10 hours/week, while working
40+ hours elsewhere — `../corpus/gdc-postmortems/pitch-and-marketing-talks.md`)
are both part-time builds that shipped. The difference in duration tracks the
difference in scope and in whether a restart happened, not in commitment.

## Cases

- [a-short-hike.md](./a-short-hike.md) — the same project shape with an
  externally owned deadline.
- [dwarf-fortress.md](./dwarf-fortress.md) — no deadline as an explicit,
  funded philosophy rather than a default.
- [animal-well.md](./animal-well.md) — the other multi-year solo build.
- [undertale.md](./undertale.md) — scope discipline as the alternative lever
  when the schedule cannot be constrained.

## Checklist

- [ ] Who owns this project's date? If the answer is only you, the schedule is
      whatever you tolerate — is five years acceptable?
- [ ] Is the no-deadline state a decision, or an unexamined default?
- [ ] If you are considering a restart: what does it fix that a refactor
      cannot, and how many months does it cost?
- [ ] Is the project funded by something outside itself, so a long timeline is
      survivable?

## Sources

- Game Developer, *The Solitary Creativity of Pixel* (interview with Daisuke
  Amaya). https://www.gamedeveloper.com/design/the-solitary-creativity-of-pixel
  — accessed 2026-07-26. Long-form trade-press interview, rated high-quality in
  the research pass.
- No GDC talk or written postmortem for Cave Story was located in the
  2026-07-26 pass. Every Cave Story claim above is interview-sourced.
- Derek Yu, *Finishing a Game* (2010; expanded in *Spelunky*, Boss Fight Books
  #11, 2016). Original page returned 404 on 2026-07-26; digested from a
  third-party paraphrase — see `../corpus/gdc-postmortems/design-talks.md`.
  Marked unverified against the primary text.
- David Wehle, *No Time, No Budget, No Problem: Finishing 'The First Tree'*,
  GDC 2019. https://www.gdcvault.com/play/1025702/No-Time-No-Budget-No —
  accessed 2026-07-26. Digested from a detailed third-party recap, not a
  transcript.
