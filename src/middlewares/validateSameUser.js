const createError = require('http-errors');
const retrieveUserId = require('../utils/retrieveUserId');

module.exports = async (req, _res, next) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const { dataValues: { id: tokenUserId } } = await retrieveUserId(authorization);
  const userById = await getById(id, next);

  console.log(userById);

  if (tokenUserId !== userById) next(createError(401, 'Unauthorized user'));

  return next();
};