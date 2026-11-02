# Phase checkpoint

| Phase | Implemented | Remaining before completion |
|---|---|---|
| 1 Foundation | Modular source, ten screens, responsive CSS, IndexedDB v2 and legacy-answer upgrade | Physical-device responsive QA, localStorage prototype profile/current-draft migration |
| 2 Banks | Atomic import/update, validation, IDs, indexes, filters, samples, personal questions | Collections, duplicate-content management, indexed/paginated UI for very large banks |
| 3 Builder | Wizard, lesson selection, seeded balanced/random selection, shortages, editing, order, undo/redo, snapshots | Difficulty/lesson percentage quotas, stricter workflow guards, expanded automated browser QA |
| 4 Publishing | Profiles, logo, four print presets, scheme preview, DOCX text, native print/PDF | Embedded-media DOCX, rich tables/formulas, configurable margins/footer/page numbering, photo/QR branding, real Word/PDF visual QA |
| 5 Professional | History, duplication, theme, complete backup transaction, Sinhala navigation | Full Sinhala localization, paper-history filtering, recovery and backup roundtrip testing |
| 6 Offline/QA | Local dependency-free assets, service worker, manifest, 7 passing tests locally and CI | Pages enablement, HTTPS offline/installation/airplane-mode checks, Android QA |

The first source commit is 12ccb64e1468e696fd230644732f0c3c85b7f9aa. Treat this as an honest development checkpoint, not completion of all six phases. Next priority: enable Pages, verify the HTTPS PWA, then complete document fidelity and test coverage before commercial use.
