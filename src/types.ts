/*
 * Copyright (c) 2020 Drop Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 */

export type Selector = string | Element;

export type NodeElement = Element | NodeListOf<Element>;

export type ActionElement = HTMLAnchorElement | HTMLButtonElement;

export type Options = {
  selector: Selector;
  multi: boolean;
};

export type Dropdown = {
  elements: NodeElement;
};
