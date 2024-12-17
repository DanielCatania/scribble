import { FastifyInstance } from "fastify";
import UserView from "../view/User";

const routes = (app: FastifyInstance) => {
  app.post("/users", UserView.requestForCreateUser);
  app.post("/users/login", UserView.getTokensByCredentials);
};

export default routes;
