import { tableRowHeaderPlugin } from "./plugins/tableRowHeaderPlugin.js";
import { buttonLinkPlugin } from "./plugins/buttonLinkPlugin.js";
import { govukClassPlugin } from "./plugins/govukClassPlugin.js";
import { taskListPlugin } from "./plugins/taskListPlugin.js";
import { govukDetailsPlugin } from "./plugins/govukDetailsPlugin.js";

export const govukMarkdown = [
  tableRowHeaderPlugin,
  buttonLinkPlugin,
  taskListPlugin,
  govukDetailsPlugin,
  govukClassPlugin,
];
