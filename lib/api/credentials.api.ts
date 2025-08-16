import { AwsCredentialsSchemaType } from "../schema/aws-credentials.schema";
import { GetAWSCredentialsResponse } from "../types/aws-credentials.type";
import { api } from "./config.api";

export const addAWSCredentials = async (data: AwsCredentialsSchemaType) =>
  await api.post("/aws-credentials", data);

export const getAWSCredentials = async () =>
  await api.get<GetAWSCredentialsResponse>("/aws-credentials");
