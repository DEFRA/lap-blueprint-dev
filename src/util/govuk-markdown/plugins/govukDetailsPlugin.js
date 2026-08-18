import { defineHastPlugin } from "satteri";
import { asArray, getChildElements, mergeProperties } from "../helpers.js";

const SUMMARY_TEXT_TAG_NAMES = new Set([
  "span",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
]);

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
 * Preserves a sole summary span or heading, ignoring surrounding whitespace;
 * otherwise wraps all summary content in a new span.
 *
 * @param {import('hast').ElementContent[]} nodes - Summary children to inspect.
 * @returns {import('hast').Element} The existing summary text element or a new span.
 */
function getOrCreateSummaryText(nodes) {
  const meaningfulNodes = nodes.filter(
    (node) => node.type !== "text" || node.value.trim().length > 0,
  );
  const summaryTextNode = meaningfulNodes[0];

  return meaningfulNodes.length === 1 &&
    summaryTextNode.type === "element" &&
    SUMMARY_TEXT_TAG_NAMES.has(summaryTextNode.tagName)
    ? summaryTextNode
    : getOrCreateWrapper(nodes, "span");
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
      const summaryText = getOrCreateSummaryText(summaryNode.children);
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
                tagName: summaryText.tagName,
                properties: mergeProperties(summaryText.properties, {
                  className: ["govuk-details__summary-text"],
                }),
                children: summaryText.children,
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
