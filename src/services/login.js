const createError = require('http-errors');
const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const login = async ({ email, password }) => {
  const userIsValid = await User.findOne({
    where: {
      email,
    },
  });

  if (!userIsValid || userIsValid.dataValues.password !== password) {
    throw createError(400, 'Invalid fields');
  }

  return generateToken(email);
};

module.exports = {
  login,
};
