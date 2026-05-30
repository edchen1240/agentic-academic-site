---
name: interview-user
description: Structured intake that fills 00_profile/ (profile, brand, goals) by asking the user a short series of questions. Use on first-time setup or whenever profile facts are missing.
---

# interview-user

Fill `00_profile/` from the user's answers. Ask in small batches — never dump all questions
at once. Confirm, then write the files.

## Procedure

1. **Check current state.** Read `00_profile/profile.md`. If it holds the shipped example,
   tell the user you'll replace it.
2. **Ask in rounds** (use the AskUserQuestion-style batching — a few at a time):
   - **Identity:** full name, preferred display name, name variants (for SEO), title, location.
   - **Links:** email, LinkedIn, Google Scholar, GitHub, personal site.
   - **One-liner:** their "X × Y × Z" or elevator pitch.
   - **Education & experience:** degrees (institution, advisor, dates), key roles.
   - **Research focus & interests.**
   - **Brand:** voice (formal/casual), default theme, accent color, any visual preference.
   - **Goals:** primary audience, what success looks like, bilingual? second language?
3. **Write three files:** `profile.md`, `brand.md`, `goals.md`. Keep the existing headings.
4. **Confirm** a summary back to the user and offer the next step (usually: build the site).

## Rules
- One round of questions at a time; respect the user's pace.
- Never invent an answer. If the user skips something, leave a clear `TODO` placeholder.
- Keep the user's wording for voice-sensitive fields (one-liner, interests).
