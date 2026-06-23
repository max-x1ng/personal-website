import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="01" title="About">
      <Reveal>
        <div className="space-y-4 text-sm leading-relaxed text-foreground md:text-base">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
