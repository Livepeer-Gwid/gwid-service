"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  AccountInfoSchema,
  AccountInfoSchemaType,
} from "@/lib/schema/settings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useUser } from "@/lib/hooks/use-user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserKeys } from "@/lib/constants/keys/user.key";
import { updateUserProfile } from "@/lib/api/user.api";
import { ResponseError } from "@/lib/types/error.type";
import { extractErrorMessage } from "@/lib/utils";
import { useState } from "react";
import ErrorAlert from "../alerts/error-alert";
import { toast } from "sonner";

const AccountInfo = () => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const { user } = useUser();

  const queryClient = useQueryClient();

  const form = useForm<AccountInfoSchemaType>({
    resolver: zodResolver(AccountInfoSchema),
    defaultValues: {
      name: user?.data.data.name,
      email: user?.data.data.email,
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: [UserKeys.GET_USER_PROFILE] });
    },
    onError: (err: ResponseError) => setErrorResponse(extractErrorMessage(err)),
  });

  const submit: SubmitHandler<AccountInfoSchemaType> = async (data) => {
    setErrorResponse(null);
    mutate({ name: data.name });
  };

  return (
    <div className="text-white flex flex-col space-y-7">
      <h3 className="md:text-2xl text-xl font-semibold">Account Information</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-semibold mb-2">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="border-[2px] border-[#3A3C41] bg-[#171B21] h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-semibold mb-2">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      disabled
                      placeholder="johndoe@gmail.com"
                      className="border-[2px] border-[#3A3C41] bg-[#171B21] h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="bg-[#25213D] border-[#3A3C41] w-fit mt-9"
            isLoading={isPending}
          >
            Update Info
          </Button>

          {errorResponse && <ErrorAlert message={errorResponse} />}
        </form>
      </Form>
    </div>
  );
};

export default AccountInfo;
