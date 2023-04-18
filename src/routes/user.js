const express = require('express');
const { user } = require('../controllers');
const middlewares = require('../middlewares');

const userRoutes = express.Router();

userRoutes.post(
  '/',
  middlewares.validateNewUser,
  user.addUser,
);

module.exports = userRoutes;