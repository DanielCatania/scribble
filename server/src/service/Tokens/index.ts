import { IUserTokens } from "../../type/user";
import AppError from "../../utils/error";
import jwt from "jsonwebtoken";
import { z } from "zod";
import TextFormatter from "../../utils/TextFormatter";

export default class TokenService {
  private static getKeys() {
    const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
    const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

    if (!REFRESH_TOKEN_KEY || !ACCESS_TOKEN_KEY)
      throw new AppError(500, "Absence of keys for signing tokens");

    return { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY };
  }

  static generateUserTokens(id: string) {
    try {
      z.string().uuid().parse(id);

      const { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY } = this.getKeys();

      const refreshToken = jwt.sign({ id }, REFRESH_TOKEN_KEY, {
        expiresIn: "7d",
      });
      const accessToken = jwt.sign({ id }, ACCESS_TOKEN_KEY, {
        expiresIn: "60s",
      });

      return { accessToken, refreshToken } as IUserTokens;
    } catch (error) {
      throw AppError.handleError(error);
    }
  }

  private static verifyToken(token: string, type: "refresh" | "access") {
    try {
      const KEY =
        type === "access"
          ? this.getKeys().ACCESS_TOKEN_KEY
          : this.getKeys().REFRESH_TOKEN_KEY;

      const payload = jwt.verify(token, KEY);

      if (!payload || typeof payload === "string" || !payload.id) {
        throw new AppError(401, "Invalid token payload");
      }

      return payload.id as string;
    } catch (error) {
      throw AppError.handleError(
        new AppError(
          401,
          `Invalid ${TextFormatter.capitalize(type)} Token`,
          error
        )
      );
    }
  }

  static getIdByRefreshToken(refreshToken: string) {
    return this.verifyToken(refreshToken, "refresh");
  }

  static getIdByAccessToken(accessToken: string) {
    return this.verifyToken(accessToken, "access");
  }
}
