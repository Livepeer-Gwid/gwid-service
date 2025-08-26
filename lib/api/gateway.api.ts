import { StackSchemType } from "../schema/select-stack.schema";
import { SpecifyDetailsSchemaType } from "../schema/specify-details.schema";
import {
  CreateGatewayResponse,
  GetGatewayResponse,
} from "../types/gateway.type";
import { api } from "./config.api";

export const getUserGateways = async (page: number, limit: number = 10) =>
  await api.get<GetGatewayResponse>(
    `/user/gateway?page=${page}&limit=${limit}`
  );

export const createAWSGateway = async (payload: {
  name: string;
  stack: StackSchemType;
  details: SpecifyDetailsSchemaType;
}) => {
  const data = {
    gateway_name: payload.name,
    rpc_url: payload.details.rpcUrl,
    password: payload.details.password,
    transcoding_profile: payload.details.transcodingProfile,
    ec2_instance_type_id: payload.details.ec2_instance_type_id,
    gateway_type: payload.stack.stackType,
    region: payload.stack.region,
    credentials_id: payload.stack.credentials_id,
  };

  return await api.post<CreateGatewayResponse>("/gateway/aws", data);
};
