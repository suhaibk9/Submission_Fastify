async function v1Routes(fastify, options) {
  fastify.register(require('./submissionRoutes'), { prefix: '/submissions' });
}
module.exports = v1Routes;
