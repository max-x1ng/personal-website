import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Writing() {
  const f = site.writing.featured;
  return (
    <Section id="writing" eyebrow="03" title="Writing">
      <Reveal>
        <a
          href={f.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border-b border-border pb-10"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-accent">Featured</span>
            <span>·</span>
            <span>{f.topic}</span>
            <span>·</span>
            <span>{f.date}</span>
          </div>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-4xl">
            {f.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {f.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm text-foreground">
            <span className="link-underline link-underline-hover">Read essay</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>

      <ul className="mt-2 divide-y divide-border">
        {site.writing.posts.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 30}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-5"
              >
                <div className="min-w-0">
                  <h4 className="truncate font-serif text-xl text-foreground transition-colors group-hover:text-accent">
                    {p.title}
                  </h4>
                  <p className="mt-1 truncate text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {p.date}
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>

      <a
        href={site.socials.substack}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
      >
        <span className="link-underline link-underline-hover">View all writing on Substack</span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </Section>
  );
}
