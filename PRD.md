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
- Buttons: square corners (no border radius, never `rounded-*`), `font-medium`, `px-7 py-4` for hero-level CTAs, `px-5 py-2.5` for nav-level. Keep variants consistent site-wide. Variants are named per component — ask if unclear.
- Copy: no em dashes (—) anywhere in site text. Use a comma, full stop or colon instead.
- Card sets: keep every card in a set visually uniform. Don't highlight one card with a different background colour.
- Logo strips / badges: fixed height (`h-9 sm:h-10`), `w-auto`.

## Status

- Setup complete.
- Navbar built (`components/Navbar.tsx`, links in `lib/navigation.ts`), rendered site-wide from `app/layout.tsx`. The mobile menu is a full-screen panel that slides down from the top.
- The navbar is fixed and transparent over the page's top section, then turns a see-through frosted blue (`bg-brand/60 backdrop-blur-md`) on scroll. Every page must therefore start with a dark top section.
- Homepage hero built (`components/Hero.tsx`): full-screen background image (`public/images/hero.png`) with a dark overlay, text at the bottom left, and a solid white CTA plus an outlined one.
- Hero animations: the photo slowly zooms out (Ken Burns, `animate-kenburns`), and the headline, copy and buttons fade up one after another (`animate-fade-up`). Both are defined in `app/globals.css` and use `motion-safe:`.
- Services section built (`components/Services.tsx`, data in `lib/services.ts`): 3 photo cards on a dark background. The photos are placeholders from Pinterest (`i.pinimg.com` is allowed in `next.config.ts`).
- Why Choose Us built (`components/WhyChooseUs.tsx`, content in `lib/why-choose-us.ts`): heading and a "Work With Us" CTA, a 4-item accordion (the first opens by default, and item 04 lists the firm's working details), and a photo on the right. The photo is a placeholder from Unsplash.
- Footer built (`components/Footer.tsx`, contact details in `lib/site.ts`), rendered site-wide from `app/layout.tsx`: 3 bordered columns and a large "Lex Habitae" wordmark band. The address is Abuja, Nigeria; the phone number, email and social links are still placeholders.
- Latest News built (`components/LatestNews.tsx`, content in `lib/news.ts`): one featured-article card with a "View All" link to `/news`. The article is a placeholder.
- Testimonials built (`components/Testimonials.tsx`, content in `lib/testimonials.ts`): an accent-coloured side panel with previous/next arrows and a counter, and the quotes fading between each other on the right.
- Remote images: Unsplash is allowed with the object form in `next.config.ts`. `new URL()` patterns reject query strings, so use them only for query-free URLs such as Pinterest's.
- About page (`app/about/page.tsx`) started: its hero uses `components/PageHero.tsx`, the reusable inner-page hero. It matches the homepage hero (full screen, dark blue overlay, text at the bottom left, text fades up) but has a looping, muted background video (`components/BackgroundVideo.tsx`). Save hero videos in `public/videos/` rather than linking to Framer: framerusercontent.com ignores range requests, which stops the video playing in some browsers.
- About overview built (`components/AboutOverview.tsx`, content in `lib/about.ts`): heading, a "15 Years of Experience" and "100+ Trusted Clients" count-up (`components/CountUp.tsx`, which starts when scrolled into view), and the three service paragraphs.
- Team built (`components/Team.tsx`): 3 portrait cards with square LinkedIn/X buttons (`components/SocialIcon.tsx`, which the footer also uses). The team is Sunday Oghayei, Oluwatosin Oghayei and Ivbiobe Oghayei (Team Lead). Only Ivbiobe has a photo (`public/images/team/`) and a LinkedIn link so far; the other two still need roles and photos.
- `PageHero` accepts either a `video` or an `image`. The image version gets the Ken Burns zoom.
- News page built (`app/news/page.tsx`): photo hero, the featured article in the wide card (`components/FeaturedArticle.tsx`, which the homepage Latest News also uses), then a grid of `components/ArticleCard.tsx`. Articles live in `lib/news.ts`, are placeholders, and have no article pages yet ("Read More" links to `/news`).
- Practice Areas page built (`app/practice-areas/page.tsx`): photo hero, then `components/ServiceDetails.tsx` (one row per service with the photo alternating sides, a "what's included" list and a "Speak With Our Team" button), then the shared `Testimonials`. The lists are the `details` field in `lib/services.ts`; Claude drafted them from the firm's service copy and they need the client's review.
- Contact page built (`app/contact/page.tsx`): photo hero, then a white section with a "Get in touch" column (intro, bordered detail rows: address, email, hours, fee) and the 3-step booking form in the same light editorial style (underline-only fields, uppercase labels) (`components/BookingForm.tsx`: details → payment details → confirm payment → "booking link will be sent to your email"). Bank details and the fee are in `lib/booking.ts`.
- Booking delivery: the form posts JSON from the browser to Formspree (`FORMSPREE_ENDPOINT` in `lib/booking.ts`, form `xykddkwq`), which emails the firm. The firm sends the client's booking link manually after confirming payment.
- Article pages built (`app/news/[slug]/page.tsx`, prerendered with `generateStaticParams`): photo hero, article body, a "not legal advice" note, a "Speak With Our Team" CTA, and 2 more articles. Each article in `lib/news.ts` has a `slug` and `body`; links come from `articleHref()`. `app/news/[slug]/not-found.tsx` handles bad slugs. The 3 articles are placeholder content Claude wrote.
- Smooth scrolling: GSAP ScrollSmoother (`components/SmoothScroll.tsx`) wraps the page content and footer in `app/layout.tsx`. The navbar stays outside the wrapper. Content is moved with transforms, so `position: sticky` does not work inside it. It is off when the device asks for reduced motion.
- Footer wordmark is an endless marquee of "Lex Habitae Solicitors" (`animate-marquee` in `app/globals.css`).
- Mobile menu sits outside the `<header>` in `Navbar.tsx`, because the header's `backdrop-blur` would otherwise trap the full-screen menu inside the 80px bar. On mobile the scrolled bar is solid `bg-brand`; the frosted see-through style applies from `lg` up.
- SEO: site-wide tags in `app/layout.tsx` (title template, description, Open Graph, Twitter, robots, theme colour, LegalService JSON-LD), per-page tags through `pageMetadata()` in `lib/seo.ts`, plus `app/robots.ts`, `app/sitemap.ts` and a generated share image (`app/opengraph-image.tsx`). The domain comes from `NEXT_PUBLIC_SITE_URL` (fallback `https://www.lexhabitae.com`).
- Next: waiting for the next spec.
