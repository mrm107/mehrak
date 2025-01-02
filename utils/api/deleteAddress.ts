import axios from 'axios';
import { getTokenFromCookie } from '../helper/getCooki';

export const deleteAddress = async (addressId: number) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.delete(`${API_URL}/profile/addresses/${addressId}`, {
      headers: {
        Authorization: `Bearer ${getTokenFromCookie()}`,
      },
    });
    return response.data; 
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error deleting address:', error.response?.data || error.message);
      throw error.response?.data || error; 
    } else {
      console.error('Unknown error:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};
