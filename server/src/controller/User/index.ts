import { FastifyReply, FastifyRequest } from "fastify";
import UserService from "../../service/User";
import { IUserContent, IUserCredentials } from "../../type/user";
import {
  userContentValidation,
  userCredentialsValidation,
} from "../../validation/User";

export default class UserController {
  static async getTokensByCredentials(
    request: FastifyRequest<{ Body: IUserCredentials }>,
    reply: FastifyReply
  ) {
    const credentials = userCredentialsValidation(request, reply);

    if (!credentials) return;

    try {
      const tokens = await UserService.getUserTokensByCredentials(credentials);

      if (tokens instanceof Error) throw tokens;

      reply.status(201).send({ tokens });
    } catch (error) {
      if (error instanceof Error)
        reply.status(500).send({
          status: "500: Internal Server Error",
          error: error.message,
        });
      else
        reply.status(500).send({ status: "500: Internal Server Error", error });
    }
  }

  static async createUser(
    request: FastifyRequest<{ Body: { content: IUserContent } }>,
    reply: FastifyReply
  ) {
    const content = userContentValidation(request, reply);

    if (!content) return;

    try {
      const userTokens = await UserService.createUser(content);

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
