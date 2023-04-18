const express = require('express');
const { userRoutes } = require('./routes/index');
const {
  validateLogin,
  errorHandler,
} = require('./middlewares/index');
const { User } = require('./controllers');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(
  '/login',
  validateLogin,
  User.login,
);

app.use(
  '/user',
  userRoutes,
);
// ...

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
