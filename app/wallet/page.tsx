"use client";

import { Button } from "@/components/ui/button";
import WalletBtn from "@/components/wallet/wallet-btn";
import Image from "next/image";

const Wallet = () => {
  return (
    <div className="w-full flex flex-col space-y-16">
      <div className="flex flex-col space-y-3">
        <h1 className="text-[40px] font-semibold text-white">
          Fund Your Gateway
        </h1>
        <p className="font-semibold text-white">
          Add ETH to keep your gateway running smoothly.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-10">
        <div
          className="border-[1.5px] border-[#383A3F] rounded-[10px] px-12 py-8 w-full grid xl:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2"
          style={{
            background: "linear-gradient(to bottom, #171B20, #121213)",
          }}
        >
          <WalletBtn
            icon={
              <Image
                src="/icons/fund-gateway.svg"
                alt="Connect"
                width={24}
                height={24}
              />
            }
            name="Fund Gateway"
            onClick={() => console.log("Fund Gateway")}
          />
          <WalletBtn
            icon={
              <Image
                src="/icons/deposit-eth.svg"
                alt="deposit"
                width={24}
                height={24}
              />
            }
            name="Deposit ETH"
            onClick={() => console.log("Deposit ETH")}
          />
          <WalletBtn
            icon={
              <Image
                src="/icons/withdraw-eth.svg"
                alt="withdraw"
                width={24}
                height={24}
              />
            }
            name="Withdraw ETH"
            onClick={() => console.log("Withdraw ETH")}
          />
          <WalletBtn
            icon={
              <Image
                src="/icons/reserve-eth.svg"
                alt="reserve"
                width={24}
                height={24}
              />
            }
            name="Reserve ETH"
            onClick={() => console.log("Reserve ETH")}
          />
        </div>

        <Button className="w-fit">
          <Image
            src="/icons/connect-wallet.svg"
            alt="Connect Wallet"
            className="mr-1"
            width={24}
            height={24}
          />
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Wallet;
