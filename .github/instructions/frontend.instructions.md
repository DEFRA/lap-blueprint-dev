---
applyTo: "**/*.js, **/*.astro, **/*.scss"
---

<!--
SECTION PURPOSE: Introduce mandatory frontend guidance.
PROMPTING: Clear headings; concise bullets for scanability.
COMPLIANCE: Treat rules below as defaults unless project overrides exist.
-->

# Frontend Instructions

<CRITICAL_REQUIREMENT type="MANDATORY">

- Use Javascript for new code and interfaces for component props.
- Enforce accessibility: semantic HTML first; ARIA complements, not substitutes.
- Use relevant classes from the GOV.UK Design System; avoid custom styles unless necessary.
- Avoid inline colour codes; use design system tokens or variables.
- Use scss over css for new styles; follow the repo's scss structure and naming conventions.
- Ensure all methods are annotated with JSDoc comments; include parameter and return types.

</CRITICAL_REQUIREMENT>

<!--
SECTION PURPOSE: Universal rules for all frontend code.
PROMPTING: Imperative checklist for quick verification.
-->

## General Guidelines

1. **Code Structure**: Prefer small, reusable components and feature modules.
2. **Styling**: Follow repo standard (SCSS). Avoid inline styles except small dynamic cases.
3. **Accessibility**: Prefer native controls, clear labels, visible focus, sufficient contrast.

<!--
SECTION PURPOSE: Expectations when authoring components.
PROMPTING: Specify contract (props/state), error modes, and data flow norms.
-->

## Component Development

1. **Props**: Document optional vs required. Provide sensible defaults.
2. **State Management**: There should be no state outside of the current page URL. The site has no backend, so all state is ephemeral. Use local storage or URL params for persistence if needed.
3. **Error Boundaries**: Add boundaries around risky trees; fail gracefully.

<!--
SECTION PURPOSE: Enforce baseline quality gates.
PROMPTING: XML block for machine-checkable rules.
-->

<PROCESS_REQUIREMENTS type="MANDATORY">

- Run lints and tests locally before PR.
- Include accessibility checks (labels, keyboard nav, focus order) in reviews.
- Avoid `any`; if unavoidable, annotate with a TODO and reason.

</PROCESS_REQUIREMENTS>
