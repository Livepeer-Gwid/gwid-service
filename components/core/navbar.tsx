"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "Features", href: "features" },
  { name: "How it works", href: "how-it-works" },
  { name: "Fund a gateway", href: "fund-a-gateway" },
  { name: "Blog", href: "blog" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust height threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        className={cn(
          "flex items-center justify-between space-x-28 border border-[#FFFFFF26] rounded-[20px] px-5 py-1 transition-all duration-300 ease-in-out",
          scrolled ? "backdrop-blur-md bg-[#0f0f0f80]" : "bg-[#7876761A]"
        )}
      >
        <Image
          width={80}
          height={64}
          src="/images/gwid-logo.svg"
          alt="Gwid Logo"
          className="w-20 h-16"
        />

        <div className="flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <div
              className={`${active === link.href ? "bg-gradient-to-b" : "inherit"} from-[#fff] to-[#3A3C41] p-[1.1px] rounded-[15px] transition-all duration-300 ease-in-out`}
              key={index}
            >
              <ScrollLink
                activeClass="active"
                to={link.href}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                onSetActive={() => setActive(link.href)}
              >
                <Button
                  variant="link"
                  className={`hover:no-underline hover:bg-[#171B21] text-white rounded-[15px] font-medium ${active === link.href ? "bg-[#171B21]" : "bg-transparent"}`}
                >
                  {link.name}
                </Button>
              </ScrollLink>
            </div>
          ))}
        </div>

        <Link href="/auth/signup" passHref>
          <Button className="px-6">
            Launch <ArrowUpRight size={20} className="ml-2" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
