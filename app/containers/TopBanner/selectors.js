import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the topBanner state domain
 */

const selectTopBannerDomain = state => state.get('topBanner', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TopBanner
 */

const makeSelectTopBanner = () =>
  createSelector(selectTopBannerDomain, substate => substate.toJS());

export default makeSelectTopBanner;
export { selectTopBannerDomain };
