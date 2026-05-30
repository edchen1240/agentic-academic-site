---
name: deploy-sync
description: Pre-deploy maintenance and publish — cache-bust assets, regenerate the sitemap, then deploy to GitHub Pages or the user's server. Use after meaningful changes, to ship.
---

# deploy-sync

Ship cleanly so changes show up and stay discoverable.

## Procedure
1. **Cache-bust:** `python 07_scripts/version_bump.py` — appends `?v=YYYYMMDD-HHMM` to local
   css/js references so browsers fetch fresh assets.
2. **Sitemap:** set `BASE_URL` in `07_scripts/gen_sitemap.py`, then run it to regenerate
   `01_www/sitemap.xml`.
3. **Assets present?** Confirm `01_www/assets/profile.jpg` and `CV.pdf` exist (copied from
   `00_profile/assets/`).
4. **Bilingual parity check:** if a second language is kept, confirm both files updated.
5. **Deploy:**
   - **GitHub Pages:** commit & push; Settings → Pages serves from `main` / `01_www`.
   - **University / personal server:** copy `01_www/` contents to the web root.
6. **Verify live:** load the deployed URL, toggle theme, click nav, check a post renders.

## Rules
- Run version-bump *before* deploy, not after.
- Don't commit secrets. Static files only.
- Report the live URL and what changed.
