# Platformer Feel as a Parameter System

Platformer "feel" is not one trick — it's a cluster of small corrections that each patch a specific gap between what the player *believes* happened and what the fixed-timestep simulation actually did. Individually each technique looks like a hack; together they form a system. This file treats them as a system with typical parameter ranges practitioners converge on.

## Why this system exists

A platformer running on a fixed physics step evaluates "am I grounded" and "did the jump button get pressed while grounded" at discrete instants. Human input and human perception are continuous and imprecise — players press jump a frame or two early or late relative to a mental model of "at the edge" or "at the ground." Every technique below exists to close one specific gap between the discrete simulation and the continuous player, not to make the game "easier."

## Coyote time

**Mechanism**: after the character's collider leaves a ledge, the game continues to treat the character as "grounded" for a short grace window, so a jump input pressed just after leaving the platform still succeeds.

**What it corrects**: the player's mental model of "I was still on the platform" lags the physics simulation by a frame or two; without this window, jumps that look correct in the player's memory fail silently, which reads as broken controls rather than a skill issue.

**Typical parameter range**: commonly implemented as **~0.1 seconds (100ms)**, though ranges of roughly 3–6 frames at 60fps (50–100ms) show up across shipped implementations. Practitioner guidance: start around a tenth of a second and tune by feel at real game speed rather than trusting a number in isolation.

**Named example**: the term itself is a reference to Wile E. Coyote running off a cliff before falling — used across countless indie platformers; **Celeste** is widely cited as a tuned reference implementation.

Source: [Ketra Games — Improve Annoying Jump Controls With Coyote Time and Jump Buffering](https://www.ketra-games.com/2021/08/coyote-time-and-jump-buffering.html); [Roblox DevForum — Coyote Time and Jump Buffer](https://devforum.roblox.com/t/coyote-time-and-jump-buffer-for-platformer-games/2809273).

## Jump buffering

**Mechanism**: if the jump input is pressed slightly *before* landing, the game stores that request for a short window and executes the jump automatically the instant the character becomes grounded, instead of discarding the input because the character was airborne at press-time.

**What it corrects**: the mirror-image problem to coyote time — the player presses jump a frame or two early relative to landing, expecting a "buffered" acceptance the way real-world physical controls (and other games) train them to expect.

**Implementation pattern**: store a countdown timer on jump-press; decrement it every physics frame; if the character becomes grounded while the timer is still positive, fire the jump and clear the timer; if the timer expires first, discard the request.

**Typical parameter range**: same order of magnitude as coyote time, commonly **~0.1 seconds**.

**Design note**: keep coyote time and jump buffering as two independent booleans/timers, not one merged flag. Coyote time answers "may a recently-grounded body jump," buffering answers "does a recent input request still count." Merging them makes edge-case bugs (double jumps off ledges, buffered jumps triggering coyote jumps) much harder to diagnose.

Source: [Ketra Games (as above)](https://www.ketra-games.com/2021/08/coyote-time-and-jump-buffering.html).

## Variable jump height

**Mechanism**: jump apex height scales with how long the jump button is held, rather than every jump being a fixed-height ballistic arc. The simplest implementation: while the button is held and vertical velocity is still positive (rising), apply full gravity; the instant the button is released while still rising, either cut velocity sharply (multiply upward velocity by a damping factor, e.g., ~0.5) or switch to a higher gravity multiplier for the remainder of the rise.

**What it gives the player**: a single jump input maps to a *range* of expressive outcomes (tap for a hop over a small gap, hold for a full-height jump) instead of forcing every jump to commit to the same arc, which is what lets platformer level design vary gap and enemy-clearance puzzles without adding a second jump button.

**Named example**: near-universal in the genre — **Super Mario Bros.**, **Celeste**, and **Hollow Knight** all implement some form of hold-to-jump-higher.

## Apex modifier (float at the top of the arc)

**Mechanism**: gravity is temporarily reduced (not removed) for a short window around the peak of the jump arc, giving the character a brief hang time at the top instead of a sharp, symmetric parabola.

**What it corrects**: a pure ballistic arc under constant gravity peaks and falls symmetrically and fast, which reads as "floaty at no point, snappy everywhere" — mathematically clean but not what platforming inputs feel best doing, because it removes the brief window where the player can make fine horizontal adjustments at the top of a jump. The apex modifier trades a small amount of "physical realism" for controllability and readability at the hardest-to-aim part of the arc.

**Typical implementation**: detect when vertical velocity is within a small band around zero (near-apex) and apply a gravity multiplier below 1.0 (e.g., 0.5–0.7×) only within that band, reverting to normal gravity outside it.

## Asymmetric gravity (rise vs. fall)

**Mechanism**: use a different gravity scale on the way down than on the way up — falling gravity is multiplied relative to rising gravity, not equal to it.

**Typical parameter range**: fall gravity at roughly **1.5–2.5× rise gravity** is the commonly cited practitioner range.

**Effect**: heavier, more committed-feeling falls and snappier landings, while the rise still feels controlled; also shortens total airtime versus a symmetric arc at the same jump height, which tightens platforming pacing.

**Related target metric**: several practitioner sources converge on **time-to-apex of roughly 0.3–0.45 seconds** as the "good feel" range for a standard jump — arcs longer than that start reading as floaty regardless of other tuning.

Source: [Free Jump Arc Calculator — Platformer Physics](https://tools.puida.com/creative/gamedesign/jump-arc-calculator/); [Game Developer — Designing a 2D Jump](https://www.gamedeveloper.com/design/designing-a-2d-jump); [2D Platformer game feel tips](https://anchitsh.github.io/platformer.html).

## Corner correction (ledge nudging)

**Mechanism**: when a horizontally-moving character's collider clips the corner of a platform it should have cleared (common when jump timing is a pixel or two off), the game detects the near-miss and nudges the character horizontally around the corner instead of letting them bonk and fall.

**Typical implementation**: raycast from the character and from the platform edge to measure how much of the character's collider is actually overlapping the corner; if the overlap is below a small threshold (a few pixels), translate the character horizontally by that overlap amount so the jump completes as the player intended.

**What it corrects**: pixel-perfect collision is *more* punishing than the player's spatial intuition expects, because the player is reading the character's silhouette and rough trajectory, not exact hitbox geometry — corner correction re-aligns collision response with the player's coarser mental model.

Source: [2D Platformer game feel tips](https://anchitsh.github.io/platformer.html) (raycast-based corner push implementation).

## How the pieces interact as a system

None of these techniques is sufficient alone; a controller with jump buffering but no coyote time still feels unfair at ledges, and one with coyote time but no variable jump height forces every gap to be solved with the same fixed arc. The practitioner framing worth carrying into skill guidance: **each parameter should be tuned independently at real game speed**, not derived analytically, because the "correct" value depends on camera scale, character sprite size, and level geometry density — the ranges above are starting points for iteration, not settings to hard-code.

## Gaps / confidence notes

- Exact numeric values (coyote/buffer window, gravity multipliers, apex-band width) are practitioner convention gathered from tutorials and forum consensus, not a single peer-reviewed or first-party source — different shipped games diverge, sometimes substantially, from the ranges cited here.
- No primary GDC talk specifically enumerating all five techniques together as a named "system" was found in this pass; the framing of "system, not trick" here is a synthesis across multiple practitioner sources rather than a single citable talk.
