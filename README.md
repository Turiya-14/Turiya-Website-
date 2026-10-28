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

### Netlify (recommended)

Connect the repo (build command and publish folder come from `netlify.toml`) or drag the `dist/` folder into
Netlify. `public/_redirects` handles SPA routing and `public/_headers` sets the security and caching headers.

**Contact and demo forms use Netlify Forms.** After the first deploy:

1. Open Site → Forms. You should see `contact` and `demo-request`.
2. Under Forms → Form notifications, add an email notification to `business@turiyainfotech.com`.

### Any other host (Hostinger, cPanel, Apache, Cloudflare Pages, Vercel...)

1. Upload the contents of `dist/`. On Apache/cPanel/Hostinger the included `.htaccess` handles routing and headers.
2. Netlify Forms will not exist there, so create a form endpoint (Formspree, Web3Forms, Getform), then build with
   `VITE_FORM_ENDPOINT=<your endpoint> npm run build` (see `.env.example`), and add the endpoint's origin to
   `connect-src` in the Content-Security-Policy (`public/_headers` and `public/.htaccess`).

If the form backend is unreachable, visitors see a message with the email and WhatsApp number instead of losing their enquiry silently.

## Project layout

```
public/            static files copied as-is (logos, favicons, sitemap, robots, hosting config)
src/App.tsx        routes, per-page titles/meta, scroll handling
src/components/    pages and sections (playground/ holds the interactive demo simulators)
src/data/          services, industries, clients and partners content
src/hooks/         contact form state and validation
src/utils/         form submission and logging
```

To add a client logo, put the file in `public/client-logos/` and add a line to `CLIENT_LOGOS` in `src/data/clientData.ts`.
