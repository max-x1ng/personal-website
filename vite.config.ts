import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  // Match the build's CSS pipeline in dev. Vite uses PostCSS in dev and only
  // runs Lightning CSS at build, so build-time transforms (e.g. collapsing a
  // hand-written `-webkit-backdrop-filter` to the prefixed form Chrome ignores)
  // break the built/static output while the dev preview looks fine. Running
  // Lightning CSS in both keeps the preview honest.
  css: { transformer: "lightningcss" },
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
  server: { host: "::", port: 8080 },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    // Cloudflare Workers is the deploy target — build from this entry.
    // Name is pinned to match the Worker already connected in the Cloudflare
    // dashboard (Workers & Pages > personal-website); without this, nitro
    // derives the name from the git remote, which drifts if the repo is
    // ever renamed and would silently deploy a different Worker.
    nitro({ preset: "cloudflare-module", cloudflare: { wrangler: { name: "personal-website" } } }),
    viteReact(),
  ],
});
