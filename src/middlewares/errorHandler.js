const errorHandler = (error, _req, res, _next) => {
  if (error.status) return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: 'deu ruim' });
};

module.exports = errorHandler;