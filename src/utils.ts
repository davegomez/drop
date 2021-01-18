/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

export const identity = (x) => x;

export const restoreAttribute = (
  element: HTMLElement,
  attribute: string,
  value: string | null
): void => {
  if (value === null || value === '') {
    element.removeAttribute(attribute);
  } else {
    element.setAttribute(attribute, value);
  }
};
