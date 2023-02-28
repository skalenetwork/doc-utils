#! /usr/bin/env node
"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const flags_1 = require("../utils/flags");
const process_1 = require("../utils/process");
const server_1 = require("../utils/server");
const watch_1 = require("../utils/watch");
/**
 * @description Called via npx reload-ui
 */
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const flags = (0, flags_1.sortFlags)(process.argv);
        const directory = path_1.default.dirname(flags.path);
        /// Load Docs UI Wrapper
        (0, process_1.spawnProcess)({
            command: "git",
            args: ["submodule", "deinit", "-f", "--", flags.uiPath],
            directory,
        });
        (0, process_1.spawnProcess)({
            command: "git",
            args: ["rm", "-f", flags.uiPath],
            directory,
        });
        (0, process_1.spawnProcess)({
            command: "git",
            args: ["submodule", "add", "-f", flags.uiRepo],
            directory,
        });
        if (flags.uiOnly) {
            /// Build UI
            (0, process_1.spawnProcess)({
                command: flags.nodeRunner,
                args: ["--cwd", flags.uiPath, "install"],
                directory,
            });
            /// Build UI
            (0, process_1.spawnProcess)({
                command: flags.nodeRunner,
                args: ["--cwd", flags.uiPath, "bundle"],
                directory,
            });
        }
        else {
            (0, process_1.spawnProcess)({
                command: flags.nodeRunner,
                args: ["--cwd", flags.uiPath, "build:ui"],
                directory,
            });
        }
        (0, server_1.startServer)({
            port: flags.serverPort,
            open: flags.serverOpen,
            buildDir: flags.serverDir,
            wait: flags.serverWait,
        });
        (0, process_1.spawnProcess)({
            command: "npm",
            args: flags.docsTrace
                ? ["exec", "--", "antora", "--fetch", flags.docsPlaybook, "--stacktrace"]
                : ["exec", "--", "antora", "--fetch", flags.docsPlaybook],
            stdio: "inherit",
            directory,
        });
        const fn = () => {
            (0, process_1.spawnProcess)({
                command: "npm",
                args: flags.docsTrace
                    ? [
                        "exec",
                        "--",
                        "antora",
                        "--fetch",
                        flags.docsPlaybook,
                        "--stacktrace",
                    ]
                    : ["exec", "--", "antora", "--fetch", flags.docsPlaybook],
                stdio: "inherit",
                directory,
            });
        };
        (0, watch_1.watch)({
            paths: flags.watchPaths,
            event: flags.watchEvent,
            functions: [fn],
            logPath: flags.watchLogPath,
            logStats: flags.watchLogStats,
        });
    });
}
main().catch((error) => {
    console.error(chalk_1.default.redBright(error));
    process.exitCode = 1;
});
