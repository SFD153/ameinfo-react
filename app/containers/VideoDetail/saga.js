import { takeLatest, call, put, select } from 'redux-saga/effects';
import API from 'utils/Api';
import { GET_VIDEO_DETAIL, GET_RELATED_VIDEOS } from './constants';
import { makeSelectSlug, makeSelectCategory } from './selectors';
import { receivedRelatedVideos, receivedVideoDetail } from './actions';

export function* getVideoDetail() {
  const slug = yield select(makeSelectSlug());
  const result = yield call(API.get, `/video_detail/${slug}`);
  yield put(receivedVideoDetail(result));
}

export function* getRelatedVideos() {
  const slug = yield select(makeSelectSlug());
  const category = yield select(makeSelectCategory());
  const result = yield call(
    API.get,
    `/video_detail/${slug}/related_videos?category=${category}`,
  );
  yield put(receivedRelatedVideos(result));
}

// Individual exports for testing
export default function* videoDetailSaga() {
  yield takeLatest(GET_VIDEO_DETAIL, getVideoDetail);
  yield takeLatest(GET_RELATED_VIDEOS, getRelatedVideos);
}
