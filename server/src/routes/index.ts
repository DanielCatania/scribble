import { FastifyInstance } from "fastify";
import UserController from "../controller/User";

const routes = (app: FastifyInstance) => {
  app.post("/users", UserController.createUser);
  app.post("/users/login", UserController.getTokensByCredentials);
};

export default routes;
