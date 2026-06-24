import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Section, SectionBody, sectionBodyClassName } from "./Section";
import { Reveal } from "./Reveal";

export function Writing() {
  return (
    <Section id="writing" title="Writing">
      <Reveal>
        <SectionBody>
          <div className="divide-y divide-border">
            {site.writing.items.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-6 first:pt-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{item.topic}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
                <h3
                  className={`mt-3 font-serif transition-colors group-hover:text-accent ${sectionBodyClassName}`}
                >
                  {item.title}
                </h3>
                <p className="mt-3">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1">
                  <span className="link-underline link-underline-hover">Read essay</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </SectionBody>
      </Reveal>
    </Section>
  );
}
