import axios from 'axios';
import { getTokenFromCookie } from '../helper/getCooki';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getState = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/states`,
      {}, 
      {
        headers: {
          'Authorization': `Bearer ${getTokenFromCookie()}`,
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error posting state:', error);
    throw error;
  }
};
