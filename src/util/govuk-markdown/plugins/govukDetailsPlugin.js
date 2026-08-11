import { defineHastPlugin } from "satteri";
import {
  asArray,
  getChildElements,
  mergeProperties,
} from "../helpers.js";

/**
 * Returns `nodes[0]` unchanged when it is already a sole `<tagName>` element;
 * otherwise wraps all nodes in a new `<tagName>` element with empty properties.
 *
 * @param {import('hast').ElementContent[]} nodes - Child nodes to inspect or wrap.
 * @param {string} tagName - The expected or target element tag name.
 * @returns {import('hast').Element} The matched or newly created wrapper element.
 */
function getOrCreateWrapper(nodes, tagName) {
  return nodes.length === 1 &&
    nodes[0].type === "element" &&
    nodes[0].tagName === tagName
    ? nodes[0]
    : {
        type: "element",
        tagName: tagName,
        properties: {},
        children: nodes,
      };
}

/**
 * Transforms `<details>`/`<summary>` elements into GOV.UK Design System equivalents.
 */
export const govukDetailsPlugin = defineHastPlugin({
  name: "govuk-markdown-details",
  element: {
    filter: ["details"],
    /**
     * @param {import('hast').Element} node - The matched HAST element node.
     * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
     */
    visit(node, ctx) {
      const summaryNode = getChildElements(node, "summary")[0];
      if (!summaryNode) return;

      const contentChildren = asArray(node.children).filter(
        (child) => child !== summaryNode,
      );
      const span = getOrCreateWrapper(summaryNode.children, "span");
      const div = getOrCreateWrapper(contentChildren, "div");

      ctx.replaceNode(node, {
        type: "element",
        tagName: "details",
        properties: mergeProperties(node.properties, {
          className: ["govuk-details"],
        }),
        children: [
          {
            type: "element",
            tagName: "summary",
            properties: mergeProperties(summaryNode.properties, {
              className: ["govuk-details__summary"],
            }),
            children: [
              {
                type: "element",
                tagName: "span",
                properties: mergeProperties(span.properties, {
                  className: ["govuk-details__summary-text"],
                }),
                children: span.children,
              },
            ],
          },
          {
            type: "element",
            tagName: "div",
            properties: mergeProperties(div.properties, {
              className: ["govuk-details__text"],
            }),
            children: div.children,
          },
        ],
      });
    },
  },
});
