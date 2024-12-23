import NoteRepository from "../../repository/Note";
import { INote } from "../../type/note";
import { generateUUID } from "../../utils/crypto";
import AppError from "../../utils/error";

export default class NoteService {
  static async verifyNoteOwner(noteToVerify: string | INote, userId: string) {
    const note =
      typeof noteToVerify === "string"
        ? await NoteService.getNoteById(noteToVerify)
        : noteToVerify;

    if (note.userId !== userId) {
      throw new AppError(
        401,
        "The requested note does not belong to this user"
      );
    }

    return note;
  }

  static async updateNoteContent(id: string, content: string) {
    return await NoteRepository.updateContentById(id, content);
  }

  static async createNote(content: string, userId: string) {
    const id = generateUUID();

    const newNote = await NoteRepository.create({ id, content, userId });
    return newNote;
  }

  static async getNoteById(id: string) {
    const note = await NoteRepository.getById(id);

    if (!note) throw new AppError(404, `Note not found with id ${id}`);

    return note;
  }
}
