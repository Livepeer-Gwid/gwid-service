"use client";

import { FC, PropsWithChildren } from "react";
import Sidebar from "../core/sidebar";
import { HelpCircle, UserCircle } from "lucide-react";
import { Nunito } from "next/font/google";
import { useUser } from "@/lib/hooks/use-user";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useUser();

  return (
    <div className="bg-app-surface h-full flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col py-5">
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
        {!isLoading && (
          <main className={`px-10 ${nunito.className} h-full ml-[20%]`}>
            {children}
          </main>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
