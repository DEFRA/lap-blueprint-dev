import gulp from "gulp";
const { src, dest, series } = gulp;

const GOVUK_ASSETS_SRC = "node_modules/govuk-frontend/dist/govuk/assets";
const GOVUK_ASSETS_DEST = "public/assets";

export function copyImages() {
  return src(`${GOVUK_ASSETS_SRC}/images/**/*`).pipe(
    dest(`${GOVUK_ASSETS_DEST}/images`),
  );
}

export function copyFonts() {
  return src(`${GOVUK_ASSETS_SRC}/fonts/**/*`).pipe(
    dest(`${GOVUK_ASSETS_DEST}/fonts`),
  );
}

export function copyManifest() {
  return src(`${GOVUK_ASSETS_SRC}/manifest.json`).pipe(
    dest(`${GOVUK_ASSETS_DEST}`),
  );
}

export const buildGovukAssets = series(copyImages, copyFonts, copyManifest);
export default buildGovukAssets;
