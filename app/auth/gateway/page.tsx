"use client";

import React from "react";
import { Nunito } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewGatewaySchema,
  NewGatewaySchemaType,
} from "@/lib/schema/new-gateway.schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const CreateGateway = () => {
  const { replace } = useRouter();

  const form = useForm<NewGatewaySchemaType>({
    resolver: zodResolver(NewGatewaySchema),
    defaultValues: {
      name: "",
    },
  });

  const submit: SubmitHandler<NewGatewaySchemaType> = async () => {
    replace("/gateways/launch");
  };

  return (
    <div
      className={`h-[70%] flex flex-col md:w-[806px] w-[95vw] mx-auto ${nunito.className}`}
    >
      <h1 className="text-white font-bold md:text-[40px] text-2xl">
        New Gateway
      </h1>

      <p className="text-white md:text-2xl text-base font-medium mt-5">
        Gateway name (lowercase letters, numbers and symbol only){" "}
        <span className="text-[#FF0000]">*</span>
      </p>

      <Form {...form}>
        <form
          className="w-full flex flex-col space-y-5 mt-7"
          onSubmit={form.handleSubmit(submit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="h-14 rounded-[10px] bg-[#171B21] border-[2px] border-[#3A3C41] text-white"
                    placeholder="ex: expertdevs7#"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-fit mt-1">
            Create Project <ArrowRight size={20} className="ml-1" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateGateway;
