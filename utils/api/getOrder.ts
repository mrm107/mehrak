import axios from 'axios';
import { getTokenFromCookie } from '../helper/getCooki';

export const fetchOrders = async (perPage: number, status: number) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(`${API_URL}/profile/orders`, {
      headers: {
        'Authorization': `Bearer ${getTokenFromCookie()}`,
      },
      params: {
        page: perPage,
        status: status,
      },
    });
    return response.data
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};