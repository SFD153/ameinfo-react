import { fromJS } from 'immutable';
import contentLockerReducer from '../reducer';

describe('contentLockerReducer', () => {
  it('returns the initial state', () => {
    expect(contentLockerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
