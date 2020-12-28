/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import '@testing-library/jest-dom';
import identify from '../src/identify';

test('keeps the current id and returns it', () => {
  const element = document.createElement('button');
  element.setAttribute('id', 'foo');
  const id = identify(element);

  expect(element).toHaveAttribute('id', 'foo');
  expect(id).toEqual('foo');
});

test('creates an id, marks the element, and returns the id', () => {
  const element = document.createElement('button');
  const id = identify(element);

  expect(element).toHaveAttribute('id', id);
  expect(element).toHaveAttribute('data-drop-id');
  expect.stringContaining('drop-');
});
