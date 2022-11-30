/*
 *
 * TopHeader actions
 *
 */

import { DEFAULT_ACTION, LOAD_WEATHER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadWeather(weather) {
  return {
    type: LOAD_WEATHER,
    weather,
  };
}
