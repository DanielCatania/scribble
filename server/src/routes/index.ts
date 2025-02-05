import { FastifyInstance } from "fastify";
import UserController from "../controller/User";
import NoteController from "../controller/Note";

const routes = (app: FastifyInstance) => {
  app.post("/users", UserController.createUser);
  app.post("/users/login", UserController.getTokensByCredentials);
  app.get("/users/refresh", UserController.getTokensByRefreshToken);
  app.get("/users/identify", UserController.getUserIdentifyByAccessToken);
  app.patch("/users/password", UserController.changePasswordByCredentials);
  app.get("/users/note", NoteController.getAllNotes);

  app.post("/note", NoteController.createNote);
  app.get("/note/:id", NoteController.getNote);
  app.put("/note/:id", NoteController.updateNote);
  app.delete("/note/:id", NoteController.deleteNote);
};

export default routes;
