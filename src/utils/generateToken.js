const JWT = require('jsonwebtoken');

const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = (email) => {
  const token = JWT.sign({ email }, process.env.JWT_SECRET, config);

  return token;
};