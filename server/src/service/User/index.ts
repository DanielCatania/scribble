import {
  IUser,
  IUserContent,
  IUserCredentials,
  IUserIdentity,
} from "../../type/user";
import { generateSalt, createHash, generateUUID } from "../../utils/crypto";
import TokenService from "../Tokens";
import AppError from "../../utils/error";
import UserRepository from "../../repository/User";

export default class UserService {
  private static async getUserByAccessToken(accessToken: string) {
    const id = TokenService.getIdByAccessToken(accessToken);

    const selectedUser: IUser | null = await UserRepository.getById(id);

    if (!selectedUser) throw new AppError(404, "User Not Found");

    return selectedUser;
  }

  static async getUserIdentifyByAccessToken(accessToken: string) {
    const user = await UserService.getUserByAccessToken(accessToken);

    const userIdentify: IUserIdentity = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    return userIdentify;
  }

  static async getUserTokensByRefreshToken(refreshToken: string) {
    const id = TokenService.getIdByRefreshToken(refreshToken);

    const tokens = TokenService.generateUserTokens(id);

    return tokens;
  }

  static async getUserTokensByCredentials(credentials: IUserCredentials) {
    const selectedUser = await UserService.getUserByCredentials(credentials);
    const tokens = TokenService.generateUserTokens(selectedUser.id);

    return tokens;
  }

  static async getUserByCredentials({ email, password }: IUserCredentials) {
    const selectedUser = await UserRepository.getByEmail(email);

    if (!selectedUser)
      throw new AppError(404, `Not Found User with email: ${email}`);

    const hashedPassword = createHash(password, selectedUser.salt);

    if (hashedPassword !== selectedUser.password)
      throw new AppError(401, "Wrong password");

    return selectedUser as IUser;
  }

  static async updatePasswordByCredentials(
    credentials: IUserCredentials,
    newPassword: string
  ) {
    const user = await UserService.getUserByCredentials(credentials);

    const hashedPassword = createHash(newPassword, user.salt);

    if (hashedPassword === user.password)
      throw new AppError(400, "This password has already been used before");

    await UserRepository.updateById(user.id, { password: hashedPassword });
  }

  static async createUser(userContent: IUserContent) {
    const id = generateUUID();
    const salt = generateSalt();
    const password = userContent.password;
    const hashedPassword = createHash(password, salt);

    const tokens = TokenService.generateUserTokens(id);

    await UserRepository.create({
      ...userContent,
      id,
      salt,
      password: hashedPassword,
    });

    return tokens;
  }
}
