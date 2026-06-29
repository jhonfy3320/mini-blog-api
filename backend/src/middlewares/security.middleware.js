const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const security = {
  helmet: helmet(),
  cors: cors(),
  rate: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos en milisegundos
    max: 100                  // Límite de 100 peticiones por IP
  })
};

module.exports = security;