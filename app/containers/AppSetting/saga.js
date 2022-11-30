import { all, call, put, fork } from 'redux-saga/effects';
import Api from 'utils/Api';
import { setSettings, setParentCategory } from './actions';

export function* fetchSettings() {
  const params = {
    select: 'name,value',
    perPage: '50',
  };

  const response = yield call(Api.get, '/settings', params);
  const { results } = response;
  const settings = {};

  // Convert array to object for settings
  results.forEach(result => {
    const { name, value } = result;
    let data;

    try {
      data = JSON.parse(value);
    } catch (e) {
      data = value;
    }

    settings[name] = data;
  });

  yield put(setSettings(settings));
}

export function* fetchParentCategory() {
  const response = yield call(Api.get, '/categories/parent');
  yield put(setParentCategory(response));
}

export default function* rootSaga() {
  yield all([fork(fetchParentCategory), fork(fetchSettings)]);
}
