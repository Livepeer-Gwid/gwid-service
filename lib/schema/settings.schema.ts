import { z } from "zod";

export const AccountInfoSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
});

export const AccountSecuritySchema = z
  .object({
    password: z.string().min(6, "Password too short"),
    newPassword: z.string().min(6, "Password too short"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["newPassword", "confirmPassword"],
    message: "Passwords do not match",
  });

export type AccountInfoSchemaType = z.infer<typeof AccountInfoSchema>;
export type AccountSecuritySchemaType = z.infer<typeof AccountSecuritySchema>;
