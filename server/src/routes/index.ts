import { FastifyInstance } from "fastify";
import UserView from "../view/User";

const routes = (app: FastifyInstance) => {
  app.get("/users/:id", UserView.requestForGetUserById);
  app.post("/users", UserView.requestForCreateUser);
};

export default routes;
