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
import { plans } from "@/lib/constants/plans";
import { ArrowRight, Cpu } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {
  specifyDetailsForm: UseFormReturn<SpecifyDetailsSchemaType>;
  selectStackForm: UseFormReturn<StackSchemType>;
};

const DetailsSidebar = ({ specifyDetailsForm, selectStackForm }: Props) => {
  const plan = plans.find(
    (plan) => plan.label === specifyDetailsForm.watch("plan")
  );

  const onSubmit = (values: SpecifyDetailsSchemaType) => {
    console.log("Form values:", values);
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
          {specifyDetailsForm.watch("plan")}
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
          <p className="text-xs text-[#FFFFFFB2] flex items-center">
            <Image
              width={20}
              height={20}
              className="mr-2"
              alt="RAM"
              src="/icons/ram.svg"
            />{" "}
            {plan?.storage}
          </p>
          <p className="text-xs text-[#FFFFFFB2] flex items-center">
            <Image
              width={20}
              height={20}
              className="mr-2"
              alt="RAM"
              src="/icons/bandwidth.svg"
            />{" "}
            {plan?.bandwidth}
          </p>
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

      <Button onClick={specifyDetailsForm.handleSubmit(onSubmit)}>
        Launch <ArrowRight size={20} className="ml-1" />
      </Button>
    </div>
  );
};

export default DetailsSidebar;
