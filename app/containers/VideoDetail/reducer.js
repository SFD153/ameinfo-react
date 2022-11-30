/*
 *
 * VideoDetail reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_VIDEO_DETAIL,
  RECEIVED_RELATED_VIDEOS,
  GET_RELATED_VIDEOS,
  RECEIVED_VIDEO_DETAIL,
} from './constants';

export const initialState = fromJS({
  videoLoading: false,
  video: {},
  relatedVideosLoading: false,
  relatedVideos: [],
  slug: '',
  category: '',
});

function videoDetailReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_VIDEO_DETAIL:
      return state.set('videoLoading', true).set('slug', action.slug);
    case RECEIVED_VIDEO_DETAIL:
      return state.set('videoLoading', false).set('video', action.video);
    case GET_RELATED_VIDEOS:
      return state
        .set('relatedVideosLoading', true)
        .set('slug', action.slug)
        .set('category', action.category);
    case RECEIVED_RELATED_VIDEOS:
      return state
        .set('relatedVideosLoading', false)
        .set('relatedVideos', action.relatedVideos);
    default:
      return state;
  }
}

export default videoDetailReducer;
