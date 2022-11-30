import findIndex from 'lodash/find';
import _set from 'lodash/set';
import _get from 'lodash/get';
import forOwn from 'lodash/forOwn';
import snakeCase from 'lodash/snakeCase';

const get = (items, key) => {
  const model = findIndex(items, { name: key });
  return _get(model, 'value', []);
};

const set = (items, key, value) => {
  const item = findIndex(items, { name: key });
  _set(item, 'value', value);
  return item;
};

const setEach = (items, options) => {
  const results = [];
  forOwn(options, (value, name) => {
    const result = set(items, snakeCase(name), value || '');
    results.push(result);
  });
  return results;
};

const getSelectedIds = (items, path) => {
  const results = _get(items, path, []);
  return results.map(item => item.key);
};

export { get, set, setEach, getSelectedIds };
