/*
 *
 * VideoSeries actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_VIDEO_SERIES,
  RECEIVED_VIDEO_SERIES,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getVideoSeries(slug) {
  return {
    type: GET_VIDEO_SERIES,
    slug,
  };
}

export function receivedVideoSeries(videoSeries) {
  return {
    type: RECEIVED_VIDEO_SERIES,
    videoSeries,
  };
}
