require('dotenv').config();
//const http = require('http');
const app = require('./src/app');


//const healthRoutes = require('./src/routes/health.routes');
//app.use(express.json());
//app.use('/health', healthRoutes);
console.log('Starting server...');
const PORT = process.env.PORT || 3000;
//const server = http.createServer(app);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on ${PORT}`);
});

/**
 * server.on('error', (err) => {
  console.error('SERVER ERROR:', err);
});
 */