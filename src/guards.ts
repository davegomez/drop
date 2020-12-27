export const isId = (value: unknown): value is string =>
  typeof value === 'string' && value.charAt(0) === '#';

export const isClassName = (value: unknown): value is string =>
  typeof value === 'string' && value.charAt(0) === '.';

export const isElement = (value: unknown): value is Element =>
  value instanceof Element;
