const express = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const userRoutes = express.Router();

userRoutes.post(
  '/',
  middlewares.validateLogin,
  controllers.user,
  );

module.exports = userRoutes;