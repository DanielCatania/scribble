import { IUserTokens } from "../../type/user";
import AppError from "../../utils/error";
import jwt from "jsonwebtoken";
import { z } from "zod";

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

  static verifyRefreshToken(refreshToken: string) {
    try {
      const { REFRESH_TOKEN_KEY } = this.getKeys();

      const payload = jwt.verify(refreshToken, REFRESH_TOKEN_KEY);

      if (!payload || typeof payload === "string" || !payload.id) {
        throw new AppError(401, "Invalid token payload");
      }

      return payload.id;
    } catch (error) {
      throw AppError.handleError(new AppError(401, "Invalid Refresh Token"));
    }
  }
}
