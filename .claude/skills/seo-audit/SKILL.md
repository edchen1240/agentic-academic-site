---
name: seo-audit
description: Check every page for SEO/GEO health — titles, meta descriptions, headings, alt text, structured data, sitemap, links — and report concrete fixes. Use for findability reviews and to diagnose issues.
---

# seo-audit

Audit `01_www/` and report a prioritized fix list.

## Checklist
- **Titles:** every page has a unique, descriptive `<title>` (name + topic).
- **Meta description:** present, unique, ~120–160 chars.
- **Headings:** exactly one `<h1>` per page; logical `<h2>`/`<h3>` nesting.
- **Images:** every `<img>` has meaningful `alt`.
- **Structured data:** the `schema.org` Person block matches `00_profile/profile.md`
  (name variants, role, affiliation, `sameAs`). Valid JSON.
- **Links:** no broken internal links; external links use `rel="noopener"`.
- **Sitemap:** `sitemap.xml` exists, lists all pages, uses the real base URL.
- **Canonical / language:** correct `lang` attribute; bilingual pages cross-link.
- **GEO:** the page states the user's role + affiliation in plain text (so LLMs cite correctly).

## Procedure
1. Scan all `*.html` under `01_www/`.
2. Produce a table: page · issue · severity · fix.
3. Offer to apply the fixes (titles, descriptions, alt text, schema sync).
4. Regenerate the sitemap if pages changed (`gen_sitemap.py`).

## Rules
- No deceptive tactics (hidden text, stuffing, cloaking).
- Verify structured-data JSON parses before saving.
