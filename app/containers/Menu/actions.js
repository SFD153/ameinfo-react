/*
 *
 * Menu actions
 *
 */

import { DEFAULT_ACTION, SET_DROPDOWN_MENU_HEIGHT } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setDropdownMenuHeight(dropdownMenuHeight) {
  return {
    type: SET_DROPDOWN_MENU_HEIGHT,
    dropdownMenuHeight,
  };
}
