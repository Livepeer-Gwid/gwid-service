import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const NoGatewayLaunched = () => {
  return (
    <div className="relative w-full h-full pt-3">
      <Image
        width={1000}
        height={1000}
        src="/images/gateway-empty-bg.jpg"
        className="w-full h-full object-cover rotate-180 absolute rounded-[20px]"
        alt="Gateways"
      />

      <div className="w-full p-10 relative flex flex-col space-y-9">
        <div className="flex flex-col space-y-3.5">
          <h4 className="text-lg font-semibold text-white">
            No gateways have been launched yet
          </h4>
          <p className="text-[#FFFFFF80] font-medium">
            Get started by launching a gateway.
          </p>
        </div>

        <Button
          variant="outline"
          className="bg-inherit text-white font-semibold rounded-[30px] border-[#3A3C41] w-fit h-10 px-5"
        >
          Launch a new gateway <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default NoGatewayLaunched;
