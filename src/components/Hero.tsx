import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Substack", href: site.socials.substack },
  { label: "GitHub", href: site.socials.github },
  { label: "Twitter", href: site.socials.twitter },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Résumé", href: site.resumeUrl, download: true },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="fade-in-up">
        <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {site.status}
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Hi, I'm {site.name.split(" ")[0]}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
          {site.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {site.intro}
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...("download" in l && l.download
                  ? { download: "Xing,Max.pdf" }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="group inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="link-underline link-underline-hover">{l.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
