import AppError from "../error";
import { AuthRequest } from "../../type/request";

export default function getTokenFromAuthRequest(request: AuthRequest) {
  const authorization = request.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new AppError(401, "Authorization header missing");
  }
  const token = authorization.split(" ")[1];

  return token;
}
