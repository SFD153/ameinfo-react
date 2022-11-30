/*
 *
 * Jin reducer
 *
 */

import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  users: null,
  featuredPosts: null,
  featuredTexts: null,
  featuredMedias: null,
  todays: null,
  editors: null,
  tips: null,
  streams: null,
  inspires: null,
  topFeatures: null,
  topInterviews: null,
  topAnalysis: null,
  industries: null,
  otherCategories: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_USERS:
      return state.set('users', action.users);
    case LOAD_TOP_ANALYSIS:
      return state.set('topAnalysis', action.topAnalysis);
    case LOAD_TOP_INTERVIEWS:
      return state.set('topInterviews', action.topInterviews);
    case LOAD_TOP_FEATURES:
      return state.set('topFeatures', action.topFeatures);
    case LOAD_INSPIRES:
      return state.set('inspires', action.inspires);
    case LOAD_STREAMS:
      return state.set('streams', action.streams);
    case LOAD_FEATURED_POSTS:
      return state.set('featuredPosts', action.featuredPosts);
    case LOAD_FEATURED_MEDIAS:
      return state.set('featuredMedias', action.featuredMedias);
    case LOAD_FEATURED_TEXTS:
      return state.set('featuredTexts', action.featuredTexts);
    case LOAD_TODAYS:
      return state.set('todays', action.todays);
    case LOAD_EDITORS:
      return state.set('editors', action.editors);
    case LOAD_TIPS:
      return state.set('tips', action.tips);
    case LOAD_INDUSTRIES:
      return state.set('industries', action.industries);
    case LOAD_OTHER_CATEGORIES:
      return state.set('otherCategories', action.otherCategories);
    default:
      return state;
  }
}

export default homeReducer;
