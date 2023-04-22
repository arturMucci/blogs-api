const createError = require('http-errors');
const { Category } = require('../models');

const getAll = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

const createCategory = async (cat) => {
  const categoryExists = await Category.findOne({
    where: {
      name: cat.name,
    },
  });

  if (categoryExists) {
    throw createError(409, 'Category already exists');
  }

  const { dataValues } = await Category.create(cat);

  return dataValues;
};

module.exports = {
  getAll,
  createCategory,
};