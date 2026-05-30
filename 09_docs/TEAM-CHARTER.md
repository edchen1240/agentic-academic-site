# Team Charter

The human-readable definition of the agent team. This mirrors `.claude/agents/` and
`.claude/skills/` so that *any* agent (or any reader on GitHub) understands the system
without running Claude Code.

Think of this repo as a small **personal-website management agency**. You are the client.
The agents are the staff. The skills are their standard operating procedures.

## Org chart

```
                         product-manager  (the lead / your point of contact)
                                 │
        ┌────────────────┬───────┴────────┬─────────────────┐
        ▼                ▼                ▼                 ▼
 content-strategist  web-designer   growth-marketer    site-engineer
   (chief editor)   (art director)  (marketing)        (webmaster)
```

All four specialists report to the **product-manager**, who is the only agent that talks
to you directly by default. The PM clarifies what you want and delegates.

## Agents

### product-manager — *the lead*
- Owns the conversation with the user and the overall roadmap.
- Reads `00_profile/`; if empty, runs `interview-user`.
- Breaks vague requests ("make it look more serious", "I want more visitors") into
  concrete tasks and routes them to the right specialist.
- Tracks what's done and what's next in `09_docs/ROADMAP.md`.

### content-strategist — *chief editor*
- Decides **what** the user should publish to build their reputation.
- Web-researches the user's field and background to spot opportunities (a timely topic,
  a paper worth a plain-language write-up).
- Routes every piece between the **two tiers** per `CONTENT-STRATEGY.md`:
  professional/technical → Online CV; broad/casual/bilingual → Personal Hub.
- Uses skills: `interview-user`, `scholar-import`, `new-content`.

### web-designer — *art director*
- Owns the look: layout, color, typography, spacing, dark/light theme.
- Translates **vague aesthetic language** ("cleaner", "warmer", "more MIT") into concrete
  CSS variables and rules.
- Guards the design system so the site stays coherent as it grows.
- Uses skills: `brand-to-css`.

### growth-marketer — *marketing / influencer*
- Makes the site **findable**: SEO (search engines) and GEO (generative-engine optimization
  so LLMs cite the user correctly).
- Maintains `schema.org` structured data, the sitemap, and meta tags.
- Sets up and reads analytics (GoatCounter, Google Search Console).
- Suggests distribution moves — e.g. a LinkedIn post linking back to a new article.
- Uses skills: `seo-audit`, `analytics-setup`.

### site-engineer — *webmaster*
- Builds and wires pages; keeps the JS (theme toggle, language toggle, post loader) working.
- Runs maintenance: version-bump (cache-busting), sitemap regeneration, deploy.
- Validates HTML, checks accessibility and performance.
- Uses skills: `new-content`, `seo-audit`, `deploy-sync`, `scholar-import`.

## Skills (standard operating procedures)

| Skill | What it does | Used by |
|---|---|---|
| `interview-user` | Structured intake → fills `00_profile/` | product-manager, content-strategist |
| `scholar-import` | Pull Google Scholar / `.bib` → publications data | content-strategist, site-engineer |
| `brand-to-css` | Turn aesthetic descriptions into CSS variables/themes | web-designer |
| `new-content` | Create a post / project / material page in the correct tier | content-strategist, site-engineer |
| `seo-audit` | Check meta, schema, sitemap, alt text, heading structure | growth-marketer, site-engineer |
| `analytics-setup` | Wire GoatCounter + Google Search Console + verification | growth-marketer |
| `deploy-sync` | Version-bump + sitemap regen + push | site-engineer |
| `project-sync` | Maintain the P00 progress file (status, next step, goal) | product-manager |

## Design principles

1. **The user owns everything.** Plain static files, no lock-in.
2. **Facts live once** — in `00_profile/`. Everything else is rendered from them.
3. **Ask, never fabricate.** A missing fact triggers an interview, not a guess.
4. **Two tiers, one system.** Professional CV and personal hub share a design language.
5. **Findable by design.** SEO/GEO and analytics are defaults, not afterthoughts.
