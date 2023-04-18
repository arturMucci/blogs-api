const express = require('express');

const {
  Category: {
    addCategory,
  },
} = require('../controllers');

const {
  validateToken,
  validateNewCategory,
} = require('../middlewares');

const CategoryRoutes = express.Router();

CategoryRoutes.post(
  '/',
  validateToken,
  validateNewCategory,
  addCategory,
);

module.exports = CategoryRoutes;