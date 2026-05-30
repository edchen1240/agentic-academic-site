---
name: analytics-setup
description: Wire privacy-friendly analytics (GoatCounter) and Google Search Console verification so the user can see traffic and search performance. Use to set up or fix tracking.
---

# analytics-setup

Give the user visibility into who finds the site.

## GoatCounter (page views)
1. User creates a free site at goatcounter.com → gets a code `YOURCODE`.
2. In each page's `<head>` (or just `index.html` to start), enable the snippet:
   ```html
   <script data-goatcounter="https://YOURCODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```
   (A commented placeholder already exists in `index.html`.)
3. For bilingual parity, add it to `index_zh-TW.html` too.

## Google Search Console (search performance)
1. User adds the property at search.google.com/search-console.
2. Verify by either:
   - HTML tag: add the provided `<meta name="google-site-verification" ...>` to `<head>`, or
   - HTML file: drop the provided verification file into `01_www/`.
3. After verifying, submit `sitemap.xml`.

## Procedure
- Confirm which tools the user wants; collect the code(s); make the edits; tell them how to
  verify it's working (GoatCounter dashboard / Search Console coverage).
- Note results location so the growth-marketer can later read traffic and suggest content.

## Rules
- Prefer privacy-friendly analytics; don't add invasive trackers.
- Never commit secret keys; these are public site IDs only.
