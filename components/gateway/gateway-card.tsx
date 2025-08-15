import { BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PanelLeftIcon } from "../icons/panel-left-icon";
import Image from "next/image";
import { Gateway } from "@/lib/types/gateway.type";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  gateway: Gateway;
};

const GatewayCard = ({ gateway }: Props) => {
  return (
    <div
      className="rounded-[10px] border border-[#383A3F] py-6 px-7 w-full text-white shadow-md relative"
      style={{
        background: "linear-gradient(to bottom, #171B20, #121213)",
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center justify-center space-x-2">
          <Image width={24} height={24} src="/icons/python.svg" alt="Python" />
          <p className="font-semibold text-base">{gateway.gateway_name}</p>
        </div>
        <BadgeCheck className="w-5 h-5 text-white" />
      </div>

      <div className="flex items-center space-x-2 text-xs font-medium text-[#FFFFFF80] mb-5">
        <Clock className="w-4 h-4" />
        <span>{format(gateway.created_at, "hh:mm a 'on' dd/MM/yyyy")}</span>
      </div>

      <Link href={`/gateways/d/${gateway.id}`} passHref>
        <Button
          variant="outline"
          className="border border-[#3A3C41] text-white px-5 h-11 w-fit bg-[#171B21] rounded-[30px] text-sm font-medium"
        >
          <PanelLeftIcon className="w-6 h-6 mr-2" />
          See dashboard
        </Button>
      </Link>
    </div>
  );
};

export default GatewayCard;
