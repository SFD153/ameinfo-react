const url = require('url');
const { CRAWLER_USER_AGENT, EXTENSION_TO_IGNORE } = require('./constants');

/* eslint-disable no-underscore-dangle, dot-notation */
module.exports = req => {
  const parsedQuery = url.parse(req.url, true).query;
  const userAgent = req.headers['user-agent'];
  const bufferAgent = req.headers['x-bufferbot'];
  let isRequestingPrerenderedPage = false;

  if (!userAgent) return false;
  if (req.method !== 'GET' && req.method !== 'HEAD') return false;
  if (req.headers && req.headers['x-prerender']) return false;

  // if it contains _escaped_fragment_, show prerendered page
  if (parsedQuery && parsedQuery['_escaped_fragment_'] !== undefined)
    isRequestingPrerenderedPage = true;

  // if it is a bot...show prerendered page
  const isBot = CRAWLER_USER_AGENT.some(
    crawlerUserAgent =>
      userAgent.toLowerCase().indexOf(crawlerUserAgent.toLowerCase()) !== -1,
  );

  if (isBot) isRequestingPrerenderedPage = true;

  // if it is BufferBot...show prerendered page
  if (bufferAgent) isRequestingPrerenderedPage = true;

  // if it is a bot and is requesting a resource...dont prerender
  const isDifferentSource = EXTENSION_TO_IGNORE.some(
    extension => req.url.toLowerCase().indexOf(extension) !== -1,
  );
  if (isDifferentSource) return false;

  return isRequestingPrerenderedPage;
};
