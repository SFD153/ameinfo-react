import appSettingReducer from '../reducer';

describe('appSettingReducer', () => {
  it('returns the initial state', () => {
    expect(appSettingReducer(undefined, {})).toEqual(
      appSettingReducer(undefined, {}),
    );
  });
});
