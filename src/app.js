const express = require('express');

const {
  UserRoutes,
  CategoryRoutes,
  BlogPostRoutes,
} = require('./routes');

const {
  validateLogin,
  errorHandler,
} = require('./middlewares');

const {
  User,
} = require('./controllers');

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
  UserRoutes,
);

app.use(
  '/categories',
  CategoryRoutes,
);

app.use(
  '/post',
  BlogPostRoutes,
);

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
