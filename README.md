# Turiya Infotech Website

Marketing website for Turiya Infotech (WhatsApp Business API, SMS, RCS, chatbots and custom software).
Built with React 19, TypeScript, Vite 6, Tailwind CSS 4, React Router 7 and Motion.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # type-checks, then outputs the static site to dist/
npm run preview    # serves dist/ locally
```

## Deploy

The build output in `dist/` is a static single-page app. A ready-built copy is included in this package.

Works on any static host: Netlify, Vercel, Cloudflare Pages, Hostinger, cPanel or Apache.

* **Netlify / Cloudflare Pages:** connect the repo or drag in `dist/`. `public/_redirects` handles page routing and `public/_headers` sets the security and caching headers.
* **Hostinger / cPanel / Apache:** upload the contents of `dist/` (including the hidden `.htaccess`) to `public_html`.

## Enquiries go to WhatsApp

The contact forms (home page and Contact page) and the "Get a Demo" booking don't need a server or form service.
When a visitor submits, WhatsApp opens (the app on phones, WhatsApp Web on desktop) with a ready-made message
addressed to **+91 70202 62435**, and the visitor just taps Send.

To change the number or the message layout, edit `src/utils/whatsapp.ts`.

## Project layout

```
public/            static files copied as-is (logos, favicons, sitemap, robots, hosting config)
src/App.tsx        routes, per-page titles/meta, scroll handling
src/components/    pages and sections (playground/ holds the interactive demo simulators)
src/data/          services, industries, clients and partners content
src/hooks/         contact form state and validation
src/utils/         WhatsApp enquiry messages and logging
```

To add a client logo, put the file in `public/client-logos/` and add a line to `CLIENT_LOGOS` in `src/data/clientData.ts`.
