/*
 *
 * VideoEvent reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_VIDEO_EVENTS,
  RECEIVED_VIDEO_EVENTS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  videoEvents: [],
});

function videoEventReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_VIDEO_EVENTS:
      return state.set('loading', true);
    case RECEIVED_VIDEO_EVENTS:
      return state.set('loading', false).set('videoEvents', action.videoEvents);
    default:
      return state;
  }
}

export default videoEventReducer;
