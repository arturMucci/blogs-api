const createError = require('http-errors');
const { User } = require('../models');
const auth = require('../utils/auth');

const login = async (email, password) => {
  console.log('maranão');
  const newLogin = await User.findOne({ where: { email } });

  if (!newLogin || newLogin.password !== password) {
    throw createError(400, 'Invalid fields');
  }

  const token = auth.createToken({ email });

  return token;
};

module.exports = {
  login,
};