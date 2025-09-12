import { GetUserProfileResponse } from "../types/user.type";
import { api } from "./config.api";

export const getUserProfile = async () =>
  await api.get<GetUserProfileResponse>("/user/profile");
