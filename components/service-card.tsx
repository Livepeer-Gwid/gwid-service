import React from "react";
import Image from "next/image";

type Props = {
  img: string;
  name: string;
  description: string;
};

const ServiceCard = ({ img, name, description }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-5 rounded-[10px] border-[1.5px] border-[#383A3F] px-4 py-10 w-full self-stretch hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      style={{
        background: "linear-gradient(to bottom, #171B20, #121213)",
      }}
    >
      <Image src={img} width={45} height={45} alt={name} />
      <p className="font-semibold text-[#FFFFFF]">{name}</p>
      <p className="text-[#FFFFFF80] text-xs font-medium leading-0">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
