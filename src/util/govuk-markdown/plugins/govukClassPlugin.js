import { defineHastPlugin } from "satteri";
import { TAG_CLASS_MAP } from "../constants.js";
import { isAsciiCodeBlock, mergeClassNames } from "../helpers.js";

/**
 * Applies GOV.UK classes and related style cleanup to supported elements.
 */
export const govukClassPlugin = defineHastPlugin({
  name: "govuk-markdown-classes",
  element: {
    filter: Object.keys(TAG_CLASS_MAP),
    /**
     * @param {import('hast').Element} node - The matched HAST element node.
     * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
     */
    visit(node, ctx) {
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

      ctx.setProperty(
        node,
        "className",
        mergeClassNames(node.properties?.className, classes),
      );
    },
  },
});
