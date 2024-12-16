import { FastifyReply, FastifyRequest } from "fastify";
import UserController from "../../controller/User";
import { IUserContent } from "../../type/user";

export default class UserView {
  static async requestForGetUserById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const id = parseInt(request.params.id);

      const userResponse = await UserController.getUserById(id);

      if (!userResponse) throw new Error("404: Not Found User");
      if (typeof userResponse === "string") throw new Error(userResponse);

      reply.status(200).send({ user: userResponse });
    } catch (error) {
      const formatedError = String(error);
      const status = Number(formatedError.match(/\d{3}/)) || 500;

      reply.status(status).send({ message: formatedError, status });
    }
  }

  static async requestForCreateUser(
    request: FastifyRequest<{ Body: { content: IUserContent } }>,
    reply: FastifyReply
  ) {
    try {
      const { content } = request.body;

      const newUser = await UserController.createUser(content);

      if (typeof newUser === "string") throw new Error(newUser);

      reply.status(201).send({ user: newUser });
    } catch (error) {
      reply.status(500).send(error);
    }
  }
}
