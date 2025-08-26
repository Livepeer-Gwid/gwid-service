import { z } from "zod";

export const stackSchema = z.object({
  stackType: z.enum(["transcoding", "ai"]),
  cloudProvider: z.enum(["dedicated", "aws", "gcp"]).optional(),
  region: z.enum(["amsterdam", "frankfurt", "midford"]),
  credentials_id: z.string().min(5, { message: "Enter a valid ID" }),
});

export type StackSchemType = z.infer<typeof stackSchema>;
