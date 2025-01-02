import axios from 'axios';
import { getTokenFromCookie } from '../helper/getCooki';

async function getOrderByID(id: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(
      `${API_URL}/checkout/factor/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${getTokenFromCookie()}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.data;

  } catch (error) {
    console.error("Error:", error);
        throw error; 
}
}
export default getOrderByID;
