import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start an institutional conversation with ASII about financial crime intelligence continuity, pilot scope, or strategic use cases.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
