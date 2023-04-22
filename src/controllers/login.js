const loginService = require('../services/login');

const login = async (req, res, next) => {
  try {
    const token = await loginService.login(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  login,
};