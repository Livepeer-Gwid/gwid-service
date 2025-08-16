import { z } from "zod";

export const awsCredentialsSchema = z.object({
  access_key_id: z.string().min(1, "Access key cannot be empty"),
  secret_access_key: z.string().min(1, "Secret access key cannot be empty"),
});

export type AwsCredentialsSchemaType = z.infer<typeof awsCredentialsSchema>;
