const createError = require('http-errors');

module.exports = (req, _res, next) => {
  const { name } = req.body;

  if (!name || name.length < 1) {
    return next(createError(400, "\"name\" is required"));
  }

  return next();
};