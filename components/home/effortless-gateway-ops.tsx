import React from "react";
import { Nunito } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const EffortlessGatewayOps = () => {
  return (
    <div className="container">
      <div className="flex items-center lg:space-x-10">
        <div className="flex flex-col space-y-10">
          <h1 className="md:text-[40px] text-3xl font-semibold leading-[43.2px] text-white">
            Effortless gateway ops for Livepeer builders.
          </h1>

          <div className="flex flex-col border-b-2 border-white pb-7 lg:w-11/12 w-full">
            <p
              className={`${nunito.className} text-white font-semibold text-2xl`}
            >
              Instant Gateway Launch
            </p>
          </div>

          <div className="flex flex-col border-b-2 border-white pb-7 md:space-y-5 space-y-3 lg:w-11/12 w-full">
            <p
              className={`${nunito.className} text-white font-semibold text-2xl`}
            >
              Smart Scaling, No Limits
            </p>
            <p className={`${nunito.className} text-white font-medium`}>
              GWID auto-scales to match your traffic,zero config needed. Whether
              it&apos;s a spike or steady growth, your gateway stays fast and
              reliable.
            </p>
          </div>

          <div className="flex flex-col border-b-2 border-white pb-7 lg:w-11/12 w-full">
            <p
              className={`${nunito.className} text-white font-semibold text-2xl`}
            >
              Fair Pricing, No Waste
            </p>
          </div>

          <div className="flex flex-col border-b-2 border-white pb-7 lg:w-11/12 w-full">
            <p
              className={`${nunito.className} text-white font-semibold text-2xl`}
            >
              Full Visibility, Total Control
            </p>
          </div>
        </div>

        <div
          className="w-full h-[743px] rounded-[20px] lg:flex items-center justify-center px-8 hidden"
          style={{
            backgroundImage:
              "linear-gradient(125deg, #121213 0%, #121213 30%, #616167 100%)",
          }}
        >
          <Image
            width={1000}
            height={1000}
            src="/images/feature-mockup.svg"
            className="w-full"
            alt="Dashboard Mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default EffortlessGatewayOps;
