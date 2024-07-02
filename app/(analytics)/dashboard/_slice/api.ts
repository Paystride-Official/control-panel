import axiosInstance from "@/AxiosInterceptors";
import { SERVER_URL } from "@/Utils/constants";
import {
  getItemFromStorage,
  removeItemFromStorage,
  storeItem,
} from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser, User } from "@/types/types";
import axios from "axios";

function getDashboardAnalyticsApi() {
  const authToken = getItemFromStorage("AuthToken");
  const url = `${SERVER_URL}/admin/dashboard`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

function signOutApi() {
  const url = `${SERVER_URL}/logout`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

export const getDashboardAnalytics = async () => {
  try {
    const response: any = await getDashboardAnalyticsApi();
    return { success: response.data };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: response };
  }
};

export const signOutAccount = async () => {
  try {
    const response = await signOutApi();

    removeItemFromStorage("AuthToken");
    //romve from local storage

    removeItemFromStorage("user-info");

    // toast.success("logged out successfully");

    return { success: response };
  } catch (error) {
    const response = handleAxiosError(error);
    return { error: response };
  }
};
