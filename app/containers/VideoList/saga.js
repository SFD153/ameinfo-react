import { takeLatest, call, put, select } from 'redux-saga/effects';
import API from 'utils/Api';
import { makeSelectSlug } from './selectors';
import { receivedVideoLists } from './actions';
import { GET_VIDEO_LISTS } from './constants';

export function* getVideoLists() {
  const slug = yield select(makeSelectSlug());
  const results = yield call(API.get, `/video_lists/${slug}`);
  yield put(receivedVideoLists(results));
}

// Individual exports for testing
export default function* videoListSaga() {
  yield takeLatest(GET_VIDEO_LISTS, getVideoLists);
}
