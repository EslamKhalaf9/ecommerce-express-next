import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { errors } from "../utils/errors";
import { getUserByEmail } from "./user.service";

type LoginData = {
  email: string;
  password: string;
}

type SessionUser = {
  id: string;
  email: string;
  username: string;
}

export async function login({ email, password }: LoginData): Promise<SessionUser> {
  const existingUser = await getUserByEmail(email);
  
  if (!existingUser || !await bcrypt.compare(password, existingUser.password)) {
    throw new Error(errors.auth.invalidCredentials.code);
  }

  return {
    id: existingUser.id,
    email: existingUser.email,
    username: existingUser.username,
  };
}