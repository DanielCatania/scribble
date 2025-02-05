import { FastifyRequest } from "fastify";

export type AuthRequest<T = {}, H = {}> = FastifyRequest<
  T & { Headers: H & { authorization: string } }
>;
