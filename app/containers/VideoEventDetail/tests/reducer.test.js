import { fromJS } from 'immutable';
import videoEventDetailReducer from '../reducer';

describe('videoEventDetailReducer', () => {
  it('returns the initial state', () => {
    expect(videoEventDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
