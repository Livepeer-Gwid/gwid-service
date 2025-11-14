import { AWSCredential } from "./aws-credentials.type";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  gateways: null | unknown;
  aws_credentials: null | AWSCredential;
};

export type GetUserProfileResponse = {
  success: boolean;
  data: User;
};
