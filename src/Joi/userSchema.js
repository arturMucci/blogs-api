const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi
    .string()
    .min(8)
    .required()
    .label('displayName'),
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .label('email'),
  password: Joi
    .string()
    .min(6)
    .required()
    .label('password'),
  image: Joi
    .string(),
}).messages({
  'email.required': '{{#label}} must be a valid email',
  'any.min': '{{#label}} length must be at least 8 characters long',
});