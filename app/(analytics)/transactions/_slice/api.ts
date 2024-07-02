import axiosInstance from "@/AxiosInterceptors";
import { SERVER_URL } from "@/Utils/constants";
import { getItemFromStorage } from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import axios from "axios";

function getAllTransactionApi() {
  const authToken = getItemFromStorage("AuthToken");
  const url = `${SERVER_URL}/admin/transactions`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

export const getAllTransaction = async () => {
  try {
    const response: any = await getAllTransactionApi();
    return { success: response.data };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: response };
  }
};
