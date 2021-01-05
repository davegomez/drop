/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import '@testing-library/jest-dom';
import {
  findContainer,
  findTrigger,
  findMenu,
  findActions,
  findFirstAction,
  findLastAction,
} from '../src/find';

beforeAll(() => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div class="container" data-drop-container>
        <button class="trigger" data-drop-trigger>Trigger</button>
        <div class="menu" data-drop-menu>
          <a class="first" data-drop-action>Action One</a>
          <button data-drop-action disabled>Action Two</button>
          <a class="action" data-drop-action>Action Three</a>
          <button class="last" data-drop-action>Action Four</button>
          <a data-drop-action disabled>Action Five</a>
        </div>
      </div>
    </div>
  `;
});

test('finds and returns the dropdown container', () => {
  const target = document.querySelector('.action');
  const container = findContainer(target);

  expect(container).toHaveClass('container');
  expect(container.length).toBe(undefined);
});

test('finds and returns the dropdown trigger', () => {
  const target = document.querySelector('.action');
  const container = findContainer(target);
  const trigger = findTrigger(container);

  expect(trigger).toHaveClass('trigger');
  expect(trigger.length).toBe(undefined);
});

test('finds and returns the dropdown menu', () => {
  const target = document.querySelector('.action');
  const container = findContainer(target);
  const menu = findMenu(container);

  expect(menu).toHaveClass('menu');
  expect(menu.length).toBe(undefined);
});

test('finds and returns the available actions', () => {
  const target = document.querySelector('.action');
  const container = findContainer(target);
  const actions = findActions(container);

  expect(actions.length).toBe(3);
});

test('finds and returns the first available action', () => {
  const target = document.querySelector('.action');
  const container = findContainer(target);
  const action = findFirstAction(container);

  expect(action).toHaveClass('first');
  expect(action.length).toBe(undefined);
});

test('finds and returns the last available action', () => {
  const target = document.querySelector('.action');
  const container = findContainer(target);
  const action = findLastAction(container);

  expect(action).toHaveClass('last');
  expect(action.length).toBe(undefined);
});
