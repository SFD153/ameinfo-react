/*
 *
 * Jin actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_USERS,
  LOAD_FEATURED_POSTS,
  LOAD_FEATURED_TEXTS,
  LOAD_FEATURED_MEDIAS,
  LOAD_TODAYS,
  LOAD_EDITORS,
  LOAD_TIPS,
  LOAD_STREAMS,
  LOAD_INSPIRES,
  LOAD_TOP_FEATURES,
  LOAD_TOP_INTERVIEWS,
  LOAD_TOP_ANALYSIS,
  LOAD_INDUSTRIES,
  LOAD_OTHER_CATEGORIES,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadUsers(users) {
  return {
    type: LOAD_USERS,
    users,
  };
}

export function loadFeaturedPosts(featuredPosts) {
  return {
    type: LOAD_FEATURED_POSTS,
    featuredPosts,
  };
}

export function loadFeaturedTexts(featuredTexts) {
  return {
    type: LOAD_FEATURED_TEXTS,
    featuredTexts,
  };
}

export function loadFeaturedMedias(featuredMedias) {
  return {
    type: LOAD_FEATURED_MEDIAS,
    featuredMedias,
  };
}

export function loadTodays(todays) {
  return {
    type: LOAD_TODAYS,
    todays,
  };
}

export function loadEditors(editors) {
  return {
    type: LOAD_EDITORS,
    editors,
  };
}

export function loadTips(tips) {
  return {
    type: LOAD_TIPS,
    tips,
  };
}

export function loadStreams(streams) {
  return {
    type: LOAD_STREAMS,
    streams,
  };
}

export function loadInspires(inspires) {
  return {
    type: LOAD_INSPIRES,
    inspires,
  };
}

export function loadTopFeatures(topFeatures) {
  return {
    type: LOAD_TOP_FEATURES,
    topFeatures,
  };
}

export function loadTopInterviews(topInterviews) {
  return {
    type: LOAD_TOP_INTERVIEWS,
    topInterviews,
  };
}

export function loadTopAnalysis(topAnalysis) {
  return {
    type: LOAD_TOP_ANALYSIS,
    topAnalysis,
  };
}

export function loadIndustries(industries) {
  return {
    type: LOAD_INDUSTRIES,
    industries,
  };
}

export function loadOtherCategories(otherCategories) {
  return {
    type: LOAD_OTHER_CATEGORIES,
    otherCategories,
  };
}
