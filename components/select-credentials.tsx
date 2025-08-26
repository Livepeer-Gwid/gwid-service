import { getAWSCredentials } from "@/lib/api/credentials.api";
import { GlobalKeys } from "@/lib/constants/keys";
import { GetAWSCredentialsResponse } from "@/lib/types/aws-credentials.type";
import { ResponseError } from "@/lib/types/error.type";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Loader2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { StackSchemType } from "@/lib/schema/select-stack.schema";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  form: UseFormReturn<StackSchemType>;
};

const SelectCredentials = ({ form }: Props) => {
  const { data, isLoading, isSuccess, isError } = useQuery<
    AxiosResponse<GetAWSCredentialsResponse>,
    ResponseError
  >({
    queryKey: [GlobalKeys.GET_AWS_CREDENTIALS],
    queryFn: getAWSCredentials,
  });

  return (
    <div
      className="border-[1.5px] border-[#383A3F] rounded-[10px] px-5 py-7"
      style={{
        background: "linear-gradient(to bottom, #171B20, #121213)",
      }}
    >
      <h1 className="text-xl font-bold mb-5">Choose credentials</h1>

      <Select
        value={form.watch("credentials_id")}
        onValueChange={(value) => form.setValue("credentials_id", value)}
      >
        <SelectTrigger className="w-full text-white !bg-[#171B2080] !border-2 border-[#383A3F] !rounded-[10px] !h-12 m-0 [&>svg]:!text-white [&>svg]:size-5">
          <SelectValue placeholder="Select a credential" />
        </SelectTrigger>
        <SelectContent className="text-white bg-[#000] border-[1.5px] border-[#383A3F]">
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="ml-2 text-sm">Loading...</span>
            </div>
          ) : isError ? (
            <div className="py-2 text-sm text-red-500 text-center">
              Error loading credentials
            </div>
          ) : isSuccess && data && data.data.data.length > 0 ? (
            data.data.data.map((cred) => (
              <SelectItem key={cred.id} value={cred.id}>
                {cred.id}
              </SelectItem>
            ))
          ) : (
            <div className="py-2 flex flex-col space-y-1 items-center">
              <p className="text-sm text-white font-semibold text-center leading-2.5 mb-2">
                {" "}
                No credentials found
              </p>
              <Link href="/dashboard/aws">
                <Button size="sm" variant="link" className="text-white">
                  Create New
                </Button>
              </Link>
            </div>
          )}
        </SelectContent>
        <p className="text-red-500 text-xs pt-2">
          {form.formState.errors.credentials_id?.message}
        </p>
      </Select>
    </div>
  );
};

export default SelectCredentials;
