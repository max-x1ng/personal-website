import { useEffect, useState } from "react";
import { site } from "@/data/site";

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
  const phrases = site.currentlyPhrases;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let swapTimeout: ReturnType<typeof setTimeout>;

    const interval = window.setInterval(() => {
      setVisible(false);
      swapTimeout = window.setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(swapTimeout);
    };
  }, [phrases.length]);

  return (
    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
      Currently{" "}
      <span
        className="inline-block text-foreground transition-all duration-300 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
        }}
        aria-live="polite"
      >
        {phrases[index]}
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
