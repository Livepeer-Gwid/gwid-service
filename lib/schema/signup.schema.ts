import { z } from "zod";

export const SignupSchema = z.object({
  email: z.string().email(),
  fullname: z.string(),
  password: z.string(),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;
