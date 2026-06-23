import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Writing() {
  const f = site.writing.featured;
  return (
    <Section id="writing" title="Writing">
      <Reveal>
        <a
          href={f.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border-b border-border pb-6"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>{f.topic}</span>
            <span>·</span>
            <span>{f.date}</span>
          </div>
          <h3 className="mt-3 font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
            {f.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {f.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground">
            <span className="link-underline link-underline-hover">Read essay</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>

      <Reveal delay={40}>
        <p className="mt-6 text-sm text-muted-foreground md:text-base">More coming soon...</p>
      </Reveal>
    </Section>
  );
}
