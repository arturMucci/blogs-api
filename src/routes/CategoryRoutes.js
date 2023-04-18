const express = require('express');

const {
  Category: {
    getAll,
    addCategory,
  },
} = require('../controllers');

const {
  validateToken,
  validateNewCategory,
} = require('../middlewares');

const CategoryRoutes = express.Router();

CategoryRoutes.get(
  '/',
  validateToken,
  getAll,
);

CategoryRoutes.post(
  '/',
  validateToken,
  validateNewCategory,
  addCategory,
);

module.exports = CategoryRoutes;