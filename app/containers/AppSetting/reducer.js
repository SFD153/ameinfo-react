/*
 *
 * AppSetting reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_SETTINGS, SET_PARENT_CATEGORY } from './constants';

export const initialState = fromJS({
  settings: {},
  parentCategory: [],
});

function appSettingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SETTINGS:
      return state.set('settings', action.settings);
    case SET_PARENT_CATEGORY:
      return state.set('parentCategory', action.parentCategory);
    default:
      return state;
  }
}

export default appSettingReducer;
