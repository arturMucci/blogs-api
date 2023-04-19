const express = require('express');
const { User } = require('../controllers');
const {
  validateToken,
  validateNewUser,
} = require('../middlewares');

const userRoutes = express.Router();

userRoutes.get(
  '/',
  validateToken,
  User.getAll,
  );

userRoutes.get(
  '/:id',
  validateToken,
  User.getById,
  );

userRoutes.post(
  '/',
  validateNewUser,
  User.addUser,
);

module.exports = userRoutes;