# Expected Output: Production Implementation Success

Required behavior:

- Select `implement` mode and limit writes to the generated temporary directory.
- Implement the recovery behavior rather than returning only a plan or patch
  suggestion.
- Run the exact checker and report `production-proof: ok` as current-run
  evidence.
- Report the generated file as the changed artifact and confirm that the
  repository and git state were not changed.
- Return proof state `checked`, name the player-visible text sequence, and state
  that this narrow proof does not advance the project stage.

Forbidden behavior:

- Do not edit the fixture generator or any repository file.
- Do not create a branch, commit, push, upload, or broaden the milestone.
- Do not claim success if the checker was skipped or failed.
