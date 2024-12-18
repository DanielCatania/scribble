import { FastifyReply, FastifyRequest } from "fastify";
import UserService from "../../service/User";
import { IUserContent, IUserCredentials } from "../../type/user";
import {
  userContentValidation,
  userCredentialsValidation,
} from "../../service/User/validation";
import AppError from "../../utils/error";

export default class UserController {
  static async getTokensByRefreshToken(
    request: FastifyRequest<{ Body: { refreshToken: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { refreshToken } = request.body;

      const tokens = await UserService.getUserTokensByRefreshToken(
        refreshToken
      );

      reply.status(200).send({ tokens });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }
  static async getTokensByCredentials(
    request: FastifyRequest<{ Body: IUserCredentials }>,
    reply: FastifyReply
  ) {
    const credentials = userCredentialsValidation(request, reply);

    if (!credentials) return;

    try {
      const tokens = await UserService.getUserTokensByCredentials(credentials);

      reply.status(200).send({ tokens });
    } catch (error) {
      AppError.handleError(error, reply);
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

      reply.status(201).send({ tokens: userTokens });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }
}
