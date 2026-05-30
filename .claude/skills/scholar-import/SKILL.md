---
name: scholar-import
description: Pull the user's publications from a Google Scholar profile or a BibTeX file and update the Publications presentation. Use to add new papers or refresh the list.
---

# scholar-import

Keep the publications current from an authoritative source.

## Inputs
- Google Scholar profile URL (from `00_profile/profile.md`), or
- a local `.bib` file the user points to.

## Procedure
1. **Get the source.** Prefer a `.bib` file if available (clean, structured). Otherwise fetch
   the Scholar profile page and extract title / authors / venue / year / link.
2. **Normalize** each entry: `authors`, `title`, `venue`, `year`, `doi`/`url`. Bold the user's
   own name in author lists if rendering a list.
3. **Decide presentation:**
   - Simplest (recommended): the Publications nav link points directly to Google Scholar —
     zero maintenance. Confirm the link in the header is correct.
   - Full list: render entries into a publications page using the `.csl-entry` styling already
     in `style.css`, newest first.
4. **De-duplicate** and sort by year (newest first).
5. **Report** what was added/changed.

## Rules
- Never fabricate or "round up" publications, citation counts, or venues.
- Preserve exact titles and DOIs.
- If a fetch fails, ask the user for the `.bib` rather than guessing.
