const errorHandler = require('./errorHandler');
const validateLogin = require('./validateLogin');
const validateNewUser = require('./validateNewUser');
const validateNewCategory = require('./validateNewCategory');
const validateToken = require('./validateToken');

module.exports = {
  errorHandler,
  validateLogin,
  validateNewUser,
  validateNewCategory,
  validateToken,
};