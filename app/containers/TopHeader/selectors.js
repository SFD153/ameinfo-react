import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the topHeader state domain
 */

const selectTopHeaderDomain = state => state.get('topHeader', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TopHeader
 */

const makeSelectTopHeader = () =>
  createSelector(selectTopHeaderDomain, substate => substate.toJS());

const makeSelectWeather = () =>
  createSelector(selectTopHeaderDomain, substate => substate.get('weather'));

export default makeSelectTopHeader;
export { selectTopHeaderDomain, makeSelectWeather };
