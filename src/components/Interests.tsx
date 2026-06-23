import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Interests() {
  return (
    <Section id="interests" eyebrow="04" title="Currently thinking about">
      <Reveal>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 font-serif text-xl text-foreground md:text-2xl">
          {site.interests.map((t, i) => (
            <li key={t} className="flex items-center gap-6">
              <span className="transition-colors hover:text-accent">{t}</span>
              {i < site.interests.length - 1 && (
                <span aria-hidden className="text-muted-foreground">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
