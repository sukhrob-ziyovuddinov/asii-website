# Contributing to the ASII website

The website must describe ASII as financial-crime intelligence infrastructure and an investigation-continuity layer for regulated institutions. It must not present ASII as a generic chatbot, autonomous decision-maker, regulator-approved service, guaranteed compliance solution, or deployed institutional integration without evidence.

## Workflow

1. Create a focused branch from `main`.
2. Use a small pull request with explicit scope and rollback.
3. Never commit secrets, form submissions, analytics identifiers containing personal data, customer data, or investigative material.
4. Verify every product, customer, partner, deployment, integration, regulatory, and performance claim.
5. Preserve human-review, evidence-lineage, auditability, and limitations language.

## Verification baseline

```bash
npm ci
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

For visible changes, also verify keyboard navigation, focus states, semantic headings, contrast, responsive layouts at 375/768/1440 px, metadata, and broken links. Contact-flow tests must use synthetic data and must not send external messages unless the test explicitly authorizes it.
