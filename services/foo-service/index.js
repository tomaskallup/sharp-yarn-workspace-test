const { imageStorage } = require('@sharp-yarn-test/image-storage');

const fastify = require("fastify")({
  logger: true,
});

// Declare a route
fastify.get("/", async (_request, reply) => {
  await imageStorage.init();

  reply.send({ hello: "world" });
});

const port = process.env.PORT || 3000;

// Run the server!
fastify.listen({ port }, (err, address) => {
  if (err) throw err;

  console.log(`Server is now listening on ${address}`);
});

