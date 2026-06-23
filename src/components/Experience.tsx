import { useMemo, useState } from "react";
import { site } from "@/data/site";
import { Section, SectionBody, sectionBodyClassName, sectionHeaderAsideClassName } from "./Section";
import { Reveal } from "./Reveal";

const CATS = ["Work", "Education"] as const;

export function Experience() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Work");
  const items = useMemo(
    () => site.experience.filter((e) => e.category === cat),
    [cat],
  );

  return (
    <Section
      id="experience"
      title="Experiences"
      headerAside={
        <div className={`flex flex-wrap justify-end gap-x-5 gap-y-1 ${sectionHeaderAsideClassName}`}>
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`transition-colors ${
                cat === c ? "text-accent" : "hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      }
    >
      <Reveal>
        <SectionBody>
          <ul className="divide-y divide-border">
            {items.map((e, i) => (
              <li key={`${e.org}-${i}`} className="py-4 first:pt-0 last:pb-0">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <div className="min-w-0">
                    <h3 className={`font-serif ${sectionBodyClassName}`}>{e.org}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.role}
                      {e.location ? ` — ${e.location}` : ""}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground">
                    {e.start} — {e.end}
                  </p>
                </div>
                {e.description ? <p className="mt-3">{e.description}</p> : null}
              </li>
            ))}
          </ul>
        </SectionBody>
      </Reveal>
    </Section>
  );
}
