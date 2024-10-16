const fastify = require('fastify')({
  logger: true,
});
fastify.register(require('./app'));
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${fastify.server.address().port}`);
});

