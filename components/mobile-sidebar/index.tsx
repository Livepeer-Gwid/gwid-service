import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const navLinks = [
  { name: "Home", href: "home" },
  { name: "Features", href: "features" },
  { name: "How it works", href: "how-it-works" },
  { name: "Fund a gateway", href: "/fund~" },
  { name: "Blog", href: "blog" },
];

const MobileSidebar = ({ open, onClose }: Props) => {
  const [active, setActive] = useState<string>("home");

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (href: string) => {
    setActive(href);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node) && open) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed h-full w-screen inset-0 bg-black/50 backdrop-blur-md block lg:hidden transition-all duration-300 ease-in-out",
          open ? "opacity-100 z-50" : "opacity-0 -z-20"
        )}
      >
        <div className="relative h-full w-full">
          <div
            className={cn(
              "absolute h-full w-2/3 bg-black text-white p-5 flex flex-col space-y-4 transition-all duration-300 delay-100 ease-in-out",
              open ? "-right-1" : "-right-[500px]"
            )}
            ref={containerRef}
          >
            <div className="flex items-center justify-between w-full">
              <Image
                width={80}
                height={64}
                src="/images/gwid-logo.svg"
                alt="Gwid Logo"
                className="w-16 h-16"
              />
              <Button variant="ghost" onClick={onClose} className="px-0">
                <X className="!w-6 !h-6" />
              </Button>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ name, href }) => {
                const isActive = active === href;

                return (
                  <ScrollLink
                    key={href}
                    activeClass="active"
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    onSetActive={() => handleClick(href)}
                  >
                    <div
                      key={href}
                      className={cn(
                        "flex items-center gap-3.5 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                        isActive
                          ? "bg-[#6C5CE733] text-white"
                          : "text-[#FFFFFF99] hover:text-white hover:bg-[#1e1e1e]"
                      )}
                    >
                      {name}
                    </div>
                  </ScrollLink>
                );
              })}
            </div>
            <Link href="/auth/signup" passHref>
              <Button className="px-6 w-full mt-2">
                Launch <ArrowUpRight size={20} className="ml-2" />
              </Button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
