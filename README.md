# MyScan Secret Test Lab

A tiny, standalone UI and fixture repository for validating secret-detection precision and recall.

## Safety

All credential-like values in this repository are **synthetic, nonfunctional test strings**. Do not replace them with real credentials. The UI is a static mock and does not connect to MyScan or make network requests.

## Open the UI

Open `index.html` directly in a browser. Click **Run demo scan** to display the expected fixture counts. This is a presentation-only interaction, not a real scanner invocation.

## Fixture ground truth

- **2 planted synthetic secrets** expected to be detected.
- **5 negative controls** expected not to be reported.
- Expected result: 2 true positives, 0 false positives, 0 false negatives.
- Ground truth is in `ground-truth.json`.

| Fixture | Expected |
|---|---|
| `fixtures/api_key.py` | Detect synthetic generic API key |
| `fixtures/access_token.js` | Detect synthetic access token |
| `fixtures/negative_controls.py` | Do not flag ordinary values, placeholder, dictionary word, environment reference, or masked value |

Scanner rule IDs and confidence thresholds vary by implementation. Review actual findings against the manifest rather than requiring a specific rule ID unless your ruleset documents one.

## Run MyScan against this repository

From the MyScan project environment, use the CLI syntax supported by your installed version. For a typical CLI:

```bash
myscan scan /path/to/myscan-secret-test-lab --local --format json --output myscan-secret-test-lab.json
myscan scan /path/to/myscan-secret-test-lab --local --format sarif --output myscan-secret-test-lab.sarif
```

If your CLI uses different export flags, check `myscan scan --help` and substitute its documented JSON/SARIF options. Store reports outside this fixture directory so report contents are not scanned as source.

## Evaluation

1. Confirm both planted values are detected at the correct file and line.
2. Confirm none of the five negative controls is reported as a secret.
3. Validate JSON and SARIF syntax and ensure secret values are masked in output.
4. Compute precision and recall against `ground-truth.json`; do not infer a pass from the UI demo.
5. Never test with live credentials or send credential-like values to external validation services.
