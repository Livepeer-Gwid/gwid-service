import { z } from "zod";

export const AccountInfoSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export const AccountSecuritySchema = z
  .object({
    current_password: z.string().min(8, "Password too short, must be 8 digits"),
    new_password: z.string().min(8, "Password too short, must be 8 digits"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.new_password === data.confirmPassword, {
    path: ["new_password", "confirmPassword"],
    message: "Passwords do not match",
  });

export type AccountInfoSchemaType = z.infer<typeof AccountInfoSchema>;
export type AccountSecuritySchemaType = z.infer<typeof AccountSecuritySchema>;
