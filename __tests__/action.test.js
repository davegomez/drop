/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import '@testing-library/jest-dom';
import { create, destroy } from '../src/action';

test('create and destroy anchor actions without a tabindex', () => {
  const element = document.createElement('a');

  expect(element.getAttribute('tabindex')).toBe(null);
  expect(element.dataset.dropAnchor).toBe(undefined);

  create(element);

  expect(element).toHaveAttribute('tabindex', '0');
  expect(element.dataset.dropAnchor).toEqual('');

  destroy(element);

  expect(element.getAttribute('tabindex')).toBe(null);
  expect(element.dataset.dropAnchor).toBe(undefined);
});

test('create and destroy anchor actions with a tabindex', () => {
  const element = document.createElement('a');
  element.setAttribute('tabindex', '1');

  expect(element).toHaveAttribute('tabindex', '1');
  expect(element.dataset.dropAnchor).toBe(undefined);

  create(element);

  expect(element).toHaveAttribute('tabindex', '0');
  expect(element.dataset.dropAnchor).toEqual('1');

  destroy(element);

  expect(element).toHaveAttribute('tabindex', '1');
  expect(element.dataset.dropAnchor).toBe(undefined);
});

test('create and destroy button actions without a type', () => {
  const element = document.createElement('button');

  expect(element.getAttribute('type')).toBe(null);
  expect(element.dataset.dropButton).toBe(undefined);

  create(element);

  expect(element).toHaveAttribute('type', 'button');
  expect(element.dataset.dropButton).toEqual('');

  destroy(element);

  expect(element.getAttribute('type')).toBe(null);
  expect(element.dataset.dropButton).toBe(undefined);
});

test('create and destroy button actions with a type', () => {
  const element = document.createElement('button');
  element.setAttribute('type', 'submit');

  expect(element).toHaveAttribute('type', 'submit');
  expect(element.dataset.dropButton).toBe(undefined);

  create(element);

  expect(element).toHaveAttribute('type', 'button');
  expect(element.dataset.dropButton).toEqual('submit');

  destroy(element);

  expect(element).toHaveAttribute('type', 'submit');
  expect(element.dataset.dropButton).toBe(undefined);
});
