import React from "react";
import { navItems } from "./sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileBottomnav = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex items-center justify-between fixed bottom-0 w-screen backdrop-blur-md bg-[#0f0f0f80] px-5 py-3 z-50">
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive = pathname.includes(href);

        return (
          <Link
            title={label}
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3.5 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
              isActive
                ? "bg-[#6C5CE733] text-white"
                : "text-[#FFFFFF99] hover:text-white hover:bg-[#1e1e1e]"
            )}
          >
            <Icon size={22} />
          </Link>
        );
      })}
    </div>
  );
};

export default MobileBottomnav;
