# Question-bank format

Use UTF-8 JSON with `format: "PAPER_STUDIO_BANK_V1"`, `bank`, and `questions`.

Bank requires `id` (2–70 letters/numbers/underscore/dot/hyphen), `name`, `subject`, `grade` (1–13) and `version` (nonempty string). Optional fields include language, syllabusVersion, verification, source metadata. IDs must remain stable across updates. Equal installed versions are rejected; different versions require confirmation. Version strings are opaque identifiers: downgrade ordering is not inferred.

Each question requires unique `id`, `type`, nonempty `stem`, and numeric positive `marks` up to 100. Types: mcq, short, structured, essay, matching. MCQ options: 2–8 nonempty strings; `correct` is a 1-based integer or integer array. Empty answers are allowed but marked missing. Additional fields: lesson, subtopic, difficulty, language, answer, explanation, tags, source, verification, image. Source/extra metadata is retained. Images use embedded base64 PNG/JPEG/WebP data URLs; remote images and SVG are rejected.

Each bank is validated before a single atomic write. A failed import cannot partly replace a bank. Questions use `bankId::questionId` keys; different banks may reuse local IDs. Usage counters are retained on matching IDs during updates. Paper questions are independent snapshots. Limits: 20,000 questions / 40 MB import; diagram uploads under 2 MB.

See `samples/demo-1.json`, `demo-2.json`, `demo-3.json` for complete examples. These samples are illustrative only. Future package adapters can feed normalized records into the database without changing paper snapshots; SQLite packages are not implemented.

## v0.4 compatible extensions (same V1 envelope)

See `samples/rich-content-bank.json`. A question can have recursive `children` (maximum four nested levels), each with stem, type, marks, answer, correct/options, image, table and answer-space fields. For a parent with children, the displayed total is the sum of leaf marks; the parent's stored marks are not added again.

Optional `contentBlocks` is an array of separately identified teaching records with `kind` in note/example/table/diagram/activity/heading and a text `stem`. These records have zero assessment marks. `table` is a row-array of string cells; `images` contains `{src,caption,width}` entries, all embedded PNG/JPEG/WebP. Mark diagrams with `image`, `imageWidth`, `imageAlign`; `optionColumns` supports 1, 2 or 4. `answerMode` supports lines/none/blank/grid; `answerLines` sets line count or drawing-space size. Media is validated recursively before import or backup restoration.

Paper documents optionally have `family`, `preset`, `sections`, `activeSection`, `instructions`, `paperCode`, `term`, `year`, `showSource` and `sourceMode`. Sections have stable IDs, title/instructions, rule all/choose, choose count, targetCount, optional allowedType, answerMode, starting number and page-break setting. `questions` remains the ordered list of all content; each record has a sectionId. Legacy orphan section IDs render in the first section rather than disappearing.

`source` may be a string or `{exam,year,paper,question,publisher}`. `originalNumber` can retain original source numbering in original mode. Source records are not OCR results or proof of permission to redistribute content.
