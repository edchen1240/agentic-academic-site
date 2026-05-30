# Customize

How to make the site yours — by editing, or by asking the `web-designer` agent.

## The fast way (agent)

Tell the agent what you want in plain language:

> "Make it warmer and a bit more playful."
> "I want it to feel more like a serious research lab."
> "Use a deep blue accent instead of purple."

The `web-designer` runs the `brand-to-css` skill and translates that into concrete CSS
variable changes. It reads your taste from `00_profile/brand.md`.

## The manual way

### Colors & theme
All colors are CSS custom properties at the top of the main stylesheet
(`01_www/css/style.css`). Change them in one place; both light and dark themes update.

```css
:root {
  --accent:        #6c4ad6;   /* primary accent */
  --text:          #1a1a1a;
  --bg:            #ffffff;
  /* dark theme overrides live under [data-theme="dark"] */
}
```

### Fonts
Swap the Google Fonts `<link>` in the `<head>` and update `--font-body` / `--font-head`.

### Sections
Each section on the profile page is a `<div class="block">`. Add, remove, or reorder them.
Keep headings in `<h2>` for consistent styling and SEO.

### Navigation
Edit the menu list in the header. Remove a tab entirely rather than leaving a dead
placeholder link (see the principle in CONTENT-STRATEGY.md).

### Bilingual
If you keep the second language, mirror every change in both `index.html` and
`index_zh-TW.html`. The language toggle button links the two. To drop bilingual support,
delete the second file and the `lang-toggle` button.

## Things you usually don't need to touch

- `07_scripts/` — maintenance automation (version-bump, sitemap).
- `js/dark_mode.js`, `js/lang-toggle.js` — already wired; the designer rarely edits these.
- The `schema.org` block — the `growth-marketer` keeps this in sync with `00_profile/`.
