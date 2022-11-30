import { fromJS } from 'immutable';
import tagReducer from '../reducer';

describe('tagReducer', () => {
  it('returns the initial state', () => {
    expect(tagReducer(undefined, {})).toEqual(fromJS({}));
  });
});
