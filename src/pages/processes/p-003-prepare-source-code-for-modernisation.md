---
layout: "@lap/layouts/BaseLayout.astro"
title: "P-003: Prepare Source Code for Modernisation"
---

# P-003: How to Prepare Source Code for Modernisation

**Process ID:** P-003

**Title:** How to onboard legacy source code safely and prepare it for modernisation

**What You're Trying To Do:**
Make legacy source code available to a LAP project in a public space. Before this can be done, the legacy source code needs to be scanned and cleaned to remove any PII or sensitive information.

**Who This Is For:**
Source system owners, delivery leads, engineers, and governance approvers responsible for preparing source code before modernisation and AI-assisted workflows begin.

**Prerequisites**

- The current application source code owner has been identified and located.
- Access to the LAP SharePoint is available.
- A repository has been created in DEFRA GitHub.
  - Details on how to do this are here: https://defra.github.io/software-development-standards/processes/github_access/
- You have a DEFRA laptop capable of running the PII screener.

**Step-by-step**

```mermaid
flowchart TD
    Upload([Current source holder uploads source code as a ZIP file to LAP SharePoint])
    Extract["Download and extract ZIP to DEFRA laptop (Delete the .git folder or any other history if it exists)"]
    Screen[Run <a class="govuk-link" href="./p-001-scan-code-for-pii/">LAP PII screener tool</a> on local files to remove PII. Note: Files that are not plaintext e.g. word/excel/pdf are not handled by the tool and may need manual cleaning.]
    Approve["***TBC: Get approval from the IAO (Information Asset Owner) that the source code is free of PII ***"]
    Init[Initialize local repository:<pre><code>git init</code></pre>]
    Remote[Add GitHub remote:<pre><code>git remote add origin https://github.com/DEFRA/my-cool-repo.git</code></pre>]
    Commit[Commit clean legacy source code]
    Push[Push to GitHub]
    Readonly[Owner of the original legacy code must mark it as read-only unless a critical issue is found]
    Delete[Delete the ZIP from the LAP Sharepoint]
    Modernize([Modernize the application in github])

    Upload --> Extract
    Extract --> Screen
    Screen --> Approve
    Approve --> Init
    Init --> Remote
    Remote --> Commit
    Commit --> Push
    Push --> Readonly
    Readonly --> Delete
    Delete --> Modernize

    classDef startPoint stroke:#2e7d32,stroke-width:2px,color:#1b5e20
    classDef termination stroke:#c62828,stroke-width:2px,color:#b71c1c
    class Upload startPoint
    class Modernize termination
```

**Who To Contact:**
Delivery lead (process coordination), Information Asset Owner (PII approval), and engineering lead (repository setup and commit flow).

**Governance / Approval Gate:**
Code must not be used for AI-assisted workflows or broader sharing until PII screening has completed and IAO approval has been recorded.

**Related Blocker:** -

**Related Agent/Tool Links:**

- [LAP PII Screener repository](https://github.com/DEFRA/lap-pii-screener)

**Status:**
Draft (pending governance wording confirmation)
