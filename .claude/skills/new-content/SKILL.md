---
name: new-content
description: Create a new post, project, or material entry — the HTML page (if needed) and the manifest record — filed in the correct tier. Use to publish writing or add a project/material.
---

# new-content

Add a content entry consistently and in the right place.

## Procedure
1. **Classify the piece** per `09_docs/CONTENT-STRATEGY.md`:
   - technical, hiring-manager-grade → `01_www/posts/` (Perspectives)
   - project / demo → `01_www/projects/`
   - teaching note / resource → `01_www/materials/`
   - casual / broad / second-language → Personal Hub (note to user; not this static site)
2. **Create the entry:**
   - For a full article: copy `01_www/posts/welcome.html` as a template, write the content
     (headings in `<h2>`/`<h3>`, images in `<figure>`), save with a slug filename.
   - For a link-only item (project/material): no page needed; just a manifest record.
3. **Update the manifest** (`manifest.json` in that folder) with:
   `{ id, title, datetimeCreate, datetimeUpdate, excerpt, coverImage?, link }`.
   Newest entries sort to the top automatically.
4. **Verify** the listing page renders the new entry (open the folder's `index.html`).
5. **Suggest distribution** to the growth-marketer if it's a Perspectives piece.

## Rules
- Match the brand voice (`00_profile/brand.md`).
- Use real dates; keep `datetimeUpdate` ≥ `datetimeCreate`.
- Don't fabricate content — draft from the user's material or ask.
