import { fromJS } from 'immutable';
import injectAdsReducer from '../reducer';

describe('injectAdsReducer', () => {
  it('returns the initial state', () => {
    expect(injectAdsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
