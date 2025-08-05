import { z } from "zod";

export const specifyDetailsSchema = z.object({
  rpcUrl: z.string().url({ message: "Enter a valid URL" }),
  password: z.string().min(6, "Password too short"),
  confirmPassword: z.string().min(6),
  transcodingProfile: z.enum(["480p0", "720p0", "1080p0"]),
  plan: z.string(),
  processor: z.string(),
  version: z.string(),
});

export type SpecifyDetailsSchemaType = z.infer<typeof specifyDetailsSchema>;
