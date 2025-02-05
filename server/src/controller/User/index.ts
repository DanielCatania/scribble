import { FastifyReply, FastifyRequest } from "fastify";

import { IUserContent, IUserCredentials } from "../../type/user";

import UserService from "../../service/User";
import UserValidationService from "../../service/User/validation";

import AppError from "../../utils/error";
import getTokenFromAuthRequest from "../../utils/request/getTokenFromAuthRequest";
import { AuthRequest } from "../../type/request";

export default class UserController {
  static async changePasswordByCredentials(
    request: FastifyRequest<{
      Body: { credentials: IUserCredentials; newPassword: string };
    }>,
    reply: FastifyReply
  ) {
    try {
      const credentials = UserValidationService.getTheValidatedUserCredentials(
        request.body.credentials
      );

      const { newPassword } = request.body;
      UserValidationService.validatePassword(newPassword);

      await UserService.updatePasswordByCredentials(credentials, newPassword);

      reply.status(200).send({ message: "Password Changed Successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async getUserIdentifyByAccessToken(
    request: AuthRequest,
    reply: FastifyReply
  ) {
    try {
      const accessToken = getTokenFromAuthRequest(request);

      const userIdentify = await UserService.getUserIdentifyByAccessToken(
        accessToken
      );

      reply.status(200).send({ ...userIdentify });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async getTokensByRefreshToken(
    request: FastifyRequest<{ Headers: { authorization: string } }>,
    reply: FastifyReply
  ) {
    try {
      const refreshToken = getTokenFromAuthRequest(request);

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
      const credentials = UserValidationService.getTheValidatedUserCredentials(
        request.body
      );

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
      const content = UserValidationService.getTheValidatedContent(
        request.body.content
      );

      const userTokens = await UserService.createUser(content);

      reply.status(201).send({ tokens: userTokens });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }
}
