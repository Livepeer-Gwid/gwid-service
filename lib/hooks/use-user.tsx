import { useQuery } from "@tanstack/react-query";
import { UserKeys } from "@/lib/constants/keys/user.key";
import { getUserProfile } from "../api/user.api";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: [UserKeys.GET_USER_PROFILE],
    queryFn: getUserProfile,
    retry: 1,
    staleTime: 0,
  });

  return { isLoading, user };
};
