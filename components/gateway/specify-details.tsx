import { SpecifyDetailsSchemaType } from "@/lib/schema/specify-details.schema";
import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StackSchemType } from "@/lib/schema/select-stack.schema";
import DetailsSidebar from "./details-sidebar";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useEffect } from "react";
import GatewayConfig from "./gateway-config";

type Props = {
  form: UseFormReturn<SpecifyDetailsSchemaType>;
  selectStackForm: UseFormReturn<StackSchemType>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const SpecifyDetails = ({ form, selectStackForm, setCurrentStep }: Props) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Form {...form}>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* LEFT */}
        <div className="md:col-span-2">
          <div
            className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-8 flex flex-col space-y-7"
            style={{
              background: "linear-gradient(to bottom, #171B20, #121213)",
            }}
          >
            <FormField
              control={form.control}
              name="rpcUrl"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-semibold mb-1">RPC URL</FormLabel>
                  <FormDescription className="text-[#FFFFFFB2] text-sm">
                    Arbitrum mainnet rpc url
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Type your access key"
                      className="border-[2px] border-[#3A3C41] bg-[#171B21] h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <div className="flex flex-col space-y-2.5 text-white">
              <FormLabel className="font-semibold mb-3">
                Your password
              </FormLabel>

              <FormDescription className="text-[#FFFFFFB2] text-sm">
                Keep this password handy. Make sure to never share or lose
                access to either the password.
              </FormDescription>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          className="border-[2px] border-[#3A3C41] bg-[#171B21] h-12"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          className="border-[2px] border-[#3A3C41] bg-[#171B21] h-12"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Transcoding Profile */}
            <FormField
              control={form.control}
              name="transcodingProfile"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel className="font-bold text-xl">
                    Choose transcoding profile
                  </FormLabel>

                  <FormControl className="mt-3">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-6"
                    >
                      {["480p0", "720p0", "1080p0"].map((option) => (
                        <FormItem
                          key={option}
                          className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 flex space-x-3 items-start"
                        >
                          <RadioGroupItem value={option} />
                          <div className="flex flex-col space-y-3">
                            <FormLabel className="text-lg font-medium leading-4">
                              {option}
                            </FormLabel>
                            <FormDescription className="text-sm text-[#FFFFFFB2]">
                              h264constrainedhigh
                            </FormDescription>
                          </div>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Configurations */}
          <GatewayConfig form={form} />

          <Button
            variant="outline"
            className="bg-inherit border-[#383A3F] rounded-[10px] w-fit text-white font-bold mt-7"
            onClick={() => setCurrentStep(1)}
          >
            Previous
          </Button>
        </div>

        {/* Right Side */}
        <div className="md:col-span-1">
          <DetailsSidebar
            selectStackForm={selectStackForm}
            specifyDetailsForm={form}
          />
        </div>
      </form>
    </Form>
  );
};

export default SpecifyDetails;
