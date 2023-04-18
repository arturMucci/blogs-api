const createError = require('http-errors');
const { User } = require('../models');
const auth = require('../utils/auth');

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

const login = async (email, password) => {
  const newLogin = await User.findOne({
    where: {
      email,
    },
  });

  if (!newLogin || newLogin.password !== password) {
    throw createError(400, 'Invalid fields');
  }

  const token = auth.createToken({ email });

  return token;
};

const getById = async (id) => {
  const userById = await User.findByPk(+id, {
    attributes: {
      exclude: [
        'password',
      ],
    },
  });

  console.log(userById);

  if (!userById) throw createError(404, 'User does not exist');

  return userById.dataValues;
};

const addUser = async (newUser) => {
  const userExists = await User.findOne({
    where: {
      email: newUser.email,
    },
    attributes: [
      'email',
      'password',
    ],
  });

  if (userExists) {
    throw createError(409, 'User already registered');
  }

  const newAddedUser = await User.create(newUser);

  const token = auth.createToken({ email: newAddedUser.email });
  return token;
};

module.exports = {
  getAll,
  login,
  addUser,
  getById,
};
