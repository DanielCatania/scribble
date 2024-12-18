import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { IUserContent, IUserCredentials } from "../../type/user";
import AppError from "../../utils/error";

export default class UserValidationService {
  private static defaultError = new AppError(
    400,
    "The provided structure is not valid"
  );

  private static standardValidationsForUserCredentials = {
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

  private static userCredentialsSchema = z.object(
    this.standardValidationsForUserCredentials
  );
  private static userContentSchema = z.object({
    name: z
      .string()
      .min(3, { message: "The name must have at least 3 letters" }),
    ...this.standardValidationsForUserCredentials,
  });

  static getTheValidatedContent(
    req: FastifyRequest<{ Body: { content: IUserContent } }>
  ) {
    const content = req.body.content;
    try {
      this.userContentSchema.parse(content);
      return content;
    } catch (error) {
      throw new AppError(
        this.defaultError.status,
        this.defaultError.message,
        error
      );
    }
  }

  static getTheValidatedUserCredentials(
    req: FastifyRequest<{ Body: IUserCredentials }>
  ) {
    try {
      const credentials = req.body;
      this.userCredentialsSchema.parse(credentials);
      return credentials;
    } catch (error) {
      throw new AppError(
        this.defaultError.status,
        this.defaultError.message,
        error
      );
    }
  }
}
