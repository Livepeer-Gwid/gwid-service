import axios from "axios";
import { getAccessToken, removeAccessToken } from "../utils";

const baseUrl = "https://api.gwid.io/api/v1";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const api = axios.create({
  baseURL: baseUrl,
  headers,
  timeout: 60000,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AUTH_EXEMPT_ROUTES = ["/auth/signin", "/auth/signup"];

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const currentPath = window.location.pathname;

    if (status === 401 && !AUTH_EXEMPT_ROUTES.includes(currentPath)) {
      removeAccessToken();
      window.location.href = `/auth/signin?redirect=${currentPath}`;
    }

    return Promise.reject(error);
  }
);
