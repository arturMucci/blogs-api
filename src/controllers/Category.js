const { Category } = require('../services');

const addCategory = async (req, res, next) => {
  try {
    const addedCategory = await Category.addCategory(req.body);
    return res.status(201).json(addedCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCategory,
};