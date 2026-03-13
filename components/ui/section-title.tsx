import type { ReactNode } from "react";

type SectionTitleProps = {
  overline?: string;
  children: ReactNode;
};

export function SectionTitle({ overline, children }: SectionTitleProps) {
  return (
    <header className="space-y-4">
      {overline ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {overline}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2>
    </header>
  );
}
