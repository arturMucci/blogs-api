const { user } = require('../services');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await user.login(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

const addUser = async (_req, _res) => {};

module.exports = {
  login,
  addUser,
};