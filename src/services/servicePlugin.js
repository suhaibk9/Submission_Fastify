const SubmissionService = require('./submisionService');
const fastifyPlugin = require('fastify-plugin');
const servicePlugin = async (fastify, options) => {
  fastify.decorate(
    'submissionService',
    new SubmissionService(fastify.submissionRepository)
  );
};
module.exports = fastifyPlugin(servicePlugin);
