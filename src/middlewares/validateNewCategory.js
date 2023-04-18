const createError = require('http-errors');
const { categorySchema } = require('../Joi');

const validateNewCategory = (req, res, next) => {
  const check = categorySchema.validate(req.body);
  if (check.error) return next(createError(400, check.error));
  return next();
};

module.exports = validateNewCategory;