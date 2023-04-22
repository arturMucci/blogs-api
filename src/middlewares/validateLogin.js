const createError = require('http-errors');
const loginSchema = require('../Joi/loginSchema');

module.exports = (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) next(createError(400, error.message));

  return next();
};