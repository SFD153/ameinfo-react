/*
 *
 * VideoEvent actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_VIDEO_EVENTS,
  RECEIVED_VIDEO_EVENTS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getVideoEvents() {
  return {
    type: GET_VIDEO_EVENTS,
  };
}

export function receivedVideoEvents(videoEvents) {
  return {
    type: RECEIVED_VIDEO_EVENTS,
    videoEvents,
  };
}
