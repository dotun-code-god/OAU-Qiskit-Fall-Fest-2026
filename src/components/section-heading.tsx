import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, children, detail }: { eyebrow: string; children: ReactNode; detail?: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
      <div><p className="eyebrow text-primary">{eyebrow}</p><h2 className="section-title mt-4">{children}</h2></div>
      {detail ? <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end">{detail}</p> : null}
    </div>
  );
}