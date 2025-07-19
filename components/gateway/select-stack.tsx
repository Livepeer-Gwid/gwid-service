import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StackSchemType, stackSchema } from "@/lib/schema/select-stack.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

const SelectStackForm = () => {
  const form = useForm<StackSchemType>({
    resolver: zodResolver(stackSchema),
    defaultValues: {
      stackType: "transcoding",
      cloudProvider: "dedicated",
      region: "amsterdam",
    },
  });

  function onSubmit(values: StackSchemType) {
    console.log("Form values:", values);
    // Pass to next step
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white"
      >
        {/* Stack Type */}
        <div
          className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7"
          style={{ background: "linear-gradient(to bottom, #171B20, #121213)" }}
        >
          <FormField
            control={form.control}
            name="stackType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl">
                  Choose a type
                </FormLabel>
                <p className="font-medium">
                  Select the type of Livepeer gateway or service you want to
                  deploy based on your streaming needs and requirements
                </p>
                <FormControl className="mt-3">
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-6"
                  >
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 flex space-x-3 items-start">
                      <RadioGroupItem value="transcoding" />
                      <div className="flex flex-col space-y-3">
                        <FormLabel className="text-lg font-medium leading-4">
                          Livepeer Transcoding Gateway
                        </FormLabel>
                        <FormDescription className="text-sm text-[#FFFFFFB2]">
                          Launch a gateway for video transcoding on the Livepeer
                          network.
                        </FormDescription>
                      </div>
                    </FormItem>
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 flex space-x-3 items-start">
                      <RadioGroupItem value="ai" />
                      <div className="flex flex-col space-y-3">
                        <FormLabel className="text-lg font-medium leading-4">
                          Livepeer AI Gateway
                        </FormLabel>
                        <FormDescription className="text-sm text-[#FFFFFFB2]">
                          Deploy an AI-powered gateway to process media.
                        </FormDescription>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Cloud Provider */}
        <div
          className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7"
          style={{ background: "linear-gradient(to bottom, #171B20, #121213)" }}
        >
          <FormField
            control={form.control}
            name="cloudProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl">
                  Select cloud provider
                </FormLabel>

                <p className="font-medium">
                  Select a cloud service provider where your Livepeer gateway
                  will be hosted. This determines the infrastructure your
                  gateway will run on.
                </p>

                <FormControl className="mt-3">
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-3 gap-6"
                  >
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 relative flex flex-col items-center">
                      <Image
                        src="/images/gwid-logo.svg"
                        alt="gwid"
                        width={57}
                        height={21}
                        className="mb-1"
                      />
                      <FormLabel className="text-base font-semibold">
                        Your Dedicated Account
                      </FormLabel>
                      <FormDescription className="text-[10px] text-[#FFFFFF80] font-medium">
                        Host a Livepeer Gateway on a dedicated cloud
                        infrastructure
                      </FormDescription>
                      <RadioGroupItem
                        value="dedicated"
                        className="absolute top-4 left-4 z-30"
                      />
                    </FormItem>
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 relative flex flex-col items-center">
                      <Image
                        src="/images/gwid-logo.svg"
                        alt="gwid"
                        width={57}
                        height={21}
                        className="mb-1"
                      />
                      <FormLabel className="text-base font-semibold">
                        Amazon Web Services
                      </FormLabel>
                      <FormDescription className="text-[10px] text-[#FFFFFF80] font-medium">
                        Deploy your Livepeer gateway using Amazon Web Services
                      </FormDescription>
                      <RadioGroupItem
                        value="aws"
                        className="absolute top-4 left-4 z-30"
                      />
                    </FormItem>
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 relative flex flex-col items-center">
                      <Image
                        src="/images/gwid-logo.svg"
                        alt="gwid"
                        width={57}
                        height={21}
                        className="mb-1"
                      />
                      <FormLabel className="text-base font-semibold">
                        Google Cloud Platform
                      </FormLabel>
                      <FormDescription className="text-[10px] text-[#FFFFFF80] font-medium">
                        Set up a Livepeer Catalyst on Google Cloud Platform
                      </FormDescription>
                      <RadioGroupItem
                        value="gcp"
                        className="absolute top-4 left-4 z-30"
                      />
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Region */}
        <div
          className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7"
          style={{ background: "linear-gradient(to bottom, #171B20, #121213)" }}
        >
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl">
                  Choose region
                </FormLabel>

                <p className="font-medium">
                  Pick the geographic region for your deployment to optimize
                  streaming performance and comply with local regulations.
                </p>

                <FormControl className="mt-3">
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-6"
                  >
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 flex space-x-3 items-start">
                      <RadioGroupItem value="amsterdam" />
                      <div className="flex flex-col space-y-3">
                        <FormLabel className="text-lg font-medium leading-4">
                          Amsterdam
                          <Image
                            src="https://flagcdn.com/nl.svg"
                            alt="Amsterdam"
                            width={25}
                            height={20}
                            className="ml-0.5"
                          />
                        </FormLabel>
                        <FormDescription className="text-sm text-[#FFFFFFB2]">
                          Low-latency ,88ms
                        </FormDescription>
                      </div>
                    </FormItem>
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 flex space-x-3 items-start">
                      <RadioGroupItem value="frankfurt" />
                      <div className="flex flex-col space-y-3">
                        <FormLabel className="text-lg font-medium leading-4">
                          Frankfurt
                          <Image
                            src="https://flagcdn.com/de.svg"
                            alt="Frankfurt"
                            width={25}
                            height={20}
                            className="ml-0.5"
                          />
                        </FormLabel>
                        <FormDescription className="text-sm text-[#FFFFFFB2]">
                          Low-latency ,88ms
                        </FormDescription>
                      </div>
                    </FormItem>
                    <FormItem className="border-[2px] border-[#383A3F] rounded-lg px-4 py-6 flex space-x-3 items-start">
                      <RadioGroupItem value="midford" />
                      <div className="flex flex-col space-y-3">
                        <FormLabel className="text-lg font-medium leading-4">
                          Midford
                          <Image
                            src="https://flagcdn.com/us.svg"
                            alt="Midford"
                            width={25}
                            height={20}
                            className="ml-0.5"
                          />
                        </FormLabel>
                        <FormDescription className="text-sm text-[#FFFFFFB2]">
                          Low-latency ,88ms
                        </FormDescription>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="px-6">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SelectStackForm;
