import { ArrowUpRight, Github } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <Section id="projects" eyebrow="04" title="Selected work">
      <ul className="grid gap-px bg-border sm:grid-cols-2 sm:border sm:border-border">
        {site.projects.map((p, i) => (
          <li key={p.name} className="bg-background">
            <Reveal delay={i * 40}>
              <div className="group h-full p-6 transition-colors hover:bg-secondary/40">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} on GitHub`}
                        className="transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} live`}
                        className="transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
