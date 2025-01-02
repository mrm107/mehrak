import axios from "axios";
import { getTokenFromCookie } from "../helper/getCooki";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getStatus = async () => {
  const token = getTokenFromCookie();
  if (!token) {
    throw new Error("No token found in cookie");
  }

  try {
    const response = await axios.get(`${API_URL}/profile/orders/status`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch user data: " + response.statusText);
    }
  } catch (error: any) {
    console.error("Error fetching user data", error);
    throw new Error(error.response?.data?.message || error.message); 
  }
};

