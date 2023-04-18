const createError = require('http-errors');
const userSchema = require('../Joi/schema');

const validateNewUser = (req, res, next) => {
  const check = userSchema.validate(req.body);
  if (check.error) return next(createError(400, check.error));
  return next();
};

module.exports = validateNewUser;