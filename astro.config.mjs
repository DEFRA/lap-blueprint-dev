import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { govukMarkdown } from "./src/util/govukMarkdown.js";

export default defineConfig({
  site: "https://danny-may.github.io",
  base: "/lap",
  trailingSlash: "always",
  vite: {
    css: {
      lightningcss: {
        errorRecovery: true,
      },
    },
  },
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
