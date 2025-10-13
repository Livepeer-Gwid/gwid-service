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
  AccountSecuritySchema,
  AccountSecuritySchemaType,
} from "@/lib/schema/settings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AccountSecurity = () => {
  const form = useForm<AccountSecuritySchemaType>({
    resolver: zodResolver(AccountSecuritySchema),
    defaultValues: {
      confirmPassword: "",
      password: "",
      newPassword: "",
    },
  });

  return (
    <div className="text-white flex flex-col space-y-7">
      <h3 className="text-2xl font-semibold">Account Security</h3>
      <Form {...form}>
        <form>
          <div className="grid grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-semibold mb-2">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
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
              name="newPassword"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-semibold mb-2">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="New Password"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-semibold mb-2">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm new password"
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
            Update Passwords
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountSecurity;
