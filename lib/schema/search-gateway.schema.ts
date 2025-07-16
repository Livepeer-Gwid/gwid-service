import { z } from "zod";

export const searchSchema = z.object({
  query: z.string().min(1, "Search cannot be empty"),
});

export type SearchSchemaType = z.infer<typeof searchSchema>;
