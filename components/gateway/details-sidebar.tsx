import { StackSchemType } from "@/lib/schema/select-stack.schema";
import { SpecifyDetailsSchemaType } from "@/lib/schema/specify-details.schema";
import { UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Cpu } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { EC2Instance } from "@/lib/types/ec2.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ResponseError } from "@/lib/types/error.type";
import { toast } from "sonner";
import { GatewayKeys } from "@/lib/constants/keys/gateway.key";
import { createAWSGateway } from "@/lib/api/gateway.api";
import { CreateGatewayResponse } from "@/lib/types/gateway.type";
import { useRouter } from "next/navigation";
import { getGatewayNameFromSession } from "@/lib/utils";
import ErrorAlert from "../alerts/error-alert";

type Props = {
  specifyDetailsForm: UseFormReturn<SpecifyDetailsSchemaType>;
  selectStackForm: UseFormReturn<StackSchemType>;
  data: EC2Instance[];
};

const DetailsSidebar = ({
  specifyDetailsForm,
  selectStackForm,
  data,
}: Props) => {
  const plan = data.find(
    (plan) => plan.id === specifyDetailsForm.watch("ec2_instance_type_id")
  );

  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate, isPending, isError, error } = useMutation<
    AxiosResponse<CreateGatewayResponse>,
    ResponseError,
    {
      name: string;
      stack: StackSchemType;
      details: SpecifyDetailsSchemaType;
    }
  >({
    mutationFn: createAWSGateway,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [GatewayKeys.GET_GATEWAYS],
      });
      toast.success("Gateway created successfully.");
      router.replace(`/gateways/d/${data.data.data.id}`);
    },
  });

  const gatewayName = getGatewayNameFromSession();

  const onSubmit = (values: SpecifyDetailsSchemaType) => {
    if (!gatewayName) {
      toast.error("Gateway name is required");
      router.replace("/auth/gateway");
    } else {
      mutate({
        name: gatewayName,
        stack: selectStackForm.watch(),
        details: values,
      });
    }
  };

  return (
    <div
      className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7 flex flex-col space-y-5"
      style={{
        background: "linear-gradient(to bottom, #171B20, #121213)",
      }}
    >
      <div className="space-y-1">
        <div className="text-sm text-[#FFFFFFB2] font-semibold">Gateway</div>
        <div className="text-white text-sm">projectdevops_01</div>
      </div>

      <div className="space-y-2">
        <div className="text-sm text-[#FFFFFFB2] font-semibold">Version</div>
        <Select
          value={specifyDetailsForm.watch("version")}
          onValueChange={(value) =>
            specifyDetailsForm.setValue("version", value)
          }
        >
          <SelectTrigger className="w-full text-white bg-[#171B2080] border-[1.5px] border-[#383A3F] rounded-[10px] h-fit m-0 [&>svg]:!text-white [&>svg]:size-5">
            <SelectValue placeholder="Select a version" />
          </SelectTrigger>
          <SelectContent className="text-white bg-[#000] border-[1.5px] border-[#383A3F]">
            <SelectItem value="v1.0">v1.0</SelectItem>
            <SelectItem value="v2.0">v2.0</SelectItem>
            <SelectItem value="v3.0">v3.0</SelectItem>
            <SelectItem value="v4.0">v4.0</SelectItem>
            <SelectItem value="v5.0">v5.0</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <div className="text-sm text-[#FFFFFFB2] font-semibold">Provider</div>
        <div className="text-white text-xl font-bold capitalize">
          {selectStackForm.watch("cloudProvider")}
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-sm text-[#FFFFFFB2] font-semibold">Region</div>
        <div className="text-white text-xl font-bold capitalize">
          {selectStackForm.watch("region")}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm text-[#FFFFFFB2] font-semibold">Plan</div>
        <div className="text-white text-xl font-bold capitalize">
          {plan?.tag}
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-xs text-[#FFFFFFB2] flex items-center">
            <Cpu className="mr-2" size={20} /> {plan?.cpu}
          </p>
          <p className="text-xs text-[#FFFFFFB2] flex items-center">
            <Image
              width={20}
              height={20}
              className="mr-2"
              alt="RAM"
              src="/icons/ram.svg"
            />{" "}
            {plan?.ram}
          </p>
          {/* <p className="text-xs text-[#FFFFFFB2] flex items-center">
            <Image
              width={20}
              height={20}
              className="mr-2"
              alt="RAM"
              src="/icons/ram.svg"
            />{" "}
            {plan?.storage}
          </p> */}
          {/* <p className="text-xs text-[#FFFFFFB2] flex items-center">
            <Image
              width={20}
              height={20}
              className="mr-2"
              alt="RAM"
              src="/icons/bandwidth.svg"
            />{" "}
            {plan?.bandwidth}
          </p> */}
          <p className="text-xs text-[#FFFFFFB2] flex items-center">
            <Cpu className="mr-2" size={20} />
            {specifyDetailsForm.watch("processor")}
          </p>
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-sm text-[#FFFFFFB2] font-semibold">Support</div>
        <div className="text-white text-xl font-bold capitalize">Level 1</div>
      </div>

      <div className="space-y-1">
        <div className="text-sm text-[#FFFFFFB2] font-semibold">
          Estimated Hourly Price <span className="text-[#D41A1F]">*</span>
        </div>
        <div className="text-white text-xl font-bold capitalize">$0.0205</div>
      </div>

      <p className="text-white font-medium text-xs">
        *Estimated monthly price is $15 based on 730 hours of usage.
      </p>

      <Button
        onClick={specifyDetailsForm.handleSubmit(onSubmit)}
        isLoading={isPending}
      >
        Launch <ArrowRight size={20} className="ml-1" />
      </Button>

      {isError && error && (
        <ErrorAlert message={error?.response?.data?.error ?? ""} />
      )}
    </div>
  );
};

export default DetailsSidebar;
