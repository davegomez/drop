/*
 * Copyright (c) 2021 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import { DATA_DROP_TRIGGER } from './constants';
import { isNodePresent } from './guards';
import { restoreAttribute } from './utils';

export const create = (container: HTMLElement): void => {
  const trigger = isNodePresent(container.firstElementChild) as Element;
  trigger.setAttribute(DATA_DROP_TRIGGER, trigger.getAttribute('type') || '');
  trigger.setAttribute('type', 'button');
};

export const destroy = (trigger: HTMLElement): void => {
  restoreAttribute(trigger, 'type', trigger.dataset.dropTrigger);
  trigger.removeAttribute(DATA_DROP_TRIGGER);
};
