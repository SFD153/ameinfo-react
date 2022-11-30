/*
 *
 * VideoDetail actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_VIDEO_DETAIL,
  RECEIVED_VIDEO_DETAIL,
  GET_RELATED_VIDEOS,
  RECEIVED_RELATED_VIDEOS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getVideoDetail(slug) {
  return {
    type: GET_VIDEO_DETAIL,
    slug,
  };
}

export function receivedVideoDetail(video) {
  return {
    type: RECEIVED_VIDEO_DETAIL,
    video,
  };
}

export function getRelatedVideos(slug, category) {
  return {
    type: GET_RELATED_VIDEOS,
    slug,
    category,
  };
}

export function receivedRelatedVideos(relatedVideos) {
  return {
    type: RECEIVED_RELATED_VIDEOS,
    relatedVideos,
  };
}
