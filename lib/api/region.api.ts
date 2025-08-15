import { GetRegionResponse } from "../types/region.type";
import { api } from "./config.api";

export const getAWSRegions = async () =>
  await api.get<GetRegionResponse>("/region/aws");
