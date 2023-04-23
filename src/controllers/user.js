const userService = require('../services/user');

const getAll = async (_req, res, next) => {
  try {
    const allUsers = await userService.getAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userById = await userService.getById(id);
    return res.status(200).json(userById);
  } catch (error) {
    return next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const token = await userService.createUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.headers.authorization);
    return res.status(204).json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
  createUser,
  deleteUser,
};