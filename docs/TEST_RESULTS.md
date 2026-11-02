# Validation — v0.2

Passed: 7 Node tests covering legacy bank import and correct-answer conversion; invalid IDs, duplicates, corrupt answers, marks and image URLs; deterministic assembly; shortages; lesson filtering; source snapshot isolation; 20,000-question validation (about 26 ms in this environment); malformed backups; DOCX ZIP creation and Sinhala content.

Python independently opened the generated DOCX ZIP, parsed all XML components, and confirmed Sinhala text. This is structural validation, not Microsoft Word visual compatibility certification.

Browser checks: application startup; three demonstration-bank imports (48 questions total); IndexedDB persistence across reload; Sinhala paper title; dynamic lesson selection. Found and fixed an HTTP-preview issue where crypto.randomUUID was unavailable by adding a cryptographic-random fallback.

Not yet verified: physical Android/Windows devices, airplane mode, HTTPS service-worker installation, actual print-to-PDF output, visual Word rendering, backup restoration through file picker, mobile viewport layout, full end-to-end editor coverage. These must pass before a commercial release. Deployment status is reported separately after workflow execution.

Additional browser checks passed: complete details → lesson → configuration → assembly flow, 5 MCQs restricted to Motion; question wording changed to Sinhala while preserving correct answer; source bank data remained separate. GitHub Actions ran all seven tests successfully on commit 12ccb64. Pages deployment failed at configuration because the repository has no Pages site and the integration token cannot create one (`Resource not accessible by integration`). No live Pages URL is claimed.

Refresh/reopen test also passed: the saved Sinhala edit and correct answer survived preview reload. Moving question 1 down updated numbering and order correctly. A4 browser preview rendered the saved questions and Sinhala heading correctly in desktop Chrome. These checks do not substitute for physical-device or PDF-file verification.
