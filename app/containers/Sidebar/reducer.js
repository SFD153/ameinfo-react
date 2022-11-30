/*
 *
 * Sidebar reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_POST_ID } from './constants';

export const initialState = fromJS({
  postId: '',
});

function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_POST_ID:
      return state.set('postId', action.postId);
    default:
      return state;
  }
}

export default sidebarReducer;
