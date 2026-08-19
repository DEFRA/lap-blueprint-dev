---
layout: "@lap/layouts/BaseLayout.astro"
title: Tooling
order: 2
---

# Tooling

The reverse engineering process uses AI coding assistants with specialised plugins or extensions to analyse legacy application artefacts and produce structured outputs. The referenced playbook documents support for the legacy reverse engineering plugin with GitHub Copilot in Visual Studio Code.

Before using any AI tooling with legacy application material, confirm that the chosen tool is approved for the information classification and that source code, screenshots and transcripts have been prepared in line with information governance requirements.

## What the tooling supports

The plugin provides skills and autonomous agents for the reverse engineering process. It supports:

- converting screenshots into semantic HTML mock-ups
- curating interview transcripts for downstream analysis
- analysing application and database source code
- analysing domain language, user workflows and screen navigation
- synthesising analysis outputs into a Product Requirements Document (PRD)

Use the [Process](../process/) guidance to understand where these activities fit in the delivery journey.

## Using GitHub Copilot in Visual Studio Code

### Prerequisites

Before installing the plugin:

1. Install and authenticate GitHub Copilot in Visual Studio Code. Follow the [official GitHub Copilot setup guide](https://code.visualstudio.com/docs/copilot/setup).
2. Confirm that you have the required GitHub and repository access. See the local [GitHub Access](~/delivery-management/github-access/) guidance.
3. In Visual Studio Code Settings, enable the settings documented by the plugin:
   - `chat.customAgentInSubagent.enabled`
   - `chat.useAgentSkills`
4. Prepare a working project folder using the directory structure below.

The availability of models, agents and plugin features can change. Check the plugin documentation and your organisation's current AI-tooling standards before beginning a delivery engagement.

### Install the plugin

The plugin repository provides an installer script. From the root of the legacy application project, download and run it in a compatible shell:

```sh
curl -O https://raw.githubusercontent.com/DEFRA/claude-legacy-reveng-plugin/main/scripts/install-as-copilot-plugin.sh
chmod +x install-as-copilot-plugin.sh
./install-as-copilot-plugin.sh
```

After the configuration has been installed, remove the downloaded installer script if it is no longer needed:

```sh
rm install-as-copilot-plugin.sh
```

Review the files added by the installer before processing application material. The plugin source and its agent and skill definitions are available in the [legacy reverse engineering plugin repository](https://github.com/DEFRA/claude-legacy-reveng-plugin).

### Run the reverse engineering workflow

Open a new GitHub Copilot Chat session in Visual Studio Code and select the agent appropriate to the current process phase:

1. Select the digital-content-curator agent for content curation of screenshots and transcripts.
2. Follow the [Process](../process/) guidance to review the generated mock-ups and curated transcripts.
3. Select the product-manager agent for analysis and PRD generation.
4. Review the resulting PRD with the delivery team and Application Product Owner before sign-off.

Do not treat generated content as authoritative without review. The delivery team remains responsible for checking accuracy, completeness, traceability and the absence of personal data.

## Project directory structure

Set up the project folder before running the plugin. Input directories hold material supplied by the team; the tooling creates the output directories and analysis files.

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
