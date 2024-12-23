import db from "..";
import { INote, INoteBase, INoteContent } from "../../type/note";
import AppError from "../../utils/error";

export default class NoteRepository {
  static model = db.note;

  static async create(note: INoteBase) {
    try {
      return (await NoteRepository.model.create({
        data: { ...note },
      })) as INote;
    } catch (error) {
      throw new AppError(500, "Unable to create note", error);
    }
  }

  static async getById(id: string) {
    try {
      return (await NoteRepository.model.findUnique({
        where: { id },
      })) as INote | null;
    } catch (error) {
      throw new AppError(500, `Unable to find note with id ${id}`, error);
    }
  }

  static async getAllByUserId(userId: string) {
    try {
      return (await NoteRepository.model.findMany({
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

  static async updateById(id: string, content: Partial<INoteContent>) {
    try {
      return (await NoteRepository.model.update({
        where: {
          id,
        },
        data: {
          ...content,
        },
      })) as INote;
    } catch (error) {
      throw new AppError(500, `Unable to update note with id ${id}`, error);
    }
  }

  static async deleteById(id: string) {
    try {
      await NoteRepository.model.delete({
        where: { id },
      });
    } catch (error) {
      throw new AppError(500, `Unable to delete note with id ${id}`, error);
    }
  }
}
