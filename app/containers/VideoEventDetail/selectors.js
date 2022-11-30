import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoEventDetail state domain
 */

const selectVideoEventDetailDomain = state =>
  state.get('videoEventDetail', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoEventDetail
 */

const makeSelectVideoEventDetail = () =>
  createSelector(selectVideoEventDetailDomain, substate => substate.toJS());

const makeSelectVideoEventDetails = () =>
  createSelector(selectVideoEventDetailDomain, substate =>
    substate.get('videoEventDetails'),
  );

const makeSelectSlug = () =>
  createSelector(selectVideoEventDetailDomain, substate =>
    substate.get('slug'),
  );

export default makeSelectVideoEventDetail;
export {
  selectVideoEventDetailDomain,
  makeSelectVideoEventDetails,
  makeSelectSlug,
};
