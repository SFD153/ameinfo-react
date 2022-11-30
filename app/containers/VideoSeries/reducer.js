/*
 *
 * VideoSeries reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_VIDEO_SERIES,
  RECEIVED_VIDEO_SERIES,
} from './constants';

export const initialState = fromJS({
  loading: false,
  videoSeries: [],
});

function videoSeriesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_VIDEO_SERIES:
      return state.set('loading', true).set('slug', action.slug);
    case RECEIVED_VIDEO_SERIES:
      return state.set('loading', false).set('videoSeries', action.videoSeries);
    default:
      return state;
  }
}

export default videoSeriesReducer;
