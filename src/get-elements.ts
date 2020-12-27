/* Copyright (C) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { isId, isClassName, isElement } from './guards';
import type { Selector } from './types';

/**
 * Verifies if the value is a valid CSS selector to query the element/s in the
 * document and returns it, or returns the same node element if one if provided.
 * @internal
 *
 * @remarks
 *
 * If value is a non-id or class name selector this function throws. It tries to
 * prevent querying unintended node elements.
 *
 * @param value - Selector to query the element in the DOM or node element.
 * @param isMulti - Queries multiple elements using a class name selector.
 *
 * @returns The DOM element or list of elements.
 */
const getElements = (
  value: Selector,
  isMulti = false
): Element | NodeListOf<Element> => {
  if (isId(value) && document.getElementById(value.substr(1)) !== null) {
    return document.getElementById(value.substr(1));
  }

  if (isClassName(value) && document.querySelector(value) !== null) {
    return isMulti
      ? document.querySelectorAll(value)
      : document.querySelector(value);
  }

  if (isElement(value)) {
    return value;
  }

  throw new Error('The value must be an id, class name, or HTML element');
};

export default getElements;
