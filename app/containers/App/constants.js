/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_AD_RECTANGLE = 'app/App/SET_AD_RECTANGLE';
export const SET_AD_RECTANGLE_MOBILE = 'app/App/SET_AD_RECTANGLE_MOBILE';
export const SET_AD_SQUARE = 'app/App/SET_AD_SQUARE';
export const SET_AD_SIDE = 'app/App/SET_AD_SIDE';
export const SET_AD_CONTAINER = 'app/App/SET_AD_CONTAINER';
export const SET_PAGE_TYPE = 'app/App/SET_PAGE_TYPE';
