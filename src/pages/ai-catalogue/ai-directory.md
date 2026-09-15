---
layout: "@lap/layouts/BaseLayout.astro"
title: AI Directory
order: 5
fullWidth: true
---

# AI Directory

A searchable catalogue of the AI agents used across the Legacy Application Programme (LAP). Suppliers contribute their own agents so the directory keeps growing — use the search and filters to find an agent for a particular technology, such as an Oracle or .NET migration agent.

Each agent name links to its published definition, which you can copy into your own repository. To add your agent, follow the [How to add your AI artefacts](../ai-directory-contribution/) guidance — a new entry is a single commit that adds a row to the table below.

<div class="lap-agent-directory" id="agent-directory">
<div class="lap-agent-filter">
<div class="lap-agent-filter__header">
<h2 class="govuk-heading-m">Filter</h2>
<button type="button" class="govuk-link govuk-body-s" data-clear-filters hidden>Clear all</button>
</div>
<div class="lap-agent-filter__body">
<div class="govuk-form-group">
<label class="govuk-label govuk-label--s" for="agent-search">Search</label>
<input class="govuk-input" id="agent-search" type="search" data-agent-search placeholder="e.g. oracle, testing, database">
</div>
<fieldset class="govuk-fieldset">
<legend class="govuk-fieldset__legend govuk-fieldset__legend--s">Type</legend>
<div class="govuk-checkboxes govuk-checkboxes--small">
<div class="govuk-checkboxes__item">
<input class="govuk-checkboxes__input" id="type-agent" type="checkbox" value="Agent" data-filter="type">
<label class="govuk-label govuk-checkboxes__label" for="type-agent">Agent</label>
</div>
<div class="govuk-checkboxes__item">
<input class="govuk-checkboxes__input" id="type-skill" type="checkbox" value="Skill" data-filter="type">
<label class="govuk-label govuk-checkboxes__label" for="type-skill">Skill</label>
</div>
<div class="govuk-checkboxes__item">
<input class="govuk-checkboxes__input" id="type-prompt" type="checkbox" value="Prompt" data-filter="type">
<label class="govuk-label govuk-checkboxes__label" for="type-prompt">Prompt</label>
</div>
</div>
</fieldset>
</div>
</div>
<div class="lap-agent-directory__toolbar">
<p class="govuk-body govuk-!-margin-bottom-0" data-agent-count aria-live="polite"></p>
</div>
<div class="lap-agent-selected" data-selected-filters hidden></div>
<table class="govuk-table lap-agent-table">
<thead class="govuk-table__head">
<tr class="govuk-table__row">
<th scope="col" class="govuk-table__header" data-sortable>Name</th>
<th scope="col" class="govuk-table__header" data-sortable>Creator</th>
<th scope="col" class="govuk-table__header" data-sortable>Type</th>
<th scope="col" class="govuk-table__header" data-sortable>Tech stack</th>
<th scope="col" class="govuk-table__header">Description</th>
</tr>
</thead>
<tbody class="govuk-table__body">
<tr class="govuk-table__row" data-type="Agent" data-tech=".NET,VB">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-application-developer.agent">Application Developer</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">.NET, VB</td>
<td class="govuk-table__cell">Extracts workflows, behaviours, domain concepts, and business rules from legacy .NET and VB source code.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-business-analyst.agent">Business Analyst</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Extracts ubiquitous language, bounded contexts, subdomains, and context maps from legacy application evidence.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="Azure">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-cloud-tier-architect.agent">Cloud Tier Architect</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Azure</td>
<td class="govuk-table__cell">Applies Defra CCoE cloud service-tier requirements to the product requirements and architecture.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-completeness-auditor.agent">Completeness Auditor</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Reconciles the build against the feature traceability manifest so functionality is not lost.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="SQL Server">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-database-analyst.agent">Database Analyst</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">SQL Server</td>
<td class="govuk-table__cell">Extracts schema, stored procedure logic, triggers, constraints, and persistence patterns from legacy SQL Server code.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-digital-content-curator.agent">Digital Content Curator</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Converts screenshots and interview transcripts into curated material for downstream analysis.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-digital-content-processor.agent">Digital Content Processor</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Processes one raw file using a specified skill for the digital content curator.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-feature-writer.agent">Feature Writer</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Writes one standards-compliant feature specification from the relevant product requirements content.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-interaction-analyst.agent">Interaction Analyst</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Combines HTML mockups and curated transcripts into interaction analysis and user workflows.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-lap-orchestrator.agent">LAP Orchestrator</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Runs the end-to-end LAP modernisation pipeline from content curation through feature traceability.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-modernisation-example-writer.agent">Modernisation Example Writer</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Writes a standards-compliant modernisation example from the project evidence and codebase.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-prd-to-features.agent">PRD to Features</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Decomposes a product requirements document into deliverable, traceable feature specifications.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-product-manager.agent">Product Manager</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Synthesises analysis outputs into a comprehensive product requirements document.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-documentation">Documentation</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Produces factual, evidence-based system documentation (HLD, LLD, ADRs, Runbook) for the current codebase. No refactoring.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-implementation">Implementation</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Implements one approved migration slice per pull request, with tests, documentation, and rollback awareness.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-intelligent-migration">Intelligent Migration</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Establishes a repeatable, low-risk migration operating model using AI-augmented teams.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-modernise-to-modular-monolith">Modernise to Modular Monolith</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Designs a realistic modernisation path that can be executed safely and incrementally.</td>
</tr>
<tr class="govuk-table__row" data-type="Agent" data-tech="">
<td class="govuk-table__cell"><a class="govuk-link" href="https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-testing">Testing</a></td>
<td class="govuk-table__cell">LAP Innovation</td>
<td class="govuk-table__cell">Agent</td>
<td class="govuk-table__cell">Any</td>
<td class="govuk-table__cell">Creates a safety net that enables confident, incremental modernisation.</td>
</tr>
</tbody>
</table>
<p class="govuk-body" data-no-results hidden>No agents match your filters. <button type="button" class="govuk-link" data-clear-filters>Clear all filters</button> to see the full directory.</p>
<nav class="govuk-pagination" role="navigation" aria-label="Pagination" data-agent-pagination hidden></nav>
</div>
