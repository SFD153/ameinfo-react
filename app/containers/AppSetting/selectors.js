import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the appSetting state domain
 */

const selectAppSettingDomain = state => state.get('appSetting', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppSetting
 */

const makeSelectAppSetting = () =>
  createSelector(selectAppSettingDomain, substate => substate.toJS());

const makeSelectSettings = () =>
  createSelector(selectAppSettingDomain, substate => substate.get('settings'));

const makeSelectParentCategory = () =>
  createSelector(selectAppSettingDomain, substate =>
    substate.get('parentCategory'),
  );

export default makeSelectAppSetting;
export { selectAppSettingDomain, makeSelectSettings, makeSelectParentCategory };
