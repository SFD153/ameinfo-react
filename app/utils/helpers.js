import d01 from 'assets/images/01d.png';
import n01 from 'assets/images/01n.png';
import d02 from 'assets/images/02d.png';
import n02 from 'assets/images/02n.png';
import d03 from 'assets/images/03d.png';
import n03 from 'assets/images/03n.png';
import d04 from 'assets/images/04d.png';
import n04 from 'assets/images/04n.png';
import d09 from 'assets/images/09d.png';
import n09 from 'assets/images/09n.png';
import d10 from 'assets/images/10d.png';
import n10 from 'assets/images/10n.png';
import d11 from 'assets/images/11d.png';
import n11 from 'assets/images/11n.png';
import d13 from 'assets/images/13d.png';
import n13 from 'assets/images/13n.png';
import d50 from 'assets/images/50d.png';
import n50 from 'assets/images/50n.png';
import { matchPath } from 'react-router-dom';
import { isEmpty, find, get, uniq } from 'lodash';

function matchSubCategory(path) {
  const match = matchPath(path, {
    path: '/:category/:subCategory',
    exact: true,
  });

  return match;
}

function matchCategory(path) {
  const match = matchPath(path, {
    path: '/:category',
    exact: true,
  });

  return match;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function link(parent, children, post) {
  let reParent = parent;
  if (isEmpty(reParent)) {
    reParent = [];
  }

  let reChildren = children;
  if (isEmpty(reChildren)) {
    reChildren = {};
  }

  const found = find(reParent, { id: reChildren.parent });
  const category = get(found, 'slug', 'uncategorized');
  const subCategory = get(reChildren, 'slug', 'uncategorized');

  let slug;
  if (isEmpty(post)) {
    slug = `/${category}/${subCategory}`;
  } else {
    slug = `/${category}/${subCategory}/${post}`;
  }

  if (subCategory === 'lifestyle') {
    slug = `/${subCategory}/${post}`;
  }

  const uniqueSlug = uniq(slug.split('/'));

  return uniqueSlug.join('/');
}

function getWeatherIcon(icon) {
  let weatherIcon;

  switch (icon) {
    case '01d':
      weatherIcon = d01;
      break;
    case '02d':
      weatherIcon = d02;
      break;
    case '03d':
      weatherIcon = d03;
      break;
    case '04d':
      weatherIcon = d04;
      break;
    case '09d':
      weatherIcon = d09;
      break;
    case '10d':
      weatherIcon = d10;
      break;
    case '11d':
      weatherIcon = d11;
      break;
    case '13d':
      weatherIcon = d13;
      break;
    case '50d':
      weatherIcon = d50;
      break;
    case '01n':
      weatherIcon = n01;
      break;
    case '02n':
      weatherIcon = n02;
      break;
    case '03n':
      weatherIcon = n03;
      break;
    case '04n':
      weatherIcon = n04;
      break;
    case '09n':
      weatherIcon = n09;
      break;
    case '10n':
      weatherIcon = n10;
      break;
    case '11n':
      weatherIcon = n11;
      break;
    case '13n':
      weatherIcon = n13;
      break;
    case '50n':
      weatherIcon = n50;
      break;
    default:
      weatherIcon = '';
      break;
  }

  return weatherIcon;
}

function getYoutubeId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}

function getYoutubeThumbnail(url) {
  if (!url) {
    return null;
  }

  return `https://img.youtube.com/vi/${getYoutubeId(url)}/mqdefault.jpg`;
}

export {
  random,
  link,
  getWeatherIcon,
  matchCategory,
  matchSubCategory,
  getYoutubeId,
  getYoutubeThumbnail,
};
