const fastifyPlugin = require('fastify-plugin');
/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
const app = async (fastify, options) => {
  fastify.register(require('@fastify/cors'));
  fastify.register(require('./services/servicePlugin'));
  //Register Test Routes
  console.log("Reached /api");
  fastify.register(require('./routes/apiRoutes'), { prefix: '/api' });
  
};
module.exports = fastifyPlugin(app);
