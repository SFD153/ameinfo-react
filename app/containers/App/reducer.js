/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_AD_RECTANGLE,
  SET_AD_RECTANGLE_MOBILE,
  SET_AD_SQUARE,
  SET_AD_CONTAINER,
  SET_AD_SIDE,
  SET_PAGE_TYPE,
} from './constants';

export const initialState = fromJS({
  adRectangle: null,
  adRectangleMobile: null,
  adSquare: null,
  adSide: null,
  adContainer: null,
  pageType: null,
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AD_RECTANGLE:
      return state.set('adRectangle', action.adRectangle);
    case SET_AD_RECTANGLE_MOBILE:
      return state.set('adRectangleMobile', action.adRectangleMobile);
    case SET_AD_SQUARE:
      return state.set('adSquare', action.adSquare);
    case SET_AD_SIDE:
      return state.set('adSide', action.adSide);
    case SET_AD_CONTAINER:
      return state.set('adContainer', action.adContainer);
    case SET_PAGE_TYPE:
      return state.set('pageType', action.pageType);
    default:
      return state;
  }
}

export default AppReducer;
