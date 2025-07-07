"use client";

import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Fund a gateway", href: "/gateway" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex items-center justify-between space-x-28 border border-[#FFFFFF26] rounded-[20px] bg-[#7876761A] px-5 py-1">
        <img
          src="/images/gwid-logo.svg"
          alt="Gwid Logo"
          className="w-20 h-16"
        />

        <div className="flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <div
              className={`${pathname === link.href ? "bg-gradient-to-b" : "inherit"} from-[#fff] to-[#3A3C41] p-[1.1px] rounded-[15px]`}
              key={index}
            >
              <Link href={link.href} passHref>
                <Button
                  variant="link"
                  className={`hover:no-underline hover:bg-[#171B21] text-white rounded-[15px] font-medium ${pathname === link.href ? "bg-[#171B21]" : "bg-transparent"}`}
                >
                  {link.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <Button className="px-6">
          Launch <ArrowUpRight size={20} className="ml-2" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
