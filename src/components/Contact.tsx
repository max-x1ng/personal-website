import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const links = [
  { label: "Substack", href: site.socials.substack },
  { label: "GitHub", href: site.socials.github },
  { label: "Twitter / X", href: site.socials.twitter },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Resume", href: site.resumeUrl, download: true },
] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <Section id="contact" title="Get In Touch">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-foreground link-underline link-underline-hover"
          >
            {site.email}
          </a>
          <button
            onClick={copy}
            aria-label="Copy email"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...("download" in l && l.download
                  ? { download: "Xing,Max.pdf" }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="text-muted-foreground link-underline transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
