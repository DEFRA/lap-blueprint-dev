export { initAll as initGovUK } from "govuk-frontend";

/**
 * Opens the details element containing the current fragment target.
 *
 * @returns {void}
 */
function openDetailsForCurrentFragment() {
  const encodedFragment = window.location.hash.slice(1);
  if (!encodedFragment) return;

  let fragment;
  try {
    fragment = decodeURIComponent(encodedFragment);
  } catch {
    return;
  }

  const target = document.getElementById(fragment);
  const details = target?.closest("details");
  if (details) {
    details.open = true;

    const summary = target.closest("summary");
    if (summary instanceof HTMLElement) summary.focus({ preventScroll: true });
  }
}

/**
 * Enables fragment-driven expansion for details content.
 *
 * @returns {void}
 */
export function initDetailsFromFragment() {
  openDetailsForCurrentFragment();
  window.addEventListener("hashchange", openDetailsForCurrentFragment);
}
