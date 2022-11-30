import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the menu state domain
 */

const selectMenuDomain = state => state.get('menu', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Menu
 */

const makeSelectMenu = () =>
  createSelector(selectMenuDomain, substate => substate.toJS());

const makeSelectDropdownMenuHeight = () =>
  createSelector(selectMenuDomain, substate =>
    substate.get('dropdownMenuHeight'),
  );

export default makeSelectMenu;
export { selectMenuDomain, makeSelectDropdownMenuHeight };
