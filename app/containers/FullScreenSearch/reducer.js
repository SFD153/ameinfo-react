/*
 *
 * FullScreenSearch reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_FULL_SCREEN_SEARCH,
  SAVE_POSTS,
  SEARCH_POSTS,
  SEARCH_POSTS_LOADING,
  SAVE_POST_COUNT,
} from './constants';

export const initialState = fromJS({
  open: false,
  keyword: '',
  posts: [],
  count: 0,
  loading: false,
});

function fullScreenSearchReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_FULL_SCREEN_SEARCH:
      return state.set('open', action.open);
    case SEARCH_POSTS:
      return state.set('keyword', action.keyword);
    case SEARCH_POSTS_LOADING:
      return state.set('loading', action.loading);
    case SAVE_POSTS:
      return state.set('posts', action.posts);
    case SAVE_POST_COUNT:
      return state.set('count', action.count);
    default:
      return state;
  }
}

export default fullScreenSearchReducer;
