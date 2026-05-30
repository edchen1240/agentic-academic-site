# Roadmap

Where this **product** is going — durable feature direction (public, forker-facing).
For session-level working state (where work paused, the next concrete step), see the
`P00_Project Progress.md` tracker at the repo root, maintained by the `project-sync` skill.

Contributions welcome — open an issue or PR.

## Status: Stage 1 — Foundation ✅

- [x] Repo architecture (hybrid: numbered folders for humans, `.claude/` for machines)
- [x] `AGENTS.md` master brief
- [x] `README.md` with the pitch + architecture diagrams
- [x] `09_docs/`: Team Charter, Content Strategy, Setup, Customize, Roadmap
- [x] MIT License

## Stage 2 — The team

- [ ] `.claude/agents/`: product-manager, content-strategist, web-designer,
      growth-marketer, site-engineer
- [x] `.claude/skills/`: interview-user, scholar-import, brand-to-css, new-content,
      seo-audit, analytics-setup, deploy-sync, project-sync (8 skills)
- [x] `project-sync` skill + P00 progress tracker — a blank `P00_Project Progress.md` at the
      repo root lets forkers track their own site build; the product-manager owns it

## Stage 3 — Inputs

- [ ] `00_profile/`: profile.md, brand.md, goals.md (worked example included)
- [ ] `00_profile/assets/`: photo + CV placeholders

## Stage 4 — The website

- [ ] `01_www/`: `index.html` + `index_zh-TW.html` (generalized, with `<!-- EDIT -->` markers)
- [ ] `css/` design system with theme variables
- [ ] `js/`: dark-mode, language-toggle, post-loader
- [ ] `posts/`, `projects/`, `materials/` content types
- [ ] `sitemap.xml`
- [ ] `07_scripts/`: version-bump + sitemap generator

## Future agents & skills (post-v1)

- [ ] `accessibility-auditor` — WCAG checks, contrast, ARIA
- [ ] `analytics-reviewer` — reads GoatCounter/GSC traffic and proposes content
- [ ] `deploy presets` — one-command GitHub Pages / Netlify / university-server deploy
- [ ] `citation-formatter` — multiple citation styles for the publications page
- [ ] Theme gallery — a few ready-made design presets

## Design constraints (won't change)

- No build step. Plain HTML/CSS/JS the user fully owns.
- Works with any agent via `AGENTS.md`; shines with Claude Code via `.claude/`.
- Facts live once, in `00_profile/`.
