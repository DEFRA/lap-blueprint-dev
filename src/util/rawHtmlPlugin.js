import { fromHtml } from "hast-util-from-html";
import { toHtml } from "hast-util-to-html";
import { defineHastPlugin } from "satteri";

const DOC_MATERIALIZED_KEY = "govukMarkdownRawHtmlDocMaterialized";

/**
 * Rebuilds a parent's children by serializing the full sibling fragment and
 * reparsing it as HTML.
 *
 * This preserves nesting when Markdown emits split raw nodes such as opening
 * and closing tags around intervening element nodes.
 *
 * @param {import('hast').Parent} parent - The parent whose children should be rebuilt.
 * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
 */
function materializeParentChildren(parent, ctx) {
  const originalChildren = [...parent.children];
  const firstChild = originalChildren[0];
  if (!firstChild) return;

  const html = toHtml(originalChildren, { allowDangerousHtml: true });
  const fragment = fromHtml(html, { fragment: true });

  ctx.insertBefore(firstChild, fragment.children);

  for (const child of originalChildren) {
    ctx.removeNode(child);
  }
}

/**
 * Returns the highest parent reachable from the current node.
 *
 * @param {import('hast').Raw} node - Starting raw node.
 * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
 * @returns {import('hast').Parent | undefined} Topmost parent, usually the root.
 */
function getTopmostParent(node, ctx) {
  const initialParent = ctx.parent(node);
  if (!initialParent) return undefined;

  let topParent = initialParent;
  let parent = ctx.parent(topParent);
  while (parent) {
    topParent = parent;
    parent = ctx.parent(topParent);
  }

  return topParent;
}

/**
 * Materializes raw HTML fragments into concrete HAST nodes so later element
 * visitors can normalize and decorate them.
 */
export const rawHtmlPlugin = defineHastPlugin({
  name: "govuk-markdown-raw-html",
  /**
   * @param {import('hast').Raw} node - The matched raw HAST node.
   * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
   */
  raw(node, ctx) {
    if (ctx.data[DOC_MATERIALIZED_KEY]) return;

    const topParent = getTopmostParent(node, ctx);
    if (!topParent) return;

    ctx.data[DOC_MATERIALIZED_KEY] = true;
    materializeParentChildren(topParent, ctx);
  },
});
