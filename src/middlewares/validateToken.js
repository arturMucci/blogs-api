const createError = require('http-errors');
const auth = require('../utils/auth');

const validateToken = (req, _res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;
  if (!authorization) return next(createError(401, 'Token not found'));

  try {
    auth.validateToken(authorization);
    next();
  } catch (error) {
    return next(createError(401, 'Expired or invalid token'));
  }
};

module.exports = validateToken;