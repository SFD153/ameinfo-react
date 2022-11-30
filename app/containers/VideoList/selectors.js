import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoList state domain
 */

const selectVideoListDomain = state => state.get('videoList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoList
 */

const makeSelectVideoList = () =>
  createSelector(selectVideoListDomain, substate => substate.toJS());

const makeSelectSlug = () =>
  createSelector(selectVideoListDomain, substate => substate.get('slug'));

const makeSelectVideoLists = () =>
  createSelector(selectVideoListDomain, substate => substate.get('videoLists'));

export default makeSelectVideoList;
export { selectVideoListDomain, makeSelectSlug, makeSelectVideoLists };
