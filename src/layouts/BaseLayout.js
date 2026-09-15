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

/**
 * Makes external links (absolute http(s) URLs) open in a new tab, with an
 * accessible "(opens in new tab)" hint. Internal links are root-relative and
 * so are left untouched.
 *
 * @returns {void}
 */
export function initExternalLinks() {
  const externalLinks = document.querySelectorAll(
    'a[href^="http://"], a[href^="https://"]',
  );
  for (const link of externalLinks) {
    if (!(link instanceof HTMLAnchorElement)) continue;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    if (link.dataset.externalHint) continue;
    link.dataset.externalHint = "true";
    const hint = document.createElement("span");
    hint.className = "govuk-visually-hidden";
    hint.textContent = " (opens in new tab)";
    link.append(hint);
  }
}
