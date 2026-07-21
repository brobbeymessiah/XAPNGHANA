# XAPN Ghana Limited Website

Corporate website for XAPN Ghana Limited, presenting the company, its industrial and operational services, and its contact channels.

## Stack

React 18, TypeScript, Vite 7, Tailwind CSS 3, Framer Motion, Formspree, and Vercel.

## Setup

Requires Node.js 20.19 or newer and npm.

```bash
npm install
npm run dev
```

The local site normally runs at `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run preview` | Preview the production build locally |

## Public routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/about` | About XAPN Ghana |
| `/services` | Services and service categories |
| `/contact` | Contact details and enquiry form |

The legacy `/our-services` and `/our-solutions` paths redirect to `/services` on Vercel.

## Key files

| File | What to update |
| --- | --- |
| `src/data/services.ts` | Service names, descriptions, lists, and images |
| `src/data/contact.ts` | Phone, WhatsApp, email, address, and Google Maps link |
| `src/data/navigation.ts` | Navigation items and route normalization |
| `src/types/navigation.ts` | Allowed route types |
| `public/assets/images/` | Public website images |
| `src/pages/ContactPage.tsx` | Contact form and Formspree form ID |
| `index.html` | Page and social-sharing metadata |
| `vercel.json` | Production redirects and SPA rewrites |

Service IDs in `src/data/services.ts` are used for direct links such as `/services#anti-corrosion`; keep them unique and URL-safe.

## Contact form

The Formspree form ID (`xeebdqaj`) is set in `src/pages/ContactPage.tsx`. Replace it if the destination form changes.

## Deployment

Connect the repository to Vercel with these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` handles direct links such as `/about` and `/contact` by serving the application entry point.

## Before deployment

Run `npm run build`, then verify the main routes, contact form, navigation, and external links on the Vercel preview deployment.
