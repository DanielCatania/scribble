import { FastifyInstance } from "fastify";
import UserController from "../controller/User";

const routes = (app: FastifyInstance) => {
  app.post("/users", UserController.createUser);
  app.post("/users/login", UserController.getTokensByCredentials);
  app.post("/users/refresh", UserController.getTokensByRefreshToken);
  app.post("/users/identify", UserController.getUserIdentifyByAccessToken);
  app.put("/users/password", UserController.changePasswordByCredentials);
};

export default routes;
