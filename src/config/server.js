import fastify from "fastify";
import helmet from "fastify-helmet";
import cors from "fastify-cors";

import routes from "../routes/routes.js";

const app = fastify({
  logger: true,
});

app.register(cors, {
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
});

app.register(helmet);
app.register(routes);

export default app;
