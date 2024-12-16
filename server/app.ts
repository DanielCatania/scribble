import fastify from "fastify";
import "dotenv/config";
import routes from "./src/routes";

const app = fastify({ logger: true });

const PORT = Number(process.env.PORT) || 3000;

app.register(routes);

const start = async () => {
  try {
    await app.listen({ port: PORT });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
