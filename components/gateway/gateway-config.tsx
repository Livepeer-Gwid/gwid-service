"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Check, Cpu } from "lucide-react";
import Image from "next/image";
import { SpecifyDetailsSchemaType } from "@/lib/schema/specify-details.schema";
import { UseFormReturn } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getEC2Instances } from "@/lib/api/ec2.api";
import { GetEC2InstancesResponse } from "@/lib/types/ec2.type";
import { ResponseError } from "@/lib/types/error.type";
import { EC2Keys } from "@/lib/constants/keys/ec2.key";
import { AxiosResponse } from "axios";
import { useMemo } from "react";
import Spinner from "../shared/spinner";
import ErrorAlert from "../alerts/error-alert";

type Props = {
  form: UseFormReturn<SpecifyDetailsSchemaType>;
};

const GatewayConfig = ({ form }: Props) => {
  const { data, isLoading, isSuccess, isError, error } = useQuery<
    AxiosResponse<GetEC2InstancesResponse>,
    ResponseError
  >({
    queryKey: [EC2Keys.GET_EC2_INSTANCES],
    queryFn: () => getEC2Instances(),
  });

  const ec2s = useMemo(() => {
    return data
      ? data.data.data.filter((processor) =>
          processor.cpu_manufacturer.includes(
            form.watch("processor").split(" ")[0]
          )
        )
      : [];
  }, [data, form]);

  return (
    <div className="flex flex-col space-y-3 mt-6">
      <h1 className="text-xl font-semibold text-white">Configurations</h1>
      <div
        className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-8 flex flex-col space-y-7"
        style={{
          background: "linear-gradient(to bottom, #171B20, #121213)",
        }}
      >
        <Tabs defaultValue="Intel Xeon">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 bg-[#171B2080] text-white border-[1.5px] border-[#383A3F] rounded-[10px] h-fit">
              {["Intel Xeon", "Ampere Altra", "AMD Epyc"].map((cpu) => (
                <TabsTrigger
                  key={cpu}
                  value={cpu}
                  className="text-white data-[state=active]:bg-primary h-10"
                  onClick={() => form.setValue("processor", cpu)}
                >
                  {cpu}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="space-y-5 mt-4">
            {!isLoading &&
              isSuccess &&
              ec2s.length > 0 &&
              ec2s.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    "px-6 py-5 rounded-xl text-white cursor-pointer",
                    form.watch("ec2_instance_type_id") === plan.id
                      ? "border border-white"
                      : "border-[2px] border-[#383A3F]"
                  )}
                  onClick={() => form.setValue("ec2_instance_type_id", plan.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col space-y-3">
                      <p className="text-lg font-medium uppercase">
                        {plan.tag}
                      </p>
                      <div className="flex items-center space-x-4">
                        <p className="text-xs text-[#FFFFFFB2] flex items-center">
                          <Cpu className="mr-2" size={20} /> {plan.cpu}
                        </p>
                        <p className="text-xs text-[#FFFFFFB2] flex items-center">
                          <Image
                            width={20}
                            height={20}
                            className="mr-2"
                            alt="RAM"
                            src="/icons/ram.svg"
                          />{" "}
                          {plan.ram}
                        </p>
                        <p className="text-xs text-[#FFFFFFB2] flex items-center">
                          <Image
                            width={20}
                            height={20}
                            className="mr-2"
                            alt="RAM"
                            src="/icons/ram.svg"
                          />{" "}
                          {plan.architecture}
                        </p>
                        {/* <p className="text-xs text-[#FFFFFFB2] flex items-center">
                          <Image
                            width={20}
                            height={20}
                            className="mr-2"
                            alt="RAM"
                            src="/icons/bandwidth.svg"
                          />{" "}
                          {plan}
                        </p> */}
                        <p className="text-xs text-[#FFFFFFB2] flex items-center">
                          <Cpu className="mr-2" size={20} />
                          {form.watch("processor")}
                        </p>
                      </div>
                    </div>
                    {form.watch("ec2_instance_type_id") === plan.id && (
                      <Check size={16} />
                    )}
                  </div>
                </div>
              ))}

            {isLoading && (
              <div className="flex items-center justify-center py-2">
                <Spinner size={30} />
              </div>
            )}

            {isError && error && (
              <ErrorAlert message={error?.response?.data?.error ?? ""} />
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default GatewayConfig;
