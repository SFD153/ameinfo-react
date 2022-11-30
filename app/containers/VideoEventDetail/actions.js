/*
 *
 * VideoEventDetail actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_VIDEO_EVENT_DETAILS,
  RECEIVED_VIDEO_EVENT_DETAILS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getVideoEventDetails(slug) {
  return {
    type: GET_VIDEO_EVENT_DETAILS,
    slug,
  };
}

export function receivedVideoEventDetails(videoEventDetails) {
  return {
    type: RECEIVED_VIDEO_EVENT_DETAILS,
    videoEventDetails,
  };
}
