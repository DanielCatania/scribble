import { FastifyReply, FastifyRequest } from "fastify";
import UserController from "../../controller/User";
import { IUserContent, userContentSchema } from "../../type/user";

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

      try {
        userContentSchema.parse(content);
      } catch (error) {
        return reply.status(400).send({ status: "400: Bad Request", error });
      }

      const newUser = await UserController.createUser(content);

      if (typeof newUser === "string") throw new Error(newUser);

      reply.status(201).send({ user: newUser });
    } catch (error) {
      if (error instanceof Error)
        reply
          .status(500)
          .send({ status: "500: Internal Server Error", error: error.message });
      else
        reply.status(500).send({ status: "500: Internal Server Error", error });
    }
  }
}
