# Lex Habitae — Project Rules

Standing rules for building this site. Follow these in every session.

## Workflow

- Build the **homepage first**, section by section (nav bar, hero, etc.), then reuse the same styling and patterns for the rest of the site.
- The user pastes design specs (screenshots or descriptions) and content section by section. Build exactly what is described. **Don't invent content, copy, layout, or extra sections.** Use placeholders only where told to.
- Wait for the next spec before building ahead.
- If something is unclear (e.g. which button variant is meant), ask. Don't guess.

## Stack

- Next.js + TypeScript + Tailwind CSS, fully responsive, mobile-first.
- Reusable components in `components/`, shared data in `lib/`, images in `public/images/`.

## Design system

- Colours: primary `#07101F` (`brand`), accent `#6B96F5` (`accent`).
- Fonts: **Epilogue** for headings (`font-heading`, h1–h4), **Satoshi** for body/UI text (default `font-sans`).
- Type scale:
  - **H1 / hero headline**: `font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em]`. Don't go smaller for a page's main headline.
  - **H2/H3**: `font-heading font-medium tracking-[-0.03em]`, sized down from the H1 (e.g. `text-3xl sm:text-4xl` for section headings, `text-xl` for card titles).
  - **Body text**: flat `text-base` (16px), with no responsive size bump.
- Buttons: `rounded-full` pills, `font-medium`, `px-7 py-4` for hero-level CTAs, `px-5 py-2.5` for nav-level. Keep variants consistent site-wide. Variants are named per component — ask if unclear.
- Card sets: keep every card in a set visually uniform. Don't highlight one card with a different background colour.
- Logo strips / badges: fixed height (`h-9 sm:h-10`), `w-auto`.

## Status

- Setup complete. No pages or sections built yet. Waiting for the first section spec (navigation bar).
