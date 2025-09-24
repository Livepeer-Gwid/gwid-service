"use client";

import { useState } from "react";
import { Nunito } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema, SigninSchemaType } from "@/lib/schema/signin.schema";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
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
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/lib/api/auth.api";
import { extractErrorMessage, setAccessToken } from "@/lib/utils";
import ErrorAlert from "@/components/alerts/error-alert";
import { UserKeys } from "@/lib/constants/keys/user.key";
import { useRouter, useSearchParams } from "next/navigation";
import { ResponseError } from "@/lib/types/error.type";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const queryClient = useQueryClient();

  const form = useForm<SigninSchemaType>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const redirect = searchParams.get("redirect");
      setAccessToken(data.data.data.access_token);
      queryClient.refetchQueries({ queryKey: [UserKeys.GET_USER_PROFILE] });
      if (redirect) {
        replace(redirect);
      } else {
        replace("/dashboard");
      }
    },
    onError: (err: ResponseError) => setErrorResponse(extractErrorMessage(err)),
  });

  const submit: SubmitHandler<SigninSchemaType> = async (data) => {
    setErrorResponse(null);
    mutate(data);
  };

  return (
    <div
      className={`md:w-[579px] w-[95vh] mx-auto neomorphic-card rounded-[50px] ${nunito.className} text-white`}
    >
      <div
        className="w-full h-full rounded-[inherit] py-16 px-12"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center font-semibold text-[40px]">Log In</h1>

        {errorResponse && <ErrorAlert message={errorResponse} />}

        <Form {...form}>
          <form
            className="w-full flex flex-col space-y-5 mt-5"
            onSubmit={form.handleSubmit(submit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1 font-bold text-base">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      required
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
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="mb-1 font-bold text-base">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      required
                      className="h-14 rounded-[10px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />

                  {!showPassword ? (
                    <EyeOff
                      size={18}
                      className="text-[#fff] absolute right-4 top-[54px] z-10 cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  ) : (
                    <Eye
                      size={18}
                      className="text-[#fff] absolute right-4 top-[54px] z-10 cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  )}
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full font-bold mt-4.5"
              isLoading={isPending}
              disabled={isPending}
            >
              Continue <ArrowUpRight size={20} className="ml-2" />
            </Button>

            <div className="flex flex-col space-y-1">
              <p className="font-medium text-center mt-6">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="font-bold">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
