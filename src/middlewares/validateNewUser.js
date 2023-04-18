const createError = require('http-errors');
const { userSchema } = require('../Joi');

const validateNewUser = (req, _res, next) => {
  const check = userSchema.validate(req.body);
  if (check.error) return next(createError(400, check.error));
  return next();
};

module.exports = validateNewUser;