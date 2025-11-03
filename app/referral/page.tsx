import React from "react";
import ReferralIcon from "@/components/icons/referral-icon";
import ReferralCard from "@/components/referral/referral-card";

const Referral = () => {
  return (
    <div className="w-full flex flex-col space-y-9">
      <div className="flex items-center space-x-4">
        <ReferralIcon size={45} className="text-white" />
        <h1 className="md:text-[32px] text-2xl font-semibold text-white">
          Referrals
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        <ReferralCard />
      </div>
    </div>
  );
};

export default Referral;
