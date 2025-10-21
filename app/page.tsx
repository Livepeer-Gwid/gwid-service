import React from "react";
import Navbar from "@/components/core/navbar";
import { Nunito } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Features from "@/components/home/features";
import EffortlessGatewayOps from "@/components/home/effortless-gateway-ops";
import Footer from "@/components/home/footer";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "@/components/core/mobile-navbar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main>
      <section className="w-full h-auto relative">
        <Image
          width={1000}
          height={1000}
          src="/images/gwid-hero-section.svg"
          className="w-screen h-full absolute object-cover -z-10 object-top lg:bottom-16"
          alt="Gwid Hero Section"
        />

        {/* Desktop Nav */}
        <div className="w-full fixed z-50 hidden lg:block">
          <div className="w-fit mx-auto py-5">
            <Navbar />
          </div>
        </div>

        {/* Mobile Nav */}
        <MobileNavbar />

        <div
          className="flex flex-col h-full lg:pt-60 pt-32 justify-center items-center"
          id="home"
        >
          <div className="container flex flex-col space-y-10">
            <h2 className="lg:text-[55px] md:text-3xl text-[28px] font-medium text-center fade-text md:leading-11 lg:leading-normal">
              Revolutionizing Gateway <br /> Deployment with Livepeer.
            </h2>
            <p
              className={`${nunito.className} text-[#AAB4C0] font-medium text-center md:text-xl text-lg relative -top-2`}
            >
              Build AI inference and video streaming infrastructure that
              auto-scales, <br /> costs less, and launches in one click.
            </p>
            <Link href="/auth/signup" passHref className="w-fit mx-auto">
              <Button className="w-fit mx-auto px-5">
                Get Started <ArrowUpRight size={20} className="ml-2" />
              </Button>
            </Link>
            <div className="w-3/5 mx-auto">
              <Image
                width={1000}
                height={1000}
                src="/images/hero-section-mockup.svg"
                className="w-full mx-auto"
                alt="Gwid Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="w-full h-full rounded-t-[50px] lg:py-20 py-16 flex flex-col lg:space-y-20 space-y-12"
          style={{
            background:
              "linear-gradient(to bottom, #393979 10%, #121213 50%, #000000 100%)",
          }}
        >
          <div className="container">
            <div className="flex flex-col space-y-8">
              <h1
                className={`${nunito.className} text-white text-center lg:text-[45px] md:text-4xl text-2xl font-semibold lg:leading-16`}
              >
                Get up and running in minutes, <br /> on infrastructure you
                cannot outgrow.
              </h1>
              <p
                className={`${nunito.className} text-white text-center font-medium leading-[30px]`}
              >
                Gwid manages battle-tested infrastructure in your own AWS, GCP,
                or Azure account, so you can <br className="hidden lg:block" />{" "}
                rely on the most performant, scalable, and dependable hosting
                from day 1.
              </p>
              <Link href="/auth/signup" passHref className="w-fit mx-auto">
                <Button
                  className={`${nunito.className} w-fit mx-auto px-6 py-8 rounded-[100px] bg-[#FFFFFF26] border-0 text-base font-normal`}
                >
                  Get Started <ArrowRight size={20} className="ml-3" />
                </Button>
              </Link>
            </div>
          </div>

          <Features />
        </div>
      </section>

      <section id="how-it-works">
        <div
          className="w-full h-full rounded-[50px] md:py-20 py-16 mt-10 flex flex-col space-y-20"
          style={{
            backgroundImage:
              " linear-gradient(135deg, #1A2F51 10%, #5B6384 100%)",
          }}
        >
          <EffortlessGatewayOps />
        </div>
      </section>

      <section id="fund-a-gateway">
        <div className="container flex flex-col space-y-10 mt-56">
          <h1 className="lg:text-5xl md:text-4xl text-2xl text-white text-center md:leading-16 leading-12">
            Reinvent media — without the <br /> massive price tag.
          </h1>
          <Link href="/auth/signup" passHref className="mx-auto ">
            <Button className="w-fit px-5">
              Launch Gateway <ArrowUpRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <div className="relative w-full flex items-center justify-center">
          <Image
            width={1000}
            height={1000}
            src="/images/gwid-footer-pattern.svg"
            className="w-full"
            alt=""
          />
          <Image
            width={600}
            height={600}
            src="/images/gwid-pattern-logo.svg"
            className="absolute lg:bottom-10 bottom-0"
            alt=""
          />
        </div>
      </section>

      <footer id="blog">
        <div className="bg-[#0C0C0D] py-3 w-full">
          <Footer />
        </div>
      </footer>
    </main>
  );
}
