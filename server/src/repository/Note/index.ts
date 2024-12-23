import db from "..";
import { INote, INoteBase } from "../../type/note";
import AppError from "../../utils/error";

export default class NoteRepository {
  static async create(note: INoteBase) {
    try {
      return (await db.note.create({
        data: { ...note },
      })) as INote;
    } catch (error) {
      throw new AppError(500, "Unable to create note", error);
    }
  }

  static async getById(id: string) {
    try {
      return (await db.note.findUnique({
        where: { id },
      })) as INote | null;
    } catch (error) {
      throw new AppError(500, `Unable to find note with id ${id}`, error);
    }
  }

  static async getAllByUserId(userId: string) {
    try {
      return (await db.note.findMany({
        where: { userId },
      })) as INote[];
    } catch (error) {
      throw new AppError(
        500,
        `Unable to find notes with userId ${userId}`,
        error
      );
    }
  }

  static async updateContentById(id: string, content: string) {
    try {
      return (await db.note.update({
        where: {
          id,
        },
        data: {
          content,
        },
      })) as INote;
    } catch (error) {
      throw new AppError(500, `Unable to update note with id ${id}`, error);
    }
  }

  static async deleteById(id: string) {
    try {
      await db.note.delete({
        where: { id },
      });

      return true as true;
    } catch (error) {
      throw new AppError(500, `Unable to delete note with id ${id}`, error);
    }
  }
}
