const createError = require('http-errors');
const { BlogPostSchema } = require('../Joi');

const validateBlogPost = (req, _res, next) => {
  const check = BlogPostSchema.validate(req.body);
  if (check.error) return next(createError(400, check.error));
  return next();
};

module.exports = validateBlogPost;