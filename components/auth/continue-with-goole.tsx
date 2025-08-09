import { Button } from "@/components/ui/button";
import Image from "next/image";

const GoogleAuth = ({ text }: { text?: string }) => {
  return (
    <Button variant="outline" className="w-full font-bold mt-4.5 bg-inherit">
      <Image
        width={24}
        height={24}
        src="/images/gwid-google-auth.svg"
        alt="Continue with google"
        className="mr-3"
      />{" "}
      {text ? text : "Continue with Google"}
    </Button>
  );
};

export default GoogleAuth;
