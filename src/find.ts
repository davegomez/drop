/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import {
  DATA_DROP_ACTION,
  DATA_DROP_CONTAINER,
  DATA_DROP_MENU,
  DATA_DROP_TRIGGER,
} from './constants';

export const findContainer = (target: HTMLElement): HTMLElement =>
  target.closest(`[${DATA_DROP_CONTAINER}]`);

export const findTrigger = (container: HTMLElement): HTMLElement =>
  container.querySelector(`[${DATA_DROP_TRIGGER}]`);

export const findMenu = (container: HTMLElement): HTMLElement =>
  container.querySelector(`[${DATA_DROP_MENU}]`);

export const findActions = (container: HTMLElement): NodeListOf<HTMLElement> =>
  container.querySelectorAll(`[${DATA_DROP_ACTION}]:not([disabled])`);

export const findFirstAction = (container: HTMLElement): HTMLElement | null => {
  const actions = findActions(container);
  return actions.item(0);
};

export const findLastAction = (container: HTMLElement): HTMLElement | null => {
  const actions = findActions(container);
  return actions.item(actions.length - 1);
};
