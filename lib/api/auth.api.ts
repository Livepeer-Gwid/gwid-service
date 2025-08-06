import { api } from "./config.api";
import { SigninSchemaType } from "../schema/signin.schema";
import { SignupSchemaType } from "../schema/signup.schema";
import { AuthResponse } from "../types/auth.type";

export const login = async (data: SigninSchemaType) =>
  await api.post<AuthResponse>("/auth/login", data);

export const signup = async (data: SignupSchemaType) =>
  await api.post<AuthResponse>("/auth/signup", data);
