import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

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
    <Section id="contact" eyebrow="06" title="Get in touch">
      <Reveal>
        <p className="max-w-2xl font-serif text-2xl leading-snug text-foreground md:text-3xl">
          I'm always interested in meeting thoughtful people working on ambitious ideas — in
          research, investing, or anything in between. Don't hesitate to reach out.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
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

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {(["twitter", "linkedin", "substack"] as const).map((k) => (
            <li key={k}>
              <a
                href={site.socials[k]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent link-underline link-underline-hover capitalize"
              >
                {k === "twitter" ? "Twitter / X" : k}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
