const createError = require('http-errors');

const { BlogPost } = require('../models');

const retrieveUserId = require('../utils/retrieveUserId');
const checkCategories = require('../utils/checkCategories');
const createRelations = require('../utils/createRelations');

const addPost = async ({title, content, categoryIds}, token) => {
  const { dataValues: { id: userId } } = await retrieveUserId(token);

  const allCategoriesValid = await checkCategories(categoryIds);

  if (!allCategoriesValid) {
    throw createError(400, "one or more \"categoryIds\" not found");
  }

  const createdPost = await BlogPost.create({ title, content, userId });

  await createRelations(categoryIds, createdPost);

  return createdPost.dataValues;
};

module.exports = {
  addPost,
};