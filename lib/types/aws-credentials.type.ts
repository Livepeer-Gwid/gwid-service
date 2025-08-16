import { Meta } from "./meta.type";

export interface AWSCredential {
  access_key_id?: string;
  created_at?: string;
  id: string;
  secret_access_key?: string;
  updated_at?: string;
  user?: null;
  user_id?: string;
}

export interface GetAWSCredentialsResponse {
  data: AWSCredential[];
  metadata: Meta;
  success: boolean;
}
