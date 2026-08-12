import gulp from "gulp";
const { src, dest, series } = gulp;

const GOVUK_ASSETS_SRC = "node_modules/govuk-frontend/dist/govuk/assets";
const GOVUK_ASSETS_DEST = "public/assets";
const BINARY_COPY_OPTIONS = { encoding: false };

export function copyFonts() {
  return src(`${GOVUK_ASSETS_SRC}/fonts/**/*`, BINARY_COPY_OPTIONS).pipe(
    dest(`${GOVUK_ASSETS_DEST}/fonts`),
  );
}

export const buildGovukAssets = series(copyFonts);
export default buildGovukAssets;
