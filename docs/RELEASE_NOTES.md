# v0.5.0 — Simple format-first creation

- Choose document family and preset before entering the paper workspace. Automatically apply the structure and time.
- Keep essential question, title, time and output actions visible; advanced sections, content and design live under More edits.
- Configurable borders, header/footer messages, teacher/contact visibility and multilingual page numbering.
- Student-text clipboard copy with selectable fallback, combined teacher-text copy and text download.
- Google Apps Script export for an unpublished Google Forms quiz; resumable generation and manual-review guidance.
- English, Sinhala and Tamil UI catalogs; reversible language switching; supplied bank language variants with isolated editable snapshots.
- New modules cached locally by the service worker; existing IndexedDB data and saved papers retained.
- 24 automated tests pass. See TEST_RESULTS.md for execution limits.

# v0.2 — Development preview

- Modular, dependency-free application with ten navigation sections.
- IndexedDB schema v2 upgrades the original database and adds profile/settings stores and question indexes.
- Atomic validated bank imports and updates; original prototype and samples retained.
- Six-stage paper wizard, deterministic balanced/random assembly and shortage messages.
- Snapshot editor, reorder/replace controls, undo/redo, saved drafts and duplicates.
- Four print presets, scheme/combined previews, native PDF printing and text-only OOXML DOCX.
- Complete transactional device backups, themes and Sinhala navigation.
- Service-worker asset cache, manifest, local icons, automated tests and Pages workflow.

Publishing and professional feature phases remain partial; see README limitations and test results.

# v0.3 — Preview-first redesign

Replaced the six-step wizard with one paper workspace. Details, question selection and appearance sit beside the live paper. A searchable question picker adds questions individually; each paper question has Edit, Up, Down, Replace and Remove controls. Page appearance updates immediately with four layout choices, option columns, question spacing and writing lines. PDF/Word and save controls stay beside the preview. Home now prioritizes new and recent papers. Supporting tools remain under More tools. Existing IndexedDB data and question-bank formats are unchanged. Print/export markup excludes editing controls.

# v0.4 — Six families, 28 presets and structured Science documents

- Added examination, lesson test, short paper, tute/worksheet, short-note and past-question-collection families.
- Added section instructions, compulsory/choose rules, question targets, source metadata, section numbering and individual durations.
- Added recursive subquestions and leaf-level marks/answers; printed vs required marks are calculated separately.
- Added note, worked example, table, diagram, activity and heading content editors, multiple embedded media, per-question option columns and answer-space modes.
- Added browser-measured A4 pages, continuation, running headers/footer page counts, section/manual page breaks and page-target/oversize warnings.
- Upgraded DOCX from text-only to editable tables and embedded diagrams with page-number fields.
- Added an illustrative mixed-content Science example and richer compatible bank sample.
- Added recursive bank/backup validation, legacy visibility protection and source-snapshot regression tests.
- Kept existing databases, banks and drafts compatible. UI is still preview-first and mobile controls can fold away.
