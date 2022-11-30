/*
 *
 * TopHeader reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, LOAD_WEATHER } from './constants';

export const initialState = fromJS({
  weather: null,
});

function topHeaderReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_WEATHER:
      return state.set('weather', action.weather);
    default:
      return state;
  }
}

export default topHeaderReducer;
