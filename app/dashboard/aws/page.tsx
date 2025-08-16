"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  awsCredentialsSchema,
  AwsCredentialsSchemaType,
} from "@/lib/schema/aws-credentials.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ResponseError } from "@/lib/types/error.type";
import { addAWSCredentials } from "@/lib/api/credentials.api";
import { GetAWSCredentialsResponse } from "@/lib/types/aws-credentials.type";
import { GlobalKeys } from "@/lib/constants/keys";
import ErrorAlert from "@/components/alerts/error-alert";
import { toast } from "sonner";

const AWS = () => {
  const [step, setStep] = useState(1);
  const form = useForm<AwsCredentialsSchemaType>({
    resolver: zodResolver(awsCredentialsSchema),
    defaultValues: {
      access_key_id: "",
      secret_access_key: "",
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation<
    AxiosResponse<GetAWSCredentialsResponse>,
    ResponseError,
    AwsCredentialsSchemaType
  >({
    mutationFn: addAWSCredentials,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GlobalKeys.GET_AWS_CREDENTIALS],
      });
      toast("AWS credentials added successfully");
    },
  });

  const submit: SubmitHandler<AwsCredentialsSchemaType> = async (data) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col space-y-4.5">
      <Link href="/dashboard" passHref>
        <Button variant="ghost" className="text-white w-fit px-0 text-sm">
          <ArrowLeft size={18} className="mr-2" /> Back
        </Button>
      </Link>

      <div className="flex items-center space-x-5">
        <Image src="/icons/gwid-aws.svg" width={45} height={45} alt="AWS" />
        <h4 className="text-2xl text-white font-semibold">
          Grant AWS Permissions
        </h4>
      </div>

      <p className="text-[#FFFFFFB2] font-semibold">
        Grant Gwid permissions to create infrastructure in your AWS account by
        following 2 simple steps.
      </p>

      <div className="flex flex-col space-y-3 pt-5">
        {/* Step 1 */}
        <div className="flex space-x-5">
          <div className="flex flex-col space-y-3 self-stretch items-center">
            <div
              className={`rounded-full bg-[#25213D] min-h-[30px] min-w-[30px] font-semibold flex items-center justify-center text-white`}
            >
              {step > 1 ? <CheckIcon size={17} /> : "1"}
            </div>
            <div className="border-l border-white h-full" />
          </div>
          <div className="flex flex-col space-y-4">
            <p className="font-semibold text-white">
              Log in to your AWS account
            </p>
            {step === 1 && (
              <>
                <div className="flex flex-col space-y-3">
                  <p className="text-[#FFFFFF80] font-medium text-sm">
                    Return to Gwid after successful login.
                  </p>
                  <div className="flex items-center space-x-3.5">
                    <Image
                      src="/icons/gwid-aws.svg"
                      width={27}
                      height={16}
                      alt="AWS"
                    />
                    <a
                      href="https://aws.amazon.com/secrets-manager/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="bg-[#FFFFFF1A] border-2 border-[#3A3C41] px-10">
                        Log in <ExternalLink size={18} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
                <Button
                  className="bg-[#25213D] border-[#3A3C41] w-fit relative top-3"
                  onClick={() => setStep(2)}
                >
                  Continue <ArrowRight size={18} className="ml-2" />
                </Button>
              </>
            )}
            <div className={step === 1 ? "pb-10" : "pb-12"} />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex space-x-5">
          <div
            className={`rounded-full ${step === 2 ? "bg-[#25213D]" : "bg-[#383A3F]"} h-[30px] w-[30px] font-semibold flex items-center justify-center text-white`}
          >
            2
          </div>
          <div className="flex flex-col space-y-4">
            <p
              className={`font-semibold ${step === 2 ? "text-white" : "text-[#FFFFFF80]"}`}
            >
              Enter your AWS access and secret credentials
            </p>

            {step === 2 && (
              <>
                <div className="flex flex-col">
                  <div className="flex flex-col space-y-2 mb-1">
                    <div className="flex items-center text-white space-x-2">
                      <Image
                        src="/icons/info-icon.svg"
                        alt="Info"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm text-[#FFFFFFB2]">Info</p>
                    </div>
                    <p className="font-medium text-[#FFFFFFB2]">
                      On your AWS account, please make sure you have created an{" "}
                      <a href="#" style={{ color: "#6C5CE7" }}>
                        AmazonEC2FullAccess
                      </a>{" "}
                      access to these keys. View our <br />
                      <a href="#" style={{ color: "#6C5CE7" }}>
                        documentation
                      </a>{" "}
                      to learn how to create AWS access and secret credentials.
                    </p>
                  </div>
                </div>

                <Form {...form}>
                  <form
                    className="flex flex-col space-y-5 max-w-md"
                    onSubmit={form.handleSubmit(submit)}
                  >
                    {isError && error && (
                      <ErrorAlert
                        message={error?.response?.data?.error ?? ""}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="access_key_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-1 font-semibold text-base text-white">
                            Access Key
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your access key"
                              className="h-14 rounded-[10px] text-white placeholder:text-[#FFFFFF80] placeholder:text-sm border-[2px] border-[#3A3C41] bg-[#171B21]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="secret_access_key"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-1 font-semibold text-base text-white">
                            Secret Key
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your secret key"
                              className="h-14 rounded-[10px] text-white placeholder:text-[#FFFFFF80] placeholder:text-sm border-[2px] border-[#3A3C41] bg-[#171B21]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center pt-3 pb-5">
                      <Button
                        type="button"
                        variant="ghost"
                        className="text-white w-fit text-sm"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#25213D] border-[#3A3C41] w-fit"
                        isLoading={isPending}
                        disabled={isPending}
                      >
                        Continue <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWS;
