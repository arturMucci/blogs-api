const createError = require('http-errors');
const { BlogPost, User, Category } = require('../models');
const retrieveUserId = require('../utils/retrieveUserId');
const checkCategories = require('../utils/checkCategories');
const createRelations = require('../utils/createRelations');

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });

  return allPosts;
};

const getById = async (id) => {
  const [postById] = await BlogPost.findAll({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });

  if (!postById) throw createError(404, 'Post does not exist');

  return postById;
};

const addPost = async ({ title, content, categoryIds }, token) => {
  const { dataValues: { id: userId } } = await retrieveUserId(token);

  const allCategoriesValid = await checkCategories(categoryIds);

  if (!allCategoriesValid) {
    throw createError(400, 'one or more "categoryIds" not found');
  }

  const createdPost = await BlogPost.create({ title, content, userId });

  await createRelations(categoryIds, createdPost);

  return createdPost.dataValues;
};

const updatePost = async ({ title, content }, id, token) => {
  const { dataValues: { id: tokenUserId } } = await retrieveUserId(token);
  const { dataValues: { userId: postUserId } } = await getById(id);

  if (tokenUserId !== postUserId) throw createError(401, 'Unauthorized user');

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const postById = await getById(id);

  return postById;
};

module.exports = {
  getAll,
  getById,
  addPost,
  updatePost,
};