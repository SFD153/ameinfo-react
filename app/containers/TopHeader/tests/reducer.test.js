import { fromJS } from 'immutable';
import topHeaderReducer from '../reducer';

describe('topHeaderReducer', () => {
  it('returns the initial state', () => {
    expect(topHeaderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
