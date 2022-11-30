module.exports = {
  apps: [
    {
      name: 'ameinfo',
      script: 'server/index.js',
      watch: ['server'],
      env_production: {
        NODE_ENV: 'production',
        API_URL: 'https://api.ameinfo.com',
        VIDEO_STREAM_URL: 'd238uspdfcn4uv.cloudfront.net',
      },
      env_live: {
        NODE_ENV: 'production',
        NODE_GO: 'live',
        PORT: 3000,
        API_URL: 'https://api.ameinfo.com',
        VIDEO_STREAM_URL: 'd238uspdfcn4uv.cloudfront.net',
      },
    },
  ],
};
