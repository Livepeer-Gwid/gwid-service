import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

const nunito = Nunito({ subsets: ["latin"] });

const AwsCostConsent = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTitle hidden>AWS Cost Consent</DialogTitle>
      <DialogContent
        className={`bg-[#FFFFFF0F] border-2 border-[#383A3F] w-xl text-white p-6 rounded-xl ${nunito.className}`}
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col mt-4">
          <h4 className="font-bold mb-3">Base AWS cost consent</h4>

          <p className="text-sm font-semibold text-[#FFFFFFB2]">
            Gwid will create the underlying infrastructure in your own AWS
            account. You will be separately charged by AWS for this
            infrastructure. The cost for this base infrastructure is as follows:
          </p>

          <h4 className="font-extrabold text-2xl my-5">$224.58 / mo</h4>

          <p className="text-sm font-semibold text-[#FFFFFFB2] mb-4">
            The base AWS infrastructure covers up to 2 vCPU and 4GB of RAM.
            Separate from the AWS cost, Gwid charges based on your resource
            usage.
          </p>

          <p className="text-sm font-semibold text-[#FFFFFFB2] mb-7">
            You can use your AWS credits to pay for the underlying
            infrastructure, and if you are a startup with less than 5M in
            funding, you may qualify for our startup program, which allows you
            to use Gwid for free for 6 months.
          </p>

          <div className="flex flex-col space-y-2 mb-8">
            <div className="flex items-center text-white space-x-2">
              <Image
                src="/icons/info-icon.svg"
                alt="Info"
                width={20}
                height={20}
              />
              <p className="text-sm text-[#FFFFFFB2]">Info</p>
            </div>

            <p className="text-sm font-semibold text-[#FFFFFFB2]">
              All AWS resources will be automatically deleted when you delete
              your Gwid project.
            </p>
          </div>

          <Link href="/dashboard/aws" passHref>
            <Button className="bg-[#25213D] border-[#3A3C41] w-fit">
              Continue <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AwsCostConsent;
