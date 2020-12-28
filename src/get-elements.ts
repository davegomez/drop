/* Copyright (C) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { isElement, isNodePresent, isValidCSSSelector } from './guards';
import type { NodeElement, Selector } from './types';

/**
 * Verifies if the argument is a valid CSS selector to query the element/s from
 * the document and return it, or returns the same element if one if provided.
 * @internal
 *
 * @remarks
 *
 * If selector is a non-id or class name selector this function throws. It tries
 * to prevent querying unintended node elements.
 *
 * @param selector - Selector to query the element in the DOM or node element.
 * @param isMulti - Queries multiple elements using a class name selector.
 *
 * @returns The DOM element or list of elements.
 */
const getElements = (selector: Selector, isMulti = false): NodeElement => {
  if (isElement(selector)) {
    return selector;
  }

  if (isValidCSSSelector(selector)) {
    return isMulti
      ? isNodePresent(document.querySelectorAll(selector))
      : isNodePresent(document.querySelector(selector));
  }

  throw new TypeError(
    'The selector must be an id, class name, or HTML element'
  );
};

export default getElements;
