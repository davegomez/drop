/* Copyright (C) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import getElements from './get-elements';

import type { Dropdown, Options } from './types';

const defaultOptions = {
  selector: '.drop',
  multi: false,
};

const drop = (userOptions: Options): Dropdown => {
  const options = { ...defaultOptions, ...userOptions };
  const elements = getElements(options.selector, options.multi);
  let instance: Dropdown;

  instance.elements = elements;

  return instance;
};

export default drop;
