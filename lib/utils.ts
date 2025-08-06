import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "universal-cookie";
import { ResponseError } from "./types/error.type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cookies = new Cookies();

export const accessTokenKey = "gwid_key";

export const getAccessToken = () => cookies.get(accessTokenKey);

export const removeAccessToken = () =>
  cookies.remove(accessTokenKey, {
    path: "/",
  });

export const setAccessToken = (token: string) => {
  cookies.set(accessTokenKey, token, {
    path: "/",
    secure: true,
    sameSite: "strict",
  });
};

export const extractErrorMessage = (err: ResponseError): string => {
  if ("error" in err.response.data) {
    return err.response.data.error;
  } else {
    return "Something went wrong. Please try again later.";
  }
};
