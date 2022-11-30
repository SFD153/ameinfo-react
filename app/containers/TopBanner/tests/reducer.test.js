import { fromJS } from 'immutable';
import topBannerReducer from '../reducer';

describe('topBannerReducer', () => {
  it('returns the initial state', () => {
    expect(topBannerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
