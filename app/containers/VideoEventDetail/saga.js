import { takeLatest, call, put, select } from 'redux-saga/effects';
import API from 'utils/Api';
import { receivedVideoEventDetails } from './actions';
import { GET_VIDEO_EVENT_DETAILS } from './constants';
import { makeSelectSlug } from './selectors';

export function* getVideoEventDetails() {
  const slug = yield select(makeSelectSlug());
  const results = yield call(API.get, `/video_event_details/${slug}`);
  yield put(receivedVideoEventDetails(results));
}

// Individual exports for testing
export default function* videoEventDetailSaga() {
  yield takeLatest(GET_VIDEO_EVENT_DETAILS, getVideoEventDetails);
}
