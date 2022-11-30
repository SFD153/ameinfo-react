/*
 *
 * VideoEventDetail reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_VIDEO_EVENT_DETAILS,
  RECEIVED_VIDEO_EVENT_DETAILS,
} from './constants';

export const initialState = fromJS({
  videoEventDetails: [],
});

function videoEventDetailReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_VIDEO_EVENT_DETAILS:
      return state.set('loading', true).set('slug', action.slug);
    case RECEIVED_VIDEO_EVENT_DETAILS:
      return state
        .set('loading', false)
        .set('videoEventDetails', action.videoEventDetails);
    default:
      return state;
  }
}

export default videoEventDetailReducer;
