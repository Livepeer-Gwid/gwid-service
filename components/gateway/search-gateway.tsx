"use client";

import React from "react";
import { Search } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  SearchSchemaType,
  searchSchema,
} from "@/lib/schema/search-gateway.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

const SearchGateway = () => {
  const form = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });

  const submit: SubmitHandler<SearchSchemaType> = async (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="w-full h-full" onSubmit={form.handleSubmit(submit)}>
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full h-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search gateways..."
                    className={cn(
                      "pl-10 pr-4 py-2 bg-[#171B2080] text-[#FFFFFF80] border border-[#383A3F] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[10px] h-full",
                      form.formState.errors.query && "border-red-500"
                    )}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchGateway;
