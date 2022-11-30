import { fromJS } from 'immutable';
import mobileMenuReducer from '../reducer';

describe('mobileMenuReducer', () => {
  it('returns the initial state', () => {
    expect(mobileMenuReducer(undefined, {})).toEqual(fromJS({}));
  });
});
