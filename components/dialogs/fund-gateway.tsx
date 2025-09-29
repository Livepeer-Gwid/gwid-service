import { Nunito } from "next/font/google";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FundGatewaySchema,
  FundGatewaySchemaType,
} from "@/lib/schema/fund-gateway.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { fundDepositAndReserve } from "@/lib/contracts";
import { toast } from "sonner";
import ErrorAlert from "../alerts/error-alert";

type Props = {
  open: boolean;
  onClose: () => void;
};

const nunito = Nunito({ subsets: ["latin"] });

const FundGateway = ({ open, onClose }: Props) => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<FundGatewaySchemaType>({
    resolver: zodResolver(FundGatewaySchema),
    defaultValues: {
      totalInEther: "",
      deposit: "",
      reserve: "",
    },
  });

  const submit: SubmitHandler<FundGatewaySchemaType> = async (data) => {
    setErrorResponse(null);
    setIsPending(true);

    try {
      await fundDepositAndReserve(data);
      setIsPending(false);
      toast.success("Funding successful", {
        position: "top-right",
        style: {
          background: "green",
          color: "white",
        },
      });
      onClose();
      form.reset();
    } catch (e: unknown) {
      setIsPending(false);
      setErrorResponse(
        e instanceof Error ? e?.message : "Something went wrong"
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTitle hidden>AWS Cost Consent</DialogTitle>
      <DialogContent
        className={`bg-[#FFFFFF0F] border-2 border-[#383A3F] w-xl text-white p-6 rounded-xl ${nunito.className}`}
        style={{
          backdropFilter: "blur(30px)",
        }}
      >
        <div>
          <h4 className="font-bold text-center text-2xl">Fund Gateway</h4>

          {errorResponse && <ErrorAlert message={errorResponse} />}

          <Form {...form}>
            <form
              className="w-full flex flex-col space-y-5 mt-5"
              onSubmit={form.handleSubmit(submit)}
            >
              <FormField
                control={form.control}
                name="totalInEther"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-1 font-bold text-base">
                      Deposit and Reserve amount (ETH)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="h-14 rounded-[10px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deposit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-1 font-bold text-base">
                      Deposit amount (ETH)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="h-14 rounded-[10px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reserve"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-1 font-bold text-base">
                      Reserve amount (ETH)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="h-14 rounded-[10px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full font-bold mt-4.5"
                isLoading={isPending}
                disabled={isPending}
              >
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FundGateway;
