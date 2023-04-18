const userSchema = require('../Joi/schema');

const validateNewUser = (req, res, next) => {
  const hasError = userSchema.validate(req.body);
  if (!hasError) return next(hasError);
  return next();
};

module.exports = validateNewUser;