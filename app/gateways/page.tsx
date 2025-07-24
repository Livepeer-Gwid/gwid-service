import React from "react";
import { Button } from "@/components/ui/button";
import { List, LayoutGrid, Plus } from "lucide-react";
import SearchGateway from "@/components/gateway/search-gateway";
import GatewayCard from "@/components/gateway/gateway-card";
import Image from "next/image";
import Link from "next/link";

const Gateways = () => {
  return (
    <div className="w-full flex flex-col space-y-9">
      <div className="flex items-center space-x-4">
        <Image
          src="/icons/gateway-header.svg"
          width={45}
          height={45}
          alt="Gateway"
        />
        <h1 className="text-[32px] font-semibold text-white">Gateways</h1>
      </div>

      <div className="flex flex-col space-y-7">
        <div className="flex items-center space-x-7 h-11">
          <SearchGateway />

          <div className="flex items-center bg-[#171B2080] border border-[#383A3F] rounded-[10px] h-11">
            <Button
              type="button"
              variant="ghost"
              className="px-3 h-full border-r border-[#2C2C2E] text-[#FFFFFFB2] hover:bg-[#6C5CE71A]"
            >
              <LayoutGrid size={18} />
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="px-3 h-full text-[#FFFFFFB2] hover:bg-[#6C5CE71A]"
            >
              <List size={18} />
            </Button>
          </div>

          <Link href="/auth/gateway" passHref>
            <Button className="h-full">
              <Plus className="mr-2" /> Launch New Gateway
            </Button>
          </Link>
        </div>

        <div className="w-full grid grid-cols-3 gap-6 pb-7">
          {[...Array(10)].map((_, i) => (
            <GatewayCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gateways;
