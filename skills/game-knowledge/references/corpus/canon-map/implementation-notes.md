# Implementation Notes

Date: 2026-07-26

Scope boundary: all outputs are confined to this `canon-map/` directory. No game-studio repository is touched.

## Evidence convention

- **Verified structure** means author, year, edition, and/or table of contents were checked against a publisher, author, scholarly venue, library catalog, or licensed book-preview page.
- **Reconstructed summary** means the prose is a new synthesis from model knowledge, guided by the verified structure, and was not checked line by line against the full original.
- **Fetched-source summary** means the prose is supported by the accessible abstract, publisher description, sample chapter, or full web article named in the source list.
- Every substantive bullet carries an inline title-author-year citation. URLs are collected in each file's sources section.

## Decisions and deviations

- The request named Pichlmair and Johnson as possible authors of *The Gamer's Brain*. Fetched publisher and author pages identify Celia Hodent as the author; the corpus uses Hodent and records the correction.
- The request named Kremers as a possible author of *A Playful Production Process*. MIT Press identifies Richard Lemarchand as the author; the corpus uses Lemarchand and records the correction.
- *The Art of Game Design* uses the third edition dated July 2019 by O'Reilly; the Routledge page carries a 2020 copyright date. Both are reported rather than silently normalized.
- *Advanced Game Design: A Systems Approach* was published on 2017-10-30 with a 2018 copyright notice. The corpus cites 2017 as the publication year and notes the copyright-year discrepancy.
- Book content is summarized rather than quoted. Where only tables of contents and descriptions were fetchable, concept explanations are explicitly labeled reconstructed.

