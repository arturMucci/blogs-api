const { Category } = require('../services');

const getAll = async (req, res, next) => {
  try {
    const allCategories = await Category.getAll();
    return res.status(200).json(allCategories);
  } catch (error) {
    return next(error);
  }
};

const addCategory = async (req, res, next) => {
  try {
    const addedCategory = await Category.addCategory(req.body);
    return res.status(201).json(addedCategory);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  addCategory,
};