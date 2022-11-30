const jwtDecode = require('jwt-decode');

module.exports = {
  decode(token) {
    return jwtDecode(token);
  },
};
