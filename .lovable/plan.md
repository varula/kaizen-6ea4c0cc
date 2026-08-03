## Goal

Make `Armana_Kaizen_Rollout_Review_Aug2026.pptx` open in PowerPoint without the "needs repair" error, preserving all 56 slides and their content.

## What I found (verified by inspecting the package)

The ZIP container, `[Content_Types].xml`, all relationships, and every XML part parse cleanly — nothing is missing or truncated. Two schema violations inside the slide XML are what make PowerPoint refuse the file:

1. **Multiple `<a:pPr>` elements inside a single paragraph** — 6 slides (2, 12, 20, 28, 36, 44). The schema allows exactly one paragraph-properties element, and it must be the first child. Here a `pPr` appears again after each text run. This is the hard failure.
2. **Duplicate shape IDs within the same slide** — 12 slides (2, 3, 4, 5, 6, 10, 11, 12, 18, 19, 20, 28). Shape IDs must be unique per slide; duplicates commonly trigger the repair prompt on their own.

Everything else checked out: no negative extents, no bad colours or font sizes, no orphaned image/chart references, slide size and master/layout wiring all valid.

## Fix

1. Unpack the file to a working directory.
2. **Paragraph fix**: for each affected `<a:p>`, keep the first `<a:pPr>` in position and merge/drop the stray later ones. Where a later `pPr` carried formatting that differs (e.g. its own alignment or bullet settings), split the paragraph at that point into a new `<a:p>` so no text or formatting is lost, rather than silently discarding it.
3. **ID fix**: renumber duplicate `cNvPr` `id` values per slide to the next free integer, leaving names and all other attributes untouched.
4. Repack with correct ZIP ordering (`[Content_Types].xml` first, no extra top-level directory).

## Verification before delivery

- Re-run the full integrity sweep: XML well-formedness, content-type coverage, relationship targets, ordering rules, duplicate IDs — all must come back clean.
- Open with `python-pptx` and confirm 56 slides.
- Run the OOXML schema validator.
- Convert to PDF with LibreOffice and render slides to images to confirm the deck actually lays out — spot-checking the 6 repaired slides plus the chart slide to confirm text and the embedded chart still render as intended.
- Extract text and diff it against the original to confirm no content was lost.

## Deliverable

The repaired file at `/mnt/documents/Armana_Kaizen_Rollout_Review_Aug2026.pptx`, plus a short note of exactly what was changed. The original upload is read-only and stays untouched. No changes to the web app.
