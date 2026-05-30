---
name: brand-to-css
description: Translate vague aesthetic language ("warmer", "more serious", "deep blue accent") into concrete CSS variable changes in 01_www/css/style.css. Use for any visual restyling.
---

# brand-to-css

Turn feelings into tokens. All visual choices flow through the CSS custom properties in
`:root` (dark) and `body.light-mode` (light) at the top of `01_www/css/style.css`.

## Procedure
1. **Read intent** from `00_profile/brand.md` plus the user's request.
2. **Map adjectives → tokens:**
   - "warmer" → shift accent/hue toward amber/coral; soften backgrounds.
   - "more serious / corporate" → desaturate accent, increase contrast, tighten spacing.
   - "more playful" → brighter accent, rounder radii, a touch more spacing.
   - "cleaner / minimal" → reduce accent usage, more whitespace, lighter dividers.
   - specific color → set `--color-heading` / `--color-button-bg` and their hover variants.
3. **Edit both themes.** Change the variable in `:root` and the matching override in
   `body.light-mode` so dark and light stay balanced.
4. **Check contrast** (WCAG AA for body text) in both themes.
5. **Show a diff** of the variables changed and describe the visible effect.

## Rules
- Change variables, not scattered rules. No inline styles.
- Keep one accent family unless asked for a palette.
- Update `00_profile/brand.md` to record the new choices.
