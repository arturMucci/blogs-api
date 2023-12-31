const createError = require('http-errors');
const { User } = require('../models');
const generateToken = require('../utils/generateToken');
const retrieveUserId = require('../utils/retrieveUserId');

const getAll = async () => {
  const allUsers = await User.findAll({
    attributes: {
      exclude: [
        'password',
      ],
    },
  });
  return allUsers;
};

const getById = async (id) => {
  const userById = await User.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: [
        'password',
      ],
    },
  });

  if (!userById) throw createError(404, 'User does not exist');

  return userById;
};

const createUser = async (user) => {
  const userExists = await User.findOne({
    where: {
      email: user.email,
    },
  });

  if (userExists) {
    throw createError(409, 'User already registered');
  }

  const { dataValues: { email } } = await User.create(user);

  return generateToken(email);
};

const deleteUser = async (token) => {
  const { dataValues: { id } } = await retrieveUserId(token);

  await User.destroy({
    where: { id },
  });
};

module.exports = {
  getAll,
  getById,
  createUser,
  deleteUser,
};