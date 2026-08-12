import { ReactNode } from "react";
import { cn } from "@/components/ui/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-default bg-panel/95 p-5 shadow-[0_10px_30px_rgba(2,6,23,0.24)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
