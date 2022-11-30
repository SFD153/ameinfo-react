import { takeLatest, call, put, select } from 'redux-saga/effects';
import API from 'utils/Api';
import { GET_VIDEO_SERIES } from './constants';
import { receivedVideoSeries } from './actions';
import { makeSelectSlug } from './selectors';

export function* getVideoSeries() {
  const slug = yield select(makeSelectSlug());
  const results = yield call(API.get, `/video_series/${slug}`);
  yield put(receivedVideoSeries(results));
}

// Individual exports for testing
export default function* videoSeriesSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_VIDEO_SERIES, getVideoSeries);
}
