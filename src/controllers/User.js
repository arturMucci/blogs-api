const { User } = require('../services');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await User.login(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const token = await User.addUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  login,
  addUser,
};
