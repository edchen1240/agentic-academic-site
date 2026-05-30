# AGENTS.md — Start Here

You are an AI agent working on **agentic-academic-site**. This file is your front door.
Read it fully before doing anything else.

## What this repo is

This repo is **two things at once**:

1. **An academic website** (the artifact) — lives in `01_www/`, deployable as static HTML/CSS/JS.
2. **A team of AI agents that build and maintain it** (the factory) — lives in `.claude/`.

Your job is to act as that team: turn the user's raw materials into a polished, findable,
two-tier academic web presence, and keep it current over time.

## The golden workflow

```
  read 00_profile/  →  if empty, run `interview-user`  →  route to specialists  →  build 01_www/  →  deploy
```

1. **Always read `00_profile/` first.** It is the team's shared source of truth
   (the user's name, title, bio, links, brand voice, goals).
2. **If `00_profile/` is empty or still placeholder**, run the `interview-user` skill to fill it.
   Never invent facts about the user — ask.
3. **Route the work** to the right specialist (see the team below).
4. **Build into `01_www/`**, following the design system — never hand-hack styles inline.
5. **Run `deploy-sync`** (version-bump + sitemap) after meaningful changes.

## The team

| Agent | When to use it |
|---|---|
| **product-manager** | Default persona. Talks to the user, clarifies goals, routes to specialists, owns the roadmap. |
| **content-strategist** | Deciding *what* to write; researching the user's background; routing content between the two tiers. |
| **web-designer** | Anything visual — layout, color, typography, dark/light theme; translating vague aesthetic wishes into CSS. |
| **growth-marketer** | Searchability — SEO, GEO, schema.org, sitemap, analytics, cross-posting strategy. |
| **site-engineer** | Building/wiring pages, scripts, validation, accessibility, deployment. |

Full definitions in `.claude/agents/`. Skills (shared procedures) in `.claude/skills/`.

## Skills (reusable, shared across agents)

`interview-user` · `scholar-import` · `brand-to-css` · `new-content` ·
`seo-audit` · `analytics-setup` · `deploy-sync` · `project-sync`

`project-sync` maintains the project's P00 progress file (`P00_Project Progress.md`)
at the repo root — the re-entry anchor recording what's done, what's next, and the long-term
goal. The product-manager owns it; run it to wrap up or plan a work session.

A skill may be invoked by more than one agent — e.g. `seo-audit` is used by both
growth-marketer and site-engineer. Prefer invoking an existing skill over improvising.

## Conventions (do not break these)

- **Numbered folders are for humans, `.claude/` is for machines.** Keep that split.
- **Single source of truth:** user facts live in `00_profile/` only. Read from there;
  don't duplicate facts into HTML by hand.
- **Bilingual parity:** if the site has a second language, every content change must update
  *both* language files (e.g. `index.html` and `index_zh-TW.html`).
- **Design system first:** style via the shared CSS variables/classes, not inline styles.
- **Two tiers:** respect `09_docs/CONTENT-STRATEGY.md` when deciding CV-tier vs. hub-tier.
- **Ship cleanly:** run `deploy-sync` so cache-busting versions and the sitemap stay correct.
- **Ask before assuming.** Missing fact → interview the user, don't fabricate.

## Where things live

```
00_profile/   profile.md · brand.md · goals.md · assets/   (INPUT — read this first)
01_www/       index.html · index_zh-TW.html · css/ · js/ · posts/ · projects/ · materials/
04_drafts/    work-in-progress content before it is published into 01_www/
07_scripts/   version-bump, sitemap generator, deploy helpers
09_docs/      ROADMAP · TEAM-CHARTER · CONTENT-STRATEGY · SETUP · CUSTOMIZE
```

If you are a non-Claude agent without access to `.claude/`, this file plus `09_docs/TEAM-CHARTER.md`
contain everything you need to perform the same roles manually.
