import { call, put, select, takeEvery } from 'redux-saga/effects';
import Api from 'utils/Api';
import { SEARCH_POSTS } from './constants';
import { makeSelectKeyword } from './selectors';
import { savePostCount, savePosts, searchPostsLoading } from './actions';

export function* searchPosts() {
  yield put(searchPostsLoading(true));
  const keywords = yield select(makeSelectKeyword());
  const params = { keywords, perPage: 3 };
  const response = yield call(Api.get, '/search/posts', params);
  const posts = response.results;
  const info = response.meta;
  const count = info ? info.totalCount : 0;

  yield put(savePosts(posts));
  yield put(savePostCount(count));
  yield put(searchPostsLoading(false));
}

export default function* rootSaga() {
  yield takeEvery(SEARCH_POSTS, searchPosts);
}
