/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

export const isEnter = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'Enter' || keyCode === 13);

export const isSpace = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keyup' && (code === 'Space' || keyCode === 32);

export const isEscape = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'Escape' || keyCode === 27);

export const isTab = ({
  code,
  keyCode,
  shiftKey,
  type,
}: KeyboardEvent): boolean =>
  type === 'keydown' && !shiftKey && (code === 'Tab' || keyCode === 9);

export const isShiftTab = ({
  code,
  keyCode,
  shiftKey,
  type,
}: KeyboardEvent): boolean =>
  type === 'keydown' && shiftKey && (code === 'Tab' || keyCode === 9);

export const isArrowUp = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'ArrowUp' || keyCode === 38);

export const isArrowDown = ({ code, keyCode, type }: KeyboardEvent): boolean =>
  type === 'keydown' && (code === 'ArrowDown' || keyCode === 40);
