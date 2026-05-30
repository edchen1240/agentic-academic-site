---
name: project-sync
description: Review, update, and plan this project through its P00 progress file. Use to track what's done, what's next, and the long-term goal so you can return to the project without re-reconstructing context. Modes: Init, Review, Plan, Quick Capture, Combined.
---

# project-sync

Interactive session to maintain a single project's progress in a **P00 file** at the repo
root: `P00_Project Progress.md`.

Core goal: reduce cognitive re-entry cost. When work pauses, reconstructing where you left
off, the next step, and the long-term target costs real effort. Every session ends with
those three things explicitly recorded so the next session starts cold without reconstruction.

This is a self-contained, path-free skill — it works in any fork. The **product-manager**
owns it (it already owns status and the roadmap), but any agent may run it.

## Keep it light
This skill records and plans — it is not a deep-reasoning task. Don't over-think or burn
tokens deliberating; capture status quickly, ask the mode's questions, update the P00, and
stop. Favor brisk, factual edits over elaborate analysis.

## P00 vs. ROADMAP — different jobs, no overlap
- `09_docs/ROADMAP.md` = the **product's direction** — what the template will become.
  Public, shipped, durable, forker-facing. Changes rarely.
- `P00_Project Progress.md` = the **working tracker** — where work paused, the next
  concrete step, the raw done-log, open questions. Personal, session-level. Changes often.

When a P00 backlog item becomes committed product direction, graduate it into ROADMAP.
When a ROADMAP item is actively being built, mirror it as a P00 Active task. Keep durable
product vision in ROADMAP; keep session state in the P00.

## Pre-flight (always run first)

1. **Find the P00 file** at the repo root (`P00_Project Progress.md`). If none exists,
   switch to **Init** mode automatically.
2. **Read the whole P00 file.** Build a brief internal audit: stated goal and what "done"
   looks like; the last concrete stopping point; which Active tasks are stalled/vague; what's
   in Done (pending archive); unresolved Open questions; whether the file looks current.
3. **Detect mode** from the invocation:
   - "init / new / set up / first time" → Init
   - "sync / archive / review / wrap up" → Review
   - "plan / next steps / strategy" → Plan
   - "quick / log / ask / update one thing" → Quick Capture
   - "review and plan / catch up / both" → Combined
   - If unclear, ask once which mode.
4. **Open with a 3–5 sentence context summary** (what the project is, current status, Active
   tasks, one notable Done/Open item). Orient first; don't ask yet.

## Init mode — first-time setup
Ask exactly 5 questions in one numbered list; wait for all answers:
1. What is this project? One sentence — what it does and what "done" looks like.
2. Current status — what's done, and the next concrete step?
3. The 2–4 active tasks for the next sprint?
4. Anything parked for later or blocked externally?
5. Where are the key files / resources / links?

Then create `P00_Project Progress.md` at the repo root using the standard P00 structure
(Overview, Status, Active tasks, Backlog, Done, Open questions, Key resources, Archive).
Fill every section from the answers.

## Review mode — archive and update status
Generate exactly 5 questions targeting what's missing/ambiguous (name specific tasks; warm,
not audit-like). Themes: what finished since last time; which Active tasks are done/stalled;
anything unplanned that came up; Open questions resolved or newly appeared; the most important
thing to carry forward. After answers:
- Move all `## Done (pending archive):` items into `# Archive` under a new
  `## YYYY-MM-DD sprint` heading as a `Done:` bullet list with dates. Clear the section.
- Update `## Status` (one sentence + `Last updated:`), `## Active tasks:`, `## Backlog`, `## Open questions:`.

## Plan mode — next sprint and strategy
Generate exactly 5 forward-looking questions: top 2–3 outcomes next sprint; blockers;
Open questions holding up progress; is scope still on the original goal; plus one grounded
strategic question specific to what you observed in the file. Then update `## Active tasks:`,
`## Open questions:`, and `## Status` if the picture changed.

## Quick Capture mode — log or ask
Exactly 3 questions: what to log/ask; does it change Active tasks or Open questions; anything
else (a date, a follow-up, a file). Update only the relevant sections. If purely
informational, say so rather than editing.

## Combined mode — review then plan
Two back-to-back blocks of 2–3 questions each (Review, then Plan). Update files once after both.

## Update protocol
1. Read the target section before editing; use targeted edits, preserve existing content.
2. `## Done (pending archive):` is a raw intake zone — items may be status updates, new
   events, or newly identified tasks (if so, also add to `## Active tasks:`). All normal.
3. Keep `## Status` as the re-entry anchor: the last concrete stopping point + next step +
   `Last updated: YYYY-MM-DD`.
4. House style for the P00 file: `=` underline title, `#`/`##` headings only (no `###`+),
   no bold/italics, one paragraph per line (no auto-wrap), blank line between paragraphs.
5. Insert new content under the relevant existing section, not at the bottom.

## Logging (optional)
If you want a session trail, append a short log to `09_docs/project-sync-log/` named
`YYYY-MMDD-HHMM_<slug>.md` (mode, questions, raw answers, files updated). Skip if the fork
doesn't want logs — the P00 itself is the source of truth.

## File map
| Topic | Section |
|---|---|
| What it is / what done looks like | # Overview |
| Related files, links | ## Links to related documents: |
| Current state (one sentence + date) | ## Status |
| This sprint's work | ## Active tasks: |
| Parked items | ## Backlog (not now, not forgotten): |
| Raw completions log | ## Done (pending archive): |
| Unresolved questions | ## Open questions: |
| Key files / repos / links | ## Key resources: |
| Closed sprints | # Archive |
