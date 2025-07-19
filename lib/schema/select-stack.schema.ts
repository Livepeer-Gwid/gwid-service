import { z } from "zod";

export const stackSchema = z.object({
  stackType: z.enum(["transcoding", "ai"]),
  cloudProvider: z.enum(["dedicated", "aws", "gcp"]),
  region: z.enum(["amsterdam", "frankfurt", "midford"]),
});

export type StackSchemType = z.infer<typeof stackSchema>;
