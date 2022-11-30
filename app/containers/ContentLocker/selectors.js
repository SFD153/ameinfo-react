import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contentLocker state domain
 */

const selectContentLockerDomain = state =>
  state.get('contentLocker', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContentLocker
 */

const makeSelectContentLocker = () =>
  createSelector(selectContentLockerDomain, substate => substate.toJS());

export default makeSelectContentLocker;
export { selectContentLockerDomain };
