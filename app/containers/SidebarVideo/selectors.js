import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sidebarVideo state domain
 */

const selectSidebarVideoDomain = state =>
  state.get('sidebarVideo', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SidebarVideo
 */

const makeSelectSidebarVideo = () =>
  createSelector(selectSidebarVideoDomain, substate => substate.toJS());

export default makeSelectSidebarVideo;
export { selectSidebarVideoDomain };
