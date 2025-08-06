import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;
