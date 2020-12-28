/* Copyright (C) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { NodeElement } from './types';

export const isNodePresent = (value?: NodeElement): NodeElement => {
  if (value === null) {
    throw new Error('The dropdown node must be present in the DOM');
  }

  return value;
};

export const isValidCSSSelector = (value: unknown): value is string =>
  typeof value === 'string' &&
  (value.charAt(0) === '#' || value.charAt(0) === '.');

export const isElement = (value: unknown): value is Element =>
  value instanceof Element;
