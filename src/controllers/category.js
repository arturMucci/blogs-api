const Category = require('../services/category');

const getAll = async (req, res, next) => {
  try {
    const allCategories = await Category.getAll();
    return res.status(200).json(allCategories);
  } catch (error) {
    return next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const createdCategory = await Category.createCategory(req.body);
    return res.status(201).json(createdCategory);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  createCategory,
};