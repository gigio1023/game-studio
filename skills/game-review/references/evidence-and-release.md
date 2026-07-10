# Evidence And Release Checks

How to verify that a claim is backed by real play, and how to compare public
promises with build truth.

## Proof Categories

Classify what the available evidence actually proves, from weakest to
strongest for a player-facing claim:

- **Mechanical**: the build runs, loads, imports, or saves. Proves the project
  is alive, nothing more.
- **Playable**: a player performs the intended action and sees the result.
- **Comprehension**: a player understands goal, affordance, state, risk, and
  feedback without outside explanation.
- **Feel**: input, camera, animation, and audio response support the verb —
  requires video or direct play, not a screenshot.
- **Release**: public claims map to observed build behavior, or are removed.

Do not let a lower category stand in for a higher claim. "Files exist" is not
a playable build; run the narrowest real check that supports the claim —
launch, scene load, smoke run, capture — or name it as missing proof.

## Verification Flow

1. List the claim and the proof artifacts it requires.
2. Check whether each artifact exists; run listed commands or checks yourself
   when available.
3. Separate missing proof (was never produced) from failed proof (was run and
   contradicts the claim).
4. Note weak evidence explicitly: playtest notes without a build identifier,
   screenshots standing in for play, tests standing in for feel.
5. Record residual risk — what the checked proof still cannot show.

`NOT_READY` when proof is missing for the central claim; `CONCERNS` when proof
exists but leaves a bounded, nameable risk.

## Release Claims Versus Build Truth

Before public pages, trailers, screenshots, demos, credits, or support
promises change:

- What public claim is being made, and which build or capture proves it?
- Do store copy, README, trailer, and demo behavior match the build — not the
  roadmap?
- Are accessibility, localization, and controller-support claims accurate?
- Are credits, licenses, and asset attributions present?
- What known limitation must be disclosed, and what should be removed rather
  than promised?
- Do known defects have severity, owner, and support impact?

Blocking: store copy promising unsupported features; trailer or screenshots
showing behavior absent from the build; overstated accessibility or
localization support; missing credits or licenses; unclear support
expectations.

## Output

```text
Claim:
Proof checked:
Missing proof:
Failed proof:
Weak evidence noted:
Residual risk:
Claim change required (release reviews):
```
