"use client";

import SelectStackForm from "@/components/gateway/select-stack";
import { GatewayStepper } from "@/components/gateway/stepper";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Launch = () => {
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

        <GatewayStepper currentStep={1} />

        <div className="flex flex-col space-y-5 py-4">
          <h1 className="text-2xl font-semibold text-white">
            Select Livepeer Stack
          </h1>
          <SelectStackForm />
        </div>
      </div>
    </section>
  );
};

export default Launch;
