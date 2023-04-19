const createError = require('http-errors');
const { BlogPost, Category, User, PostsCategory } = require('../models');
const { auth } = require('../utils');

const retrieveUserId = async (token) => {
  const { email } = auth.validateToken(token);

  const userId = await User.findOne({
    where: {
      email,
    },
    attributes: ['id'],
  });
  return userId;
};

const checkCategories = async (categoryIds) => {
  const categories = await Category.findAll();
  return categoryIds
    .every((category) => categories.map((each) => +each.id).includes(+category));
};

const createRelations = async (categoryIds, createdPost) => {
  const createdRelations = categoryIds
    .map((each) => ({ postId: createdPost.dataValues.id, categoryId: each }));

  await PostsCategory.bulkCreate(createdRelations);
};

const addPost = async ({ title, content, categoryIds }, token) => {
  const { dataValues: { id: userId } } = await retrieveUserId(token);

  const allCategoriesValid = await checkCategories(categoryIds);

  if (!allCategoriesValid) {
    const error = createError(400, 'one or more "categoryIds" not found');
    console.log(error);
    throw error;
  }

  const createdPost = await BlogPost.create({ title, content, userId });

  await createRelations(categoryIds, createdPost);

  return createdPost.dataValues;
};

module.exports = {
  addPost,
};

// umas linha comentada aí
// 1 - primeiramente
// 1.1 - decodificar o token pra pegar o email
// 1.2 - com o email faça a requisição no banco de dados para pegar as informações do usuário pelo email
// 1.3 - dessas informações somente o id do usuário
// 2 - segundamente
// 2.1 - verificar se as categorias do usuários existem no banco de dados
// 3 - terceiramente
// 3.1 - montar o objeto do post do usuário
// 4 - quartamente
// 4.1 - criar os relacionamentos
