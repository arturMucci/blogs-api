// const createError = require('http-errors');
const { Category } = require('../models');

const getAll = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

const addCategory = async (newCategory) => {
  await Category.create(newCategory);

  const addedCategory = await Category.findOne({
    where: {
      name: newCategory.name,
    },
  });

  return addedCategory;
};

module.exports = {
  getAll,
  addCategory,
};