import { site } from "@/data/site";

export function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className={className ? `border-t border-border ${className}` : "border-t border-border"}>
      <div className="mx-auto max-w-3xl px-6 py-5 text-xs text-muted-foreground">
        <p>
          © {year} {site.name}. Designed by Max, built by Cursor.
        </p>
      </div>
    </footer>
  );
}
