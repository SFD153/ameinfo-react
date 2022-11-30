import fullScreenSearchReducer from '../reducer';

describe('fullScreenSearchReducer', () => {
  it('returns the initial state', () => {
    expect(fullScreenSearchReducer(undefined, {})).toEqual(
      fullScreenSearchReducer(undefined, {}),
    );
  });
});
