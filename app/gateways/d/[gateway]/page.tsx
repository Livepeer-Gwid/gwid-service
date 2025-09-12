"use client";

import { use } from "react";
import { useUser } from "@/lib/hooks/use-user";
import { ChevronDown, Copy, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DevConfig from "@/components/gateway/dev-config";
import GatewayImageUploader from "@/components/gateway/gateway-image-uploader";

type Props = {
  params: Promise<{
    gateway: string;
  }>;
};

const Page = ({ params }: Props) => {
  const { gateway } = use(params);

  const { user } = useUser();

  const handleCopy = (text: string) => {
    if (gateway) navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full flex flex-col space-y-7">
      <div className="flex flex-col space-y-5 text-white">
        <h1 className="text-4xl font-semibold">Projectdevops_01</h1>
        <p className="font-semibold">
          Hello {user?.data.data.name?.split(" ")[0]} 👋🏽
        </p>
      </div>

      <div className="flex flex-col space-y-7 text-white">
        <h3 className="font-semibold text-2xl leading-3">Gateway Details</h3>

        <div
          className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7 flex space-x-10"
          style={{
            background: "linear-gradient(to bottom, #171B20, #121213)",
          }}
        >
          <div className="w-[316px]">
            <GatewayImageUploader />
          </div>

          <div className="flex flex-col space-y-5 w-full grow">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-sm text-[#FFFFFF99]">
                  IP Address
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">54.205.233.5</span>
                  <Copy
                    size={14}
                    className="cursor-pointer opacity-70 hover:opacity-100 mb-2"
                    onClick={() => handleCopy("54.205.233.5")}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-sm text-[#FFFFFF99]">Type</p>
                <span className="font-semibold">Transcoding</span>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-sm text-[#FFFFFF99]">
                  Created On
                </p>
                <span className="font-semibold">
                  7/2/2025 <span className="ml-2">10:23:16 AM</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-sm text-[#FFFFFF99]">
                Grafana Url
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  http://54.205.233.5:3000/d/f6324d7b-1c5a-4dfd-8aef-02c34336b795/my-dashboard
                </span>
                <Copy
                  size={14}
                  className="cursor-pointer opacity-70 hover:opacity-100 mb-2"
                  onClick={() =>
                    handleCopy(
                      "http://54.205.233.5:3000/d/f6324d7b-1c5a-4dfd-8aef-02c34336b795/my-dashboard"
                    )
                  }
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-sm text-[#FFFFFF99]">
                ETH Address
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">0xa9824sadjk4487823a9</span>
                <Copy
                  size={14}
                  className="cursor-pointer opacity-70 hover:opacity-100 mb-2"
                  onClick={() => handleCopy("0xa9824sadjk4487823a9")}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-sm text-[#FFFFFF99]">Status</p>
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex items-center gap-1 text-[#8AC96A] font-semibold"
                  )}
                >
                  Running
                  <span
                    className={cn(
                      "size-1.5 rounded-full bg-[#00FF44] animate-pulse mb-1.5"
                    )}
                  />
                </span>
                <Button
                  variant="outline"
                  className="bg-inherit text-white font-semibold rounded-[30px] border-[#3A3C41] w-fit h-10 px-7"
                >
                  <Download size={18} className="mr-2 mb-0.5" /> Download key
                  file
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Development Configuration */}
        <div
          className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7 flex flex-col space-y-5"
          style={{
            background: "linear-gradient(to bottom, #171B20, #121213)",
          }}
        >
          <Button
            variant="link"
            className="hover:no-underline w-fit text-white h-fit p-0"
          >
            Development Configuration <ChevronDown size={20} className="ml-2" />
          </Button>
          <div className="flex items-center justify-between">
            <DevConfig label="Fluid Compute" value="Disable" enabled={false} />
            <DevConfig
              label="Function CPU"
              value="Basic"
              subValue=" 0.6 vCPU       1GB Memory"
            />
            <DevConfig
              label="Deployment Protection"
              value="Standard Protection"
              enabled={true}
            />
            <DevConfig
              label="Skew Protection"
              value="Disable"
              enabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
