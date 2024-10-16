
const fastifyPlugin = require('fastify-plugin');
const testRoute = require('./api/v1/test/testRoutes');
const v1Routes=require('./api/v1/v1Routes')
async function apiPlugin(fastify, options) {
    console.log('Reached /test');
  fastify.register(v1Routes, { prefix: '/v1' });
}
module.exports = (apiPlugin);
