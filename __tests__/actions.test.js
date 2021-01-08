/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import '@testing-library/jest-dom';
import { create, destroy } from '../src/actions';

test('create and destroy anchor actions without a tabindex', () => {
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
  const actions = document.querySelectorAll('button + div a');

  actions.forEach((action) => {
    expect(action.hasAttribute('tabindex')).toBe(false);
    expect(action.dataset.dropAnchor).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });

  create(container);

  actions.forEach((action) => {
    expect(action).toHaveAttribute('tabindex', '0');
    expect(action.dataset.dropAnchor).toEqual('');
    expect(action.dataset.dropAction).toEqual('');
  });

  destroy(container);

  actions.forEach((action) => {
    expect(action.hasAttribute('tabindex')).toBe(false);
    expect(action.dataset.dropAnchor).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });
});

test('create and destroy anchor actions with a tabindex', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div data-drop-container>
        <button>Trigger</button>
        <div>
          <a tabindex="1">Action One</a>
          <a tabindex="1">Action Two</a>
          <a tabindex="1">Action Three</a>
        </div>
      </div>
    </div>
  `;

  const container = document.querySelector('[data-drop-container]');
  const actions = document.querySelectorAll('button + div a');

  actions.forEach((action) => {
    expect(action).toHaveAttribute('tabindex', '1');
    expect(action.dataset.dropAnchor).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });

  create(container);

  actions.forEach((action) => {
    expect(action).toHaveAttribute('tabindex', '0');
    expect(action.dataset.dropAnchor).toEqual('1');
    expect(action.dataset.dropAction).toEqual('');
  });

  destroy(container);

  actions.forEach((action) => {
    expect(action).toHaveAttribute('tabindex', '1');
    expect(action.dataset.dropAnchor).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });
});

test('create and destroy button actions without a type', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div data-drop-container>
        <button>Trigger</button>
        <div>
          <button>Action One</button>
          <button>Action Two</button>
          <button>Action Three</button>
        </div>
      </div>
    </div>
  `;

  const container = document.querySelector('[data-drop-container]');
  const actions = document.querySelectorAll('button + div button');

  actions.forEach((action) => {
    expect(action.hasAttribute('type')).toBe(false);
    expect(action.dataset.dropButton).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });

  create(container);

  actions.forEach((action) => {
    expect(action).toHaveAttribute('type', 'button');
    expect(action.dataset.dropButton).toEqual('');
    expect(action.dataset.dropAction).toEqual('');
  });

  destroy(container);

  actions.forEach((action) => {
    expect(action.hasAttribute('type')).toBe(false);
    expect(action.dataset.dropButton).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });
});

test('create and destroy button actions with a type', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div data-drop-container>
        <button>Trigger</button>
        <div>
          <button type="submit">Action One</button>
          <button type="submit">Action Two</button>
          <button type="submit">Action Three</button>
        </div>
      </div>
    </div>
  `;

  const container = document.querySelector('[data-drop-container]');
  const actions = document.querySelectorAll('button + div button');

  actions.forEach((action) => {
    expect(action).toHaveAttribute('type', 'submit');
    expect(action.dataset.dropButton).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });

  create(container);

  actions.forEach((action) => {
    expect(action).toHaveAttribute('type', 'button');
    expect(action.dataset.dropButton).toEqual('submit');
    expect(action.dataset.dropAction).toEqual('');
  });

  destroy(container);

  actions.forEach((action) => {
    expect(action).toHaveAttribute('type', 'submit');
    expect(action.dataset.dropButton).toBe(undefined);
    expect(action.dataset.dropAction).toBe(undefined);
  });
});
