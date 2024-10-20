const fastifyPlugin = require('fastify-plugin');
const app = async (fastify, options) => {
  fastify.register(require('@fastify/cors'));
  fastify.register(require('./repositories/repositoryPlugin'));
  fastify.register(require('./services/servicePlugin'));
  fastify.register(require('./routes/apiRoutes'), { prefix: '/api' });
};
module.exports = fastifyPlugin(app);
