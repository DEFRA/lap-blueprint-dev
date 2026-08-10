---
layout: "@lap/layouts/BaseLayout.astro"
title: "P-001: Acquiring Source Code for Modernisation"
---

# P-001: How to Acquire Source Code for Modernisation

**Process ID:** P-001

**Title:** How to acquire Source Code for Modernisation

**What You're Trying To Do:**
This page explains how to acquire the source code for a legacy application you plan to refactor and modernise, then sanitise it and set it up in a clean repository so modernisation can begin safely.

**Who This Is For:**
Read this if you're a legacy application owner, project manager, engineer, or governance approver responsible for preparing a legacy application's source code before modernisation begins. Most of the steps assume no deep technical background, though setting up the repository is a task for an engineer.

**Overview**
Getting a legacy application's source code ready for modernisation has two parts:

- Acquire the code: find out who owns it, get the approvals, and have it released to you securely.
- Prepare the code: check it for personal data using DEFRA’s PII scanner locally, clean it, and move it into a new, clean repository so modernisation can begin. 

At a high-level, the journey is:

1.	Acquire
2.	Sanitise locally (remove personal data) 
3.	Store in a clean repository
4.	Modernise

**Before you start**

Make sure the following are in place before you begin:

- The current source code owner has been identified and located.
- You have access to a dedicated LAP SharePoint.
- A repository has been created in DEFRA GitHub. For how to do this, see [DEFRA's GitHub access standards.](https://defra.github.io/software-development-standards/processes/github_access/)
- You have a DEFRA laptop that can run the personal data (PII) screener. The screening is done on a DEFRA laptop so you can run the screener on the files locally.

**Acquiring the Source Code**
This is the process for getting the source code released to you. It's shown for an application that sits within AMS, the most common and fastest route. If your application is owned by another supplier or by a DEFRA managed service, the shape is the same, but the owners and approval steps differ.

**Identify the application**
Led by the Project Manager. Confirm the application has been prioritised for modernisation, and capture its name, the ALB or business area it belongs to, the delivery timeline, and any supplier information you already know.

**Determine Ownership**
Led by the Project Manager. Work out who hosts and supports the application. Whether that is AMS, another supplier, or a DEFRA managed service. Check DEFRA's service management records (ServiceNow / CMDB) where available and confirm the DEFRA business owner and the DEFRA supplier manager. Identifying who hosts and supports the application is a separate question from confirming it's formally in scope for AMS, which comes next.

**AMS validation**
Led by the Project Manager. Submit a “Request for a Minor Enhancement” using the Microsoft Form available to DEFRA users. Ask it to confirm whether the application is in scope for AMS, and to support source code acquisition in the same submission. This usually takes 1 to 2 working days.

Microsoft Form Decision — is the application in scope for the Managed Service?

- Yes: continue to next step.
-	No: it follows another supplier's route instead (the same overall shape, with a different owner).

Seek approvals only after this is confirmed. There's no point obtaining approval for an application that turns out not to be in scope.

**Get the approvals**

- Business approval : Led by the Project Manager. Identify the business owner and explain why the source code is needed, what modernising the application is intended to achieve, and how the code will be used, and obtain formal approval. Approval may come from the business owner, a programme manager, or an ALB representative. Business approval can take time and varies by area, so submit it early.

- Supplier management approval : Led by the Project Manager. Inform DEFRA DDTS Supplier Management and confirm approval to share the source code. This can run in parallel with business approval.

**Secure transfer and storage**

Source code release (led by the host team). The host team assigns a subject matter expert (SME), who locates the repository, prepares the approved source code package, and agrees a secure transfer method with you. Transfer methods include repository access, a secure file export, or a secure transfer tool.

Receive and store securely (led by the project team). Download the code, store it in an approved SharePoint location, restrict who can access it, and apply the required governance controls. Before this, decide how you want to receive the code.

**Choosing how you receive the code**

There are two ways to receive the code. Agree which one applies with the host before the transfer.


| <br> | Option A: Repository access<br> |	Option B: Offline snapshot<br> |
| --- | --- | --- |
| How it works<br> |	You get access to the live repository and work on a branch.<br> |	You're given a one-off export of the code, transferred securely into your own repository.<br> |
| Benefits<br> |	You're always on the latest codebase, there's less divergence, and your changes are easier to merge back.<br> |	Simpler onboarding and faster initial access.<br> |
| Watch out for<br> |	Access to the live repository must be arranged first.<br> |	The copy can drift from the live code. You can miss production changes and face a difficult merge later if required. Document this as a project risk.<br> |


**Sanitising the code and setting up a clean repository**

Once you have the code, it must be checked and cleaned of personal data, then moved into a new, clean repository before modernisation begins. Starting a fresh repository removes both current personal data and any historic versions of the code that might still contain it.

1.	The current source holder uploads the source code as a ZIP file to the LAP SharePoint.

2.	Download and extract the ZIP to a DEFRA laptop. Delete the .git folder and any other version history if present, so historic versions of the code aren't carried into the new repository.

3.	Run the LAP personal data (PII) screener and Obfuscate PII and Revalidate on the local files to find and remove personal data. The tool doesn't handle non-plaintext files (Word, Excel, PDF). These may need to be cleaned manually. 

    - (**please see** : "p-001-scan-code-for-pii" and "p-003-obfuscate-pii-and-revalidate" pages on the left hand side menu under processes)

4.	Get IAO approval. The Information Asset Owner (IAO) must confirm the source code is free of personal data before you go any further. This is a required gate, not a formality.

5.	Set up the new repository (for the engineer). Initialise a local repository, add the DEFRA GitHub repository as the remote, commit the cleaned legacy source, and push it:

git init
git remote add origin https://github.com/DEFRA/<your-repo>.git
git add .
git commit -m "Initialise repository with personal-data-free legacy source"
git push -u origin main

6.	Mark the original legacy code read-only, unless a critical issue is found. This is done by the owner of the original code.

7.	Delete the ZIP from the LAP SharePoint.

8.	Modernise the application in GitHub.

**Known risks to plan for**

- Ownership can be unclear, and service records can be out of date. Confirm the owner before you rely on it and expect to chase through more than one supplier sometimes.
- Business approval can take time. It varies by area, therefore submit it early so it doesn't hold up the transfer.
- An offline snapshot can drift from the live code. If the current supplier keeps changing the live code after you've taken your copy, you can miss production changes and face a difficult merge. Prefer repository access where the code is still changing and document the risk where a snapshot is used.
- Secure transfer tools may have limited retention (for example, 3 days). Download the package immediately, store it securely, and remove any temporary copies once it's safely in your approved location.

**Key governance rules**

- Screen on a DEFRA laptop. Download the code to a DEFRA laptop so you can run the personal data screener locally.
- Remove the version history. Delete the .git history so historic versions of the code aren't carried into the new repository.
- Start the repository clean. Create a new repository and push the cleaned source — don't reuse the legacy repository or its history.
- Screening and IAO approval come first. Both must be complete before the code is used for modernisation or shared more widely.
- Lock down the original. Once the clean copy is in place, the original legacy code is marked read-only and the ZIP is deleted from the LAP SharePoint.

**Where to get help**

- To confirm ownership or which route applies: your project leads and DEFRA PMO, who hold the application list.
- For the AMS route: submit a “Request for a Minor Enhancement” using the Microsoft Form available to DEFRA users.
- For approvals: the application's Business Owner, and DEFRA DDTS Supplier Management.
- For personal data sign-off: the Information Asset Owner (IAO).
- For setting up the GitHub repository: your engineering lead, and DEFRA's GitHub access standards.

