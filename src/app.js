const express = require('express');
const { userRoutes } = require('./routes/index');
const middlewares = require('./middlewares/index');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', userRoutes);
// ...

app.use(middlewares.errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
