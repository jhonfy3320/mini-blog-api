const express = require('express');

const healthRoutes = require('./routes/health.routes');
const authorsRoutes = require('./routes/authors.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to MiniBlog API'
  });
});

app.use('/health', healthRoutes);
app.use('/authors', authorsRoutes);
app.use(errorHandler);

module.exports = app;