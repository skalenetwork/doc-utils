"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnProcess = void 0;
const child_process_1 = __importDefault(require("child_process"));
const path_1 = __importDefault(require("path"));
const spawnProcess = (params) => {
    const { args, command, directory, stdio } = params;
    child_process_1.default.spawnSync(command, args, {
        stdio: stdio !== null && stdio !== void 0 ? stdio : "inherit",
        cwd: path_1.default.dirname(directory),
    });
};
exports.spawnProcess = spawnProcess;
