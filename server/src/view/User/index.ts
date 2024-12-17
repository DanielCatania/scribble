import { FastifyReply, FastifyRequest } from "fastify";
import UserController from "../../controller/User";
import { IUserContent, userContentSchema } from "../../type/user";

export default class UserView {
  static async requestForCreateUser(
    request: FastifyRequest<{ Body: { content: IUserContent } }>,
    reply: FastifyReply
  ) {
    const { content } = request.body;

    try {
      userContentSchema.parse(content);
    } catch (error) {
      return reply.status(400).send({ status: "400: Bad Request", error });
    }

    try {
      const userTokens = await UserController.createUser(content);

      if (userTokens instanceof Error) throw userTokens;

      reply.status(201).send({ tokens: userTokens });
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
