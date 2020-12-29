/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */
import { DATA_DROP_ACTION } from './constants';

import type { ActionElement } from './types';

const attributeMap = {
  A: { data: 'anchor', name: 'tabindex', value: '0' },
  BUTTON: { data: 'button', name: 'type', value: 'button' },
};

/**
 * Initialize an action element in the dropdown menu using the attribute map to
 * differentiate the element and apply the proper attributes and vales.
 * @internal
 *
 * @param element - Element to transform into a dropdown action.
 */
export const create = (element: ActionElement): void => {
  const { data, name, value } = attributeMap[element.nodeName];
  const attributeValue = element.getAttribute(name);
  element.setAttribute(DATA_DROP_ACTION, '');
  element.setAttribute(name, value);
  element.setAttribute(
    `data-drop-${data}`,
    attributeValue === null ? '' : attributeValue
  );
};

/**
 * Restores an action by removing the custom attributes and values and restoring
 * the original ones.
 * @internal
 *
 * @param action - Dropdown action to restore to its original state.
 */
export const destroy = (action: ActionElement): void => {
  const { data, name } = attributeMap[action.nodeName];
  const attributeValue = action.getAttribute(`data-drop-${data}`);

  if (attributeValue !== null && attributeValue !== '') {
    action.setAttribute(name, attributeValue);
  } else {
    action.removeAttribute(name);
  }

  action.removeAttribute(`data-drop-${data}`);
  action.removeAttribute(DATA_DROP_ACTION);
};
