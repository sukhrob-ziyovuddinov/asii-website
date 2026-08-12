export const fragmentedSignals = [
  "Transaction monitoring alerts",
  "Sanctions and TFS intelligence",
  "Travel Rule data",
  "Crypto and blockchain intelligence",
  "Adverse media",
  "Identity, ownership, and UBO data",
  "Investigation histories and reporting records",
] as const;

export const continuityDimensions = [
  {
    title: "Context",
    description:
      "Preserve why a signal mattered, not only that it was generated.",
  },
  {
    title: "Relationships",
    description:
      "Keep entities, counterparties, accounts, wallets, and events connected.",
  },
  {
    title: "Chronology",
    description:
      "Maintain a reviewable sequence of events, decisions, and handoffs.",
  },
  {
    title: "Evidence chain",
    description:
      "Associate findings and outputs with the underlying source material.",
  },
  {
    title: "Investigative reasoning",
    description:
      "Carry analyst rationale and review decisions forward with the case.",
  },
  {
    title: "Institutional memory",
    description:
      "Reduce repeated reconstruction of knowledge across teams and systems.",
  },
] as const;

export const intelligenceWorkflow = [
  {
    title: "Signals",
    description:
      "Alerts and intelligence from existing controls and data sources.",
  },
  {
    title: "Contextual intelligence",
    description: "Linked entities, chronology, evidence, and prior decisions.",
  },
  {
    title: "Investigation continuity",
    description: "Human-reviewed case context that survives each handoff.",
  },
  {
    title: "Regulator-ready output",
    description: "Structured reporting preparation with reviewable rationale.",
  },
] as const;

export const capabilityGroups = [
  {
    number: "01",
    title: "Signal intelligence",
    description:
      "Bring financial crime signals into a shared investigative frame without replacing the controls that generate them.",
    items: [
      "AML/CFT and transaction monitoring",
      "Sanctions and TFS",
      "Travel Rule and blockchain intelligence",
    ],
  },
  {
    number: "02",
    title: "Entity and context intelligence",
    description:
      "Connect identity, ownership, counterparties, adverse media, events, and prior decisions around the subject of review.",
    items: [
      "KYC, KYB, and UBO context",
      "Relationship and chronology mapping",
      "Cross-border intelligence context",
    ],
  },
  {
    number: "03",
    title: "Investigation continuity",
    description:
      "Preserve the evidence and reasoning needed for analysts, reviewers, and institutions to continue an investigation coherently.",
    items: ["Case intelligence", "Evidence continuity", "Institutional memory"],
  },
  {
    number: "04",
    title: "Governance and reporting",
    description:
      "Support accountable human review and structured preparation of intelligence outputs for internal and regulatory workflows.",
    items: [
      "Reviewable rationale",
      "Decision chronology",
      "Regulator-ready reporting workflows",
    ],
  },
] as const;

export const institutionalAudiences = [
  {
    title: "Banks and payment institutions",
    description:
      "A continuity layer for complex cases that cross monitoring, sanctions, identity, and reporting workflows.",
  },
  {
    title: "Fintechs and digital-asset businesses",
    description:
      "A structured way to connect Travel Rule, blockchain, counterparty, and investigation context.",
  },
  {
    title: "Financial crime leadership",
    description:
      "Reviewable intelligence packages for MLROs, Compliance Directors, Heads of Financial Crime, and CROs.",
  },
  {
    title: "Strategic and public stakeholders",
    description:
      "Infrastructure-level visibility into how investigative context can be preserved across regulated ecosystems.",
  },
] as const;

export const governancePrinciples = [
  "Human review and accountable decision-making",
  "Evidence-linked outputs and visible rationale",
  "Controlled adoption alongside existing systems",
  "Clear distinction between source signals, analysis, and decisions",
] as const;
