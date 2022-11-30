import { fromJS } from 'immutable';
import sidebarVideoReducer from '../reducer';

describe('sidebarVideoReducer', () => {
  it('returns the initial state', () => {
    expect(sidebarVideoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
