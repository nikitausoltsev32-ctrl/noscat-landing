# noscat-landing — CLAUDE.md

## Project

Lead-gen site for ordering nose-cuts (ноускаты) from China.
Funnel: entry → trust → selection → request → confirmation.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Server Actions for form submissions

## Commands

```bash
npm run dev       # dev server
npm run build     # production build
npm run typecheck # tsc --noEmit
npm run lint      # eslint
```

## Directory layout

```
app/              # Next.js App Router pages
components/
  ui/             # shadcn/ui primitives (never edit directly)
  layout/         # Header, Footer, Breadcrumbs, CookieBanner
  forms/          # RequestForm, ContactForm
  sections/       # Page-level blocks (Hero, Advantages, etc.)
  cars/           # BrandCard, ModelCard, CarFilter
  articles/       # ArticleCard, Pagination
lib/
  data/           # Static content: cars, faq, articles, advantages
  actions/        # Server actions (submitForm.ts)
  analytics/      # Yandex.Metrica with cookie consent
types/            # Shared TypeScript types
public/images/    # Static assets
```

## Key rules

- All new pages go under `app/`. Filename: `page.tsx`, layout: `layout.tsx`.
- Server Actions live in `lib/actions/`. Client components need `"use client"`.
- Yandex.Metrica loads ONLY after user accepts analytics cookies (see `lib/analytics/yandex.ts`).
- Cookie consent state stored in `localStorage` key `cookie_consent`.
- All list/hub pages use numbered pagination (not infinite scroll). See `components/articles/Pagination.tsx`.
- Breadcrumbs required on all inner pages. Use `components/layout/Breadcrumbs.tsx`.
- Footer required on every page. Contains legal links (privacy, cookie-policy, data-consent).
- Breakpoints: 360px mobile, 768px tablet, 1200px desktop. No horizontal scroll.
- No horizontal scroll ever. Cards reflow to single column on mobile.
- Form destination: AmoCRM API (`lib/actions/submitForm.ts`). Token in `AMOCRM_API_TOKEN` env var.
- AmoCRM is outside Russia → transborder ПДн transfer (152-FZ). Form must include explicit consent checkbox for cross-border transfer. Legal review required before go-live.

## Pages

| Route | Template |
|---|---|
| `/` | Главная |
| `/request` | Заявка |
| `/cars` | Хаб марок |
| `/cars/[brand]` | Марка |
| `/cars/[brand]/[model]` | Модель + заявка |
| `/why-us` | Почему мы |
| `/faq` | FAQ |
| `/contacts` | Контакты |
| `/articles` | Хаб статей |
| `/articles/[slug]` | Статья |
| `/thank-you` | Спасибо |
| `/privacy` | Политика конфиденциальности |
| `/cookie-policy` | Cookie-политика |
| `/data-consent` | Согласие на обработку ПД |
| `*` | 404 |

## Design

Same visual language as noskat-site-a.vercel.app.
Breakpoints: 360 / 768 / 1200 px.
Figma mockup required before final implementation (desktop 1200, tablet 768, mobile 360).

## Content

Static content in `lib/data/`. Types defined in `types/index.ts`.
Images: free stock or client materials, stored in `public/images/`.
