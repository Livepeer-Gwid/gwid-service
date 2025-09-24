import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="flex flex-col min-h-screen h-screen relative overflow-x-hidden no-scrollbar">
        <div className="container py-5">
          <Link href="/" passHref>
            <Image
              width={80}
              height={64}
              src="/images/gwid-logo.svg"
              alt="Gwid"
            />
          </Link>
        </div>

        <div className="absolute top-20 inset-x-0 bottom-0 bg-black/50 z-[-9] h-full scale-110" />

        <Image
          width={1000}
          height={1000}
          src="/images/gwid-auth-bg.svg"
          alt=""
          className="w-full h-full max-h-full absolute top-20 scale-110 object-cover -z-10"
        />

        <div className="flex w-full h-full items-center justify-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
