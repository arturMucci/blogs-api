const JWT = require('jsonwebtoken');

const secretWord = process.env.JWT_SECRET;

const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = JWT.sign(payload, secretWord, config);
  return token;
};

const validateToken = (token) => {
  const tokenChecked = JWT.verify(token, secretWord);
  return tokenChecked;
};

module.exports = {
  createToken,
  validateToken,
};