/*
 * Copyright (c) 2021 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import '@testing-library/jest-dom';
import { create, destroy } from '../src/trigger';

test('create and destroy the trigger from a button without type', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div data-drop-container>
        <button>Trigger</button>
        <div>
          <a>Action One</a>
          <a>Action Two</a>
          <a>Action Three</a>
        </div>
      </div>
    </div>
  `;

  const container = document.querySelector('[data-drop-container]');
  const trigger = document.querySelector('button');

  expect(trigger.hasAttribute('type')).toBe(false);
  expect(trigger.type).toEqual('submit');
  expect(trigger.dataset.dropTrigger).toBe(undefined);

  create(container);

  expect(trigger.hasAttribute('type')).toBe(true);
  expect(trigger.type).toEqual('button');
  expect(trigger.dataset.dropTrigger).toEqual('');

  destroy(trigger);

  expect(trigger.hasAttribute('type')).toBe(false);
  expect(trigger.type).toEqual('submit');
  expect(trigger.dataset.dropTrigger).toBe(undefined);
});

test('create and destroy the trigger from a button with type', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div data-drop-container>
        <button type="foo">Trigger</button>
        <div>
          <a>Action One</a>
          <a>Action Two</a>
          <a>Action Three</a>
        </div>
      </div>
    </div>
  `;

  const container = document.querySelector('[data-drop-container]');
  const trigger = document.querySelector('button');

  expect(trigger.hasAttribute('type')).toBe(true);
  expect(trigger.getAttribute('type')).toEqual('foo');
  expect(trigger.dataset.dropTrigger).toBe(undefined);

  create(container);

  expect(trigger.hasAttribute('type')).toBe(true);
  expect(trigger.getAttribute('type')).toEqual('button');
  expect(trigger.dataset.dropTrigger).toEqual('foo');

  destroy(trigger);

  expect(trigger.hasAttribute('type')).toBe(true);
  expect(trigger.getAttribute('type')).toEqual('foo');
  expect(trigger.dataset.dropTrigger).toBe(undefined);
});
