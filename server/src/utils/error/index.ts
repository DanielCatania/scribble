import { FastifyReply } from "fastify";

export default class AppError {
  message: string;
  status: number;
  error?: any;

  constructor(_status: number, _message: string, _error?: any) {
    this.message = _message;
    this.status = _status;
    this.error = _error;
  }

  reply(reply: FastifyReply) {
    return reply.status(this.status).send({ message: this.message });
  }

  static handleError(errorCaught: AppError | any, reply?: FastifyReply | null) {
    const error =
      errorCaught instanceof AppError
        ? errorCaught
        : new AppError(500, "An unknown error occurred:", errorCaught);

    if (!reply) return error;

    reply
      .status(error.status)
      .send({
        status: error.status,
        message: error.message,
        error: error.error,
      });
  }
}
