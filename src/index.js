const connectToDB = require('./config/dbConfig');
const { PORT } = require('./config/serverConfig');
const fastify = require('fastify')({
  logger: true,
});
fastify.register(require('./app'));
fastify.listen({ port: PORT },async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  await connectToDB();
  console.log(`Server listening at ${fastify.server.address().port}`);
});
