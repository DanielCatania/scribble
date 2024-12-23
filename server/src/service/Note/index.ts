import NoteRepository from "../../repository/Note";
import { generateUUID } from "../../utils/crypto";
import AppError from "../../utils/error";

export default class NoteService {
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
