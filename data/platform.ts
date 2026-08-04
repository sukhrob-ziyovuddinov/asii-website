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
    title: "Travel Rule Compliance",
    description:
      "Structured Travel Rule workflows for VASP counterparties, built around UAE and MENA regulatory expectations rather than adapted from global templates.",
  },
  {
    icon: Fingerprint,
    title: "Crypto Risk Assessment",
    description:
      "Wallet and counterparty risk scoring designed to produce evidence-supported outputs an MLRO can defend, not just a risk number.",
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
      "Every output is traceable to its underlying signal, keeping review and reporting outputs defensible under regulatory scrutiny.",
  },
  {
    icon: Layers,
    title: "MLRO-Reviewable Outputs",
    description:
      "Reporting layers structured for direct MLRO review, reducing translation work between analyst findings and regulatory submission.",
  },
  {
    icon: PlugZap,
    title: "Overlay Integration",
    description:
      "Deploys alongside existing case management and core systems, without requiring institutions to replace what already works.",
  },
];

export const integrationPrinciples = [
  "No rip-and-replace: ASII sits alongside existing case management and compliance systems.",
  "API-first data exchange, built to fit institutional data governance requirements.",
  "Phased rollout through the ASII Continuity Pilot before broader deployment.",
  "Configurable to jurisdiction-specific reporting formats across the UAE and MENA.",
];

export const deploymentPrinciples = [
  "Evidence-linked audit trail on every case from day one.",
  "MLRO-reviewable outputs, not raw model scores.",
  "Access and review controls aligned to institutional governance structures.",
  "Designed for regulated environments: DIFC, ADGM, and VARA-relevant workflows.",
];
