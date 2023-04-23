const createError = require('http-errors');
const editPostSchema = require('../Joi/editPostSchema');

module.exports = (req, res, next) => {
  const check = editPostSchema.validate(req.body);
  if (check.error) return next(createError(400, check.error));
  return next();
};