import { defineHastPlugin } from "satteri";
import { asArray, cloneNode } from "../helpers.js";

let nextId = 0;

/**
 * Rewrites a markdown task list into a GOV.UK checkbox group.
 *
 * Expected shape:
 * - unordered list with class `contains-task-list`
 * - list items with class `task-list-item` containing a single checkbox input
 */
export const taskListPlugin = defineHastPlugin({
  name: "govuk-markdown-details-table",
  element: {
    filter: ["ul"],
    /**
     * @param {import('hast').Element} node - The matched HAST element node.
     * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
     */
    visit(node, ctx) {
      if (!node.properties.className?.includes("contains-task-list")) return;

      /** @type {import('hast').ElementContent[]} */
      const items = [];
      const groupId = ++nextId;
      for (const child of node.children) {
        if (child.type !== "element" || child.tagName !== "li") continue;
        const children = asArray(child.children);
        if (!child.properties.className?.includes("task-list-item")) {
          items.push({
            type: "element",
            tagName: "div",
            properties: {
              className: ["govuk-checkboxes__divider"],
            },
            children: children.map(cloneNode),
          });
        } else {
          const input = children[0];
          const id = ++nextId;
          if (input.type !== "element" || input.tagName !== "input") return;
          items.push({
            type: "element",
            tagName: "div",
            properties: {
              className: ["govuk-checkboxes__item"],
            },
            children: [
              {
                type: "element",
                tagName: "input",
                properties: {
                  className: ["govuk-checkboxes__input"],
                  id: `checkbox-${id}`,
                  name: `checkboxes-${groupId}`,
                  checked: input.properties.checked ?? false,
                  type: "checkbox",
                },
              },
              {
                type: "element",
                tagName: "label",
                properties: {
                  className: ["govuk-label", "govuk-checkboxes__label"],
                  for: `checkbox-${id}`,
                },
                children: children.slice(1).map(cloneNode),
              },
            ],
          });
        }
      }

      ctx.replaceNode(node, {
        type: "element",
        tagName: "div",
        properties: {
          className: ["govuk-checkboxes"],
          "data-module": "govuk-checkboxes",
        },
        children: items,
      });
    },
  },
});
