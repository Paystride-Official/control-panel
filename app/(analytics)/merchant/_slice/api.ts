import axiosInstance from "@/AxiosInterceptors";
import { SERVER_URL } from "@/Utils/constants";
import {
  getItemFromStorage,
  removeItemFromStorage,
  storeItem,
} from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import axios from "axios";

function getAllMerchantsApi() {
  const authToken = getItemFromStorage("AuthToken");
  const url = `${SERVER_URL}/admin/merchants`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

export const getAllMerchants = async () => {
  try {
    const response: any = await getAllMerchantsApi();
    return { success: response.data };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: response };
  }
};
