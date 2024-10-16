const TestService=require('./testService');
const fastifyPlugin = require('fastify-plugin');
const servicePlugin = async (fastify, options) => {
  fastify.decorate('testService', new TestService());
};
module.exports = fastifyPlugin(servicePlugin);
