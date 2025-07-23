"use client";

import { useState } from "react";
import SpecifyDetails from "@/components/gateway/specify-details";
import { GatewayStepper } from "@/components/gateway/stepper";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  specifyDetailsSchema,
  SpecifyDetailsSchemaType,
} from "@/lib/schema/specify-details.schema";
import { stackSchema, StackSchemType } from "@/lib/schema/select-stack.schema";
import SelectStackForm from "@/components/gateway/select-stack";

const Launch = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const selectStackForm = useForm<StackSchemType>({
    resolver: zodResolver(stackSchema),
    defaultValues: {
      stackType: "transcoding",
      cloudProvider: "dedicated",
      region: "amsterdam",
    },
  });

  const specifyDetailsForm = useForm<SpecifyDetailsSchemaType>({
    resolver: zodResolver(specifyDetailsSchema),
    defaultValues: {
      rpcUrl: "",
      transcodingProfile: "480p0",
      plan: "MEDIUM-2C-4G",
      processor: "Intel Xeon",
      confirmPassword: "",
      password: "",
      version: "v1.0",
    },
  });

  return (
    <section className="w-full flex flex-col pt-5">
      <div className="flex flex-col space-y-5">
        <div className="flex items-center text-white space-x-1.5">
          <Link
            href="/gateways"
            className="text-white font-semibold text-xl underline"
          >
            Gateways
          </Link>
          <ChevronRight size={17} />
          <span className="text-white font-semibold">Launch</span>
        </div>

        <GatewayStepper currentStep={currentStep} />

        {currentStep === 1 && (
          <div className="flex flex-col space-y-5 py-4">
            <h1 className="text-2xl font-semibold text-white">
              Select Livepeer Stack
            </h1>
            <SelectStackForm
              form={selectStackForm}
              setCurrentStep={setCurrentStep}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="flex flex-col space-y-3 py-4">
            <h1 className="text-xl font-semibold text-white">
              Specify Details
            </h1>
            <SpecifyDetails
              form={specifyDetailsForm}
              selectStackForm={selectStackForm}
              setCurrentStep={setCurrentStep}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Launch;
