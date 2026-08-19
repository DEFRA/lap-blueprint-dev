import { defineHastPlugin } from "satteri";

const SITE_ROOT_LINK_PREFIX = "~/";

/**
 * Removes the trailing slash from a base URL, except for the site root.
 *
 * @param {string} baseUrl - Astro base URL.
 * @returns {string} Normalized base URL.
 */
function normalizeBaseUrl(baseUrl) {
  if (!baseUrl || baseUrl === "/") return "";
  return baseUrl.replace(/\/$/, "");
}

/**
 * Resolves a Markdown root-relative link against the configured Astro base URL.
 *
 * @param {unknown} href - Link href value from HAST properties.
 * @param {string} baseUrl - Astro base URL.
 * @returns {unknown} Resolved href, or the original value when unsupported.
 */
function resolveSiteRootHref(href, baseUrl) {
  if (typeof href !== "string" || !href.startsWith(SITE_ROOT_LINK_PREFIX)) {
    return href;
  }

  return `${normalizeBaseUrl(baseUrl)}/${href.slice(SITE_ROOT_LINK_PREFIX.length)}`;
}

/**
 * Rewrites Markdown links that start with `~/` to the configured site root.
 *
 * @param {{baseUrl: string}} options - Site URL options.
 * @returns {import('satteri').HastPlugin} Configured HAST plugin.
 */
export function rootRelativeLinkPlugin({ baseUrl }) {
  return defineHastPlugin({
    name: "govuk-markdown-root-relative-links",
    element: {
      filter: ["a"],
      /**
       * @param {import('hast').Element} node - The matched anchor element.
       * @param {import('satteri').HastVisitorContext} ctx - The visitor context.
       */
      visit(node, ctx) {
        const href = resolveSiteRootHref(node.properties?.href, baseUrl);

        if (href !== node.properties?.href) {
          ctx.setProperty(node, "href", href);
        }
      },
    },
  });
}
