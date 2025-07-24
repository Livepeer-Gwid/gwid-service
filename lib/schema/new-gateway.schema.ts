import { z } from "zod";

export const NewGatewaySchema = z.object({
  name: z.string().regex(/^[a-z0-9\W_]+$/, {
    message: "Only lowercase letters, numbers, and symbols are allowed",
  }),
});

export type NewGatewaySchemaType = z.infer<typeof NewGatewaySchema>;
