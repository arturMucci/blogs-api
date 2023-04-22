const createError = require('http-errors');
const userSchema = require('../Joi/userSchema');

module.exports = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) next(createError(400, error.message));

  return next();
};