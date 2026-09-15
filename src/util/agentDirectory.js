/**
 * Progressive-enhancement behaviour for the AI directory table.
 *
 * The table, filters and rows are rendered statically in the Markdown page so
 * the directory is fully usable without JavaScript. This module adds
 * client-side searching, faceted filtering, sortable columns and removable
 * selected-filter tags on top of that static markup.
 */

const ROOT_ID = "agent-directory";
const PAGE_SIZE = 10;

/**
 * Reads the checked filter values grouped by their `data-filter` facet name.
 *
 * @param {NodeListOf<HTMLInputElement>} checkboxes - Facet checkboxes.
 * @returns {Map<string, Set<string>>} Checked values keyed by facet name.
 */
function getSelectedFacets(checkboxes) {
  /** @type {Map<string, Set<string>>} */
  const facets = new Map();
  for (const checkbox of checkboxes) {
    if (!checkbox.checked) continue;
    const facet = checkbox.dataset.filter ?? "";
    if (!facets.has(facet)) facets.set(facet, new Set());
    facets.get(facet)?.add(checkbox.value);
  }
  return facets;
}

/**
 * Determines whether a row satisfies the active search term and facets.
 *
 * @param {HTMLTableRowElement} row - Candidate table body row.
 * @param {string} searchTerm - Lower-cased free-text search term.
 * @param {Map<string, Set<string>>} facets - Selected facet values by name.
 * @returns {boolean} True when the row should remain visible.
 */
function rowMatches(row, searchTerm, facets) {
  if (searchTerm && !(row.textContent ?? "").toLowerCase().includes(searchTerm)) {
    return false;
  }

  const selectedTypes = facets.get("type");
  if (selectedTypes && selectedTypes.size > 0 && !selectedTypes.has(row.dataset.type ?? "")) {
    return false;
  }

  const selectedTech = facets.get("tech");
  if (selectedTech && selectedTech.size > 0) {
    const rowTech = (row.dataset.tech ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    if (!rowTech.some((value) => selectedTech.has(value))) return false;
  }

  return true;
}

/**
 * Builds the removable selected-filter tags for the active search and facets.
 *
 * @param {object} refs - Cached directory elements.
 * @param {HTMLElement} refs.selectedContainer - Tag container element.
 * @param {HTMLInputElement} refs.searchInput - Free-text search input.
 * @param {NodeListOf<HTMLInputElement>} refs.checkboxes - Facet checkboxes.
 * @param {() => void} apply - Callback to re-run filtering after a removal.
 * @returns {void}
 */
function renderSelectedTags(refs, apply) {
  const { selectedContainer, searchInput, checkboxes } = refs;
  selectedContainer.textContent = "";

  /** @type {Array<{ label: string, remove: () => void }>} */
  const tags = [];

  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    tags.push({
      label: `Search: ${searchTerm}`,
      remove: () => {
        searchInput.value = "";
      },
    });
  }

  for (const checkbox of checkboxes) {
    if (!checkbox.checked) continue;
    tags.push({
      label: checkbox.value,
      remove: () => {
        checkbox.checked = false;
      },
    });
  }

  selectedContainer.hidden = tags.length === 0;

  for (const tag of tags) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lap-agent-tag";
    button.innerHTML = `<span class="govuk-visually-hidden">Remove filter</span>${tag.label}<span aria-hidden="true"> \u00d7</span>`;
    button.addEventListener("click", () => {
      tag.remove();
      apply();
    });
    selectedContainer.append(button);
  }
}

/**
 * Computes which page numbers and ellipses to show in the pager.
 *
 * @param {number} current - The active page (1-based).
 * @param {number} total - Total number of pages.
 * @returns {Array<number | "ellipsis">} Ordered pagination items.
 */
function getPageItems(current, total) {
  const wanted = new Set([1, total, current, current - 1, current + 1]);
  const pages = [...wanted].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);

  /** @type {Array<number | "ellipsis">} */
  const items = [];
  let previous = 0;
  for (const page of pages) {
    if (page - previous > 1) items.push("ellipsis");
    items.push(page);
    previous = page;
  }
  return items;
}

const PREV_ICON =
  '<svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13"><path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.4141z"></path></svg>';
const NEXT_ICON =
  '<svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13"><path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path></svg>';

/**
 * Renders the GOV.UK pagination control for the current filtered result set.
 *
 * @param {HTMLElement | null} container - The pagination nav element.
 * @param {number} current - The active page (1-based).
 * @param {number} total - Total number of pages.
 * @param {(page: number) => void} onNavigate - Called with the target page.
 * @returns {void}
 */
function renderPagination(container, current, total, onNavigate) {
  if (!container) return;
  if (total <= 1) {
    container.hidden = true;
    container.textContent = "";
    return;
  }

  container.hidden = false;
  const parts = [];

  parts.push(
    `<div class="govuk-pagination__prev"${current === 1 ? " hidden" : ""}>` +
      `<a class="govuk-link govuk-pagination__link" href="#" rel="prev" data-page="${current - 1}">` +
      `${PREV_ICON}<span class="govuk-pagination__link-title">Previous<span class="govuk-visually-hidden"> page</span></span></a></div>`,
  );

  parts.push('<ul class="govuk-pagination__list">');
  for (const item of getPageItems(current, total)) {
    if (item === "ellipsis") {
      parts.push('<li class="govuk-pagination__item govuk-pagination__item--ellipses">\u22ef</li>');
      continue;
    }
    const isCurrent = item === current;
    parts.push(
      `<li class="govuk-pagination__item${isCurrent ? " govuk-pagination__item--current" : ""}">` +
        `<a class="govuk-link govuk-pagination__link" href="#" data-page="${item}" aria-label="Page ${item}"${isCurrent ? ' aria-current="page"' : ""}>${item}</a></li>`,
    );
  }
  parts.push("</ul>");

  parts.push(
    `<div class="govuk-pagination__next"${current === total ? " hidden" : ""}>` +
      `<a class="govuk-link govuk-pagination__link" href="#" rel="next" data-page="${current + 1}">` +
      `<span class="govuk-pagination__link-title">Next<span class="govuk-visually-hidden"> page</span></span>${NEXT_ICON}</a></div>`,
  );

  container.innerHTML = parts.join("");
  for (const link of container.querySelectorAll("[data-page]")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = Number(link.getAttribute("data-page"));
      if (!Number.isNaN(page)) onNavigate(page);
    });
  }
}

/**
 * Sorts the table body rows by a column and updates the header sort state.
 *
 * @param {HTMLTableElement} table - The directory table.
 * @param {number} columnIndex - Zero-based index of the column to sort by.
 * @param {"ascending" | "descending"} direction - Sort direction.
 * @returns {void}
 */
function sortRows(table, columnIndex, direction) {
  const tbody = table.tBodies[0];
  const sorted = Array.from(tbody.rows).sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex]?.textContent?.trim().toLowerCase() ?? "";
    const cellB = rowB.cells[columnIndex]?.textContent?.trim().toLowerCase() ?? "";
    const comparison = cellA.localeCompare(cellB, "en", { numeric: true });
    return direction === "ascending" ? comparison : -comparison;
  });

  for (const row of sorted) tbody.append(row);

  const headers = table.tHead?.rows[0]?.cells ?? [];
  for (const header of headers) {
    if (!header.hasAttribute("data-sortable")) continue;
    header.setAttribute(
      "aria-sort",
      header.cellIndex === columnIndex ? direction : "none",
    );
  }
}

/**
 * Enhances sortable headers with a keyboard-accessible sort button.
 *
 * @param {HTMLTableElement} table - The directory table.
 * @param {() => void} onSorted - Called after a sort so the view can refresh.
 * @returns {void}
 */
function initSorting(table, onSorted) {
  const headers = table.tHead?.rows[0]?.cells ?? [];
  for (const header of headers) {
    if (!header.hasAttribute("data-sortable")) continue;

    const label = header.textContent?.trim() ?? "";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lap-agent-sort";
    button.textContent = label;
    header.textContent = "";
    header.append(button);
    header.setAttribute("aria-sort", "none");

    button.addEventListener("click", () => {
      const current = header.getAttribute("aria-sort");
      const direction = current === "ascending" ? "descending" : "ascending";
      sortRows(table, header.cellIndex, direction);
      onSorted();
    });
  }
}

/**
 * Initialises searching, filtering, sorting and pagination for the directory.
 *
 * Does nothing when the directory markup is absent from the current page.
 *
 * @returns {void}
 */
export function initAgentDirectory() {
  const root = document.getElementById(ROOT_ID);
  if (!root) return;

  const table = /** @type {HTMLTableElement | null} */ (root.querySelector("table"));
  const searchInput = /** @type {HTMLInputElement | null} */ (
    root.querySelector("[data-agent-search]")
  );
  if (!table || !table.tBodies[0] || !searchInput) return;

  const tbody = table.tBodies[0];
  const totalRows = tbody.rows.length;
  const checkboxes = /** @type {NodeListOf<HTMLInputElement>} */ (
    root.querySelectorAll("input[type='checkbox'][data-filter]")
  );
  const countEl = /** @type {HTMLElement | null} */ (
    root.querySelector("[data-agent-count]")
  );
  const noResultsEl = /** @type {HTMLElement | null} */ (
    root.querySelector("[data-no-results]")
  );
  const selectedContainer = /** @type {HTMLElement | null} */ (
    root.querySelector("[data-selected-filters]")
  );
  const paginationEl = /** @type {HTMLElement | null} */ (
    root.querySelector("[data-agent-pagination]")
  );
  const clearButtons = /** @type {NodeListOf<HTMLElement>} */ (
    root.querySelectorAll("[data-clear-filters]")
  );

  const refs = { selectedContainer, searchInput, checkboxes };
  let currentPage = 1;

  /**
   * Resets to the first page before re-rendering (used when filters change).
   *
   * @returns {void}
   */
  const resetAndRender = () => {
    currentPage = 1;
    render();
  };

  /**
   * Re-applies search, facets and pagination to the current DOM row order.
   *
   * @returns {void}
   */
  const render = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const facets = getSelectedFacets(checkboxes);

    const matches = [];
    for (const row of Array.from(tbody.rows)) {
      if (rowMatches(row, searchTerm, facets)) {
        matches.push(row);
      } else {
        row.hidden = true;
      }
    }

    const totalPages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    matches.forEach((row, index) => {
      row.hidden = index < startIndex || index >= endIndex;
    });

    if (countEl) {
      countEl.textContent = matches.length
        ? `Showing ${startIndex + 1} to ${Math.min(endIndex, matches.length)} of ${matches.length} agents`
        : `Showing 0 of ${totalRows} agents`;
    }
    if (noResultsEl) noResultsEl.hidden = matches.length > 0;

    const hasActiveFilters =
      searchTerm.length > 0 ||
      Array.from(checkboxes).some((checkbox) => checkbox.checked);
    for (const clearButton of clearButtons) clearButton.hidden = !hasActiveFilters;

    if (selectedContainer) renderSelectedTags(refs, resetAndRender);
    renderPagination(paginationEl, currentPage, totalPages, (page) => {
      currentPage = page;
      render();
    });
  };

  searchInput.addEventListener("input", resetAndRender);
  for (const checkbox of checkboxes) {
    checkbox.addEventListener("change", resetAndRender);
  }
  for (const clearButton of clearButtons) {
    clearButton.addEventListener("click", () => {
      searchInput.value = "";
      for (const checkbox of checkboxes) checkbox.checked = false;
      resetAndRender();
    });
  }

  initSorting(table, resetAndRender);
  render();
}
