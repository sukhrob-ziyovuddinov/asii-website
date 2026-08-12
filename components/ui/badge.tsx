import { ReactNode } from "react";
import { cn } from "@/components/ui/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-subtle bg-panelElevated/80 px-2 py-1 text-xs font-medium text-textSecondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
