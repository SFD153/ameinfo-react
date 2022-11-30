/*
 *
 * Menu reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_DROPDOWN_MENU_HEIGHT } from './constants';

export const initialState = fromJS({
  dropdownMenuHeight: 0,
});

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_DROPDOWN_MENU_HEIGHT:
      return state.set('dropdownMenuHeight', action.dropdownMenuHeight);
    default:
      return state;
  }
}

export default menuReducer;
