# LAP Blueprint

A GOV.UK-styled documentation site for the Defra Legacy Application Programme (LAP). Built with [Astro](https://astro.build) and [GOV.UK Frontend](https://frontend.design-system.service.gov.uk), it publishes to GitHub Pages at `https://defra.github.io/lap-blueprint/`.

Content is authored in Markdown under `src/pages/` and rendered through a custom GOV.UK styling pipeline. Diagrams are written in Mermaid. Full-text search is powered by Pagefind and built automatically at build time.

## Running locally

```bash
npm install
npm run copy:govuk-assets   # copies fonts/images from govuk-frontend into public/assets
npm run dev                 # starts the dev server at http://localhost:4321/lap-blueprint/
```

For a production build:

```bash
npm run build    # outputs to dist/
npm run preview  # serves the built output locally
```

> **Note:** The site is served under the `/lap-blueprint/` base path both locally and in production. All internal links and asset references must include this base path, which Astro handles automatically — but be aware of it when checking network requests or constructing any manual URLs.

## Project structure

| Path                       | Purpose                                                        |
| -------------------------- | -------------------------------------------------------------- |
| `src/pages/`               | Markdown content pages — one `.md` file per page               |
| `src/components/`          | Astro components (side nav, breadcrumbs, search)               |
| `src/layouts/`             | Page shell layouts                                             |
| `src/util/govuk-markdown/` | Custom Markdown-to-GOV.UK HTML pipeline (Satteri/HAST plugins) |
| `src/styles/global.scss`   | Global SCSS overrides on top of GOV.UK Frontend                |
| `public/assets/`           | Static assets (fonts, images, manifest)                        |
| `gulpfile.js`              | Copies GOV.UK Frontend fonts and images into `public/assets/`  |

## Common gotchas

### Internal links must end with a trailing `/`

Astro is configured with `trailingSlash: "always"`. A link to `../my-page` will **404**; it must be `../my-page/`. This applies to every internal Markdown link.

### Relative links often need an extra `..`

Pages are nested under section directories (e.g. `src/pages/delivery-processes/github-access.md`), so their URL is `/lap-blueprint/delivery-processes/github-access/`. A link from that page to the section index needs `../` (one level up to exit the slug) not `./`, and a link to a sibling page in a different section needs `../../other-section/page/`.

If a link resolves to the wrong page or 404s, count the directory depth from the file's location and add one extra `..` for the trailing-slash segment.

### GOV.UK assets must be copied before first run

`govuk-frontend` ships fonts and images as npm package files. Run `npm run copy:govuk-assets` (or `gulp buildGovukAssets`) once after `npm install` to copy them into `public/assets/`. Without this step the GOV.UK crown logo and fonts will be missing.

### LightningCSS warning during build

`npm run build` emits a LightningCSS warning about a legacy `@media (min-width: 0\0)` rule inside `govuk-frontend`. This is a known upstream issue — the warning is harmless and the build succeeds. It is suppressed via `errorRecovery: true` in `astro.config.mjs`.
