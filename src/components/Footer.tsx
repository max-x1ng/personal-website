import { site } from "@/data/site";

export function Footer({
  className,
  borderless = false,
  embedded = false,
}: {
  className?: string;
  borderless?: boolean;
  embedded?: boolean;
}) {
  const year = new Date().getFullYear();
  const borderClass = borderless ? "" : "border-t border-border";
  const mergedClass = [borderClass, className].filter(Boolean).join(" ");

  const content = (
    <p>
      © {year} {site.name}. Designed by Max, built with Cursor.
    </p>
  );

  if (embedded) {
    return (
      <footer className={mergedClass ? `${mergedClass} pt-2 text-xs text-muted-foreground` : "pt-2 text-xs text-muted-foreground"}>
        {content}
      </footer>
    );
  }

  return (
    <footer className={mergedClass || undefined}>
      <div className="mx-auto max-w-3xl px-6 pb-4 pt-2 text-xs text-muted-foreground">{content}</div>
    </footer>
  );
}
