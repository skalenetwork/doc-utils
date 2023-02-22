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
import { WatchEvent } from "./watch";
export type Flags = {
    nodeRunner: "yarn" | "npm" | "pnpm";
    path: string;
    uiRepo: string;
    uiPath: string;
    uiOnly: boolean;
    docsPlaybook: string;
    docsTrace: boolean;
    watchPaths: string[];
    watchEvent: WatchEvent;
    watchLogPath?: boolean;
    watchLogStats?: boolean;
    serverWait: number;
    serverOpen: boolean;
    serverDir: string;
    serverPort: number;
};
export declare const sortFlags: (args: string[], watch?: boolean) => Flags;
//# sourceMappingURL=flags.d.ts.map