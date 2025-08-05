"use client";

import React from "react";
import Image from "next/image";
import useDisclosure from "@/lib/hooks/use-disclosure";
import AwsCostConsent from "./dialogs/aws-cost-consent";

type Props = {
  img: string;
  name: string;
  description: string;
  service: string;
};

const ServiceCard = ({ img, name, description, service }: Props) => {
  const aws = useDisclosure();
  const azure = useDisclosure();
  const gcp = useDisclosure();

  const handleClick = () => {
    switch (service) {
      case "aws":
        aws.onOpen();
        break;
      case "azure":
        azure.onOpen();
        break;
      case "gcp":
        gcp.onOpen();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center space-y-5 rounded-[10px] border-[1.5px] border-[#383A3F] px-4 py-10 w-full self-stretch hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        style={{
          background: "linear-gradient(to bottom, #171B20, #121213)",
        }}
        onClick={handleClick}
      >
        <Image src={img} width={45} height={45} alt={name} />
        <p className="font-semibold text-[#FFFFFF]">{name}</p>
        <p className="text-[#FFFFFF80] text-xs font-medium leading-0">
          {description}
        </p>
      </div>

      <AwsCostConsent open={aws.open} onClose={aws.onClose} />
    </>
  );
};

export default ServiceCard;
