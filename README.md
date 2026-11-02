# Offline Paper Studio — v0.2 development preview

A dependency-free offline examination workspace for Sri Lankan teachers. No accounts, AI, APIs or server database. Device data lives in IndexedDB.

## Try it

Open the GitHub Pages deployment when available. Go to **Question Banks → Load demonstration banks**, then **Create Paper**. Demo questions are illustrative and are not verified official examinations. All original prototype samples remain compatible.

## Development

Serve this directory over HTTP for development (`python -m http.server`). HTTPS or localhost is required for service workers and PWA installation. Run `npm test` with Node 22+. There are no runtime dependencies or build step. GitHub Actions runs tests and publishes Pages.

Modules: `js/core.js` validates banks and selects questions; `js/db.js` provides transactions and backup; `js/app.js` contains screen controllers; `js/export.js` handles print and DOCX; `js/zip.js` creates OOXML ZIPs. Add layouts in the template registry. `prototype.html` preserves the starting prototype unchanged. Do not commit private profiles or commercial banks.

## User workflow

1. Import a JSON question bank or load demonstrations.
2. Create a teacher profile if needed.
3. Create a paper, choose lessons and configure question counts.
4. Assemble, edit, reorder or replace questions. Drafts save locally.
5. Choose Export, preview paper / scheme / combined, then print to PDF or download DOCX.
6. Download complete backups regularly. Restore replaces local workspace atomically.
7. On supported Chrome devices, install via the browser menu after the initial HTTPS visit. Wait for resources to cache before disconnecting.

## Status and limitations

This is a development preview, not the completed commercial release. Core screens, import, search, wizard, edits, history, branding text/logo, four print presets, backup, themes, Sinhala navigation and PWA resources are implemented. Full Sinhala localization, collections, duplicate-content review, distribution quotas, advanced rich content, QR/photo branding, configurable pagination and image-capable DOCX remain unfinished. Text is stored as Unicode plain text, including Unicode subscripts/superscripts; HTML is escaped. DOCX retains text/options but explicitly omits embedded diagrams. PDF uses the native print dialog, not an automatic file converter. Device fonts determine Sinhala rendering.

See [test results](docs/TEST_RESULTS.md), [bank format](docs/BANK_FORMAT.md), and [release notes](docs/RELEASE_NOTES.md).
