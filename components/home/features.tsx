import { Dot } from "lucide-react";
import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const features = [
  {
    title: "Instant Deployment, Zero Hassle.",
    description:
      "Launch high-performance Livepeer nodes with no code, no configs, and no stress. Get started in seconds with an experience built for simplicity and speed.",
  },
  {
    title: "Scales With Your Needs",
    description:
      "Whether you're handling 10 requests or 10,000, GWID auto-scales to meet your demand. With usage-based billing, you're only paying for what’s running, pause, resume, or destroy anytime.",
  },
  {
    title: "Built-in Monitoring",
    description:
      "Track performance, manage workloads, and kill processes — all from one dashboard.",
  },
];

const Features = () => {
  return (
    <div className="container flex flex-col space-y-16">
      <div className="flex flex-col text-white">
        <p className={`${nunito.className} text-sm flex items-center`}>
          <strong className="text-6xl inline pb-7.5 pr-1">.</strong>
          Features
        </p>

        <div className="flex items-center justify-between relative -top-4">
          <h1
            className={`${nunito.className} text-[40px] font-semibold features-fade-text`}
          >
            Essential Features for Smart <br /> Gateway Deployments
          </h1>
          <p
            className={`${nunito.className} font-medium text-white leading-7 text-left`}
          >
            GWID gives you everything you need to deploy and manage <br /> your
            Livepeer gateway. From setup to scaling, it's all seamless.
          </p>
        </div>
      </div>

      <div className={`${nunito.className} flex items-start space-x-10`}>
        {features.map((feat, index) => (
          <div
            className="flex flex-col border-t-2 border-t-white pt-5 space-y-3 w-full"
            key={index}
          >
            <p className="text-2xl font-semibold primary-text-fade">
              {feat.title}
            </p>
            <p className="text-white font-light">{feat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
