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
 * @type {Record<string, {class: string[], dataModule: string}>}
 */
export const TAG_ATTRIBUTE_MAP = {
  h1: { class: ["govuk-heading-xl"] },
  h2: { class: ["govuk-heading-l"] },
  h3: { class: ["govuk-heading-m"] },
  h4: { class: ["govuk-heading-s"] },
  h5: { class: ["govuk-heading-s"] },
  h6: { class: ["govuk-heading-s"] },
  p: { class: ["govuk-body"] },
  a: { class: ["govuk-link", "govuk-link--no-visited-state"] },
  pre: { class: ["govuk-inset-text"] },
  ul: { class: ["govuk-list", "govuk-list--bullet"] },
  ol: { class: ["govuk-list", "govuk-list--number"] },
  hr: {
    class: [
      "govuk-section-break",
      "govuk-section-break--l",
      "govuk-section-break--visible",
    ],
  },
  table: { class: ["govuk-table"] },
  thead: { class: ["govuk-table__head"] },
  tbody: { class: ["govuk-table__body"] },
  tr: { class: ["govuk-table__row"] },
  th: { class: ["govuk-table__header"] },
  td: { class: ["govuk-table__cell"] },
  caption: { class: ["govuk-table__caption"] },
};
