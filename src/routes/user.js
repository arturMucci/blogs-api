const express = require('express');
const { User } = require('../controllers');
const middlewares = require('../middlewares');

const userRoutes = express.Router();

userRoutes.get(
  '/',
  middlewares.validateToken,
  User.getAll,
  );

userRoutes.post(
  '/',
  middlewares.validateNewUser,
  User.addUser,
);

module.exports = userRoutes;