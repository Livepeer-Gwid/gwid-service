import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="w-full flex flex-col space-y-9">
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/getting-started.svg"
          width={45}
          height={45}
          alt="Getting Started"
        />
        <h1 className="text-[32px] font-semibold text-white">
          Getting Started
        </h1>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="flex items-center text-white space-x-2">
          <Image src="/icons/info-icon.svg" alt="Info" width={20} height={20} />
          <p className="text-sm text-[#FFFFFFB2]">Info</p>
        </div>
        <p className="text-[#FFFFFFB2] font-semibold">
          Select an application to sideload with your Gateway to get started on
          Gwid.
        </p>
      </div>

      <div className="flex items-center space-x-7 pt-5 pb-2">
        <ServiceCard
          name="Amazon Web Services"
          description="Host in your own cloud"
          img="/icons/gwid-aws.svg"
        />
        <ServiceCard
          name="Microsoft Azure"
          description="Host in your own cloud"
          img="/icons/gwid-azure.svg"
        />
        <ServiceCard
          name="Google Cloud Platform"
          description="Host in your own cloud"
          img="/icons/gwid-gcp.svg"
        />
      </div>

      <div className="relative w-full h-full pt-3">
        <img
          src="/images/gateway-empty-bg.jpg"
          className="w-full h-full object-cover rotate-180 absolute rounded-[20px]"
          alt="Gateways"
        />

        <div className="w-full p-10 relative flex flex-col space-y-9">
          <div className="flex flex-col space-y-3.5">
            <h4 className="text-lg font-semibold text-white">
              Want to test Gwid without linking your cloud account?
            </h4>
            <p className="text-[#FFFFFF80] font-medium">
              Get started on Gwid and eject to your own cloud account later.
            </p>
          </div>

          <Button
            variant="outline"
            className="bg-[#25213D] text-white font-semibold rounded-[30px] border-[#3A3C41] w-fit h-10 px-5"
          >
            Deploy on the Gwid Cloud <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
