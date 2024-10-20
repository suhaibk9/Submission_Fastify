const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8080,
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  ATLAS_DB_URL: process.env.ATLAS_DB_URL,
  NODE_ENV: process.env.NODE_ENV || 'development',
};
