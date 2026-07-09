/**
 * @typedef {Object} MarkdownModule
 * @property {{ title?: string, order?: number, group?: string, groupOrder?: number }=} frontmatter
 */

/**
 * @typedef {Object} NavPage
 * @property {string|null} parentPath
 * @property {string} routePath
 * @property {string} href
 * @property {string} label
 * @property {string} slug
 * @property {number} order
 * @property {string} group
 * @property {number} groupOrder
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
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/**
 * Builds normalized navigation pages from markdown modules.
 * @param {Record<string, unknown>} markdownModules
 * @param {string} normalizedBase
 * @returns {NavPage[]}
 */
export function buildNavPages(markdownModules, normalizedBase) {
  return Object.entries(markdownModules)
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
      const slug = segments[segments.length - 1] || "";
      const title = markdownModule.frontmatter?.title;
      const order = Number.isFinite(markdownModule.frontmatter?.order)
        ? Number(markdownModule.frontmatter?.order)
        : 0;
      const group =
        typeof markdownModule.frontmatter?.group === "string"
          ? markdownModule.frontmatter.group.trim()
          : "";
      const groupOrder = Number.isFinite(markdownModule.frontmatter?.groupOrder)
        ? Number(markdownModule.frontmatter?.groupOrder)
        : 0;

      return {
        parentPath: parentRoutePath,
        routePath: pageRoutePath,
        href: normalizeHref(
          withBase(`/${normalizedRoutePath}`, normalizedBase),
        ),
        label:
          typeof title === "string" && title.trim() ? title : toLabel(slug),
        slug,
        order,
        group,
        groupOrder,
      };
    })
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
}

/**
 * Groups top-level pages by frontmatter group.
 * @param {NavPage[]} markdownPages
 * @returns {NavGroup[]}
 */
export function buildTopLevelGroups(markdownPages) {
  const topLevelPages = markdownPages.filter(
    (page) => page.parentPath === null || page.parentPath === "/",
  );
  const grouped = topLevelPages.reduce((groupsByName, page) => {
    const existingGroup = groupsByName.get(page.group);

    if (existingGroup) {
      existingGroup.pages.push(page);
      existingGroup.pages.sort(
        (a, b) => a.order - b.order || a.label.localeCompare(b.label),
      );
      existingGroup.order = Math.min(existingGroup.order, page.groupOrder);
      return groupsByName;
    }

    groupsByName.set(page.group, {
      name: page.group,
      order: page.groupOrder,
      pages: [page],
    });

    return groupsByName;
  }, new Map());

  return Array.from(grouped.values()).sort(
    (a, b) => a.order - b.order || a.name.localeCompare(b.name),
  );
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
      existingPages.sort(
        (a, b) => a.order - b.order || a.label.localeCompare(b.label),
      );
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
  return Object.entries(markdownModules).reduce((labels, [path, module]) => {
    const markdownModule = /** @type {MarkdownModule} */ (module || {});
    const relativePath = path.replace("/src/pages/", "");
    const routePath = relativePath.replace(/\.md$/, "");
    const normalizedRoutePath = normalizeRoutePath(routePath);
    const slug = routePath.split("/").filter(Boolean).pop() || "";
    const title = markdownModule.frontmatter?.title;
    const route = normalizeHref(
      withBase(`/${normalizedRoutePath}`, normalizedBase),
    );

    labels.set(
      route,
      typeof title === "string" && title.trim() ? title : toLabel(slug),
    );
    return labels;
  }, new Map());
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
