const Joi = require('joi');

module.exports = Joi.object({
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
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});