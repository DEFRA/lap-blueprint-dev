import { defineHastPlugin } from "satteri";
import { BUTTON_LINK_PREFIX } from "../constants.js";

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
 * Renders links prefixed with `button!` as GOV.UK button-styled anchors.
 */
export const buttonLinkPlugin = defineHastPlugin({
  name: "govuk-markdown-button-link",
  element: {
    filter: ["a"],
    /**
     * @param {import('hast').Element} node - The matched HAST element node.
     * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
     */
    visit(node, ctx) {
      const text = ctx.textContent(node).trim();
      if (!BUTTON_LINK_TEXT_PATTERN.test(text)) return;

      const existing = Array.isArray(node.properties?.className)
        ? node.properties.className
        : [];
      const cleanLabel = text.replace(BUTTON_LINK_PREFIX, "").trimStart();
      const nonLinkClasses = existing.filter(
        (className) => className !== "govuk-link",
      );

      ctx.replaceNode(node, {
        type: "element",
        tagName: "a",
        properties: {
          ...(node.properties ?? {}),
          className: [...nonLinkClasses, "govuk-button"],
          role: "button",
          "data-module": "govuk-button",
        },
        children: [{ type: "text", value: cleanLabel }],
      });
    },
  },
});
