const createError = require('http-errors');
const { User } = require('../models');
const auth = require('../utils/auth');

const login = async (email, password) => {
  const newLogin = await User.findOne({ where: { email } });

  if (!newLogin || newLogin.password !== password) {
    throw createError(400, 'Invalid fields');
  }

  const token = auth.createToken({ email });

  return token;
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
  login,
  addUser,
};
