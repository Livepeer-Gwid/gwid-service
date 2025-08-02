"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import {
  ChevronRight,
  LayoutDashboard,
  Home,
  Settings,
  Layers,
  BriefcaseBusiness,
} from "lucide-react";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GatewayIcon from "../icons/gateway-icon";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const navItems = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Gateways", href: "/gateways", icon: GatewayIcon },
  { label: "Add-ons", href: "/addons", icon: Layers },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Settings", href: "/settings", icon: Settings },
];

const Sidebar: FC = () => {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-sidebar-surface h-screen w-[20%] border-r-2 border-[#383A3F] px-7 pb-7 pt-12.5 flex flex-col space-y-7 fixed left-0 top-0 ${nunito.className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-4 text-white">
          <img src="/images/gwid-logo.svg" alt="Gwid" className="w-20 h-8" />
          <Button
            variant="link"
            className="text-white px-0 hover:no-underline text-sm h-fit py-0"
          >
            projectdevops_01 <ChevronRight size={20} className="ml-1.5" />
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="bg-inherit text-[#FAFAFA99] h-9 w-9 border-[#3A3A3A] rounded-[5px] disabled:opacity-100"
          disabled
        >
          <LayoutDashboard size={22} />
        </Button>
      </div>

      <div className="flex flex-col space-y-4">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname.includes(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3.5 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                isActive
                  ? "bg-[#6C5CE733] text-white"
                  : "text-[#FFFFFF99] hover:text-white hover:bg-[#1e1e1e]"
              )}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
