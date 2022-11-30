const agent = require('superagent-use')(require('superagent'));
const prefix = require('superagent-prefix');

agent.use(prefix(process.env.API_URL));

export default agent;
