# LAP Blueprint

A GOV.UK-styled documentation site for the Defra Legacy Application Programme (LAP). Built with [Astro](https://astro.build) and [GOV.UK Frontend](https://frontend.design-system.service.gov.uk), it publishes as a static [dev GitHub Pages](https://defra.github.io/lap-blueprint-dev/) site. Once content has been reviewed by stakeholders it can be merged into the [live repository](https://github.com/DEFRA/lap-blueprint) and deployed to the [live GitHub Pages](https://defra.github.io/lap-blueprint/) site.

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

Due to all links ending in a `/`, relative paths treat the current file as if it were a directory. This means that relative links to all files except for children must start with a `../` to go up one level out of the current file.

e.g. To go from `src/pages/test.md` (url path: `/lap-blueprint/test/`) to `src/pages/success.md` (url path: `/lap-blueprint/success/`), rather than the normal relative path of `./success`, you need to use `../success`.

### GOV.UK assets must be copied before first run

`govuk-frontend` ships fonts and images as npm package files. Run `npm run copy:govuk-assets` (or `gulp buildGovukAssets`) once after `npm install` to copy them into `public/assets/`. Without this step the GOV.UK crown logo and fonts will be missing.

### LightningCSS warning during build

`npm run build` emits a LightningCSS warning about a legacy `@media (min-width: 0\0)` rule inside `govuk-frontend`. This is a known upstream issue — the warning is harmless and the build succeeds. It is suppressed via `errorRecovery: true` in `astro.config.mjs`.
