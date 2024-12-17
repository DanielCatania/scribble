import db from "../../repository";
import { IUserContent, IUserCredentials } from "../../type/user";
import { generateSalt, createHash, generateUUID } from "../../utils/crypto";
import TokenService from "../Tokens";
import AppError from "../../utils/error";

export default class UserService {
  static async getUserTokensByRefreshToken(refreshToken: string) {
    try {
      const id = TokenService.verifyRefreshToken(refreshToken);

      const tokens = TokenService.generateUserTokens(id);

      return tokens;
    } catch (error) {
      throw AppError.handleError(error);
    }
  }

  static async getUserTokensByCredentials({
    email,
    password,
  }: IUserCredentials) {
    try {
      const selectedUser = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (!selectedUser)
        throw new AppError(404, `Not Found User with email: ${email}`);

      const hashedPassword = createHash(password, selectedUser.salt);

      if (hashedPassword !== selectedUser.password)
        throw new AppError(401, "Wrong password");

      const tokens = TokenService.generateUserTokens(selectedUser.id);

      return tokens;
    } catch (error) {
      throw AppError.handleError(error);
    }
  }

  static async createUser(userContent: IUserContent) {
    try {
      const id = generateUUID();
      const salt = generateSalt();
      const password = userContent.password;
      const hashedPassword = createHash(password, salt);

      const tokens = TokenService.generateUserTokens(id);

      await db.user.create({
        data: {
          ...userContent,
          id,
          salt,
          password: hashedPassword,
        },
      });

      return tokens;
    } catch (error) {
      throw AppError.handleError(error);
    }
  }
}
