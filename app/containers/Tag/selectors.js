import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tag state domain
 */

const selectTagDomain = state => state.get('tag', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Tag
 */

const makeSelectTag = () =>
  createSelector(selectTagDomain, substate => substate.toJS());

export default makeSelectTag;
export { selectTagDomain };
