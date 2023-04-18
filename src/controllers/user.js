const services = require('../services');

const user = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await services.login(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = user;