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

export const sectionHeaderAsideClassName =
  "text-xs uppercase tracking-[0.18em] text-muted-foreground";

export function Section({
  id,
  eyebrow,
  headerAside,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  headerAside?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  const aside = headerAside ?? (
    eyebrow ? <span className={sectionHeaderAsideClassName}>{eyebrow}</span> : null
  );

  return (
    <section id={id} className="w-full py-10 md:py-14">
      <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {aside}
      </div>
      {children}
    </section>
  );
}
