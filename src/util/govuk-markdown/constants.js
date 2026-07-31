/**
 * Marker prefix used to indicate a link should be rendered as a button.
 * @type {string}
 */
export const BUTTON_LINK_PREFIX = "button!";

/**
 * Marker used in a single-column table header to signal GOV.UK details output.
 * @type {string}
 */
export const DETAILS_TABLE_HEADER_TEXT = "[details]";

/**
 * Maps HTML element tag names to their corresponding GOV.UK Design System CSS classes.
 * @type {Record<string, string[]>}
 */
export const TAG_CLASS_MAP = {
  h1: ["govuk-heading-xl"],
  h2: ["govuk-heading-l"],
  h3: ["govuk-heading-m"],
  h4: ["govuk-heading-s"],
  h5: ["govuk-heading-s"],
  h6: ["govuk-heading-s"],
  p: ["govuk-body"],
  a: ["govuk-link"],
  pre: ["govuk-inset-text"],
  ul: ["govuk-list", "govuk-list--bullet"],
  ol: ["govuk-list", "govuk-list--number"],
  hr: [
    "govuk-section-break",
    "govuk-section-break--l",
    "govuk-section-break--visible",
  ],
  table: ["govuk-table"],
  thead: ["govuk-table__head"],
  tbody: ["govuk-table__body"],
  tr: ["govuk-table__row"],
  th: ["govuk-table__header"],
  td: ["govuk-table__cell"],
  caption: ["govuk-table__caption"],
};
