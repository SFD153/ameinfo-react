/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const proxy = require('http-proxy-middleware');
const { MongoClient } = require('mongodb');
const isDev = process.env.NODE_ENV !== 'production';
const isGoLive = process.env.NODE_GO === 'live';
const render = require('./prerender');
const prerender = require('prerender-node');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();
const MongoConnection = 'mongodb://localhost:27017/ameinfo-db';
const { API_URL } = process.env;

// SETUP MONGODB
let db = null;

MongoClient.connect(
  MongoConnection,
  { useNewUrlParser: true },
)
  .then(client => {
    db = client.db('ameinfo-db');
  })
  .catch(err => {
    console.error(err);
  });

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// Set view engine for express
app.set('view engine', 'ejs');

// Set views folder for express
app.set('views', resolve(process.cwd(), 'server/views'));

// Add mongodb to middleware to allow access from anywhere
app.use(async (req, res, next) => {
  req.db = db;
  return next();
});

app.use((req, res, next) => {
  // Use local render when it is social crawler
  const CRAWLER_SOCIAL = ['facebookexternalhit', 'twitterbot', 'linkedinbot'];
  const userAgent = req.headers['user-agent'];
  if (userAgent) {
    const isCrawler = CRAWLER_SOCIAL.some(
      social => userAgent.toLowerCase().indexOf(social) > -1,
    );
    if (isCrawler) {
      return render(req, res, next);
    }
  }

  return prerender(req, res, next);
});

if (!isDev) {
  // Serving site feed content
  app.get('/feed', proxy({ target: `${API_URL}/site` }));

  // Serving sitemap.xml
  app.get(
    '/*sitemap*.xml',
    proxy({
      target: 'http://ameinfo-public.s3-ap-southeast-1.amazonaws.com',
      changeOrigin: true,
    }),
  );

  // Serving static files in public folder
  app.use(express.static(resolve(process.cwd(), 'public')));
}

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Leverage browser caching for javascript
app.get('*.js', (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=2592000');
  res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString());
  next();
});

// Start your app.
if (isGoLive) {
  const ports = port + 443;
  const options = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl/server.cert')),
    key: fs.readFileSync(path.join(__dirname, 'ssl/server.key')),
  };

  // Redirect port http to https
  http
    .createServer((req, res) => {
      res.writeHead(301, { Location: `https://${req.headers.host + req.url}` });
      res.end();
    })
    .listen(port);

  // Create https server
  https.createServer(options, app).listen(ports);

  // Start to log app
  logger.appStarted(ports, prettyHost);
} else {
  app.listen(port, host, async err => {
    if (err) {
      return logger.error(err.message);
    }

    // Connect to ngrok in dev mode
    if (ngrok) {
      let url;
      try {
        url = await ngrok.connect(port);
      } catch (e) {
        return logger.error(e);
      }
      logger.appStarted(port, prettyHost, url);
    } else {
      logger.appStarted(port, prettyHost);
    }
  });
}
