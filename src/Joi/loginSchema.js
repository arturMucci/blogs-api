const Joi = require('joi');

module.exports = Joi.object({
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .label('email'),
  password: Joi
    .string()
    .required()
    .label('password'),
}).messages({
  'any.required': 'Some required fields are missing',
  'email.empty': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});