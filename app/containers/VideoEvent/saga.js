import { takeLatest, call, put } from 'redux-saga/effects';
import API from 'utils/Api';
import { receivedVideoEvents } from './actions';
import { GET_VIDEO_EVENTS } from './constants';

export function* getVideoEvents() {
  const results = yield call(API.get, '/video_events');
  yield put(receivedVideoEvents(results));
}

// Individual exports for testing
export default function* videoEventSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_VIDEO_EVENTS, getVideoEvents);
}
