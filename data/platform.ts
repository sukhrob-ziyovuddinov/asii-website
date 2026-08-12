import {
  ShieldCheck,
  Fingerprint,
  GitBranch,
  FileCheck2,
  Layers,
  PlugZap,
} from "lucide-react";

export const platformCapabilities = [
  {
    icon: ShieldCheck,
    title: "Signal and Control Intelligence",
    description:
      "A shared investigative frame for transaction monitoring, sanctions, Travel Rule, adverse-media, identity, and blockchain signals.",
  },
  {
    icon: Fingerprint,
    title: "Entity and Relationship Context",
    description:
      "Context designed to connect people, organisations, accounts, wallets, counterparties, ownership, events, and prior decisions.",
  },
  {
    icon: GitBranch,
    title: "Case Continuity",
    description:
      "A continuity graph that links related alerts, entities, and prior decisions so investigators inherit context instead of rebuilding it.",
  },
  {
    icon: FileCheck2,
    title: "Evidence-Supported Artifacts",
    description:
      "Outputs are intended to retain links to underlying signals and evidence so analysts and reviewers can inspect how a conclusion was formed.",
  },
  {
    icon: Layers,
    title: "MLRO-Reviewable Outputs",
    description:
      "Structured intelligence packages designed to support MLRO review and downstream reporting preparation without replacing accountable judgement.",
  },
  {
    icon: PlugZap,
    title: "Overlay Integration",
    description:
      "An integration model intended to operate alongside existing case-management and control systems rather than requiring wholesale replacement.",
  },
];

export const integrationPrinciples = [
  "Overlay by design: connect existing case-management, screening, monitoring, and intelligence workflows.",
  "Data exchange patterns intended to support institutional security, access, and governance requirements.",
  "Phased validation through a scoped Continuity Pilot before considering broader adoption.",
  "Reporting preparation that can be configured around an institution's approved policies and jurisdictional obligations.",
];

export const deploymentPrinciples = [
  "Evidence continuity designed into case and output workflows.",
  "Reviewable rationale rather than reliance on opaque model scores.",
  "Human approval points and access controls shaped around institutional governance.",
  "Regional design context without claiming regulatory approval or guaranteed compliance.",
];
