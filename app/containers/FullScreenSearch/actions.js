/*
 *
 * FullScreenSearch actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_FULL_SCREEN_SEARCH,
  SAVE_POSTS,
  SEARCH_POSTS,
  SEARCH_POSTS_LOADING,
  SAVE_POST_COUNT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setFullScreenSearch(open) {
  return {
    type: SET_FULL_SCREEN_SEARCH,
    open,
  };
}

export function searchPosts(keyword) {
  return {
    type: SEARCH_POSTS,
    keyword,
  };
}

export function searchPostsLoading(loading) {
  return {
    type: SEARCH_POSTS_LOADING,
    loading,
  };
}

export function savePosts(posts) {
  return {
    type: SAVE_POSTS,
    posts,
  };
}

export function savePostCount(count) {
  return {
    type: SAVE_POST_COUNT,
    count,
  };
}
