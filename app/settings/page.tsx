import AccountInfo from "@/components/settings/account-info";
import AccountIntegrations from "@/components/settings/account-integrations";
import AccountSecurity from "@/components/settings/account-security";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="w-full flex flex-col space-y-9">
      <div className="flex items-center space-x-4">
        <SettingsIcon size={45} className="text-white" />
        <h1 className="text-[32px] font-semibold text-white">
          Account Settings
        </h1>
      </div>

      <hr className="border-[#383A3F80] w-full mb-10" />

      <AccountInfo />

      <AccountSecurity />

      <AccountIntegrations />
    </div>
  );
};

export default Settings;
