const fastifyPlugin = require('fastify-plugin');
const { pingRequest } = require('../../../../controllers/testController');
async function testRoute(fastify, options) {
  console.log("Reached /ping");
  fastify.get('/ping', pingRequest);
}
module.exports = (testRoute);
