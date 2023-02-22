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
 * @file server.ts
 * @author Sawyer Cutler
 * @copyright SKALE Labs 2019-Present
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = exports.startServer = void 0;
const live_server_1 = __importDefault(require("live-server"));
const startServer = ({ port, open, buildDir, wait, }) => {
    live_server_1.default.start({
        port: port !== null && port !== void 0 ? port : 4444,
        open: open !== null && open !== void 0 ? open : true,
        root: buildDir,
        wait: wait !== null && wait !== void 0 ? wait : 1000,
        logLevel: 2,
    });
};
exports.startServer = startServer;
const stop = () => {
    live_server_1.default.shutdown();
};
exports.stop = stop;
