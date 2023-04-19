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

import liveServer from "simple-live-server";

export type ServerParams = {
  buildDir: string;
  open?: boolean;
  port?: number;
  wait?: number;
};

export const startServer = ({
  port,
  open,
  buildDir,
  wait,
}: ServerParams): void => {
  liveServer.start({
    port: port ?? 4444,
    open: open ?? true,
    root: buildDir,
    wait: wait ?? 1000,
    logLevel: 2,
  });
};

export const stop = (): void => {
  liveServer.shutdown();
};
