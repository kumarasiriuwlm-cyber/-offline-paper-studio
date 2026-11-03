# Offline Paper Studio v0.4 — Science document formats

[Open the application](https://kumarasiriuwlm-cyber.github.io/-offline-paper-studio/?v=0.4.0)

A dependency-free offline authoring workspace for Sri Lankan Grade 10–11 teachers. Six document families and 28 structure presets: examinations, lesson tests, short papers, tutes/worksheets, short notes and past-question collections. A separate visual-template setting controls appearance.

## Use on a phone

1. Open in Chrome. The 48 illustrative English sample questions load into an empty workspace.
2. Choose **Create Paper**, then **What are you making?** and a ready-made structure.
3. Check **Sections & instructions**. Choose the section where new content belongs.
4. **Choose questions** from your banks, **Write a question**, or open **Add teaching content**.
5. Edit beside each question/content block. Subquestions have their own wording, answers, marks, media and answer spaces.
6. Open **Page appearance** to choose a visual style, option columns and answer spaces. Use the A4 page preview and format-check messages.
7. Save, print/PDF, download Word, or print an MCQ answer grid. Keep regular complete backups.

The Home screen has a mixed-content Science example with a note, editable table, worked example, circuit diagram and nested questions. It is illustrative, not an official examination.

## Formats

- Examination: O/L Science I & II, I only, II A & B, A practice, B practice, term test, original past-paper reconstruction.
- Lesson test: unit, multi-lesson revision, structured practice.
- Short paper: mixed short test, MCQ practice, classroom quiz, homework.
- Tute: theory, revision, guided worksheet, self-learning pack, practical worksheet.
- Short notes: lesson note, one-page summary, formula/units, comparison, diagram revision, mind map/process, worked examples.
- Collection: topic-wise and year-wise past questions.

Presets are editable starting structures, not Department of Examinations certification. Changing formats preserves content and moves it into the first section; reassign items in their editor. Page-limit and missing-question checks warn without preventing drafts.

## Developer guide

No runtime downloads, CDN, API or server database. Serve the repository root (HTTPS/localhost for PWA). Node 22+: `npm test`. No install/build step required. GitHub Actions runs the tests and deploys Pages.

| Module | Responsibility |
|---|---|
| `formats.js` | Presets, section grouping, nested totals, optional marks, source metadata, validation |
| `authoring.js` | Section, tree-question, teaching-content and table editors |
| `pagination.js` | Measured A4 preview, continuation and print sheets |
| `core.js` | Compatible bank normalization, filters, deterministic selection, backups |
| `db.js` | IndexedDB transactions, bank updates and schema upgrade |
| `export.js` / `zip.js` | HTML rendering and editable OOXML with tables/images/footer fields |
| `app.js` | Navigation, controller state and persistence |

The V1 paper `questions` array remains the ordered content list for compatibility. A missing `kind` means question; other kinds are note, example, table, diagram, activity and heading. Each item optionally references `sectionId`. Questions can have recursive `children`. Parent marks are computed from their children. Existing plain papers still open without migration. Imported source questions are copied into drafts; edits do not change bank originals. Only usage metadata is written back.

## Current limits

- Plain Unicode science expressions are supported; this is not a LaTeX/ChemDraw editor. Use Unicode or upload a diagram for complex notation and mind maps.
- Word includes real editable text/tables and embedded images, but does not reproduce every PDF style, graph grid, image wrap or exact browser page break. Fonts and Word versions can alter pagination. Microsoft Word visual QA has not been performed.
- Browser printing generates PDF through the system dialog. A4 preview measures content and flags oversized items; exceptionally large media/tables require resizing. Editing controls occupy screen space, so print pagination is recalculated without them.
- Original past-paper reconstruction preserves numbering/source metadata. It does not OCR/import an arbitrary scanned PDF or supply missing official questions/answers. No commercial or private banks are committed.
- Complete backups remain essential. Data is local to the browser/device. Physical Android airplane-mode installation and Windows print-device verification remain to be completed.
- Sinhala content and bilingual family labels are supported; full Sinhala interface translation remains unfinished.

See [bank format](docs/BANK_FORMAT.md), [v0.4 tests](docs/TEST_RESULTS.md), and [release notes](docs/RELEASE_NOTES.md).
