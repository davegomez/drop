import { isId, isClassName, isElement } from './guards';
import type { Selector } from './types';

/**
 *
 * @param value
 * @param isMulti
 */
const getElements = (
  value: Selector,
  isMulti = false
): Element | NodeListOf<Element> => {
  if (isId(value) && document.getElementById(value.substr(1)) !== null) {
    return document.getElementById(value.substr(1));
  }

  if (isClassName(value) && document.querySelector(value) !== null) {
    return isMulti
      ? document.querySelectorAll(value)
      : document.querySelector(value);
  }

  if (isElement(value)) {
    return value;
  }

  throw new Error('The value must be an id, class name, or HTML element');
};

export default getElements;
