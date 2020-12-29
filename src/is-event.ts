/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

const isEnter = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'Enter' || keyCode === 13);

const isSpace = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keyup' && (code === 'Space' || keyCode === 32);

const isEscape = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'Escape' || keyCode === 27);

const isTab = ({ code, keyCode, shiftKey, type }: KeyboardEvent): boolean =>
  type === 'keydown' && !shiftKey && (code === 'Tab' || keyCode === 9);

const isShiftTab = ({
  code,
  keyCode,
  shiftKey,
  type,
}: KeyboardEvent): boolean =>
  type === 'keydown' && shiftKey && (code === 'Tab' || keyCode === 9);

const isArrowUp = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'ArrowUp' || keyCode === 38);

const isArrowDown = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'ArrowDown' || keyCode === 40);

export {
  isEnter,
  isSpace,
  isEscape,
  isTab,
  isShiftTab,
  isArrowUp,
  isArrowDown,
};
