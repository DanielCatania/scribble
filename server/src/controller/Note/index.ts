import { FastifyReply, FastifyRequest } from "fastify";
import { INoteContent } from "../../type/note";
import AppError from "../../utils/error";
import TokenService from "../../service/Tokens";
import NoteService from "../../service/Note";
import getTokenFromAuthRequest from "../../utils/request/getTokenFromAuthRequest";
import { AuthRequest } from "../../type/request";

export default class NoteController {
  static async createNote(
    request: AuthRequest<{
      Body: { note: INoteContent };
    }>,
    reply: FastifyReply
  ) {
    try {
      const accessToken = getTokenFromAuthRequest(request);

      const userId = TokenService.getIdByAccessToken(accessToken);
      const noteContent = request.body.note;

      if (!noteContent.content)
        throw new AppError(400, "The content field is required");

      const newNote = await NoteService.createNote(noteContent, userId);

      reply
        .status(201)
        .send({ note: newNote, message: "Note created successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async getNote(
    request: AuthRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) {
    try {
      const accessToken = getTokenFromAuthRequest(request);

      const userId = TokenService.getIdByAccessToken(accessToken);
      const note = await NoteService.getNoteById(request.params.id);

      await NoteService.verifyNoteOwner(note, userId);

      reply.status(200).send({ note, message: "Note sent successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async updateNote(
    request: AuthRequest<{
      Params: { id: string };
      Body: {
        note: Partial<INoteContent>;
      };
    }>,
    reply: FastifyReply
  ) {
    try {
      const accessToken = getTokenFromAuthRequest(request);
      const userId = TokenService.getIdByAccessToken(accessToken);
      const noteId = request.params.id;

      await NoteService.verifyNoteOwner(noteId, userId);

      const updateNote = await NoteService.updateNoteContent(
        noteId,
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
    request: AuthRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply
  ) {
    try {
      const accessToken = getTokenFromAuthRequest(request);
      const userId = TokenService.getIdByAccessToken(accessToken);
      const noteId = request.params.id;

      await NoteService.verifyNoteOwner(noteId, userId);

      await NoteService.deleteNoteById(noteId);

      reply.status(200).send({ message: "Note deleted successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }

  static async getAllNotes(request: AuthRequest, reply: FastifyReply) {
    try {
      const accessToken = getTokenFromAuthRequest(request);

      const userId = TokenService.getIdByAccessToken(accessToken);
      const notes = await NoteService.getAllNotesByUserId(userId);

      if (notes.length === 0) throw new AppError(404, "Notes not found");

      reply.status(200).send({ notes, message: "Note sent successfully" });
    } catch (error) {
      AppError.handleError(error, reply);
    }
  }
}
