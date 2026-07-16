# XAPN Ghana Limited Website

Corporate website for XAPN Ghana Limited, presenting the company, its industrial and operational services, and its contact channels.

## Technology

- React 18 and TypeScript
- Vite 7
- Tailwind CSS 3
- Framer Motion
- Lucide icons
- Formspree contact-form delivery
- Vercel deployment configuration

## Requirements

- Node.js 20.19 or newer
- npm

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run preview` | Preview the production build locally |

The production output is written to `dist/`.

## Public routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/about` | About XAPN Ghana |
| `/our-services` | Services and service categories |
| `/contact` | Contact details and enquiry form |

The legacy `/our-solutions` path permanently redirects to `/our-services` on Vercel. Unknown client-side paths currently fall back to the homepage.

## Project structure

```text
.
├── index.html                 # Document metadata and social-sharing tags
├── public/
│   └── assets/images/        # Public website images
├── src/
│   ├── components/           # Shared UI components
│   ├── data/                 # Navigation, contact, and service content
│   ├── pages/                # Route-level page components
│   ├── types/                # Shared TypeScript types
│   ├── App.tsx               # Client-side routing and page rendering
│   ├── index.css             # Tailwind layers and custom styles
│   └── main.tsx              # React entry point
├── tailwind.config.ts        # Theme tokens and font stacks
├── vite.config.ts            # Vite configuration
└── vercel.json               # Production redirects and SPA rewrites
```

## Updating website content

### Services

Edit `src/data/services.ts` to change service titles, descriptions, item lists, category images, and showcase images.

Each service has a stable `id`. That ID is used as the URL hash when linking directly to a service, for example:

```text
/our-services#office-furniture
```

Keep service IDs unique and URL-safe.

### Contact details

Edit `src/data/contact.ts` to update the phone number, WhatsApp link, email address, office address, or Google Maps link. These values are shared by the contact page and footer.

### Navigation

Public navigation items and route normalization are defined in `src/data/navigation.ts`. The allowed route type is defined in `src/types/navigation.ts`, and pages are rendered in `src/App.tsx`.

When adding a route, update all three locations.

### Images

Place public images in `public/assets/images/` and reference them from code with paths such as:

```text
/assets/images/example.jpg
```

Use optimized images with meaningful alternative text where the image communicates content. Decorative images should use an empty `alt` value.

## Contact form

The enquiry form uses `@formspree/react`. Its Formspree form ID is currently configured directly in `src/pages/ContactPage.tsx`:

```ts
useForm("xeebdqaj")
```

To connect a different Formspree form, replace that ID and submit a test enquiry after deployment.

## Routing and deployment

The project uses lightweight client-side routing rather than React Router. Internal links are rendered through `AppLink`, which preserves standard browser link behavior while enabling in-app navigation.

`vercel.json` rewrites non-asset requests to `index.html`. This is required so directly shared links such as `/about` and `/contact` load correctly on Vercel.

Deploy by connecting the repository to Vercel with these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Pre-deployment checklist

1. Run `npm run build`.
2. Test every public route directly in a new browser tab.
3. Test the contact form and confirm Formspree receives the submission.
4. Check desktop and mobile navigation.
5. Confirm service-card and service-preview images load.
6. Confirm phone, email, WhatsApp, and Google Maps links.
7. Verify social-preview metadata in `index.html` uses the final production domain.
