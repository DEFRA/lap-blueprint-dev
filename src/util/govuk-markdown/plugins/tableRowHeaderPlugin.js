import { defineHastPlugin } from "satteri";

/**
 * Ensures each table row's first data cell is rendered as a row header.
 *
 * Markdown tables emit the first body column as <td>; GOV.UK guidance and
 * accessibility best practice prefer <th scope="row"> for row labels.
 */
export const tableRowHeaderPlugin = defineHastPlugin({
  name: "govuk-markdown-table-row-header",
  element: {
    filter: ["tr"],
    /**
     * @param {import('hast').Element} node - The matched HAST element node.
     */
    visit(node) {
      if (!Array.isArray(node.children)) return;

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

      node.children[firstDataCellIndex] = {
        ...firstDataCell,
        tagName: "th",
        properties: {
          ...(firstDataCell.properties ?? {}),
          className: [...nonCellClasses, "govuk-table__header"],
          scope: firstDataCell.properties?.scope ?? "row",
        },
      };
    },
  },
});
