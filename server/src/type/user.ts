import { z } from "zod";

export interface IUserContent {
  name: string;
  email: string;
  password: string;
}

export interface IUser extends IUserContent {
  id: string;
  salt: string;
}

export interface IUserTokens {
  accessToken: string;
  refreshToken: string;
}

export const userContentSchema = z.object({
  name: z.string().min(3, { message: "The name must have at least 3 letters" }),
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
});
