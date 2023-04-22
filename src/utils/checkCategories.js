const { Category } = require('../models');

module.exports = async (categoryIds) => {
  const categories = await Category.findAll();

  return categoryIds
    .every((category) => categories
      .map((each) => +each.id)
      .includes(+category)
      );
};