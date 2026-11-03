# Offline Paper Studio v0.5 — Choose a format and start

[Open the application](https://kumarasiriuwlm-cyber.github.io/-offline-paper-studio/?v=0.5.0)

A dependency-free offline authoring workspace for Sri Lankan Grade 10–11 teachers. Six document families and 28 structure presets: examinations, lesson tests, short papers, tutes/worksheets, short notes and past-question collections. A separate visual-template setting controls appearance.

## Use on a phone

1. Open in Chrome. The 48 illustrative English sample questions load into an empty workspace.
2. Tap **Create paper**, choose a document family and then a ready-made format. Grade and question language are selected here; a language with available bank questions is suggested.
3. Tap **Choose questions** or **Write a question**. Edit wording, marks or answers beside the question on the preview.
4. Tap **Print / PDF**, **Word** or **Copy all text**. Your paper saves on this device.
5. Open **More edits** only when needed: borders, page numbers, header/footer messages, teacher profiles, sections, content blocks and detailed layout settings.
6. Use the language selector at the top for English, Sinhala or Tamil. Bank questions and teacher-written text retain their authored wording; supplied question translations are supported.
7. Keep regular complete backups using **More tools → Backup and Restore**.

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
- Word includes real editable text/tables and embedded images, but does not reproduce every PDF style, image wrap or exact browser page break. Fonts and Word versions can alter pagination. Microsoft Word visual QA has not been performed.
- Browser printing generates PDF through the system dialog. A4 preview measures content and flags oversized items; exceptionally large media/tables require resizing. Editing controls occupy screen space, so print pagination is recalculated without them.
- Original past-paper reconstruction preserves numbering/source metadata. It does not OCR/import an arbitrary scanned PDF or supply missing official questions/answers. No commercial or private banks are committed.
- Complete backups remain essential. Data is local to the browser/device. Physical Android airplane-mode installation and Windows print-device verification remain to be completed.
- Sinhala content and bilingual family labels are supported; full Sinhala interface translation remains unfinished.

See [bank format](docs/BANK_FORMAT.md), [v0.4 tests](docs/TEST_RESULTS.md), and [release notes](docs/RELEASE_NOTES.md).

## Sharing and page design (v0.5)

**More edits → Headers, footers & borders** controls five border treatments, color/thickness, header alignment and messages, continuation header, footer message, teacher/contact/logo visibility, numbering language (English/Sinhala/Tamil), optional local digits, alignment, numbering style and starting number. These settings are saved with each paper and included in backup. Browser print uses the measured preview sheets. Word uses actual running headers, footers, PAGE/NUMPAGES fields and OOXML page borders; local digit shaping depends on the Word environment. Word approximates the accent frame with a standard border.

**Copy all text** copies the student paper; **More exports → Copy with marking scheme** explicitly includes teacher answers. Clipboard restrictions fall back to a selectable text dialog. Diagrams are represented by captions in plain text; use PDF/Word for actual images.

**Google Form** exports a Google Apps Script, not a direct signed-in API integration. Copy/download the script, open a new project at https://script.google.com/home/start, replace the starter code and run `createPaperForm`. Authorize your own account. The script creates an **unpublished** quiz and logs the edit URL. A rerun resumes or reopens the same form. It supports nested question headings, single-answer MCQ keys, written response items, diagrams and table text. Review manual grading, optional-question instructions, accepted alternatives, response collection and answer-release settings before publishing. The script contains teacher answers; do not give it to students. Google account execution was not available in automated QA; script behavior was tested against a Forms mock.

App-owned interface copy is localized locally, including navigation, presets, editing dialogs and common validation messages. Custom titles, messages, bank questions and notes are not machine-translated. Banks may supply `translations.en`, `.si`, `.ta` fields for wording/options/answers; translations must preserve option order and correct-answer indices. Imported originals remain unchanged when a teacher edits a translated paper snapshot.
