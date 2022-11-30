import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.get('router');
const selectAppDomain = state => state.get('App', initialState);

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectAdRectangle = () =>
  createSelector(selectAppDomain, appState => appState.get('adRectangle'));

const makeSelectAdRectangleMobile = () =>
  createSelector(selectAppDomain, appState =>
    appState.get('adRectangleMobile'),
  );

const makeSelectAdSquare = () =>
  createSelector(selectAppDomain, appState => appState.get('adSquare'));

const makeSelectAdSide = () =>
  createSelector(selectAppDomain, appState => appState.get('adSide'));

const makeSelectAdContainer = () =>
  createSelector(selectAppDomain, appState => appState.get('adContainer'));

const makeSelectPageType = () =>
  createSelector(selectAppDomain, appState => appState.get('pageType'));

export {
  makeSelectLocation,
  makeSelectAdRectangle,
  makeSelectAdRectangleMobile,
  makeSelectAdSquare,
  makeSelectPageType,
  makeSelectAdSide,
  makeSelectAdContainer,
};
