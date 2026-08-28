/**
 * @typedef {Object} MarkdownModule
 * @property {{ title?: string, order?: number, group?: string, hidden?: boolean, redirect?: string }=} frontmatter
 */

/**
 * @typedef {Object} NavPage
 * @property {string|null} parentPath
 * @property {string} routePath
 * @property {string} href
 * @property {string} linkHref
 * @property {string} label
 * @property {string} slug
 * @property {number} order
 * @property {string} group
 */

/**
 * @typedef {Object} NavGroup
 * @property {string} name
 * @property {number} order
 * @property {NavPage[]} pages
 */

/**
 * @typedef {Object} Breadcrumb
 * @property {string} href
 * @property {string} label
 * @property {boolean} isLast
 */

/**
 * Normalizes a base URL so it always starts with one slash and has no trailing slash.
 * @param {string | undefined} base
 * @returns {string}
 */
export function getNormalizedBase(base) {
  const value = base || "/";
  return `/${value}`.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
}

/**
 * Normalizes a route-like path.
 * @param {string} path
 * @returns {string}
 */
export function normalizePath(path) {
  return path.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
}

/**
 * Normalizes a URL path and enforces a trailing slash for non-root paths.
 * @param {string} path
 * @returns {string}
 */
export function normalizeHref(path) {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? "/" : `${normalizedPath}/`;
}

/**
 * Prefixes a route path with the app base path.
 * @param {string} path
 * @param {string} normalizedBase
 * @returns {string}
 */
export function withBase(path, normalizedBase) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedBase === "/") {
    return normalizedPath;
  }

  return `${normalizedBase}${normalizedPath}`;
}

/**
 * Removes the app base prefix from a path.
 * @param {string} path
 * @param {string} normalizedBase
 * @returns {string}
 */
export function stripBase(path, normalizedBase) {
  if (normalizedBase === "/") {
    return path;
  }

  return path.startsWith(normalizedBase)
    ? path.slice(normalizedBase.length)
    : path;
}

/**
 * Converts a markdown route into its final route path segment.
 * @param {string} routePath
 * @returns {string}
 */
export function normalizeRoutePath(routePath) {
  return routePath.replace(/(^|\/)index$/, "").replace(/^\//, "");
}

/**
 * Converts a slug-like value into a human-readable label.
 * @param {string} value
 * @returns {string}
 */
export function toLabel(value) {
  return value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

/**
 * Comparator that sorts by order ascending, then label alphabetically.
 * @param {{ order: number, label: string }} a
 * @param {{ order: number, label: string }} b
 * @returns {number}
 */
const byOrderThenLabel = (a, b) =>
  a.order - b.order || a.label.localeCompare(b.label);

/**
 * Parses a finite numeric value from frontmatter-like input.
 * @param {unknown} value
 * @param {number} fallback
 * @returns {number}
 */
function toFiniteNumber(value, fallback) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
}

/**
 * Builds normalized navigation pages from markdown modules.
 * @param {Record<string, unknown>} markdownModules
 * @param {string} normalizedBase
 * @returns {NavPage[]}
 */
export function buildNavPages(markdownModules, normalizedBase) {
  return Object.entries(markdownModules)
    .filter(([path, module]) => {
      if (path.split("/").some((x) => x.startsWith("_"))) {
        return false;
      }

      const markdownModule = /** @type {MarkdownModule} */ (module || {});
      return markdownModule.frontmatter?.hidden !== true;
    })
    .map(([path, module]) => {
      const markdownModule = /** @type {MarkdownModule} */ (module || {});
      const relativePath = path.replace("/src/pages/", "");
      const routePath = relativePath.replace(/\.md$/, "");
      const normalizedRoutePath = normalizeRoutePath(routePath);
      const pageRoutePath = normalizePath(`/${normalizedRoutePath}`);
      const parentRoutePath =
        pageRoutePath === "/"
          ? null
          : pageRoutePath.split("/").slice(0, -1).join("/") || "/";
      const segments = routePath.split("/").filter(Boolean);
      const slug = segments.at(-1) ?? "";
      const title = markdownModule.frontmatter?.title;
      const order = toFiniteNumber(markdownModule.frontmatter?.order, 0);
      const group =
        typeof markdownModule.frontmatter?.group === "string"
          ? markdownModule.frontmatter.group.trim()
          : "";
      const redirect =
        typeof markdownModule.frontmatter?.redirect === "string"
          ? markdownModule.frontmatter.redirect.trim()
          : "";
      const href = normalizeHref(
        withBase(`/${normalizedRoutePath}`, normalizedBase),
      );

      return {
        parentPath: parentRoutePath,
        routePath: pageRoutePath,
        href,
        linkHref: redirect ? normalizeHref(withBase(redirect, normalizedBase)) : href,
        label:
          typeof title === "string" && title.trim() ? title : toLabel(slug),
        slug,
        order,
        group,
      };
    })
    .sort(byOrderThenLabel);
}

/**
 * Groups a set of sibling pages by frontmatter group. Ungrouped pages (group
 * is an empty string) are always returned first as a group with a null name.
 * Remaining groups are ordered by the lowest `order` value among their
 * pages, and pages within each group are ordered by their own `order`.
 * @param {NavPage[]} pages
 * @returns {NavGroup[]}
 */
export function buildPageGroups(pages) {
  const groupsByName = pages.reduce((groupsByName, page) => {
    const existingGroup = groupsByName.get(page.group);

    if (existingGroup) {
      existingGroup.pages.push(page);
      existingGroup.pages.sort(byOrderThenLabel);
      existingGroup.order = Math.min(existingGroup.order, page.order);
      return groupsByName;
    }

    groupsByName.set(page.group, {
      name: page.group,
      order: page.order,
      pages: [page],
    });

    return groupsByName;
  }, new Map());

  return Array.from(groupsByName.values()).sort((a, b) => {
    if (a.name === "" || b.name === "") {
      return a.name === b.name ? 0 : a.name === "" ? -1 : 1;
    }

    return a.order - b.order || a.name.localeCompare(b.name);
  });
}

/**
 * Builds a map of child pages keyed by parent route path.
 * @param {NavPage[]} markdownPages
 * @returns {Map<string, NavPage[]>}
 */
export function buildChildPagesByParent(markdownPages) {
  return markdownPages
    .filter((page) => page.parentPath !== null)
    .reduce((pagesByParentPath, page) => {
      const parentPath = /** @type {string} */ (page.parentPath);
      const existingPages = pagesByParentPath.get(parentPath) || [];

      existingPages.push(page);
      existingPages.sort(byOrderThenLabel);
      pagesByParentPath.set(parentPath, existingPages);

      return pagesByParentPath;
    }, new Map());
}

/**
 * Creates a route-to-label map for breadcrumb rendering.
 * @param {Record<string, unknown>} markdownModules
 * @param {string} normalizedBase
 * @returns {Map<string, string>}
 */
export function buildLabelsByRoute(markdownModules, normalizedBase) {
  return new Map(
    buildNavPages(markdownModules, normalizedBase).map(({ href, label }) => [
      href,
      label,
    ]),
  );
}

/**
 * Builds breadcrumb data for the current path.
 * @param {string} currentPath
 * @param {Map<string, string>} labelsByRoute
 * @param {string} normalizedBase
 * @returns {Breadcrumb[]}
 */
export function buildBreadcrumbs(currentPath, labelsByRoute, normalizedBase) {
  const routePath = normalizePath(
    stripBase(currentPath, normalizedBase) || "/",
  );
  const parts = routePath.split("/").filter(Boolean);
  const segments = ["", ...parts];

  return segments.map((segment, index) => {
    const partialPath = `/${segments.slice(1, index + 1).join("/")}`;
    const href = normalizeHref(withBase(partialPath, normalizedBase));
    const label =
      index === 0
        ? labelsByRoute.get(href) || "Home"
        : labelsByRoute.get(href) || toLabel(segment);

    return {
      href,
      label,
      isLast: index === segments.length - 1,
    };
  });
}
