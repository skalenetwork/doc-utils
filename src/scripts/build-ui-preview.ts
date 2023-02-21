#! /usr/bin/env node

/**
    Copyright (C) 2023 Dirt Road Development

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    @file reload.ts
    @author Sawyer Cutler
*/

import chalk from "chalk";
import path from "path";
import { Flags, sortFlags } from "../utils/flags";
import { spawnProcess } from "../utils/process";

/**
 * @description Called via npx reload-ui
 */

async function main() {
  const flags: Flags = sortFlags(process.argv, false);

  const directory = path.dirname(flags.path);

  /// Remove UI from Git
  spawnProcess({
    command: "git",
    args: ["submodule", "deinit", "-f", "--", flags.uiPath],
    directory,
  });

  /// Remove UI from Git
  spawnProcess({
    command: "git",
    args: ["rm", "-f", flags.uiPath],
    directory,
  });

  /// Add Submodule
  spawnProcess({
    command: "git",
    args: ["submodule", "add", flags.uiRepo],
    directory,
  });

  /// Install UI Deps
  spawnProcess({
    command: flags.nodeRunner,
    args: ["--cwd", flags.uiPath, "install"],
    directory,
  });

  /// Build UI
  spawnProcess({
    command: flags.nodeRunner,
    args: ["--cwd", flags.uiPath, "bundle"],
    directory,
  });

  /// Build Docs
  spawnProcess({
    command: "npm",
    args: flags.docsTrace
      ? ["exec", "--", "antora", "--fetch", flags.docsPlaybook, "--stacktrace"]
      : ["exec", "--", "antora", "--fetch", flags.docsPlaybook],
    stdio: "inherit",
    directory,
  });
}

main().catch((error) => {
  console.error(chalk.redBright(error));
  process.exitCode = 1;
});
