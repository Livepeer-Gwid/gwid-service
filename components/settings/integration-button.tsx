import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {
  img: string;
  name: string;
  service: string;
  onClick: () => void;

  disabled?: boolean;
};

const IntegrationSetting = ({
  img,
  name,
  service,
  onClick,
  disabled,
}: Props) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center space-y-3 rounded-[10px] border-[1.5px] border-[#383A3F] px-4 py-5 w-full self-stretch disabled:blur-[5px] disabled:cursor-not-allowed disabled:pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #171B20, #121213)",
        }}
        onClick={handleClick}
      >
        <Image src={img} width={50} height={50} alt={name} className="pb-1" />
        <p className="font-semibold text-sm text-[#FFFFFF]">{name}</p>
        <Button
          title={service}
          className="bg-[#25213D] border-[#3A3C41] w-fit"
          size="sm"
          disabled={disabled}
        >
          Disconnect
        </Button>
      </div>
    </>
  );
};

export default IntegrationSetting;
