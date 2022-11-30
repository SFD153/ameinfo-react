import agent from './agent';

const Api = {
  get(url, params) {
    return agent
      .get(url)
      .query(params)
      .then(response => response.body);
  },
  post(url, params) {
    return agent
      .post(url)
      .send(params)
      .then(response => response.body);
  },
  put(url, params) {
    return agent
      .put(url)
      .send(params)
      .then(response => response.body);
  },
  delete(url, params) {
    return agent.delete(url, params);
  },
};

export default Api;
