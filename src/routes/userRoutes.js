const express = require('express');

const userRoutes = express.Router();

const userController = require('../controllers/user');

const validateNewUser = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

userRoutes.get(
  '/',
  validateToken,
  userController.getAll,
);

userRoutes.get(
  '/:id',
  validateToken,
  userController.getById,
);

userRoutes.post(
  '/',
  validateNewUser,
  userController.createUser,
);

userRoutes.delete(
  '/me',
  validateToken,
  userController.deleteUser,
);

module.exports = userRoutes;