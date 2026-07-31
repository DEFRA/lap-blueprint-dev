import { detailsTablePlugin } from "./plugins/detailsTablePlugin.js";
import { tableRowHeaderPlugin } from "./plugins/tableRowHeaderPlugin.js";
import { buttonLinkPlugin } from "./plugins/buttonLinkPlugin.js";
import { govukClassPlugin } from "./plugins/govukClassPlugin.js";
import { taskListPlugin } from "./plugins/taskListPlugin.js";

/**
 * Ordered GOV.UK markdown transforms.
 *
 * Order matters:
 * 1) Rewrite details tables
 * 2) Normalize row headers
 * 3) Rewrite button-prefixed links
 * 4) Apply GOV.UK classes
 */
export const govukMarkdown = [
  detailsTablePlugin,
  tableRowHeaderPlugin,
  buttonLinkPlugin,
  govukClassPlugin,
  taskListPlugin,
];
