# Astro + GOV.UK Starter

Scaffolded Astro project prewired to use `govuk-frontend` styles (via CDN by default).

Quick start

```bash
npm install
npm run dev
```

Notes

- The layout loads GOV.UK styles from unpkg CDN. This project now uses SCSS for overrides.
- I added `scss` and `sass` to `package.json` so Astro can process `.scss` files.

To use GOV.UK locally after installing dependencies:

1. Run `npm install`.
2. Import GOV.UK CSS/SCSS in `src/styles/global.scss` (examples are commented there).
