import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { IUserContent, IUserCredentials } from "../../type/user";

const userCredentialsValidate = {
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[\p{L}\d!@#$%^&*(),.?":{}|<>]{8,}$/u,
      {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one special character, and one number.",
      }
    ),
};

export const userCredentialsSchema = z.object(userCredentialsValidate);

export const userContentSchema = z.object({
  name: z.string().min(3, { message: "The name must have at least 3 letters" }),
  ...userCredentialsValidate,
});

export const userContentValidation = (
  req: FastifyRequest<{ Body: { content: IUserContent } }>,
  reply: FastifyReply
) => {
  const content = req.body.content;
  try {
    userContentSchema.parse(content);
    return content;
  } catch (error) {
    reply.status(400).send({ status: "400: Bad Request", error });
    return false;
  }
};

export const userCredentialsValidation = (
  req: FastifyRequest<{ Body: IUserCredentials }>,
  reply: FastifyReply
) => {
  const credentials = req.body;

  try {
    userCredentialsSchema.parse(credentials);
    return credentials;
  } catch (error) {
    reply.status(400).send({ status: "400: Bad Request", error });
    return false;
  }
};
