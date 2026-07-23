import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { govukMarkdown } from "./src/util/govukMarkdown.js";
import mermaid from "astro-mermaid";

export default defineConfig({
  site: "https://defra.github.io",
  base: "/lap-blueprint",
  trailingSlash: "always",
  vite: {
    css: {
      lightningcss: {
        errorRecovery: true,
      },
    },
  },
  integrations: [
    mermaid({
      theme: "neutral",
      autoTheme: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
    syntaxHighlight: {
      excludeLangs: ["ascii"],
      type: "shiki",
    },
    processor: satteri({
      hastPlugins: [govukMarkdown],
    }),
  },
});
