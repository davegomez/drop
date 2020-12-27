/* Copyright (C) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export const isId = (value: unknown): value is string =>
  typeof value === 'string' && value.charAt(0) === '#';

export const isClassName = (value: unknown): value is string =>
  typeof value === 'string' && value.charAt(0) === '.';

export const isElement = (value: unknown): value is Element =>
  value instanceof Element;
