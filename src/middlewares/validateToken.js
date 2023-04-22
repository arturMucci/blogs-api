const createError = require('http-errors');
const decodeToken = require('../utils/decodeToken');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next(createError(401, 'Token not found'));

  try {
    decodeToken(authorization);
    next();
  } catch (error) {
    return next(createError(401, 'Expired or invalid token'));
  }
};