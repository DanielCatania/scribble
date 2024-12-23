import { FastifyInstance } from "fastify";
import UserController from "../controller/User";
import NoteController from "../controller/Note";

const routes = (app: FastifyInstance) => {
  app.post("/users", UserController.createUser);
  app.post("/users/login", UserController.getTokensByCredentials);
  app.post("/users/refresh", UserController.getTokensByRefreshToken);
  app.post("/users/identify", UserController.getUserIdentifyByAccessToken);
  app.put("/users/password", UserController.changePasswordByCredentials);

  app.post("/note", NoteController.createNote);
  app.post("/note/:id", NoteController.getNote);
  app.put("/note/:id", NoteController.updateNote);
};

export default routes;
