import { fromJS } from 'immutable';
import videoEventReducer from '../reducer';

describe('videoEventReducer', () => {
  it('returns the initial state', () => {
    expect(videoEventReducer(undefined, {})).toEqual(fromJS({}));
  });
});
