import { site } from "@/data/site";
import { Section, SectionBody } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal>
        <SectionBody className="space-y-4">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </SectionBody>
      </Reveal>
    </Section>
  );
}
