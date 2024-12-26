import { FastifyReply, FastifyRequest } from "fastify";
import { INoteContent } from "../../type/note";
import AppError from "../../utils/error";
import TokenService from "../../service/Tokens";
import NoteService from "../../service/Note";

export default class NoteController {
  static async createNote(
    request: FastifyRequest<{
      Body: { note: INoteContent; accessToken: string };
    }>,
    reply: FastifyReply
  ) {
    try {
      const userId = TokenService.getIdByAccessToken(request.body.accessToken);
      const { content } = request.body.note;

      const newNote = await NoteService.createNote(content, userId);

      reply
        .status(201)
        .send({ note: newNote, message: "Note created successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async getNote(
    request: FastifyRequest<{
      Body: { accessToken: string };
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) {
    try {
      const userId = TokenService.getIdByAccessToken(request.body.accessToken);
      const note = await NoteService.getNoteById(request.params.id);

      await NoteService.verifyNoteOwner(note, userId);

      reply.status(200).send({ note, message: "Note sent successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async updateNote(
    request: FastifyRequest<{
      Body: { note: INoteContent; accessToken: string };
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) {
    try {
      const userId = TokenService.getIdByAccessToken(request.body.accessToken);

      await NoteService.verifyNoteOwner(request.params.id, userId);

      const updateNote = await NoteService.updateNoteContent(
        request.params.id,
        request.body.note
      );

      reply
        .status(200)
        .send({ note: updateNote, message: "Note updated successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async deleteNote(
    request: FastifyRequest<{
      Body: { accessToken: string };
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) {
    try {
      const userId = TokenService.getIdByAccessToken(request.body.accessToken);
      const noteId = request.params.id;

      await NoteService.verifyNoteOwner(noteId, userId);

      await NoteService.deleteNoteById(noteId);

      reply.status(200).send({ message: "Note deleted successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }
}
