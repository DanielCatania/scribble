import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { IUserContent, IUserCredentials } from "../../type/user";
import AppError from "../../utils/error";

export default class UserValidationService {
  private static defaultError = new AppError(
    400,
    "The provided structure is not valid"
  );

  private static validationsForUserCredentials = {
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
    this.validationsForUserCredentials
  );

  private static userContentSchema = z.object({
    name: z
      .string()
      .min(3, { message: "The name must have at least 3 letters" }),
    ...this.validationsForUserCredentials,
  });

  static validatePassword(password: string) {
    this.validationsForUserCredentials.password.parse(password);
  }

  static validateEmail(email: string) {
    this.validationsForUserCredentials.email.parse(email);
  }

  static getTheValidatedContent(content: IUserContent) {
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

  static getTheValidatedUserCredentials(credentials: IUserCredentials) {
    try {
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
