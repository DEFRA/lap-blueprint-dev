---
layout: "@lap/layouts/BaseLayout.astro"
title: Tooling
order: 2
---

# Tooling

The reverse engineering process uses AI coding assistants with a set of specialised GitHub Copilot agents to analyse legacy application artefacts and produce structured outputs. This page documents the LAP Innovation agents for GitHub Copilot in Visual Studio Code. The full set of agents, with descriptions and copy-ready definitions, is published on the [LAP Implementations Agents for GitHub Copilot](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/) page.

Before using any AI tooling with legacy application material, confirm that the chosen tool is approved for the information classification and that source code, screenshots and transcripts have been prepared in line with information governance requirements.

## What the tooling supports

The LAP Innovation agents provide skills and autonomous agents for the reverse engineering process. They support:

- converting screenshots into semantic HTML mock-ups
- curating interview transcripts for downstream analysis
- analysing application and database source code
- analysing domain language, user workflows and screen navigation
- synthesising analysis outputs into a Product Requirements Document (PRD)
- decomposing the PRD into traceable, standards-compliant feature specifications

Use the [Process](../process/) guidance to understand where these activities fit in the delivery journey.

## Using GitHub Copilot in Visual Studio Code

### Prerequisites

Before using the agents:

1. Install and authenticate GitHub Copilot in Visual Studio Code. Follow the [official GitHub Copilot setup guide](https://code.visualstudio.com/docs/copilot/setup).
2. Confirm that you have the required GitHub and repository access. See the local [GitHub Access](~/delivery-management/github-access/) guidance.
3. In Visual Studio Code Settings, enable the following settings:
   - `chat.customAgentInSubagent.enabled`
   - `chat.useAgentSkills`
4. Prepare a working project folder using the directory structure below.

The availability of models, agents and features can change. Check the [LAP Implementations Agents for GitHub Copilot](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/) page and your organisation's current AI-tooling standards before beginning a delivery engagement.

### Install the agents

The agents are published as individual `.agent.md` files on the [LAP Implementations Agents for GitHub Copilot](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/) page. Add the ones you need to your project so they appear in the Copilot agent picker:

1. On the agents page, choose the agents for your process phase and open each one.
2. Copy the agent's `.agent.md` file into the `.github/agents/` directory in the root of the legacy application project.
3. Edit any project-specific details, such as the service name, tech stack and team conventions.
4. Reload Visual Studio Code so the agents appear in the Copilot agent picker.

Review each agent definition before processing application material. The agent and skill definitions are published on the [LAP Implementations Agents for GitHub Copilot](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/) page.

### Run the reverse engineering workflow

Open a new GitHub Copilot Chat session in Visual Studio Code and select the agent appropriate to the current process phase. To run the pipeline end to end, use the [LAP Orchestrator](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-lap-orchestrator.agent) agent; to run the phases individually:

1. Select the [Digital Content Curator](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-digital-content-curator.agent) agent for content curation of screenshots and transcripts.
2. Follow the [Process](../process/) guidance to review the generated mock-ups and curated transcripts.
3. Select the [Product Manager](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-product-manager.agent) agent for analysis and PRD generation.
4. Review the resulting PRD with the delivery team and Application Product Owner before sign-off.

Do not treat generated content as authoritative without review. The delivery team remains responsible for checking accuracy, completeness, traceability and the absence of personal data.

## Project directory structure

Set up the project folder before running the agents. Input directories hold material supplied by the team; the agents create the output directories and analysis files.

| Directory             | Type      | Contents                                                 |
| --------------------- | --------- | -------------------------------------------------------- |
| `screenshots/`        | Input     | User interface screenshots of the legacy application     |
| `transcripts/`        | Input     | PII-free stakeholder interview transcripts in plain text |
| `src/`                | Input     | Legacy application source code                           |
| `output/`             | Generated | Analysis outputs and the PRD                             |
| `output/html/`        | Generated | Semantic HTML mock-ups created from screenshots          |
| `output/transcripts/` | Generated | Curated interview transcripts                            |

Use the following layout as a starting point:

```ascii
project/
	screenshots/
		home.png
		search.png
	transcripts/
		demo-walkthrough.txt
	src/
		Solution.sln
	output/
		html/
			home.html
			search.html
		transcripts/
			demo-walkthrough_curated.txt
		domain-analysis.md
		interaction-analysis.md
		application-analysis.md
		database-analysis.md
		PRD.md
```

### Version control

The HTML mock-ups and curated transcripts are intermediate artefacts that can be regenerated from the original inputs. Consider excluding them from version control:

```ascii
# Regeneratable intermediate outputs
output/html/
output/transcripts/
```

Commit the PRD and four analysis files because they are delivery outputs:

- `output/PRD.md`
- `output/domain-analysis.md`
- `output/interaction-analysis.md`
- `output/application-analysis.md`
- `output/database-analysis.md`

Store and control access to input artefacts according to the project's information governance arrangements. Do not use version control exclusions as a substitute for removing PII or secrets before processing material.
