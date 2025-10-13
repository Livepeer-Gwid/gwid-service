"use client";

import IntegrationSetting from "./integration-button";

const AccountIntegrations = () => {
  return (
    <div
      className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7 flex flex-col space-y-7 text-white"
      style={{
        background: "linear-gradient(to bottom, #171B20, #121213)",
      }}
    >
      <h3 className="text-xl font-semibold">Account Integrations</h3>

      <div className="grid grid-cols-3 gap-4">
        <IntegrationSetting
          name="Your dedicated cloud Account"
          img="/images/gwid-logo.svg"
          service="gwid"
          onClick={() => console.log("gwid")}
        />
        <IntegrationSetting
          name="Amazon Web Services"
          img="/icons/gwid-aws.svg"
          service="aws"
          onClick={() => console.log("aws")}
        />

        <IntegrationSetting
          name="Google Cloud Platform"
          img="/icons/gwid-gcp.svg"
          service="gcp"
          onClick={() => console.log("gcp")}
        />
      </div>
    </div>
  );
};

export default AccountIntegrations;
