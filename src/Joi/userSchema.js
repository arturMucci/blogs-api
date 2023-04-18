const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi
    .string()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: [
          'com',
          'net',
        ],
      },
    })
    .required()
    .label('email'),
  password: Joi
    .string()
    .required()
    .min(6)
    .label('password'),
  displayName: Joi
    .string()
    .required()
    .min(8)
    .label('displayName'),
  image: Joi
    .string()
    .label('image'),
}).messages({
  // 'any.required': "",
  'any.min': '{{#label}} length must be at least {#limit} characters long',
  'any.string': '{{#label}} must be of string type',
  'email.email': '{{#label}} must be a valid email',
});

module.exports = userSchema;