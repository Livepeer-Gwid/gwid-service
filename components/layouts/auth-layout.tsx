import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="flex flex-col min-h-screen h-screen relative overflow-x-hidden no-scrollbar">
        <div className="container py-5">
          <img src="/images/gwid-logo.svg" alt="Gwid" className="w-20 h-16" />
        </div>

        <div className="absolute top-20 inset-x-0 bottom-0 bg-black/50 z-[-9] h-full scale-110" />

        <img
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
