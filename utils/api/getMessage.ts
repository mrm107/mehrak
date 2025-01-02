import axios from 'axios';
import { getTokenFromCookie } from '../helper/getCooki';

export const fetchMessages = async (): Promise<any> => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(`${API_URL}/profile/messages`, {
      headers: {
        Authorization: `Bearer ${getTokenFromCookie()}`, 
      },
    });
    return response.data;  
  } catch (error) {
    console.error('Error fetching messages:', error);
    return null;
  }
};