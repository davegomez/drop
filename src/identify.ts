/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Uses an id to identify the Dropdown element used to open and close the menu.
 * If the element already has an id, it returns the same id; if it doesn't,
 * generates a new id, marks the element with a data attribute, and returns the
 * created id.
 * @internal
 *
 * @remarks
 *
 * It uses the data attribute to identify if the element has an id created by
 * this library. This attribute allows us to remove the id on destroying safely.
 *
 * @param element - Element used to open and close the menu.
 * @param max - Maximum value to create the random id.
 * @returns The element id.
 */
const identify = (element: Element, max = 99999) => {
  const id =
    element.getAttribute('id') ||
    `drop-${Math.floor(Math.random() * Math.floor(max))}`;

  if (!element.getAttribute('id')) {
    element.setAttribute('data-drop-id', '');
    element.setAttribute('id', id);
  }

  return id;
};

export default identify;
