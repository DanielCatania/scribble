import { FastifyReply, FastifyRequest } from "fastify";

import { IUserContent, IUserCredentials } from "../../type/user";

import UserService from "../../service/User";
import UserValidationService from "../../service/User/validation";

import AppError from "../../utils/error";

export default class UserController {
  static async getUserIdentifyByAccessToken(
    request: FastifyRequest<{ Body: { accessToken: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { accessToken } = request.body;

      const userIdentify = await UserService.getUserIdentifyByAccessToken(
        accessToken
      );

      reply.status(200).send({ ...userIdentify });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

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
    try {
      const credentials =
        UserValidationService.getTheValidatedUserCredentials(request);

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
    try {
      const content = UserValidationService.getTheValidatedContent(request);

      const userTokens = await UserService.createUser(content);

      reply.status(201).send({ tokens: userTokens });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }
}
