import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the injectAds state domain
 */

const selectInjectAdsDomain = state => state.get('injectAds', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by InjectAds
 */

const makeSelectInjectAds = () =>
  createSelector(selectInjectAdsDomain, substate => substate.toJS());

export default makeSelectInjectAds;
export { selectInjectAdsDomain };
