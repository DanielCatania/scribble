import db from "../../repository";
import { IUser, IUserContent } from "../../type/user";
import { generateSalt, createHash } from "../../utils/crypto";

export default class UserController {
  static async getUserById(id: number) {
    try {
      const selectedUser: IUser | null = await db.user.findUnique({
        where: { id },
      });

      return selectedUser;
    } catch (error) {
      return String(error);
    }
  }

  static async createUser(userContent: IUserContent) {
    try {
      const salt = generateSalt();
      const password = userContent.password + salt;
      const hashedPassword = createHash(password, salt);

      const newUser: IUser = await db.user.create({
        data: {
          ...userContent,
          salt,
          password: hashedPassword,
        },
      });

      return newUser;
    } catch (error) {
      return String(error);
    }
  }
}
