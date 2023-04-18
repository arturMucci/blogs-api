const JWT = require('jsonwebtoken');

const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const secretWord = process.env.JWT_SECRET;
  const token = JWT.sign(payload, secretWord, config);
  return token;
};

module.exports = {
  createToken,
};