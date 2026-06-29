const express = require('express');

const healthRoutes = require('./routes/health.routes');
const authorsRoutes = require('./routes/authors.routes');
const errorHandler = require('./middlewares/error.middleware');
const postsRoutes = require('./routes/posts.routes');
const swagger= require('./config/swagger');
const commentsRoutes = require('./routes/comments.routes');
const security = require('./middlewares/security.middleware');
const logger = require('./middlewares/logger.middleware');
const app = express();

app.use(express.json());
app.use(logger);
app.use(security.helmet);
app.use(security.cors);
app.use(security.rate);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to MiniBlog API'
  });
});

app.use('/health', healthRoutes);
app.use('/authors', authorsRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

swagger(app);
app.use(errorHandler);

module.exports = app;