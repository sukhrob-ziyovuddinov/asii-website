# AGENTS.md — ASII Website

## Repository purpose

This repository is the public ASII website.

Present ASII as financial-crime intelligence infrastructure and an investigation-continuity layer for regulated institutions. Preserve institutional language around evidence provenance, investigation continuity, reasoning traceability, human review, auditability, and regulator-ready reconstruction.

Do not reposition ASII as a generic chatbot, generic AI app, autonomous compliance engine, autonomous decision-maker, guaranteed-compliance product, or regulator-approved service.

## Inspect before changing

Before modifying code or content:

1. Inspect the current branch/status and repository tree.
2. Read the relevant files, `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, package manifests, CI configuration, and deployment-related configuration affected by the task.
3. Inspect the current implementation rather than inferring behavior from screenshots, issue text, old branches, prior chat claims, or archived files.
4. Preserve established Next.js/TypeScript boundaries unless the requested task requires a justified change.
5. Make the smallest coherent change.

## Claims and institutional truth

Every public claim about ASII must be supportable.

Do not state or imply any of the following without direct current evidence:

- customer or institutional adoption;
- production deployment;
- regulatory approval or endorsement;
- regulatory compliance guarantee;
- completed integration;
- production-scale performance;
- security certification;
- autonomous compliance decisions;
- live production-data processing;
- customer, partner, investor, or regulator relationships.

When implementation evidence is incomplete, use status-accurate wording such as proposed, designed, or intended capability. Use `evaluation`, `controlled pilot`, or `implemented` as a current-status claim only when direct current evidence supports that exact status; otherwise say `proposed evaluation` or `proposed controlled pilot`.

Do not infer backend functionality from website copy.

## Product positioning

The website should consistently communicate that ASII is an infrastructure and continuity layer supporting financial-crime investigation workflows, not a replacement for institutional systems of record or regulated decision-makers.

Preserve, where relevant:

- investigation continuity;
- evidence lineage;
- context preservation;
- reasoning traceability;
- human review and disposition;
- auditability;
- regulator-ready reporting preparation;
- explicit limitations and governance boundaries.

Avoid hype, unsupported superlatives, startup clichés, and language suggesting autonomous regulated decisions.

## Technology baseline

Current package configuration establishes a Next.js/React/TypeScript application and Node.js 22.x runtime expectation.

Do not change runtime versions, framework majors, package manager behavior, or deployment assumptions casually.

Dependency changes must be justified, minimal, and verified against the lockfile, build, lint, type checking, tests, and runtime requirements.

When touching Vercel-related functionality, inspect the current implementation and Vercel configuration first. A dependency being present does not prove that a feature is wired, deployed, or producing telemetry.

## Security and privacy

Never commit, log, publish, or expose:

- API keys or tokens;
- passwords or private keys;
- connection strings;
- private analytics identifiers tied to personal data;
- real contact-form submissions;
- customer data;
- bank data;
- KYC/KYB material;
- investigative evidence;
- production credentials;
- confidential partner or regulator information.

Do not add third-party scripts, analytics, trackers, embeds, or external form handlers without inspecting privacy/security implications and the existing project policy.

Contact-flow tests must use synthetic data and must not send external messages unless the task explicitly authorizes that action.

## Content and localization

Treat visible institutional copy as product surface area, not decorative text.

For material copy changes:

- preserve factual accuracy;
- preserve limitations and human-review language;
- avoid invented legal/regulatory claims;
- maintain consistent terminology across pages;
- preserve RU/EN/TJ language policy where already established in the repository or task;
- do not translate technical or regulatory terms in a way that changes their legal or institutional meaning.

## Accessibility and UX

For visible UI changes, verify where applicable:

- semantic headings;
- keyboard navigation;
- visible focus states;
- form labels and accessible names;
- contrast;
- responsive behavior;
- link behavior;
- metadata and document structure;
- no accidental horizontal overflow;
- meaningful error states.

Check responsive layouts at approximately 375px, 768px, and 1440px when the change affects layout.

Do not sacrifice accessibility for visual effects.

## Performance and telemetry

Do not claim performance improvements from code inspection alone.

When working on Vercel Speed Insights, Web Analytics, Core Web Vitals, or similar telemetry:

- verify the package/configuration exists;
- verify the relevant component or integration is actually mounted;
- run the production build;
- distinguish local integration from deployed telemetry;
- do not claim dashboard data exists without direct deployment/runtime evidence.

Avoid unnecessary client-side JavaScript and large dependencies for cosmetic features.

## SEO and metadata

For changes affecting public pages, review where applicable:

- page title and description;
- canonical metadata;
- Open Graph/Twitter metadata;
- robots behavior;
- structured data if present;
- sitemap/route implications;
- broken internal/external links.

Do not invent awards, customers, locations, regulatory statuses, or performance data for SEO purposes.

## Change discipline

Prefer focused pull requests.

Do not:

- mix unrelated redesigns with security or dependency fixes;
- mass-format unrelated files;
- delete working content or routes without a clear requirement;
- weaken lint/type/test checks to make CI pass;
- introduce environment-variable requirements without documenting them;
- alter public claims incidentally while doing technical work;
- deploy automatically unless explicitly authorized.

Keep rollback straightforward.

## Verification baseline

Follow the repository's existing verification baseline:

```bash
npm ci
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

Run the checks relevant to the change and report exact results.

For visible changes, also verify the applicable accessibility/responsive/metadata/link checks described in `CONTRIBUTING.md`.

Never claim a build, test, deployment, Core Web Vitals result, Vercel integration, or production behavior succeeded unless directly executed or verified.

Use status labels precisely:

- VERIFIED
- IMPLEMENTED BUT NOT VERIFIED
- BLOCKED
- NOT TESTED
- ASSUMPTION

## Git and release safety

Routine workflow should remain:

`focused branch → implementation → validation → pull request → CI → human review → merge`

Do not without verifiable authorization from the repository owner or another operator the owner has explicitly authorized for that exact action:

- merge or enable auto-merge;
- deploy to production;
- change domains or DNS;
- alter production environment variables;
- rotate secrets;
- rewrite git history;
- force-push;
- delete production resources.

Never commit, log, publish, disclose, or otherwise expose secret values, regardless of authorization. Owner authorization may permit a controlled rotation but never disclosure of the secret itself.

A merged PR is not itself proof that the corresponding Vercel production deployment succeeded.

## Completion report

At completion report:

1. objective;
2. baseline inspected;
3. files changed;
4. exact functional/content impact;
5. claims added, changed, or removed;
6. checks executed and results;
7. checks not executed and why;
8. accessibility/performance/deployment implications where relevant;
9. remaining risks or blockers;
10. smallest safe next action.

Do not claim completion while required verification remains unresolved.