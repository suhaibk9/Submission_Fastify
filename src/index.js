const connectToDB = require('./config/dbConfig');
// const redisConnection = require('./config/redisConfig');
const { PORT } = require('./config/serverConfig');

const EvaluationWorker=require('./workers/EvaluationWorker')

// const EvaluationWorker = require('./workers/EvaluationWorker');
const fastify = require('fastify')({
  logger: true,
});
fastify.register(require('./app'));
fastify.listen({ port: PORT }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  await connectToDB();
  await fastify.ready();
  // await EvaluationWorker('evaluationQueue');
  await EvaluationWorker('evaluationQueue', fastify.submissionService);
  console.log(`Server listening at ${fastify.server.address().port}`);
});
