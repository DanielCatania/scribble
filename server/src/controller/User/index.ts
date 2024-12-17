import db from "../../repository";
import { IUser, IUserContent } from "../../type/user";
import { generateSalt, createHash, generateUUID } from "../../utils/crypto";

export default class UserController {
  static async getUserById(id: string) {
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
      const id = generateUUID();
      const salt = generateSalt();
      const password = userContent.password + salt;
      const hashedPassword = createHash(password, salt);

      const newUser: IUser = await db.user.create({
        data: {
          ...userContent,
          id,
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
