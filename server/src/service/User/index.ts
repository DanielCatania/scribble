import db from "../../repository";
import { IUserContent, IUserCredentials, IUserTokens } from "../../type/user";
import { generateSalt, createHash, generateUUID } from "../../utils/crypto";
import jwt from "jsonwebtoken";
import { z } from "zod";
import AppError from "../../utils/error";

export default class UserService {
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

      const tokens = this.generateUserTokens(selectedUser.id);

      return tokens;
    } catch (error) {
      return AppError.handleError(error);
    }
  }

  private static generateUserTokens(id: string) {
    try {
      z.string().uuid().parse(id);

      const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
      const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

      if (!REFRESH_TOKEN_KEY || !ACCESS_TOKEN_KEY)
        throw new AppError(500, "Absence of keys for signing tokens");

      const refreshToken = jwt.sign({ id }, REFRESH_TOKEN_KEY, {
        expiresIn: "7d",
      });
      const accessToken = jwt.sign({ id }, ACCESS_TOKEN_KEY, {
        expiresIn: "60s",
      });

      return { accessToken, refreshToken } as IUserTokens;
    } catch (error) {
      return AppError.handleError(error);
    }
  }

  static async createUser(userContent: IUserContent) {
    try {
      const id = generateUUID();
      const salt = generateSalt();
      const password = userContent.password;
      const hashedPassword = createHash(password, salt);

      const tokens = UserService.generateUserTokens(id);

      if (tokens instanceof AppError) throw tokens;

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
      return AppError.handleError(error);
    }
  }
}
