const express = require('express');
const { userRoutes } = require('./routes/index');
const {
  validateLogin,
  errorHandler,
} = require('./middlewares/index');
const { user } = require('./controllers');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(
  '/login',
  validateLogin,
  user.login,
);

app.use('/user', userRoutes);
// ...

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
