const { User } = require('../services');

const getAll = async (_req, res) => {
  const allUsers = await User.getAll();
  return res.status(200).json(allUsers);
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userById = await User.getById(id);
    return res.status(200).json(userById);
  } catch (error) {
    return next(error);
  }
};

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
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
  login,
  addUser,
};
