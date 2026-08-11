import { defineHastPlugin } from "satteri";
import { asArray, mergeProperties } from "../helpers";

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
      const firstDataCellIndex = asArray(node.children).findIndex(
        (child) => child?.type === "element" && child.tagName === "td",
      );

      if (firstDataCellIndex === -1) return;

      const firstDataCell = node.children[firstDataCellIndex];
      const existingClasses = asArray(firstDataCell.properties?.className);
      const nonCellClasses = existingClasses.filter(
        (className) => className !== "govuk-table__cell",
      );

      node.children[firstDataCellIndex] = {
        ...firstDataCell,
        tagName: "th",
        properties: mergeProperties(firstDataCell.properties, {
          className: [...nonCellClasses, "govuk-table__header"],
          scope: firstDataCell.properties?.scope ?? "row",
        }),
      };
    },
  },
});
