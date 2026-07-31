/**
 * Returns the element children of a HAST node, optionally filtered by tag name.
 *
 * @param {import('hast').Element} node - The node whose child elements to read.
 * @param {string} [tagName] - Optional tag name to filter by.
 * @returns {import('hast').Element[]} Matching child elements.
 */
export function getChildElements(node, tagName) {
  if (!Array.isArray(node.children)) return [];

  return node.children.filter(
    (child) =>
      child?.type === "element" && (!tagName || child.tagName === tagName),
  );
}

/**
 * Returns all header or data cells for a table row.
 *
 * @param {import('hast').Element} rowNode - The table row to inspect.
 * @returns {import('hast').Element[]} The row's table cells.
 */
export function getRowCells(rowNode) {
  return getChildElements(rowNode).filter(
    (child) => child.tagName === "th" || child.tagName === "td",
  );
}

/**
 * Deep clones a HAST subtree.
 *
 * @param {import('hast').Nodes} node - The HAST node to clone.
 * @returns {import('hast').Nodes} The cloned node.
 */
export function cloneNode(node) {
  if (!node || typeof node !== "object") return node;

  return {
    ...node,
    properties: node.properties ? { ...node.properties } : node.properties,
    children: Array.isArray(node.children)
      ? node.children.map(cloneNode)
      : node.children,
  };
}

/**
 * Determines whether a <pre> node wraps a code block marked as ASCII.
 *
 * @param {import('hast').Element} node - The HAST node to inspect.
 * @returns {boolean} True when the node is a preformatted ASCII code block.
 */
export function isAsciiCodeBlock(node) {
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
 * Returns class names with stable deduplication.
 *
 * @param {unknown} existingClasses - Existing node className property.
 * @param {string[]} nextClasses - Class names to add.
 * @returns {string[]} Merged unique class names.
 */
export function mergeClassNames(existingClasses, nextClasses) {
  const existing = Array.isArray(existingClasses) ? existingClasses : [];
  return [...new Set([...existing, ...nextClasses])];
}
