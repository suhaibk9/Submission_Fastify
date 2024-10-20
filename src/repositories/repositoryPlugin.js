const SubmissionRepository = require('./submissionRepositories');
const fastifyPlugin = require('fastify-plugin');
const repositoryPlugin = async (fastify, options) => {
  fastify.decorate('submissionRepository', new SubmissionRepository());
};
module.exports = fastifyPlugin(repositoryPlugin);
