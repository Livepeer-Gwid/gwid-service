import { FC, PropsWithChildren } from "react";
import Sidebar from "../core/sidebar";
import { Button } from "../ui/button";
import { HelpCircle, UserCircle } from "lucide-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-app-surface h-screen overflow-y-auto no-scrollbar">
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="w-full h-full flex flex-col overflow-auto no-scrollbar py-5">
          <div className="w-full flex justify-end items-center space-x-7 px-7">
            <button className="flex items-center gap-2 text-[#FFFFFFB2] transition-colors duration-200">
              <HelpCircle className="w-5 h-5" strokeWidth={1.5} />
              <span className={`font-medium ${nunito.className}`}>Help</span>
            </button>
            <button className="flex items-center gap-2 text-[#FFFFFFB2] transition-colors duration-200">
              <UserCircle className="w-5 h-5" strokeWidth={1.5} />
              <span className={`font-medium ${nunito.className}`}>Account</span>
            </button>
          </div>
          <main className={`px-10 ${nunito.className} h-full`}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
