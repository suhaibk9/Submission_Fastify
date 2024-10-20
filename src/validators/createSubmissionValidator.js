function validate(schema) {
  return async function (req, reply) {
    try {
      schema.parse({ ...req.body });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        message: 'Invalid request params received',
        data: {},
        error: error.errors,
      });
    }
  };
}

module.exports = { validate };
