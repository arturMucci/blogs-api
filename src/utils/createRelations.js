const { PostCategory } = require('../models');

module.exports = async (categoryIds, createdPost) => {
  const createdRelations = categoryIds
    .map((each) => ({
      postId: createdPost.dataValues.id,
      categoryId: each,
    }));

  await PostCategory.bulkCreate(createdRelations);
};