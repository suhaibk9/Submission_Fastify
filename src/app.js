const fastifyPlugin = require('fastify-plugin');
const app = async (fastify, options) => {
  await fastify.register(require('@fastify/cors'));
  await fastify.register(require('./repositories/repositoryPlugin'));
  await fastify.register(require('./services/servicePlugin'));
  await fastify.register(require('./routes/apiRoutes'), { prefix: '/api' });
};
module.exports = fastifyPlugin(app);
