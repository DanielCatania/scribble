import db from "..";
import { IUser, IUserContent } from "../../type/user";
import AppError from "../../utils/error";

export default class UserRepository {
  static model = db.user;

  static async create(user: IUser) {
    try {
      return (await UserRepository.model.create({
        data: {
          ...user,
        },
      })) as IUser;
    } catch (error) {
      throw new AppError(500, "Unable to create user", error);
    }
  }

  static async getById(id: string) {
    try {
      return (await UserRepository.model.findUnique({
        where: { id },
      })) as IUser | null;
    } catch (error) {
      throw new AppError(500, `Unable to find user with id ${id}`, error);
    }
  }

  static async getByEmail(email: string) {
    try {
      return (await UserRepository.model.findUnique({
        where: { email },
      })) as IUser | null;
    } catch (error) {
      throw new AppError(500, `Unable to find user with email ${email}`, error);
    }
  }

  static async updateById(id: string, newContent: Partial<IUserContent>) {
    try {
      return (await UserRepository.model.update({
        where: {
          id,
        },
        data: {
          ...newContent,
        },
      })) as IUser;
    } catch (error) {
      throw new AppError(500, `Unable to update note with id ${id}`, error);
    }
  }

  static async deleteById(id: string) {
    try {
      await UserRepository.model.delete({
        where: { id },
      });
    } catch (error) {
      throw new AppError(500, `Unable to delete user with id ${id}`, error);
    }
  }
}
