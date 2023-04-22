const JWT = require('jsonwebtoken');

module.exports = (token) => {
  const decodedToken = JWT.verify(token, process.env.JWT_SECRET);

  return decodedToken;
};