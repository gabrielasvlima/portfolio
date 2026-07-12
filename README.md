# Gabriela Lima — Portfolio

Portfolio site built with **Vite + React + TypeScript**, preserving the original HTML design system (Fraunces, Inter, IBM Plex Mono, readout chips).

## Tech stack

- Vite + React 18 + TypeScript
- React Router (home + 3 case studies)
- react-helmet-async (SEO / Open Graph)
- CSS design tokens from the original static site (`src/styles.css`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
├── public/images/     # Local image assets
├── src/
│   ├── components/    # Nav, footer, reveal, contact form, SEO
│   ├── data/          # Home content + case study copy
│   ├── pages/         # HomePage, CaseStudyPage
│   ├── styles.css     # Shared design system
│   └── App.tsx        # Routes
├── vercel.json        # SPA rewrites + cache headers
└── index.html
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/work/picpay` | PicPay case study |
| `/work/axur` | Axur case study |
| `/work/sanar` | Sanar case study |

Legacy `.html` URLs redirect automatically.

## Contact form

1. Create a form at [formspree.io](https://formspree.io)
2. Set `FORM_ENDPOINT` in `src/components/ContactForm.tsx`

## Deploy on Vercel

1. Push to [github.com/gabrielasvlima/portfolio](https://github.com/gabrielasvlima/portfolio)
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add domain `gabrielalima.me` under **Settings → Domains**

## Content

Edit copy in:
- `src/data/home.ts` — hero, work cards, timeline, testimonials
- `src/data/cases.ts` — case study pages
