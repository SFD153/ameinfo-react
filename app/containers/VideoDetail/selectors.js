import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoDetail state domain
 */

const selectVideoDetailDomain = state => state.get('videoDetail', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoDetail
 */

const makeSelectVideoDetail = () =>
  createSelector(selectVideoDetailDomain, substate => substate.toJS());

const makeSelectSlug = () =>
  createSelector(selectVideoDetailDomain, substate => substate.get('slug'));

const makeSelectCategory = () =>
  createSelector(selectVideoDetailDomain, substate => substate.get('category'));

const makeSelectVideo = () =>
  createSelector(selectVideoDetailDomain, substate => substate.get('video'));

const makeSelectRelatedVideos = () =>
  createSelector(selectVideoDetailDomain, substate =>
    substate.get('relatedVideos'),
  );

export default makeSelectVideoDetail;
export {
  selectVideoDetailDomain,
  makeSelectSlug,
  makeSelectCategory,
  makeSelectVideo,
  makeSelectRelatedVideos,
};
