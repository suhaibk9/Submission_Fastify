const Redis = require('ioredis');
const serverConfig = require('./serverConfig');

const { REDIS_HOST, REDIS_PORT } = serverConfig;

const redisConfig = {
  port: Number(REDIS_PORT),
  host: REDIS_HOST,
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisConfig);
module.exports = redisConnection;
