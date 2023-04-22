const { User } = require('../models');
const decodeToken = require('./decodeToken');

module.exports = async (token) => {
  const { email } = decodeToken(token);

  const userId = await User.findOne({
    where: {
      email,
    },
    attributes: ['id'],
  });

  return userId;
};