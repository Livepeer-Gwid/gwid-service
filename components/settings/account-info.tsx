"use client";

import { useForm } from "react-hook-form";
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

const AccountInfo = () => {
  const form = useForm<AccountInfoSchemaType>({
    resolver: zodResolver(AccountInfoSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
    },
  });

  return (
    <div className="text-white flex flex-col space-y-7">
      <h3 className="text-2xl font-semibold">Account Information</h3>
      <Form {...form}>
        <form>
          <div className="grid grid-cols-2 gap-8">
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
                      placeholder="johndoe@gmail.com"
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
              name="username"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-semibold mb-2">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="username"
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
          >
            Update Info
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountInfo;
