import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mobileMenu state domain
 */

const selectMobileMenuDomain = state => state.get('mobileMenu', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MobileMenu
 */

const makeSelectMobileMenu = () =>
  createSelector(selectMobileMenuDomain, substate => substate.toJS());

export default makeSelectMobileMenu;
export { selectMobileMenuDomain };
