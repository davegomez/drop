/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import getElements from './get-elements';
import { identity } from './utils';

import type { Drop, Options } from './types';

const defaultOptions: Options = {
  selector: '.drop',
  multi: false,
  onOpen: identity,
  onClose: identity,
};

const drop = (userOptions: Options): Drop => {
  const options = { ...defaultOptions, ...userOptions };
  const elements = getElements(options.selector, options.multi);

  return { elements };
};

export default drop;
