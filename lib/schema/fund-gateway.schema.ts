import { z } from "zod";

export const FundGatewaySchema = z.object({
  totalInEther: z
    .string()
    .nonempty({ message: "Deposit and Reserve amount is required" }),
  deposit: z.string().nonempty({ message: "Amount to deposit is required" }),
  reserve: z.string().nonempty({ message: "Amount to reserve is required" }),
});

export type FundGatewaySchemaType = z.infer<typeof FundGatewaySchema>;
