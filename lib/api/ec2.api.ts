import { GetEC2InstancesResponse } from "../types/ec2.type";
import { api } from "./config.api";

export const getEC2Instances = async (
  order: string = "asc",
  sort: string = "ram"
) => await api.get<GetEC2InstancesResponse>(`/ec2?order=${order}&sort=${sort}`);
