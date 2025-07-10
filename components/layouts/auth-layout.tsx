import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="flex flex-col min-h-screen h-screen relative">
        <div className="container py-5">
          <img src="/images/gwid-logo.svg" alt="Gwid" className="w-20 h-16" />
        </div>

        <img
          src="/images/gwid-auth-bg.svg"
          alt=""
          className="w-full h-full max-h-full absolute -bottom-48 object-cover -z-10"
        />

        <div className="flex w-full h-[80%] items-center justify-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
