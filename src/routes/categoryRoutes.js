const express = require('express');

const categoryRoutes = express.Router();

const categoryController = require('../controllers/category');
const validateCategory = require('../middlewares/validateCategory');
const validateToken = require('../middlewares/validateToken');

categoryRoutes.get(
  '/',
  validateToken,
  categoryController.getAll,
);

categoryRoutes.post(
  '/',
  validateToken,
  validateCategory,
  categoryController.createCategory,
);

module.exports = categoryRoutes;
