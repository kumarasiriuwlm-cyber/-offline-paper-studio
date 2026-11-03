# v0.5 validation

24 Node tests pass (2026-11-03), including the 18 v0.4 regressions below. New tests cover normalized page styling, all three numbering languages and native digits, header/footer/teacher visibility in HTML and DOCX, safe student versus teacher text copy, MCQ answer mapping, unpublished Google Forms generation/idempotency against a mock, complete Sinhala/Tamil dictionary entries and preservation of edits to translated snapshots.

Chrome browser QA: format-family chooser → MCQ preset → add a matching question → preview; More edits closed initially and opens on request; design dialog and custom Sinhala header/footer saved; double border visible; Sinhala and Tamil page numbers and local digits rendered; English/Sinhala/Tamil interface switching; teacher messages and question wording remain intact; copy-all clipboard contents verified; localized Google Form instructions shown. Google account execution was not performed.

Both rich-content and page-design DOCX files passed ZIP integrity, parsing of all XML/rels, and python-docx reopening. No Microsoft Word visual rendering certification. Native Word digits depend on Word settings. Print/PDF continues through browser printing; a new PDF file and physical printing were not verified in this update. Physical Android, airplane-mode and PWA installation tests remain pending; the service-worker precache list includes every new runtime module.

# v0.4 validation

18 automated Node tests pass. Coverage includes original sample-bank compatibility, invalid/duplicate records, deterministic selection and shortages, source isolation, 20,000-record validation, backups, Sinhala DOCX text, print-control isolation, all 28 presets across six families, choice-aware totals, nested marking, legacy orphan-section visibility, rich bank import, nested media/answer rejection, student/teacher editions, and binary image/table DOCX generation.

Independent Python validation opened the rich DOCX ZIP, parsed all XML/rels, verified embedded PNG bytes, and reopened the file using python-docx: 46 paragraphs, one editable table and one inline diagram. This is structural verification; Microsoft Word visual fidelity is not certified.

Browser QA in Chrome: startup and legacy demo persistence; mixed-content demonstration rendered as two A4 pages; note, table, worked example, PNG circuit and nested question visible; Sinhala nested wording edited/saved; additional subquestion added and marks recalculated from 3 to 4; section configuration dialog opened; all six families visible and O/L I/A/B presets selectable with missing-question checks.

Remaining verification: physical Android viewport/airplane-mode/PWA installation, actual exported PDF files, print hardware, and Microsoft Word visual comparison. Browser print pagination is recalculated without editor controls. Oversized content is flagged and should be resized before distribution.

Additional regression: Word separate-answer sections omit writing lines, original question numbering is retained, and graph grids export as editable cell grids. Preview scales to the panel content width and responds to resizing.
