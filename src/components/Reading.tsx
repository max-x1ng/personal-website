import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const groups = [
  { key: "read", label: "Read" },
  { key: "currentlyReading", label: "Currently reading" },
  { key: "readingList", label: "Reading list" },
] as const;

export function Reading() {
  return (
    <Section id="reading" eyebrow="05" title="Reading">
      <div className="space-y-10">
        {groups.map(({ key, label }, i) => (
          <Reveal key={key} delay={i * 40}>
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </h3>
              <ul className="mt-4 divide-y divide-border">
                {site.reading[key].map((book) => (
                  <li key={`${book.title}-${book.author}`} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-serif text-xl text-foreground md:text-2xl">{book.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
