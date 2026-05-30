Your Project Name
============================================================

👋 This is your project's progress tracker (a "P00 file"). It lives at the repo root on
purpose — it's the first thing to read when you (or your AI agent) come back and ask
"where was I?". It records three things so you never have to reconstruct them: what's
done, what's next, and the long-term goal.

How to use it:
- Open the repo with your agent and say "run project-sync" (or "let's plan / wrap up").
  The product-manager runs the `.claude/skills/project-sync` skill and updates this file.
- Or edit it by hand — it's just Markdown.

Relationship to the roadmap: `09_docs/ROADMAP.md` holds the product's durable direction
(what the template becomes); this P00 holds living session state (where you paused, the
next concrete step). Graduate committed backlog items up into ROADMAP.

House style: `=` underline title; `#`/`##` headings only (no `###` or deeper); no
bold/italics; one paragraph per line (no auto-wrap); blank line between paragraphs.

# Overview
One short paragraph: what this project is, its goal, and what "done" looks like at a high level.

## Links to related documents:
- 09_docs/ROADMAP.md — product direction (this P00 is session state).
- ...


---
# Status
Current state in one sentence — the last concrete stopping point and the next step.
- Last updated: YYYY-MM-DD.


## Active tasks:
- ...

## Backlog (not now, not forgotten):
- ...

## Done (pending archive):


## Open questions:
- ...

## Key resources:
- ...

---
# Archive
## YYYY-MM-DD sprint
Done:
- ...
