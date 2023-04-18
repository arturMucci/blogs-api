// const userSchema = require('../Joi/schema');
const createError = require('http-errors');

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) throw next(createError(400, 'Some required fields are missing'));
  return next();
};

module.exports = validateLogin;