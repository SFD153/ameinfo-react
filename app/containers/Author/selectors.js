import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the author state domain
 */

const selectAuthorDomain = state => state.get('author', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Author
 */

const makeSelectAuthor = () =>
  createSelector(selectAuthorDomain, substate => substate.toJS());

export default makeSelectAuthor;
export { selectAuthorDomain };
