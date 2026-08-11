/**
 * Returns the element children of a HAST node, optionally filtered by tag name.
 *
 * @param {import('hast').Element} node - The node whose child elements to read.
 * @param {string} [tagName] - Optional tag name to filter by.
 * @returns {import('hast').Element[]} Matching child elements.
 */
export function getChildElements(node, tagName) {
  return asArray(node.children).filter(
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
    children: asArray(node.children).map(cloneNode),
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

  const classNames = asArray(codeChild.properties.className);

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
  const existing = asArray(existingClasses);
  return [...new Set([...existing, ...nextClasses])];
}

/**
 * Shallow-merges two HAST property bags into a new object.
 *
 * Uses property-aware merge behavior for known composite properties:
 * - className: merged with stable deduplication.
 *
 * @param {import('hast').Properties|undefined} existingProperties - Existing element properties.
 * @param {import('hast').Properties|undefined} nextProperties - Properties to apply on top.
 * @returns {import('hast').Properties} Merged properties.
 */
export function mergeProperties(existingProperties, nextProperties) {
  const mergedProperties = {
    ...(existingProperties ?? {}),
    ...(nextProperties ?? {}),
  };

  const hasExistingClassName =
    existingProperties && "className" in existingProperties;
  const hasNextClassName = nextProperties && "className" in nextProperties;

  if (hasExistingClassName || hasNextClassName) {
    mergedProperties.className = mergeClassNames(
      existingProperties?.className,
      asArray(nextProperties?.className),
    );
  }

  return mergedProperties;
}

/**
 * Converts a value to an array, preserving iterable values.
 *
 * @template T
 * @param {T|T[]|Iterable<T>|null|undefined} value - The value to convert to an array.
 * @returns {T[]} The value as an array.
 */
export function asArray(value) {
  if (Array.isArray(value)) return value;
  if (Symbol.iterator in Object(value)) return Array.from(value);
  if (value === undefined || value === null) return [];
  return [value];
}
