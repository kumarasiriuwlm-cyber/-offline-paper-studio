# v0.4 validation

17 automated Node tests pass. Coverage includes original sample-bank compatibility, invalid/duplicate records, deterministic selection and shortages, source isolation, 20,000-record validation, backups, Sinhala DOCX text, print-control isolation, all 28 presets across six families, choice-aware totals, nested marking, legacy orphan-section visibility, rich bank import, nested media/answer rejection, student/teacher editions, and binary image/table DOCX generation.

Independent Python validation opened the rich DOCX ZIP, parsed all XML/rels, verified embedded PNG bytes, and reopened the file using python-docx: 46 paragraphs, one editable table and one inline diagram. This is structural verification; Microsoft Word visual fidelity is not certified.

Browser QA in Chrome: startup and legacy demo persistence; mixed-content demonstration rendered as two A4 pages; note, table, worked example, PNG circuit and nested question visible; Sinhala nested wording edited/saved; additional subquestion added and marks recalculated from 3 to 4; section configuration dialog opened; all six families visible and O/L I/A/B presets selectable with missing-question checks.

Remaining verification: physical Android viewport/airplane-mode/PWA installation, actual exported PDF files, print hardware, and Microsoft Word visual comparison. Browser print pagination is recalculated without editor controls. Oversized content is flagged and should be resized before distribution.
