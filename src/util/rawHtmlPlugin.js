import { fromHtml } from "hast-util-from-html";
import { toHtml } from "hast-util-to-html";
import { defineHastPlugin } from "satteri";

const PROCESSED_PARENTS_KEY = "govukMarkdownRawHtmlProcessedParents";

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
    const parent = ctx.parent(node);
    if (!parent) return;

    const processedParents =
      ctx.data[PROCESSED_PARENTS_KEY] instanceof WeakSet
        ? ctx.data[PROCESSED_PARENTS_KEY]
        : (ctx.data[PROCESSED_PARENTS_KEY] = new WeakSet());

    if (processedParents.has(parent)) return;

    processedParents.add(parent);
    materializeParentChildren(parent, ctx);
  },
});
