/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import {
  isEnter,
  isSpace,
  isEscape,
  isTab,
  isShiftTab,
  isArrowUp,
  isArrowDown,
} from '../src/is-event';

const createHandler = (isValidEvent, callback) => (event) => {
  if (isValidEvent(event)) {
    callback();
  }
};

const enterEvent = new KeyboardEvent('keydown', { code: 'Enter', keyCode: 13 });
const enterUpEvent = new KeyboardEvent('keyup', { code: 'Enter', keyCode: 13 });
const spaceEvent = new KeyboardEvent('keyup', { code: 'Space', keyCode: 32 });
const escapeEvent = new KeyboardEvent('keydown', {
  code: 'Escape',
  keyCode: 27,
});
const tabEvent = new KeyboardEvent('keydown', {
  code: 'Tab',
  keyCode: 9,
  shiftKey: false,
});
const shiftTabEvent = new KeyboardEvent('keydown', {
  code: 'Tab',
  keyCode: 9,
  shiftKey: true,
});
const arrowUpEvent = new KeyboardEvent('keydown', {
  code: 'ArrowUp',
  keyCode: 38,
  shiftKey: false,
});
const arrowDownEvent = new KeyboardEvent('keydown', {
  code: 'ArrowDown',
  keyCode: 40,
  shiftKey: true,
});

test('runs the callback when the Enter keydown event is dispatched', () => {
  const foo = jest.fn();
  const handleEvent = createHandler(isEnter, foo);

  const button = document.createElement('button');
  button.addEventListener('keydown', handleEvent);

  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(enterEvent);

  expect(foo).toHaveBeenCalled();
  foo.mockReset();
  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(escapeEvent);

  expect(foo).not.toHaveBeenCalled();
});

test('runs the callback when the Space keyup event is dispatched', () => {
  const foo = jest.fn();
  const handleEvent = createHandler(isSpace, foo);

  const button = document.createElement('button');
  button.addEventListener('keyup', handleEvent);

  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(spaceEvent);

  expect(foo).toHaveBeenCalled();
  foo.mockReset();
  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(enterUpEvent);

  expect(foo).not.toHaveBeenCalled();
});

test('runs the callback when the Escape keydown event is dispatched', () => {
  const foo = jest.fn();
  const handleEvent = createHandler(isEscape, foo);

  const button = document.createElement('button');
  button.addEventListener('keydown', handleEvent);

  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(escapeEvent);

  expect(foo).toHaveBeenCalled();
  foo.mockReset();
  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(arrowDownEvent);

  expect(foo).not.toHaveBeenCalled();
});

test('runs the callback when the Tab keydown event is dispatched', () => {
  const foo = jest.fn();
  const handleEvent = createHandler(isTab, foo);

  const button = document.createElement('button');
  button.addEventListener('keydown', handleEvent);

  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(tabEvent);

  expect(foo).toHaveBeenCalled();
  foo.mockReset();
  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(arrowUpEvent);

  expect(foo).not.toHaveBeenCalled();
});

test('runs the callback when the ShiftTab keydown event is dispatched', () => {
  const foo = jest.fn();
  const handleEvent = createHandler(isShiftTab, foo);

  const button = document.createElement('button');
  button.addEventListener('keydown', handleEvent);

  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(shiftTabEvent);

  expect(foo).toHaveBeenCalled();
  foo.mockReset();
  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(arrowDownEvent);

  expect(foo).not.toHaveBeenCalled();
});

test('runs the callback when the arrowUp keydown event is dispatched', () => {
  const foo = jest.fn();
  const handleEvent = createHandler(isArrowUp, foo);

  const button = document.createElement('button');
  button.addEventListener('keydown', handleEvent);

  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(arrowUpEvent);

  expect(foo).toHaveBeenCalled();
  foo.mockReset();
  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(enterEvent);

  expect(foo).not.toHaveBeenCalled();
});

test('runs the callback when the ArrowDown keydown event is dispatched', () => {
  const foo = jest.fn();
  const handleEvent = createHandler(isArrowDown, foo);

  const button = document.createElement('button');
  button.addEventListener('keydown', handleEvent);

  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(arrowDownEvent);

  expect(foo).toHaveBeenCalled();
  foo.mockReset();
  expect(foo).not.toHaveBeenCalled();

  button.dispatchEvent(escapeEvent);

  expect(foo).not.toHaveBeenCalled();
});
