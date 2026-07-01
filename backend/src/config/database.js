/*const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

pool.on('connect', () => {
    console.log('🟢 PostgreSQL connected');
});

pool.on('error', (error) => {
    console.error('🔴 PostgreSQL error:', error.message);
});

module.exports = pool;*/

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false
});

pool.on('connect', () => {
  console.log('🟢 PostgreSQL connected');
});

pool.on('error', (err) => {
  console.error('🔴 PostgreSQL Error:', err.message);
});

module.exports = pool;
