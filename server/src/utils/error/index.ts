import { FastifyReply } from "fastify";

export default class AppError {
  message: string;
  status: number;

  constructor(_status: number, _message: string) {
    this.message = _message;
    this.status = _status;
  }

  reply(reply: FastifyReply) {
    return reply.status(this.status).send({ message: this.message });
  }

  static handleError(errorCaught: AppError | any, reply?: FastifyReply | null) {
    const error =
      errorCaught instanceof AppError
        ? errorCaught
        : new AppError(500, `An unknown error occurred: ${errorCaught}`);

    if (!reply) return error;

    reply
      .status(error.status)
      .send({ status: error.status, message: error.message });
  }
}
