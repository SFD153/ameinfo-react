import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoSeries state domain
 */

const selectVideoSeriesDomain = state => state.get('videoSeries', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoSeries
 */

const makeSelectVideoSeries = () =>
  createSelector(selectVideoSeriesDomain, substate => substate.toJS());

const makeSelectSlug = () =>
  createSelector(selectVideoSeriesDomain, substate => substate.get('slug'));

const makeSelectListOfVideoSeries = () =>
  createSelector(selectVideoSeriesDomain, substate =>
    substate.get('videoSeries'),
  );

export default makeSelectVideoSeries;
export { selectVideoSeriesDomain, makeSelectSlug, makeSelectListOfVideoSeries };
