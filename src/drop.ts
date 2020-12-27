/* Copyright (C) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import getElements from './get-elements';

import type { Selector } from './types';

const defaultOptions = {
  multi: false,
};

const drop = (selector: Selector, userOptions: any) => {
  const options = { ...defaultOptions, ...userOptions };
  const elements = getElements(selector, options.multi);

  return {
    elements,
    selector,
  };
};

export default drop;
