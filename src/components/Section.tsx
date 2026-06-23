import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="mb-12 flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      {children}
    </section>
  );
}
