export const isId = (value: any): value is string =>
  typeof value === 'string' && value.charAt(0) === '#';

export const isClassName = (value: any): value is string =>
  typeof value === 'string' && value.charAt(0) === '.';

export const isElement = (value: any): value is Element => value.nodeType === 1;
