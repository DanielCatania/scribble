import { FastifyInstance } from "fastify";
import UserController from "../controller/User";
import NoteController from "../controller/Note";

const routes = (app: FastifyInstance) => {
  app.post("/users", UserController.createUser);
  app.post("/users/login", UserController.getTokensByCredentials);
  app.post("/users/refresh", UserController.getTokensByRefreshToken);
  app.post("/users/identify", UserController.getUserIdentifyByAccessToken);
  app.put("/users/password", UserController.changePasswordByCredentials);
  app.post("/users/note", NoteController.getAllNotes);

  app.post("/note", NoteController.createNote);
  app.post("/note/:id", NoteController.getNote);
  app.put("/note/:id", NoteController.updateNote);
  app.delete("/note/:id", NoteController.deleteNote);
};

export default routes;
