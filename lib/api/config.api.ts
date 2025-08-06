import axios from "axios";
import { getAccessToken } from "../utils";

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
