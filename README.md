# agentic-academic-site

> **Point your AI agent at it. Get your academic website in an hour.**

Most academic website templates hand you a theme and leave you to fight the config.
This one is different: it ships with a small **team of AI agents** — a product manager,
a content strategist, a web designer, a growth marketer, and a site engineer — that
interview you, design to your taste, write your pages, tune your SEO, and deploy.

You bring your CV and a Google Scholar link. The team builds the site.

![Agentic Academic Site — Overview: a human prompts the product-manager, which reads 00_profile and orchestrates content-strategist, web-designer, growth-marketer, site-engineer, and shared skills to build 01_www, your live academic website.](05_diagrams/Agentic%20Academic%20Site_01-Overview.png)

---

## How it works

![Agentic Academic Site — how to start and evolve: fork or clone the repo, point your agent at AGENTS.md and describe what you want, answer the interview or discuss details, deploy to GitHub Pages or any host and record progress in P00_Project Progress.md, then loop back whenever you want to change the style or content.](05_diagrams/Agentic%20Academic%20Site_02-How%20to%20Start%20and%20Evolve.png)

1. **Fork / clone** this repo.
2. **Open it in Claude Code** (or any agent) and point it at `AGENTS.md` — describe what you want.
3. **Answer a short interview** (or just discuss) — the team writes your facts into `00_profile/`.
4. The team **builds `01_www/`**, tunes SEO, and helps you **deploy**; progress is logged in `P00_Project Progress.md`.
5. **Evolve:** want a style tweak or new content? Tell the agent again — it loops back through the same flow.

No build step. No framework lock-in. Plain HTML/CSS/JS you fully own.

---

## What it looks like

![The same academic-site template shown twice: the profile page in English with the dark theme, and in Traditional Chinese with the light theme — demonstrating built-in bilingual support and a dark/light toggle.](05_diagrams/example%20screenshot.png)

*The same template — English in dark theme, 繁體中文 in light theme. Language and theme toggle independently.*

Live example: [my MIT CV](https://www.mit.edu/~edchen93/) — the site this template is generalized from.

---

## What you get

| Feature | Detail |
|---|---|
| 🌗 **Dark / light theme** | One-click toggle, remembers preference |
| 🌐 **Bilingual built-in** | First-class second-language mirror (e.g. EN ⇄ 繁中) |
| 🔎 **SEO & GEO baked in** | `schema.org` Person data, sitemap, meta — built to be found |
| 📈 **Analytics-ready** | GoatCounter / Google Search Console wiring |
| 📝 **Posts · Projects · Materials** | Three content types, each with its own page flow |
| ♻️ **Auto cache-busting** | Version-bump script so updates show up instantly |
| 🧩 **Clean, numbered structure** | Separated CSS, readable folders — easy for humans *and* agents |
| 🤖 **Works with any agent** | Neutral `AGENTS.md` for any tool; premium skills for Claude Code |

---

## The two-tier idea

Your online presence works best as **two complementary sites**, not one:

- **Online CV** — the curated professional front door (publications, perspectives, the polished you)
- **Personal Hub** — the broader content home (blog, bilingual posts, the human you)

This repo ships both tiers in one design system, plus a
[content-routing guide](09_docs/CONTENT-STRATEGY.md) that tells you — and your agent —
*what to put where*. No other template does this.

---

## Repo map

```
agentic-academic-site/
├── AGENTS.md          # the team's front door — any agent reads this first
├── README.md          # you are here
├── P00_Project Progress.md  # living progress tracker — "where was I?" (project-sync skill)
├── .claude/           # the AI team (auto-discovered by Claude Code)
│   ├── agents/        #   product-manager + 4 specialists
│   └── skills/        #   interview, scholar-import, brand-to-css, seo-audit, …
├── 00_profile/        # INPUT — your facts (the team reads from here)
├── 01_www/            # OUTPUT — your deployable website.
├── 04_drafts/         # Post and project drafts (written by you or the team, before going live).
├── 05_diagrams/       # A handy PPTX (or other tool you prefer) for sketching design ideas.
├── 07_scripts/        # version-bump, sitemap generator, deploy helpers
└── 09_docs/           # roadmap, team charter, content strategy, setup, customize
```

---

## Quickstart

See **[09_docs/SETUP.md](09_docs/SETUP.md)** for the full guide. The short version:

```bash
# 1. Get the code
git clone https://github.com/edchen1240/agentic-academic-site.git
cd agentic-academic-site

# 2. Open in Claude Code and say:
#    "Read AGENTS.md and set up my academic site."

# 3. Preview locally
cd 01_www && python -m http.server 8000   # → http://localhost:8000
```

---

## Roadmap

Planned additions: `accessibility-auditor`, `analytics-reviewer` (reads your traffic and
suggests content), one-command deploy presets (GitHub Pages / Netlify / university server).
See [09_docs/ROADMAP.md](09_docs/ROADMAP.md). Contributions welcome.

## License

MIT © Meng-Chi (Ed) Chen — see [LICENSE](LICENSE). Build your presence, own your code.
