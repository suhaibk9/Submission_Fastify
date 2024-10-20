const { validate } = require('../../../validators/createSubmissionValidator');
const {
  createSubmissionZodSchema,
} = require('../../../dtos/CreateSubmissionDto');
async function submissionRoutes(fastify, options) {
  fastify.post(
    '/',
    {
      prehandler: validate(createSubmissionZodSchema),
    },
    async function (request, reply) {
      return
    }
  );
}
module.exports = submissionRoutes;

/**

 */