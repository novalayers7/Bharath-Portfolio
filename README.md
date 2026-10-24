# Bharath Kumar C — Portfolio

Four-page animated portfolio (Home, About, Work + project detail pages, Contact).
Stack: React 19, TypeScript, Vite, React Router, GSAP + ScrollTrigger, Lenis (smooth scroll). Fonts (Anton, Oswald, Plus Jakarta Sans) are self-hosted via `@fontsource`, so there are no external requests.

## Commands
```bash
npm install        # install dependencies
npm run dev        # local development (http://localhost:5173)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Design references
- **Matthew** reference → Home hero, Home about intro (`/ABOUT`), Define / Design / Deliver (pinned, scroll-stepped), About page opener.
- **Serhii** reference → Experience accordion, Selected Works grid, Work page gallery, project pages, Contact, remaining sections.
Both were recreated from the supplied videos/screenshots; no original source code was used or available.

## Where things live
- `src/data.ts` — all content (taken from your portfolio document). Edit text, links and projects here.
- `src/motion.ts` — reveal system (`data-words`, `data-fade`, `data-stagger`, `data-clip`, `data-line`), reduced-motion aware.
- `src/pages/*` — Home, About, Work, ProjectDetail, Contact. `src/components/*` — shared pieces. `src/styles.css` — design tokens and styles.

## Project screenshots (IMPORTANT)
No project screenshots were supplied (the four PNGs in the upload were the Dribbble reference images), so every project shows a labelled **"Screenshot placeholder"**.
To add real images: put files in `public/img/projects/` and list them in that project's `images: []` in `src/data.ts`, e.g. `images: ["/img/projects/sheraera-1.webp", "/img/projects/sheraera-2.webp"]`. Multiple images appear on the project's detail page; the first is used in the grid. Images keep their proportions (`object-fit: cover`, top-aligned inside the frame).

## Contact form
Without configuration the form validates, then opens the visitor's email app (`mailto:`) — nothing is sent from the site itself.
To send server-side, copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a service that accepts a JSON POST `{name, email, message}` (for example a Formspree form URL). The form then shows sending / success / error states.

## Deployment
It is a single-page app with client-side routing. `public/_redirects` (Netlify/Cloudflare Pages) and `vercel.json` already rewrite all routes to `index.html`.

## Notes
- GitHub link is omitted because the document says "To be added". Testimonials are omitted (none provided); "Why work with me" replaces that section.
- Your document asks you to verify project descriptions and technologies against your actual contributions before publishing.
