# noscat-b — Design Spec

**Date:** 2026-05-25
**Project:** Site B — lead generation / request site for ordering nose-cuts (ноускаты) from China

---

## Purpose

Convert visitors into leads via a clear funnel:
**entry → trust → selection → request → confirmation**

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15, App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Forms | Server Actions (`lib/actions/submitForm.ts`) |
| Analytics | Yandex.Metrica — loads after analytics cookie consent |

---

## Pages & Templates

| Route | Template | Notes |
|---|---|---|
| `/` | Главная | Full funnel sections |
| `/request` | Заявка | Form + advantages + next steps |
| `/cars` | Хаб марок | Brand tile grid |
| `/cars/[brand]` | Марка | Model tiles + filter |
| `/cars/[brand]/[model]` | Модель | Details + request CTA |
| `/why-us` | Почему мы | Advantages + work steps + trust + CTA |
| `/faq` | FAQ | Accordion + CTA |
| `/contacts` | Контакты | Phone, messengers, email, address, map, hours, form |
| `/articles` | Хаб статей | Cards + category filter + numbered pagination |
| `/articles/[slug]` | Детальная статья | Content + breadcrumbs |
| `/thank-you` | Спасибо | Success message + useful links |
| `/privacy` | Политика конфиденциальности | Legal text page |
| `/cookie-policy` | Cookie-политика | Legal text page |
| `/data-consent` | Согласие на обработку ПД | Legal text page |
| `*` | 404 | Not found page |

---

## Main Page Sections (in order)

1. Header (sticky, mobile hamburger)
2. Hero — main offer + inline short form
3. Short request form
4. Advantages (6 items)
5. How we work (4 steps)
6. Car brand/model selector block
7. Trust / cases block
8. FAQ (accordion, 6 items)
9. Footer

---

## Components

### Layout
- `Header` — logo, nav, CTA button, mobile menu
- `Footer` — links, legal, messengers, contacts
- `Breadcrumbs` — on all inner pages, structured data
- `CookieBanner` — necessary / analytics / marketing toggles; loads on first visit; state in `localStorage['cookie_consent']`

### Forms
- `RequestForm` — name, phone, car brand (optional), car model (optional), comment; calls `submitForm` server action; on success redirects to `/thank-you`
- `ContactForm` — name, phone, message; same server action

### Sections
- `HeroSection`, `AdvantagesSection`, `HowWeWorkSection`, `CarBrandsSection`, `TrustSection`, `FaqSection`, `CtaSection`

### Cars
- `BrandCard`, `ModelCard`, `CarFilter`

### Articles
- `ArticleCard`, `Pagination` (numbered: 1 2 … 5 6 7 … 10)

---

## Data

All static content lives in `lib/data/`. No database required in v1.

| File | Content |
|---|---|
| `cars.ts` | `CAR_BRANDS[]` with nested `CarModel[]` |
| `faq.ts` | `FAQ_ITEMS[]` |
| `articles.ts` | `ARTICLES[]` + categories |
| `advantages.ts` | `ADVANTAGES[]` + `WORK_STEPS[]` |

---

## SEO

- All pages: `generateMetadata()` with title, description, openGraph
- Inner pages: `<BreadcrumbList>` JSON-LD structured data
- Articles: `<Article>` JSON-LD
- Pagination: numbered only (no infinite scroll). `rel="next"` / `rel="prev"` on paginated pages.
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`

---

## Cookie & Analytics

- Cookie banner on first visit (bottom bar)
- Three consent levels: necessary (always on), analytics, marketing
- Yandex.Metrica (`NEXT_PUBLIC_YM_ID`) initialises only when `analytics: true` in consent
- Consent readable via `getCookieConsent()` util

---

## Adaptive / Responsive

| Breakpoint | Width |
|---|---|
| Mobile | 360 px |
| Tablet | 768 px |
| Desktop | 1200 px |

Rules:
- No horizontal scroll at any breakpoint
- Cards reflow to single column on mobile
- Navigation collapses to hamburger on mobile
- Breadcrumbs on all inner pages

---

## Form Submission

Server action: `lib/actions/submitForm.ts`

Provider: **AmoCRM API** via Bearer token (`AMOCRM_API_TOKEN` env var).

Required fields: name, phone.
On success: redirect to `/thank-you`.

**Legal note (152-FZ transborder ПДн):**
AmoCRM servers are located outside Russia. Sending personal data to AmoCRM constitutes a transborder transfer under Federal Law 152-FZ. The form must include a separate informed-consent checkbox for cross-border data transfer in addition to the standard privacy policy consent. Legal review required before production launch. This affects all forms on the site.

---

## Design Reference

Visual language: same as noskat-site-a.vercel.app.
Figma mockup required at 1200 / 768 / 360 px before final implementation.
