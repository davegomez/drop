import getElements from '../src/get-elements';
import '@testing-library/jest-dom';

test('returns an element when passing an id', () => {
  // Set the document body
  const id = 'foo';
  document.body.innerHTML = `
    <div>
      <div id="${id}" />
    </div>
  `;

  const elements = getElements('#foo');

  expect(elements.nodeType).toBe(1);
  expect(elements.length).toBe(undefined);
  expect(elements).toHaveAttribute('id', id);
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

  expect(elements.nodeType).toBe(1);
  expect(elements.length).toBe(undefined);
  expect(elements).toHaveClass(className);
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

  expect(elements.nodeType).toBe(1);
  expect(elements.length).toBe(undefined);
  expect(elements).toHaveClass(className);
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

  expect(getElements(element)).toEqual(element);
  expect(getElements(element, true)).toEqual(element);
});

test('throws when no first parameter is not valid', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div id="foo" />
    </div>
  `;

  expect(() => getElements('foo')).toThrow();
  expect(() => getElements({})).toThrow();
});
