import { fromJS } from 'immutable';
import videoSeriesReducer from '../reducer';

describe('videoSeriesReducer', () => {
  it('returns the initial state', () => {
    expect(videoSeriesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
