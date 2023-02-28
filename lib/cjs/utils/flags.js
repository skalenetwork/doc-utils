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
exports.sortFlags = void 0;
const chalk_1 = __importDefault(require("chalk"));
const _handleValue = (args, value, throwOnUndefined = false) => {
    const index = args.indexOf(value);
    if (index > -1)
        return args[index + 1];
    if (throwOnUndefined)
        throw new Error(chalk_1.default.red("Flag Missing: ", value));
};
const _handleBoolean = (args, value) => {
    return args.indexOf(value) > -1;
};
const sortFlags = (args, watch = true) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
        nodeRunner: (_a = _handleValue(args, "--node-runner")) !== null && _a !== void 0 ? _a : "npm",
        path: _handleValue(args, "--path", true),
        uiRepo: (_b = _handleValue(args, "--ui-repo")) !== null && _b !== void 0 ? _b : "git@github.com:skalenetwork/doc-ui.git",
        uiPath: (_c = _handleValue(args, "--ui-path")) !== null && _c !== void 0 ? _c : "doc-ui",
        uiOnly: _handleBoolean(args, "--ui-only"),
        docsPlaybook: (_d = _handleValue(args, "--docs-playbook")) !== null && _d !== void 0 ? _d : "playbook.yml",
        docsTrace: _handleBoolean(args, "--docs-stacktrace"),
        watchPaths: (_e = _handleValue(args, "--watch-paths", watch ? true : false)) === null || _e === void 0 ? void 0 : _e.split(","),
        watchEvent: _handleValue(args, "--watch-event", watch ? true : false),
        watchLogPath: _handleBoolean(args, "--watch-log-path"),
        watchLogStats: _handleBoolean(args, "--watch-log-stats"),
        serverWait: Number((_f = _handleValue(args, "--server-wait")) !== null && _f !== void 0 ? _f : "1000"),
        serverOpen: _handleBoolean(args, "--server-open"),
        serverDir: _handleValue(args, "--server-dir", true),
        serverPort: Number((_g = _handleValue(args, "--server-port")) !== null && _g !== void 0 ? _g : "4444"),
    };
};
exports.sortFlags = sortFlags;
