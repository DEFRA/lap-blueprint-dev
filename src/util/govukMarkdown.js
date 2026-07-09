import { defineHastPlugin } from "satteri";

/**
 * Matches link text flagged for GOV.UK button styling.
 *
 * Note: the requested pattern `/^button!.*+$/` is normalized to JavaScript's
 * supported equivalent `/^button!.*$/`.
 *
 * @type {RegExp}
 */
const BUTTON_LINK_TEXT_PATTERN = /^button!.*$/;

/**
 * Marker prefix used to indicate a link should be rendered as a button.
 * @type {string}
 */
const BUTTON_LINK_PREFIX = "button!";

/**
 * Maps HTML element tag names to their corresponding GOV.UK Design System CSS classes.
 * @type {Record<string, string[]>}
 */
const TAG_CLASS_MAP = {
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

/**
 * Determines whether a <pre> node wraps a code block marked as ASCII.
 *
 * @param {import('hast').Element} node - The HAST node to inspect.
 * @returns {boolean} True when the node is a preformatted ASCII code block.
 */
function isAsciiCodeBlock(node) {
  if (node.tagName !== "pre" || !Array.isArray(node.children)) return false;

  const codeChild = node.children.find(
    (child) => child && child.type === "element" && child.tagName === "code",
  );

  if (!codeChild || !codeChild.properties) return false;

  const classNames = Array.isArray(codeChild.properties.className)
    ? codeChild.properties.className
    : [];

  return classNames.includes("language-ascii") || classNames.includes("ascii");
}

/**
 * Renders links prefixed with `button!` as GOV.UK button-styled anchors.
 *
 * @param {import('hast').Element} node - The current HAST element node.
 * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
 * @returns {boolean} True when the node was replaced with button semantics.
 */
function renderButtonPrefixedLink(node, ctx) {
  if (node.tagName !== "a") return false;

  const text = ctx.textContent(node).trim();
  if (!BUTTON_LINK_TEXT_PATTERN.test(text)) return false;

  const existing = Array.isArray(node.properties?.className)
    ? node.properties.className
    : [];

  const cleanLabel = text.replace(BUTTON_LINK_PREFIX, "").trimStart();
  const nonLinkClasses = existing.filter(
    (className) => className !== "govuk-link",
  );

  ctx.replaceNode(node, {
    ...node,
    properties: {
      ...(node.properties ?? {}),
      className: [...nonLinkClasses, "govuk-button"],
      role: "button",
      "data-module": "govuk-button",
    },
    children: [{ type: "text", value: cleanLabel }],
  });

  return true;
}

/**
 * Ensures each table row's first data cell is rendered as a row header.
 *
 * Markdown tables emit the first body column as <td>; GOV.UK guidance and
 * accessibility best practice prefer <th scope="row"> for row labels.
 *
 * @param {import('hast').Element} node - The current HAST element node.
 * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
 */
function promoteFirstColumnCellToHeader(node, ctx) {
  if (node.tagName !== "tr" || !Array.isArray(node.children)) return;

  const firstDataCellIndex = node.children.findIndex(
    (child) => child?.type === "element" && child.tagName === "td",
  );

  if (firstDataCellIndex === -1) return;

  const firstDataCell = node.children[firstDataCellIndex];
  const existingClasses = Array.isArray(firstDataCell.properties?.className)
    ? firstDataCell.properties.className
    : [];
  const nonCellClasses = existingClasses.filter(
    (className) => className !== "govuk-table__cell",
  );

  const replacementHeaderCell = {
    ...firstDataCell,
    tagName: "th",
    properties: {
      ...(firstDataCell.properties ?? {}),
      className: [...nonCellClasses, "govuk-table__header"],
      scope: firstDataCell.properties?.scope ?? "row",
    },
  };

  const replacementChildren = [...node.children];
  replacementChildren[firstDataCellIndex] = replacementHeaderCell;

  ctx.replaceNode(node, {
    ...node,
    children: replacementChildren,
  });
}

/**
 * Applies GOV.UK classes and related style cleanup to supported elements.
 *
 * @param {import('hast').Element} node - The current HAST element node.
 * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
 * @param {string[]} classes - GOV.UK classes for the node's tag.
 */
function applyGovukStyles(node, ctx) {
  const classes = TAG_CLASS_MAP[node.tagName];
  if (!classes) return;

  // Only decorate ASCII code fences as GOV.UK inset text blocks.
  if (node.tagName === "pre" && !isAsciiCodeBlock(node)) return;

  // Strip inline highlighter styles so GOV.UK inset styles can apply.
  if (
    (node.tagName === "pre" || node.tagName === "code") &&
    node.properties &&
    "style" in node.properties
  ) {
    delete node.properties.style;
  }

  const existing = Array.isArray(node.properties?.className)
    ? node.properties.className
    : [];

  ctx.setProperty(node, "className", [...existing, ...classes]);
}

/**
 * A satteri HAST plugin that applies GOV.UK Design System CSS classes to all
 * standard HTML elements produced by the Markdown conversion pipeline.
 */
export const govukMarkdown = defineHastPlugin({
  name: "govuk-markdown",
  element: {
    filter: Object.keys(TAG_CLASS_MAP),
    /**
     * Adds the GOV.UK classes for the matched element's tag name.
     *
     * @param {import('hast').Element} node - The matched HAST element node.
     * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
     */
    visit(node, ctx) {
      if (node.tagName === "tr") {
        promoteFirstColumnCellToHeader(node, ctx);
      }

      // Keep responsibilities explicit: render button links first, then apply GOV.UK classes.
      if (renderButtonPrefixedLink(node, ctx)) return;

      applyGovukStyles(node, ctx);
    },
  },
});
