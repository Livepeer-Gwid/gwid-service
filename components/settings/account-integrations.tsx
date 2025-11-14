"use client";

import IntegrationSetting from "./integration-button";
import { useUser } from "@/lib/hooks/use-user";

const AccountIntegrations = () => {
  const { user } = useUser();

  return (
    <div
      className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7 flex flex-col space-y-7 text-white"
      style={{
        background: "linear-gradient(to bottom, #171B20, #121213)",
      }}
    >
      <h3 className="text-xl font-semibold">Account Integrations</h3>

      {!user?.data.data.aws_credentials && (
        <h3 className="text-center font-semibold">
          You do not have any active integrations.
        </h3>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {/*<IntegrationSetting
          name="Your dedicated cloud Account"
          img="/images/gwid-logo.svg"
          service="gwid"
          onClick={() => console.log("gwid")}
        />*/}

        {user?.data.data.aws_credentials && (
          <IntegrationSetting
            name="Amazon Web Services"
            img="/icons/gwid-aws.svg"
            service="aws"
            onClick={() => console.log("aws")}
          />
        )}

        {/*<IntegrationSetting
          name="Google Cloud Platform"
          img="/icons/gwid-gcp.svg"
          service="gcp"
          onClick={() => console.log("gcp")}
        />*/}
      </div>
    </div>
  );
};

export default AccountIntegrations;
