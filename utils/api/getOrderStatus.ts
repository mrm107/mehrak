import axios from "axios";
import { getTokenFromCookie } from "../helper/getCooki";

export const getOrdersStatus = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(`${API_URL}/profile/orders/status`, {
      headers: {
        'Authorization': `Bearer ${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching order status:', error);
  }
};