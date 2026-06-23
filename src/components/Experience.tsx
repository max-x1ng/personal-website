import { useMemo, useState } from "react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const CATS = ["All", "Work", "Research", "Education"] as const;

export function Experience() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const items = useMemo(
    () => (cat === "All" ? site.experience : site.experience.filter((e) => e.category === cat)),
    [cat],
  );

  return (
    <Section id="experience" eyebrow="02" title="Experience">
      <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`text-xs uppercase tracking-[0.18em] transition-colors ${
              cat === c ? "text-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-border">
        {items.map((e, i) => (
          <li key={`${e.org}-${i}`} className="py-6">
            <Reveal delay={i * 40}>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl text-foreground">{e.org}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.role}
                    {e.location ? ` — ${e.location}` : ""}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {e.start} — {e.end}
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/90">
                {e.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
