const Joi = require('joi');

const BlogPostSchema = Joi.object({
  title: Joi
    .string()
    .empty()
    .required()
    .label('title'),
  content: Joi
    .string()
    .empty()
    .required()
    .label('content'),
    categoryIds: Joi
    .array()
    .required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = BlogPostSchema;