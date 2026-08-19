/** Minimum zoom scale. */
const MIN_SCALE = 0.2;

/** Maximum zoom scale. */
const MAX_SCALE = 10;

/** Fractional zoom step per wheel tick. */
const ZOOM_FACTOR = 0.12;

/**
 * @typedef {Object} PanState
 * @property {number} scale    - Current zoom level.
 * @property {number} panX     - Current X translation in pixels.
 * @property {number} panY     - Current Y translation in pixels.
 * @property {boolean} dragging - Whether a pointer drag is active.
 * @property {number} lastX    - Previous pointer X for delta calculation.
 * @property {number} lastY    - Previous pointer Y for delta calculation.
 * @property {number} pinchDist - Last recorded pinch distance.
 */

/** @type {HTMLElement | null} */
let overlay = null;

/** @type {HTMLElement | null} */
let transformEl = null;

/** @type {HTMLElement | null} */
let canvasEl = null;

/** @type {Element | null} */
let opener = null;

/** Natural (pre-transform) width of the transform element, measured on open. */
let elNaturalW = 0;

/** Natural (pre-transform) height of the transform element, measured on open. */
let elNaturalH = 0;

/**
 * Parsed once at module load; cloned each time the overlay is (re)created.
 *
 * @type {HTMLTemplateElement}
 */
const overlayTemplate = (() => {
  const t = document.createElement("template");
  t.innerHTML = `
    <div class="lap-diagram-overlay" role="dialog" aria-modal="true"
         aria-label="Diagram viewer" tabindex="-1" hidden>
      <button class="lap-diagram-overlay__close" type="button" aria-label="Close diagram">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <p class="lap-diagram-overlay__hint" aria-hidden="true">Scroll to zoom | Drag to pan</p>
      <div class="lap-diagram-overlay__canvas">
        <div class="lap-diagram-overlay__transform"></div>
      </div>
    </div>`;
  return t;
})();

/** @type {PanState} */
const state = {
  scale: 1,
  panX: 0,
  panY: 0,
  dragging: false,
  lastX: 0,
  lastY: 0,
  pinchDist: 0,
};

/**
 * Writes the current pan/zoom state as a CSS transform on the transform element.
 *
 * @returns {void}
 */
function applyTransform() {
  if (transformEl) {
    transformEl.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.scale})`;
  }
}

/**
 * Resets pan and zoom to their initial values.
 *
 * @returns {void}
 */
function resetTransform() {
  state.scale = 1;
  state.panX = 0;
  state.panY = 0;
  applyTransform();
}

/**
 * Clamps panX/panY so at least this many pixels of the diagram remain visible
 * on every side of the canvas.
 *
 * @returns {void}
 */
function clampPan() {
  if (!canvasEl || !elNaturalW || !elNaturalH) return;

  /** Minimum visible pixels of the diagram that must stay inside the canvas. */
  const margin = 80;

  const W = canvasEl.offsetWidth;
  const H = canvasEl.offsetHeight;
  const halfElW = (elNaturalW * state.scale) / 2;
  const halfElH = (elNaturalH * state.scale) / 2;

  // Derived from: element_edge must be >= margin from the canvas edge.
  state.panX = Math.min(
    W / 2 - margin + halfElW,
    Math.max(margin - W / 2 - halfElW, state.panX),
  );
  state.panY = Math.min(
    H / 2 - margin + halfElH,
    Math.max(margin - H / 2 - halfElH, state.panY),
  );
}

/**
 * Opens the lightbox, cloning the given SVG into the overlay.
 *
 * @param {SVGElement} svg    - The SVG element to display.
 * @param {Element}   trigger - The element that triggered the open (for focus return).
 * @returns {void}
 */
function openLightbox(svg, trigger) {
  if (!overlay || !transformEl) return;

  opener = trigger;

  /** @type {SVGElement} */
  const clone = /** @type {SVGElement} */ (svg.cloneNode(true));
  // Remove inline sizing so CSS can control it inside the overlay.
  clone.removeAttribute("width");
  clone.removeAttribute("height");
  clone.style.maxWidth = "";
  clone.style.width = "";
  clone.style.height = "";

  // Scale the clone to fit exactly within 90vw × 90vh, preserving the viewBox aspect ratio.
  const vb = svg.viewBox?.baseVal;
  const vbW = (vb && vb.width) || svg.width?.baseVal?.value || 0;
  const vbH = (vb && vb.height) || svg.height?.baseVal?.value || 0;
  if (vbW && vbH) {
    const maxW = window.innerWidth * 0.9;
    const maxH = window.innerHeight * 0.9;
    const ratio = vbW / vbH;
    let w = maxW;
    let h = w / ratio;
    if (h > maxH) {
      h = maxH;
      w = h * ratio;
    }
    clone.style.width = `${w}px`;
    clone.style.height = `${h}px`;
  }

  transformEl.innerHTML = "";
  transformEl.appendChild(clone);

  resetTransform();
  overlay.hidden = false;
  // offsetWidth/Height forces layout; measure natural size before any panning.
  elNaturalW = transformEl.offsetWidth;
  elNaturalH = transformEl.offsetHeight;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  overlay.focus();
}

/**
 * Closes the lightbox and returns focus to the element that opened it.
 *
 * @returns {void}
 */
function closeLightbox() {
  if (!overlay) return;
  overlay.hidden = true;
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  if (transformEl) transformEl.innerHTML = "";
  if (opener instanceof HTMLElement) opener.focus({ preventScroll: true });
  opener = null;
}

/**
 * Calculates the Euclidean distance between the first two touch points.
 *
 * @param {TouchList} touches - Active touch list.
 * @returns {number} Distance in pixels.
 */
function getTouchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

/**
 * Zooms around the given canvas-relative point.
 *
 * @param {number} relX   - X offset from canvas centre.
 * @param {number} relY   - Y offset from canvas centre.
 * @param {number} factor - Multiplicative zoom factor (>1 = in, <1 = out).
 * @returns {void}
 */
function zoomAround(relX, relY, factor) {
  const newScale = Math.min(
    MAX_SCALE,
    Math.max(MIN_SCALE, state.scale * factor),
  );
  const scaleDiff = newScale / state.scale;
  state.panX = relX + (state.panX - relX) * scaleDiff;
  state.panY = relY + (state.panY - relY) * scaleDiff;
  state.scale = newScale;
  clampPan();
  applyTransform();
}

/**
 * Handles wheel events to zoom centred on the cursor.
 *
 * @param {WheelEvent} e - The wheel event.
 * @returns {void}
 */
function onWheel(e) {
  e.preventDefault();
  const rect = /** @type {HTMLElement} */ (
    e.currentTarget
  ).getBoundingClientRect();
  const relX = e.clientX - rect.left - rect.width / 2;
  const relY = e.clientY - rect.top - rect.height / 2;
  const factor = e.deltaY < 0 ? 1 + ZOOM_FACTOR : 1 - ZOOM_FACTOR;
  zoomAround(relX, relY, factor);
}

/**
 * Starts a pointer drag on the canvas.
 *
 * @param {PointerEvent} e - The pointer event.
 * @returns {void}
 */
function onPointerDown(e) {
  if (e.button !== 0) return;
  state.dragging = true;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  /** @type {HTMLElement} */ (e.currentTarget).setPointerCapture(e.pointerId);
}

/**
 * Pans the diagram while dragging.
 *
 * @param {PointerEvent} e - The pointer event.
 * @returns {void}
 */
function onPointerMove(e) {
  if (!state.dragging) return;
  state.panX += e.clientX - state.lastX;
  state.panY += e.clientY - state.lastY;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  clampPan();
  applyTransform();
}

/**
 * Ends a pointer drag.
 *
 * @returns {void}
 */
function onPointerUp() {
  state.dragging = false;
}

/**
 * Records the initial pinch distance on two-finger touch start.
 *
 * @param {TouchEvent} e - The touch event.
 * @returns {void}
 */
function onTouchStart(e) {
  if (e.touches.length === 2) {
    state.pinchDist = getTouchDistance(e.touches);
  }
}

/**
 * Handles two-finger pinch-zoom.
 *
 * @param {TouchEvent} e - The touch event.
 * @returns {void}
 */
function onTouchMove(e) {
  if (e.touches.length !== 2) return;
  e.preventDefault();
  const newDist = getTouchDistance(e.touches);
  const factor = newDist / state.pinchDist;
  state.scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, state.scale * factor));
  state.pinchDist = newDist;
  clampPan();
  applyTransform();
}

/**
 * Instantiates the overlay from the template and appends it to the document body.
 *
 * @returns {void}
 */
function createOverlay() {
  const fragment = /** @type {DocumentFragment} */ (
    overlayTemplate.content.cloneNode(true)
  );

  overlay = /** @type {HTMLElement} */ (
    fragment.querySelector(".lap-diagram-overlay")
  );
  canvasEl = /** @type {HTMLElement} */ (
    overlay.querySelector(".lap-diagram-overlay__canvas")
  );
  transformEl = /** @type {HTMLElement} */ (
    overlay.querySelector(".lap-diagram-overlay__transform")
  );

  overlay
    .querySelector(".lap-diagram-overlay__close")
    .addEventListener("click", closeLightbox);

  canvasEl.addEventListener("wheel", onWheel, { passive: false });
  canvasEl.addEventListener("pointerdown", onPointerDown);
  canvasEl.addEventListener("pointermove", onPointerMove);
  canvasEl.addEventListener("pointerup", onPointerUp);
  canvasEl.addEventListener("pointercancel", onPointerUp);
  canvasEl.addEventListener("touchstart", onTouchStart, { passive: true });
  canvasEl.addEventListener("touchmove", onTouchMove, { passive: false });

  // Close when clicking the backdrop (not the canvas content)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && !overlay.hidden) closeLightbox();
  });

  document.body.appendChild(overlay);
}

/**
 * Attaches lightbox behaviour to a single rendered mermaid diagram.
 *
 * @param {Element} pre - The `<pre class="mermaid">` element.
 * @returns {void}
 */
function attachLightbox(pre) {
  const svg = pre.querySelector("svg");
  if (!svg || pre.hasAttribute("data-lightbox")) return;

  pre.setAttribute("data-lightbox", "true");
  pre.setAttribute("role", "button");
  pre.setAttribute("tabindex", "0");
  pre.setAttribute("aria-label", "Diagram \u2014 click to expand");

  pre.addEventListener("click", () =>
    openLightbox(/** @type {SVGElement} */ (svg), pre),
  );
  pre.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(/** @type {SVGElement} */ (svg), pre);
    }
  });
}

/**
 * Initialises the mermaid lightbox feature.
 *
 * Attaches click-to-expand behaviour to all rendered mermaid diagrams and
 * observes the DOM for any that are rendered after this call.
 *
 * @returns {void}
 */
export function initMermaidLightbox() {
  createOverlay();

  // Handle diagrams already processed at init time.
  document
    .querySelectorAll("pre.mermaid[data-processed]")
    .forEach(attachLightbox);

  // Watch for diagrams that mermaid.js renders after page load.
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-processed" &&
        mutation.target instanceof Element &&
        mutation.target.matches("pre.mermaid")
      ) {
        attachLightbox(mutation.target);
      }
    }
  });

  document.querySelectorAll("pre.mermaid").forEach((pre) => {
    observer.observe(pre, {
      attributes: true,
      attributeFilter: ["data-processed"],
    });
  });
}
