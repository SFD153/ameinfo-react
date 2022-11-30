/*
 *
 * Sidebar actions
 *
 */

import { DEFAULT_ACTION, SET_POST_ID } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setPostId(postId) {
  return {
    type: SET_POST_ID,
    postId,
  };
}
