import { call, put, takeEvery } from 'redux-saga/effects';
import Api from 'utils/Api';
import { SET_SETTINGS } from '../AppSetting/constants';
import { loadWeather } from './actions';

export function* fetchWeather() {
  const response = yield call(Api.get, '/weather');
  yield put(loadWeather(response));
}

// Individual exports for testing
export default function* rootSaga() {
  yield takeEvery(SET_SETTINGS, fetchWeather);
}
