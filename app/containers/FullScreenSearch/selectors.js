import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the fullScreenSearch state domain
 */

const selectFullScreenSearchDomain = state =>
  state.get('fullScreenSearch', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FullScreenSearch
 */

const makeSelectFullScreenSearch = () =>
  createSelector(selectFullScreenSearchDomain, substate => substate.toJS());

const makeSelectOpenFullScreenSearch = () =>
  createSelector(selectFullScreenSearchDomain, substate =>
    substate.get('open'),
  );

const makeSelectKeyword = () =>
  createSelector(selectFullScreenSearchDomain, substate =>
    substate.get('keyword'),
  );

const makeSelectLoading = () =>
  createSelector(selectFullScreenSearchDomain, substate =>
    substate.get('loading'),
  );

const makeSelectPosts = () =>
  createSelector(selectFullScreenSearchDomain, substate =>
    substate.get('posts'),
  );

const makeSelectCount = () =>
  createSelector(selectFullScreenSearchDomain, substate =>
    substate.get('count'),
  );

export default makeSelectFullScreenSearch;
export {
  selectFullScreenSearchDomain,
  makeSelectOpenFullScreenSearch,
  makeSelectPosts,
  makeSelectKeyword,
  makeSelectLoading,
  makeSelectCount,
};
