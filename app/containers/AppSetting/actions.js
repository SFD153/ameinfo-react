/*
 *
 * AppSetting actions
 *
 */

import { SET_SETTINGS, SET_PARENT_CATEGORY } from './constants';

export function setSettings(settings) {
  return {
    type: SET_SETTINGS,
    settings,
  };
}

export function setParentCategory(parentCategory) {
  return {
    type: SET_PARENT_CATEGORY,
    parentCategory,
  };
}
