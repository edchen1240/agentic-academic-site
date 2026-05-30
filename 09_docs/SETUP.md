# Setup

From zero to a deployed academic site. Two paths: **with an AI agent** (recommended) or
**by hand**.

## Prerequisites

- A GitHub account (for hosting on GitHub Pages — optional but easiest).
- Python 3 (only for local preview + the helper scripts). No build toolchain required.
- Optional: [Claude Code](https://claude.com/claude-code) for the full agent experience.

## Path A — with an AI agent (recommended)

1. **Get the code**
   ```bash
   git clone https://github.com/edchen1240/agentic-academic-site.git
   cd agentic-academic-site
   ```
2. **Open the folder in Claude Code** (or any agent that reads `AGENTS.md`).
3. **Say:** *"Read AGENTS.md and set up my academic site."*
   - The team runs the `interview-user` skill and fills `00_profile/`.
   - It builds `01_www/`, tunes SEO, and wires analytics.
4. **Preview** (see below), then **deploy** (see below).

## Path B — by hand

1. Edit `00_profile/profile.md`, `brand.md`, and `goals.md` with your details.
2. Edit `01_www/index.html` (and `index_zh-TW.html` if bilingual) — look for `<!-- EDIT -->` markers.
3. Drop your photo and CV PDF into `00_profile/assets/`.
4. Adjust colors in the CSS variables (see `09_docs/CUSTOMIZE.md`).

## Preview locally

```bash
cd 01_www
python -m http.server 8000
# open http://localhost:8000
```

## Deploy

### GitHub Pages
1. Push the repo to GitHub.
2. Repo **Settings → Pages → Source**: deploy from `main`, folder `/01_www` (or move
   `01_www` contents to repo root / a `docs/` folder if you prefer).
3. Your site is live at `https://<username>.github.io/<repo>/`.

### University / personal server
Copy the contents of `01_www/` to your web root (e.g. `~/public_html` or
`~/<username>/` on a university Athena-style host).

### Run maintenance before deploy
```bash
python 07_scripts/version_bump.py     # cache-bust CSS/JS
python 07_scripts/gen_sitemap.py      # regenerate sitemap.xml
```
(Or just ask the agent to run `deploy-sync`.)

## Next steps

- Read [CONTENT-STRATEGY.md](CONTENT-STRATEGY.md) to understand the two-tier system.
- Read [CUSTOMIZE.md](CUSTOMIZE.md) to change colors, fonts, and sections.
- Add your first post with the `new-content` skill (or copy a file in `01_www/posts/`).
