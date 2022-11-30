import { fromJS } from 'immutable';
import videoListReducer from '../reducer';

describe('videoListReducer', () => {
  it('returns the initial state', () => {
    expect(videoListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
