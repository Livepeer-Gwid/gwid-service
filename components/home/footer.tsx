import React from "react";
import { Button } from "../ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Why Us", href: "#" },
  { name: "Mission", href: "#" },
  { name: "Works", href: "#" },
  { name: "Services", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Articles", href: "#" },
];

const Footer = () => {
  return (
    <div className="px-8 flex flex-col space-y-2">
      <Image width={80} height={64} src="/images/gwid-logo.svg" alt="Gwid" />

      <hr className="border-white opacity-20 w-full" />

      <div className="flex md:flex-row flex-col grow items-start justify-between md:space-x-10 space-y-7 md:space-y-0 text-white mt-5">
        <div className="flex flex-col space-y-5 relative self-stretch">
          <p className="text-sm font-medium text-left">Address</p>
          <p className="text-sm text-left text-gray-400 w-[250px] md:leading-normal leading-6">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <p className="text-xs absolute md:bottom-0 -bottom-1 left-0 text-gray-500">
            &copy; 2025 — Copyright
          </p>
        </div>

        <div className="flex flex-col space-y-5 relative h-full">
          <p className="text-sm font-medium text-left">Quick Links</p>
          <div className="flex flex-col space-y-3">
            {quickLinks.map((link, index) => (
              <p
                key={index}
                className="text-sm text-left font-normal text-gray-400"
              >
                {link.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-5 relative h-full">
          <p className="text-sm font-medium text-left">Contact Us</p>
          <div className="flex flex-col space-y-3">
            <p className="text-sm text-left font-normal text-gray-400">
              +1 891 989-11-91
            </p>
            <p className="text-sm text-left font-normal text-gray-400">
              help@gwid.io
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#FFFFFF1A] w-[40px] h-[40px] flex items-center justify-center"
          >
            <Instagram size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#FFFFFF1A] w-[40px] h-[40px] flex items-center justify-center"
          >
            <Facebook size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#FFFFFF1A] w-[40px] h-[40px] flex items-center justify-center"
          >
            <Youtube size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
