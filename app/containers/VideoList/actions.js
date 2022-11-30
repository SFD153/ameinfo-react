/*
 *
 * VideoList actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_VIDEO_LISTS,
  RECEIVED_VIDEO_LISTS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getVideoLists(slug) {
  return {
    type: GET_VIDEO_LISTS,
    slug,
  };
}

export function receivedVideoLists(videoLists) {
  return {
    type: RECEIVED_VIDEO_LISTS,
    videoLists,
  };
}
