import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoEvent state domain
 */

const selectVideoEventDomain = state => state.get('videoEvent', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoEvent
 */

const makeSelectVideoEvent = () =>
  createSelector(selectVideoEventDomain, substate => substate.toJS());

const makeSelectVideoEvents = () =>
  createSelector(selectVideoEventDomain, substate =>
    substate.get('videoEvents'),
  );

export default makeSelectVideoEvent;
export { selectVideoEventDomain, makeSelectVideoEvents };
