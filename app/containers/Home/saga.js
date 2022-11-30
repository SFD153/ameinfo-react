import { call, put, select, all, fork } from 'redux-saga/effects';
import { get, isEmpty } from 'lodash';
import Api from 'utils/Api';
import { makeSelectSettings } from '../AppSetting/selectors';
import {
  loadEditors,
  loadFeaturedMedias,
  loadFeaturedPosts,
  loadFeaturedTexts,
  loadTips,
  loadTodays,
  loadUsers,
  loadIndustries,
} from './actions';

export function* fetchFeaturedPost() {
  const results = yield call(Api.get, '/home/featured-post');
  yield put(loadFeaturedPosts(results));
}

export function* fetchFeaturedText() {
  const results = yield call(Api.get, '/home/featured-text');
  yield put(loadFeaturedTexts(results));
}

export function* fetchFeaturedMedia() {
  const results = yield call(Api.get, '/home/featured-media');
  yield put(loadFeaturedMedias(results));
}

export function* fetchToday() {
  const results = yield call(Api.get, '/home/today');
  yield put(loadTodays(results));
}

export function* fetchEditor() {
  const results = yield call(Api.get, '/home/editors-picks');
  yield put(loadEditors(results));
}

export function* fetchIndustry() {
  const results = yield call(Api.get, '/home/industries');
  yield put(loadIndustries(results));
}

export function* fetchUser() {
  const results = yield call(Api.get, '/home/contributors');
  yield put(loadUsers(results));
}

export function* fetchTip() {
  const results = yield call(Api.get, '/home/tips');
  yield put(loadTips(results));
}

export function* fetchPostsByCategory(action, name) {
  const settings = yield select(makeSelectSettings());
  const featuredGeneral = get(settings, 'featured_general', {});
  const defaultCategories = [
    'energy',
    'finance',
    'healthcare',
    'media',
    'technology',
    'startup',
  ];
  const categories = get(featuredGeneral, name);
  const categorySelected = isEmpty(categories) ? defaultCategories : categories;

  const params = {
    select: 'title,slug',
    sort: 'createdAt DESC',
    populate: 'thumbnail',
    perPage: '5',
    where: {
      status: 'publish',
      scheduleDate: 0,
    },
  };

  const categoryPosts = yield all(
    categorySelected.map(selected =>
      call(
        Api.get,
        `/categories/${get(selected, 'key', selected)}/posts`,
        params,
      ),
    ),
  );

  yield put(action(categoryPosts));
}

// Individual exports for testing
export default function* rootSaga() {
  // Fetch Posts
  yield all([
    fork(fetchFeaturedPost),
    fork(fetchFeaturedText),
    fork(fetchFeaturedMedia),
    fork(fetchToday),
    fork(fetchEditor),
    fork(fetchIndustry),
    fork(fetchUser),
    fork(fetchTip),
  ]);
}
