/*
 *
 * App actions
 *
 */

import {
  SET_AD_RECTANGLE,
  SET_AD_RECTANGLE_MOBILE,
  SET_AD_SQUARE,
  SET_AD_SIDE,
  SET_AD_CONTAINER,
  SET_PAGE_TYPE,
} from './constants';

export function setAdRectangle(adRectangle) {
  return {
    type: SET_AD_RECTANGLE,
    adRectangle,
  };
}

export function setAdRectangleMobile(adRectangleMobile) {
  return {
    type: SET_AD_RECTANGLE_MOBILE,
    adRectangleMobile,
  };
}

export function setAdSquare(adSquare) {
  return {
    type: SET_AD_SQUARE,
    adSquare,
  };
}

export function setAdSide(adSide) {
  return {
    type: SET_AD_SIDE,
    adSide,
  };
}

export function setAdContainer(adContainer) {
  return {
    type: SET_AD_CONTAINER,
    adContainer,
  };
}

export function setPageType(pageType) {
  return {
    type: SET_PAGE_TYPE,
    pageType,
  };
}
