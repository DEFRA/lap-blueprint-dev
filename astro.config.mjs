import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { govukMarkdown } from "./src/util/govukMarkdown.js";
import { rawHtmlPlugin } from "./src/util/rawHtmlPlugin.js";
import { mermaidThemeConfig } from "./src/util/mermaidTheme.js";
import mermaid from "astro-mermaid";
import pagefind from "astro-pagefind";

const base = process.env.IS_DEV_SITE ? "/lap-blueprint-dev" : "/lap-blueprint";

export default defineConfig({
  site: "https://defra.github.io",
  base,
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
      theme: "base",
      mermaidConfig: {
        ...mermaidThemeConfig,
      },
    }),
    pagefind(),
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
      hastPlugins: [rawHtmlPlugin, ...govukMarkdown({ baseUrl: base })],
    }),
  },
});
