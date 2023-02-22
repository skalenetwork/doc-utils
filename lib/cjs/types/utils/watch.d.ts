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
 * @file watch.ts
 * @author Sawyer Cutler
 * @copyright SKALE Labs 2019-Present
 */
export type WatchEvent = "add" | "addDir" | "all" | "change" | "error" | "raw" | "ready" | "unlink" | "unlinkDir";
export type WatchParams = {
    paths: string | string[];
    event: WatchEvent;
    functions: (() => void)[];
    logPath?: boolean;
    logStats?: boolean;
};
export declare const watch: (params: WatchParams) => void;
//# sourceMappingURL=watch.d.ts.map