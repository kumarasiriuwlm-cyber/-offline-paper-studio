# Question-bank format

Use UTF-8 JSON with `format: "PAPER_STUDIO_BANK_V1"`, `bank`, and `questions`.

Bank requires `id` (2–70 letters/numbers/underscore/dot/hyphen), `name`, `subject`, `grade` (1–13) and `version` (nonempty string). Optional fields include language, syllabusVersion, verification, source metadata. IDs must remain stable across updates. Equal installed versions are rejected; different versions require confirmation. Version strings are opaque identifiers: downgrade ordering is not inferred.

Each question requires unique `id`, `type`, nonempty `stem`, and numeric positive `marks` up to 100. Types: mcq, short, structured, essay, matching. MCQ options: 2–8 nonempty strings; `correct` is a 1-based integer or integer array. Empty answers are allowed but marked missing. Additional fields: lesson, subtopic, difficulty, language, answer, explanation, tags, source, verification, image. Source/extra metadata is retained. Images use embedded base64 PNG/JPEG/WebP data URLs; remote images and SVG are rejected.

Each bank is validated before a single atomic write. A failed import cannot partly replace a bank. Questions use `bankId::questionId` keys; different banks may reuse local IDs. Usage counters are retained on matching IDs during updates. Paper questions are independent snapshots. Limits: 20,000 questions / 40 MB import; diagram uploads under 2 MB.

See `samples/demo-1.json`, `demo-2.json`, `demo-3.json` for complete examples. These samples are illustrative only. Future package adapters can feed normalized records into the database without changing paper snapshots; SQLite packages are not implemented.
