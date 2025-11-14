import { AccountInfoSchemaType } from "../schema/settings.schema";
import { GetUserProfileResponse } from "../types/user.type";
import { api } from "./config.api";

export const getUserProfile = async () =>
  await api.get<GetUserProfileResponse>("/user/profile");

export const updateUserProfile = async (data: Partial<AccountInfoSchemaType>) =>
  await api.patch("/user/profile", data);
