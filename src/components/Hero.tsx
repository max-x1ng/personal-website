import { useEffect, useState } from "react";
import { site } from "@/data/site";

const PHRASES = site.currentlyPhrases;
const INTERVAL_MS = 3000;
const FADE_MS = 280;

export const socialLinks = [
  { label: "Substack", href: site.socials.substack },
  { label: "GitHub", href: site.socials.github },
  { label: "Twitter / X", href: site.socials.twitter },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Resume", href: site.resumeUrl, download: true },
] as const;

function CurrentlyLine() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (PHRASES.length === 0) return;

    let cancelled = false;
    let timeoutId = 0;

    const scheduleNext = () => {
      timeoutId = window.setTimeout(() => {
        if (cancelled) return;

        setVisible(false);
        timeoutId = window.setTimeout(() => {
          if (cancelled) return;

          setIndex((i) => (i + 1) % PHRASES.length);
          setVisible(true);
          scheduleNext();
        }, FADE_MS);
      }, INTERVAL_MS);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  const phrase = PHRASES[index] ?? PHRASES[0];

  return (
    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
      Currently{" "}
      <span
        key={phrase}
        className="inline-block text-foreground transition-all duration-300 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
        }}
        aria-live="polite"
      >
        {phrase}
      </span>
    </p>
  );
}

export function Hero() {
  return (
    <section id="top" className="pt-14 md:pt-20">
      <div className="fade-in-up">
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Hi, I'm {site.name.split(" ")[0]}
        </h1>
        <CurrentlyLine />
      </div>
    </section>
  );
}

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs">
      {socialLinks.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            {...("download" in l && l.download
              ? { download: "Xing,Max.pdf" }
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
