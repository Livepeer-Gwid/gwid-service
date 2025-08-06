import { api } from "./config.api";

export const getUserProfile = async () => await api.get("/user/profile");
