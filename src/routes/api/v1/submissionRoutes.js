const { validate } = require('../../../validators/createSubmissionValidator');
const {
  createSubmissionZodSchema,
} = require('../../../dtos/CreateSubmissionDto');
const {
  createSubmission,
} = require('../../../controllers/submissionController');
async function submissionRoutes(fastify, options) {
  fastify.post(
    '/',
    { prehandler: validate(createSubmissionZodSchema), },
    createSubmission
  );
}
module.exports = submissionRoutes;

/**

 */
