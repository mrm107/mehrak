import axios from "axios";
import { getTokenFromCookie } from "../helper/getCooki";

interface UpdateUserData {
  first_name: string;
  last_name: string;
  gender: string; // احتمالاً عددی باشد مثل "1" یا "2" برای مرد و زن
  email: string;
  password: string;
  confirm: string; // تایید رمز عبور
}

interface UpdateUserResponse {
  success: boolean;
  data: {
    message: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const updateUser = async (
  userData: UpdateUserData
): Promise<UpdateUserResponse> => {  // Changed return type to UpdateUserResponse
  try {
    const response = await axios.post(
      `${API_URL}/me`,
      {
        first_name: userData.first_name,
        last_name: userData.last_name,
        gender: userData.gender,
        email: userData.email,
        password: userData.password,
        confirm: userData.confirm,
      },
      {
        headers: {
          'Authorization': `Bearer ${getTokenFromCookie()}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("User updated successfully:", response.data);
    return response.data;  // Return the response data
  } catch (error: any) {
    console.error("Error updating user:", error.response?.data || error.message);
    throw error;
  }
};

export default updateUser;
