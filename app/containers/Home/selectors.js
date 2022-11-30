import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.get('home', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(selectHomeDomain, substate => substate.toJS());

const makeSelectUsers = () =>
  createSelector(selectHomeDomain, substate => substate.get('users'));

const makeSelectTopAnalysis = () =>
  createSelector(selectHomeDomain, substate => substate.get('topAnalysis'));

const makeSelectTopInterviews = () =>
  createSelector(selectHomeDomain, substate => substate.get('topInterviews'));

const makeSelectTopFeatures = () =>
  createSelector(selectHomeDomain, substate => substate.get('topFeatures'));

const makeSelectInspires = () =>
  createSelector(selectHomeDomain, substate => substate.get('inspires'));

const makeSelectStreams = () =>
  createSelector(selectHomeDomain, substate => substate.get('streams'));

const makeSelectFeaturedPosts = () =>
  createSelector(selectHomeDomain, substate => substate.get('featuredPosts'));

const makeSelectFeaturedMedias = () =>
  createSelector(selectHomeDomain, substate => substate.get('featuredMedias'));

const makeSelectFeaturedTexts = () =>
  createSelector(selectHomeDomain, substate => substate.get('featuredTexts'));

const makeSelectTodays = () =>
  createSelector(selectHomeDomain, substate => substate.get('todays'));

const makeSelectEditors = () =>
  createSelector(selectHomeDomain, substate => substate.get('editors'));

const makeSelectTips = () =>
  createSelector(selectHomeDomain, substate => substate.get('tips'));

const makeSelectIndustries = () =>
  createSelector(selectHomeDomain, substate => substate.get('industries'));

const makeSelectOtherCategories = () =>
  createSelector(selectHomeDomain, substate => substate.get('otherCategories'));

export default makeSelectHome;
export {
  selectHomeDomain,
  makeSelectEditors,
  makeSelectFeaturedMedias,
  makeSelectFeaturedPosts,
  makeSelectFeaturedTexts,
  makeSelectHome,
  makeSelectInspires,
  makeSelectStreams,
  makeSelectTips,
  makeSelectTodays,
  makeSelectTopAnalysis,
  makeSelectTopFeatures,
  makeSelectTopInterviews,
  makeSelectUsers,
  makeSelectIndustries,
  makeSelectOtherCategories,
};
