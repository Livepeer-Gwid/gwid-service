"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Gift, Link as LinkIcon, Share2, Gem } from "lucide-react";
import { Input } from "@/components/ui/input";

const ReferralCard = () => {
  const inviteLink = "http://gwid.io/testsite4.biz";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(inviteLink);
  };

  return (
    <div
      className="border-[1.5px] border-[#383A3F] rounded-[20px] p-2.5 pb-7 flex flex-col space-y-5"
      style={{
        background: "linear-gradient(to bottom, #171B20, #121213)",
      }}
    >
      <Image
        alt="referral"
        src="/images/referral-img.jpg"
        width={400}
        height={100}
        className="min-w-full h-[150px] !rounded-[10px]"
      />

      <h3 className="text-[32px] font-bold text-white">Invite & Profit</h3>

      <p className="font-semibold text-[#FFFFFFB2] leading-2">How it works</p>

      <div className="flex items-center space-x-3">
        <Share2 className="h-4 w-4 text-[#FFFFFFCC]" />
        <p className="font-semibold text-sm text-white">Share a link</p>
      </div>

      <div className="flex flex-col space-y-5">
        {/* Rewards */}
        <div className="space-y-3 text-sm text-[#FFFFFFCC]">
          <div className="flex items-start space-x-3">
            <Gift className="h-4 w-4 mt-[2px]" />
            <p className="text-sm font-semibold">
              Your friend gets{" "}
              <span className="font-semibold text-white">30 credits</span> when
              they launch their gateway
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <Gem className="h-4 w-4 mt-[2px]" />
            <p className="text-sm font-semibold">
              You receive{" "}
              <span className="font-semibold text-white">30 credits</span> for
              each referral
            </p>
          </div>
        </div>

        {/* Invite link */}
        <div className="space-y-2">
          <p className="text-sm text-[#FFFFFFCC]">Your invite link:</p>
          <div className="flex items-center bg-[#171B21] border border-[#3A3C41] rounded-[20px] h-10 pl-5">
            <LinkIcon className="h-4 w-4 text-[#9CA3AF]" />
            <Input
              value={inviteLink}
              readOnly
              className="border-none bg-transparent text-sm text-[#E5E7EB] focus-visible:ring-0 focus-visible:ring-offset-0 h-full"
            />
            <Button
              size="sm"
              className="bg-[#6E56CF] hover:bg-[#7C65D9] text-white rounded-[20px] px-4 h-full"
              onClick={handleCopy}
            >
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralCard;
