/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

import '@testing-library/jest-dom';
import getElements from '../src/get-elements';

test('returns an element when passing an id', () => {
  // Set the document body
  const id = 'foo';
  document.body.innerHTML = `
    <div>
      <div id="${id}" />
    </div>
  `;

  const elements = getElements('#foo');

  expect(Array.isArray(elements)).toBe(true);
  expect(elements[0].nodeType).toEqual(1);
  expect(elements.length).toBe(1);
  expect(elements[0]).toHaveAttribute('id', id);
});

test('returns an element when passing a class name', () => {
  // Set the document body
  const className = 'foo';
  document.body.innerHTML = `
    <div>
      <div class="${className}" />
    </div>
  `;

  const elements = getElements('.foo');

  expect(Array.isArray(elements)).toBe(true);
  expect(elements[0].nodeType).toEqual(1);
  expect(elements.length).toBe(1);
  expect(elements[0]).toHaveClass(className);
});

test('returns single element with class name and no multi option', () => {
  // Set the document body
  const className = 'foo';
  document.body.innerHTML = `
    <div>
      <div class="${className}" />
      <div class="${className}" />
    </div>
  `;

  const elements = getElements('.foo');

  expect(Array.isArray(elements)).toBe(true);
  expect(elements[0].nodeType).toEqual(1);
  expect(elements.length).toBe(1);
  expect(elements[0]).toHaveClass(className);
});

test('returns multiple elements with class name and multi option', () => {
  // Set the document body
  const className = 'foo';
  document.body.innerHTML = `
    <div>
      <div class="${className}" />
      <div class="${className}" />
    </div>
  `;

  const elements = getElements('.foo', true);

  expect(Array.isArray(elements)).toBe(true);
  expect(elements.nodeType).toBe(undefined);
  expect(elements.length).toBe(2);
  elements.forEach((element) => expect(element).toHaveClass(className));
});

test('returns same element when passing an HTML element', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div id="foo" />
    </div>
  `;

  const element = document.getElementById('foo');

  expect(Array.isArray(getElements(element))).toBe(true);
  expect(getElements(element)[0]).toEqual(element);
  expect(getElements(element, true)[0]).toEqual(element);
});

test('throws when the node is not present in the DOM', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div id="foo" />
    </div>
  `;

  expect(() => getElements('.foo')).toThrow();
});

test('throws when the first parameter is not valid', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div id="foo" />
    </div>
  `;

  expect(() => getElements('foo')).toThrow();
  expect(() => getElements({})).toThrow();
});
