import drop from '../src/drop';

test('creates a Drop object from an id', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div id="foo" />
    </div>
  `;

  console.log(drop);

  expect(drop('#foo')).toBe(true);
});

test('creates a Drop object from a class name', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div class="foo" />
    </div>
  `;

  expect(drop('.foo')).toBe(true);
});

test('creates a Drop object from an element', () => {
  // Set the document body
  document.body.innerHTML = `
    <div>
      <div id="foo" />
    </div>
  `;

  const element = document.getElementById('foo');

  expect(drop(element)).toBe(true);
});
