import { GetGatewayResponse } from "../types/gateway.type";
import { api } from "./config.api";

export const getUserGateways = async (page: number, limit: number = 10) =>
  await api.get<GetGatewayResponse>(
    `/user/gateway?page=${page}&limit=${limit}`
  );
