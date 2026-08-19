import { tableRowHeaderPlugin } from "./plugins/tableRowHeaderPlugin.js";
import { buttonLinkPlugin } from "./plugins/buttonLinkPlugin.js";
import { govukClassPlugin } from "./plugins/govukClassPlugin.js";
import { taskListPlugin } from "./plugins/taskListPlugin.js";
import { govukDetailsPlugin } from "./plugins/govukDetailsPlugin.js";
import { rootRelativeLinkPlugin } from "./plugins/rootRelativeLinkPlugin.js";

/**
 * Builds the GOV.UK Markdown HAST plugin pipeline.
 *
 * @param {{baseUrl: string}} options - Site URL options.
 * @returns {import('satteri').HastPlugin[]} Configured plugins.
 */
export function govukMarkdown({ baseUrl }) {
  return [
    tableRowHeaderPlugin,
    rootRelativeLinkPlugin({ baseUrl }),
    buttonLinkPlugin,
    taskListPlugin,
    govukDetailsPlugin,
    govukClassPlugin,
  ];
}
