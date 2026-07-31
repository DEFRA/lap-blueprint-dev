import { defineHastPlugin } from "satteri";
import { DETAILS_TABLE_HEADER_TEXT } from "../constants.js";
import { cloneNode, getChildElements, getRowCells } from "../helpers.js";

/**
 * Rewrites a one-column markdown table into a GOV.UK details component.
 *
 * Expected shape:
 * - header text equals `[details]`
 * - exactly one header row and one header cell
 * - exactly two body rows with one cell each
 *
 * The first body row becomes the summary text, and the second becomes the
 * details body content.
 */
export const detailsTablePlugin = defineHastPlugin({
  name: "govuk-markdown-details-table",
  element: {
    filter: ["table"],
    /**
     * @param {import('hast').Element} node - The matched HAST element node.
     * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
     */
    visit(node, ctx) {
      const [thead] = getChildElements(node, "thead");
      const [tbody] = getChildElements(node, "tbody");
      if (!thead || !tbody) return;

      const headerRows = getChildElements(thead, "tr");
      const bodyRows = getChildElements(tbody, "tr");
      if (headerRows.length !== 1 || bodyRows.length !== 2) return;

      const headerCells = getRowCells(headerRows[0]);
      const summaryCells = getRowCells(bodyRows[0]);
      const bodyCells = getRowCells(bodyRows[1]);

      if (
        headerCells.length !== 1 ||
        summaryCells.length !== 1 ||
        bodyCells.length !== 1
      ) {
        return;
      }

      const headerText = ctx.textContent(headerCells[0]).trim().toLowerCase();
      if (headerText !== DETAILS_TABLE_HEADER_TEXT) return;

      ctx.replaceNode(node, {
        type: "element",
        tagName: "details",
        properties: {
          className: ["govuk-details"],
          "data-module": "govuk-details",
        },
        children: [
          {
            type: "element",
            tagName: "summary",
            properties: {
              className: ["govuk-details__summary"],
            },
            children: [
              {
                type: "element",
                tagName: "span",
                properties: {
                  className: ["govuk-details__summary-text"],
                },
                children: Array.isArray(summaryCells[0].children)
                  ? summaryCells[0].children.map(cloneNode)
                  : [],
              },
            ],
          },
          {
            type: "element",
            tagName: "div",
            properties: {
              className: ["govuk-details__text"],
            },
            children: Array.isArray(bodyCells[0].children)
              ? bodyCells[0].children.map(cloneNode)
              : [],
          },
        ],
      });
    },
  },
});
