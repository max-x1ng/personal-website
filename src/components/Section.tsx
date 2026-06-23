import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const sectionBodyClassName =
  "text-sm leading-relaxed text-foreground md:text-base";

export function SectionBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(sectionBodyClassName, className)}>{children}</div>;
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-10 md:py-14">
      <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {eyebrow ? (
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  );
}
