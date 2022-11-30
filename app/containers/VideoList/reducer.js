/*
 *
 * VideoList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_VIDEO_LISTS,
  RECEIVED_VIDEO_LISTS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  videoLists: [],
});

function videoListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_VIDEO_LISTS:
      return state.set('loading', true).set('slug', action.slug);
    case RECEIVED_VIDEO_LISTS:
      return state.set('loading', false).set('videoLists', action.videoLists);
    default:
      return state;
  }
}

export default videoListReducer;
