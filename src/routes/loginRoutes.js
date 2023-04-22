const express = require('express');

const loginRoutes = express.Router();

const loginController = require('../controllers/login');
const validateLogin = require('../middlewares/validateLogin');

loginRoutes.post(
  '/',
  validateLogin,
  loginController.login,
);

module.exports = loginRoutes;