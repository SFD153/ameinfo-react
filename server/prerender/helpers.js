const { matchPath } = require('react-router-dom');
module.exports = {
  getFullUrl(req) {
    const protocol = req.connection.encrypted ? 'https' : 'http';
    const fullUrl = `${protocol}://${this.host ||
      req.headers['x-forwarded-host'] ||
      req.headers.host}${req.url}`;
    return fullUrl.split('?')[0];
  },
  matchCategory(path) {
    const match = matchPath(path, {
      path: '/:category',
      exact: true,
    });

    return match ? match.params : null;
  },

  matchSubCategory(path) {
    const match = matchPath(path, {
      path: '/:category/:subCategory',
      exact: true,
    });

    return match ? match.params : null;
  },

  matchPost(path) {
    const match = matchPath(path, {
      path: '/:category/:subCategory/:slug',
    });

    return match ? match.params : null;
  },
  fixImage(url, width, height) {
    if (!url) return null;
    // constants
    const oldBucket = 'ameinfo-bucket|ameinfo-images';
    const oldBucketRe = new RegExp(oldBucket);
    const newBucket = 'https://d1tchxdm4w0h28.cloudfront.net';
    const imageRe = new RegExp(/\/[^.]*?\.(jpg|png|gif)/i);
    let imgUrl = url;
    // check if using old bucket
    if (oldBucketRe.test(url)) {
      // extract image
      const m = url.match(imageRe);
      if (m && m[0]) {
        // build image url with query strings
        imgUrl = newBucket + m[0];
        if (width || height) {
          imgUrl += '?';
          if (width) imgUrl += `width=${width}&`;
          if (height) imgUrl += `height=${height}&`;
          // remove the last &
          imgUrl = imgUrl.slice(0, -1);
        }
      }
    }
    return imgUrl;
  },
};
