import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

type Props = {
  label: string;
  value: string;
  subValue?: string;
  enabled?: boolean;
};

const DevConfig = ({ label, value, subValue, enabled }: Props) => {
  return (
    <div className="flex flex-col space-y-1">
      <p className="text-sm text-[#FFFFFFB2] font-semibold">{label}</p>
      <div className="flex items-center gap-2">
        {enabled && enabled === true ? (
          <CheckCircle size={16} className="" />
        ) : !enabled && enabled === false ? (
          <XCircle size={16} className="" />
        ) : (
          <> </>
        )}
        <span className="font-medium">{value}</span>
        {subValue && (
          <span className="text-xs font-medium text-white">{subValue}</span>
        )}
      </div>
    </div>
  );
};

export default DevConfig;
