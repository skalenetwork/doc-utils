/**
 * @license
 * SKALE doc-utils
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @file process.ts
 * @author Sawyer Cutler
 * @copyright SKALE Labs 2019-Present
 */

import chalk from "chalk";
import { WatchEvent } from "./watch";

export type Flags = {
  /// Build Antora Command
  nodeRunner: "yarn" | "npm" | "pnpm";

  /// General Directory for process location
  path: string;

  /// Build/Set UI Wrapper
  uiRepo: string;
  uiPath: string;
  uiOnly: boolean;

  /// Build/Set Docs
  docsPlaybook: string;
  docsTrace: boolean;

  /// Watch Docs
  watchPaths: string[];
  watchEvent: WatchEvent;
  watchLogPath?: boolean;
  watchLogStats?: boolean;

  /// Server Config
  serverWait: number;
  serverOpen: boolean;
  serverDir: string;
  serverPort: number;
};

const _handleValue = (
  args: string[],
  value: string,
  throwOnUndefined = false
): string | undefined => {
  const index: number = args.indexOf(value);

  if (index > -1) return args[index + 1];
  if (throwOnUndefined) throw new Error(chalk.red("Flag Missing: ", value));
};

const _handleBoolean = (args: string[], value: string): boolean => {
  return args.indexOf(value) > -1;
};

export const sortFlags = (args: string[], watch = true): Flags => {
  return {
    nodeRunner: _handleValue(args, "--node-runner") ?? "npm",
    path: _handleValue(args, "--path", true),
    uiRepo:
      _handleValue(args, "--ui-repo") ??
      "git@github.com:skalenetwork/doc-ui.git",
    uiPath: _handleValue(args, "--ui-path") ?? "doc-ui",
    uiOnly: _handleBoolean(args, "--ui-only"),
    docsPlaybook: _handleValue(args, "--docs-playbook") ?? "playbook.yml",
    docsTrace: _handleBoolean(args, "--docs-stacktrace"),
    watchPaths: _handleValue(
      args,
      "--watch-paths",
      watch ? true : false
    )?.split(","),
    watchEvent: _handleValue(args, "--watch-event", watch ? true : false),
    watchLogPath: _handleBoolean(args, "--watch-log-path"),
    watchLogStats: _handleBoolean(args, "--watch-log-stats"),
    serverWait: Number(_handleValue(args, "--server-wait") ?? "1000"),
    serverOpen: _handleBoolean(args, "--server-open"),
    serverDir: _handleValue(args, "--server-dir", true),
    serverPort: Number(_handleValue(args, "--server-port") ?? "4444"),
  } as Flags;
};
