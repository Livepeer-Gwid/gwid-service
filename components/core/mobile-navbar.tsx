"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import MobileSidebar from "../mobile-sidebar";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="backdrop-blur-md bg-[#0f0f0f80] w-full !z-50 fixed top-0 text-white py-3 px-5 flex lg:hidden items-center justify-between">
        <Image
          width={80}
          height={64}
          src="/images/gwid-logo.svg"
          alt="Gwid Logo"
          className="w-20 h-16"
        />

        <Button variant="ghost" className="p-0" onClick={() => setOpen(true)}>
          <Menu className="!w-8 !h-8" />
        </Button>
      </nav>

      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default MobileNavbar;
