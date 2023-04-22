const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const categoriesRoutes = require('./routes/categoryRoutes');
const BlogPostRoutes = require('./routes/blogPostRoutes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
// ____________________________________

app.use(express.json());

app.use(
  '/login',
  loginRoutes,
);

app.use(
  '/user',
  userRoutes,
);

app.use(
  '/categories',
  categoriesRoutes,
);

app.use(
  '/post',
  BlogPostRoutes,
);

app.use(errorHandler);

module.exports = app;
